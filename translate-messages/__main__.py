import os, json, requests
from lib import init
from sys import stdout
from translate import Translator

env = init.env()
cli = init.cli(__file__)

if cli.args.init: # create config file
    if os.path.exists(cli.config_path):
        print(f'Config already exists at {cli.config_path}')
    else:
        try:
            jsd_url = f'{cli.urls.jsdelivr}/{cli.name}/{cli.config_filename}'
            resp = requests.get(jsd_url, timeout=5)
            resp.raise_for_status()
            cli.config_data = resp.json()
        except (requests.RequestException, ValueError):
            cli.config_data = {}

        with open(cli.config_path, 'w', encoding='utf-8') as configFile:
            json.dump(cli.config_data, configFile, indent=2)

        print(f'Default config created at {cli.config_path}')
    exit()

def print_trunc(msg, end='\n'):
    truncated_lines = [
        line if len(line) < env.terminal_width else line[:env.terminal_width -4] + '...' for line in msg.splitlines() ]
    print('\n'.join(truncated_lines), end=end)
def overwrite_print(msg) : stdout.write('\r' + msg.ljust(env.terminal_width)[:env.terminal_width])

print('')

# Prompt user for keys to ignore
def parse_csv_val(val) : return [item.strip() for item in val.split(',') if item.strip()]
ignore_keys = parse_csv_val(cli.args.ignore_keys or cli.config_data.get('ignore_keys', ''))
while True:
    if ignore_keys : print('Ignored key(s):', ignore_keys)
    key = input('Enter key to ignore (or ENTER if done): ')
    if not key : break
    ignore_keys.append(key)

# Determine closest locales dir
print_trunc(f'\nSearching for {cli.locales_dir}...')
script_dir = os.path.abspath(os.path.dirname(__file__))
for root, dirs, files in os.walk(script_dir): # search script dir recursively
    if cli.locales_dir in dirs:
        cli.locales_dir = os.path.join(root, cli.locales_dir) ; break
else: # search script parent dirs recursively
    parent_dir = os.path.dirname(script_dir)
    while parent_dir and parent_dir != script_dir:
        for root, dirs, files in os.walk(parent_dir):
            if cli.locales_dir in dirs:
                cli.locales_dir = os.path.join(root, cli.locales_dir) ; break
        if cli.locales_dir : break
        parent_dir = os.path.dirname(parent_dir)
    else : cli.locales_dir = None

# Print result
if cli.locales_dir : print_trunc(f'_locales directory found!\n\n>> {cli.locales_dir}\n')
else : print_trunc(f'Unable to locate a {cli.locales_dir} directory.') ; exit()

# Load en/messages.json
msgs_filename = 'messages.json'
en_msgs_path = os.path.join(cli.locales_dir, 'en', msgs_filename)
with open(en_msgs_path, 'r', encoding='utf-8') as en_file:
    en_messages = json.load(en_file)

# Combine [cli.target_locales] w/ languages discovered in _locales
output_langs = list(set(cli.target_locales)) # remove duplicates
for root, dirs, files in os.walk(cli.locales_dir):
    for folder in dirs:
        folder_path = os.path.join(root, folder)
        msgs_path = os.path.join(folder_path, msgs_filename)
        discovered_lang = folder.replace('_', '-')
        if os.path.exists(msgs_path) and discovered_lang not in output_langs : output_langs.append(discovered_lang)
output_langs.sort() # alphabetize languages

# Create/update/translate [[output_langs]/messages.json]
langs_added, langs_skipped, langs_translated, langs_not_translated = [], [], [], []
for lang_code in output_langs:
    lang_added, lang_skipped, lang_translated = False, False, False
    folder = lang_code.replace('-', '_') ; translated_msgs = {}
    if '-' in lang_code: # cap suffix
        sep_idx = folder.index('_')
        folder = folder[:sep_idx] + '_' + folder[sep_idx+1:].upper()

    # Skip English locales
    if lang_code.startswith('en'):
        print_trunc(f'Skipped {folder}/messages.json...')
        langs_skipped.append(lang_code) ; langs_not_translated.append(lang_code) ; continue

    # Initialize target locale folder
    folder_path = os.path.join(cli.locales_dir, folder)
    if not os.path.exists(folder_path): # if missing, create folder
        os.makedirs(folder_path) ; langs_added.append(lang_code) ; lang_added = True

    # Initialize target messages
    msgs_path = os.path.join(folder_path, msgs_filename)
    if os.path.exists(msgs_path):
        with open(msgs_path, 'r', encoding='utf-8') as messages_file : messages = json.load(messages_file)
    else : messages = {}

    # Attempt translations
    print_trunc(f"{ 'Adding' if not messages else 'Updating' } { folder }/messages.json...", end='')
    stdout.flush()
    en_keys = list(en_messages.keys())
    fail_flags = ['INVALID TARGET LANGUAGE', 'TOO MANY REQUESTS', 'MYMEMORY']
    for key in en_keys:
        if key in ignore_keys:
            translated_msg = en_messages[key]['message']
            translated_msgs[key] = { 'message': translated_msg }
            continue
        if key not in messages:
            original_msg = translated_msg = en_messages[key]['message']
            try:
                translator = Translator(provider=cli.provider, to_lang=lang_code)
                translated_msg = translator.translate(original_msg).replace('&quot;', "'").replace('&#39;', "'")
                if any(flag in translated_msg for flag in fail_flags):
                    translated_msg = original_msg
            except Exception as e:
                print_trunc(f'Translation failed for key "{key}" in {lang_code}/messages.json: {e}')
                translated_msg = original_msg
            translated_msgs[key] = { 'message': translated_msg }
        else : translated_msgs[key] = messages[key]

    # Format messages
    formatted_msgs = '{\n'
    for idx, (key, message_data) in enumerate(translated_msgs.items()):
        formatted_msg = json.dumps(message_data, ensure_ascii=False) \
                            .replace('{', '{ ').replace('}', ' }') # add spacing
        formatted_msgs += ( f'  "{key}": {formatted_msg}'
                        + ( ',\n' if idx < len(translated_msgs) -1 else '\n' )) # terminate line
    formatted_msgs += '}'
    with open(msgs_path, 'w', encoding='utf-8') as output_file : output_file.write(formatted_msgs + '\n')

    # Print file summary
    if translated_msgs == messages : langs_skipped.append(lang_code) ; lang_skipped = True
    elif translated_msgs != messages : langs_translated.append(lang_code) ; lang_translated = True
    if not lang_translated : langs_not_translated.append(lang_code)
    overwrite_print(f"{ 'Added' if lang_added else 'Skipped' if lang_skipped else 'Updated' } { folder }/messages.json")

# Print final summary
print_trunc('\nAll messages.json files updated successfully!\n')
lang_data = [langs_translated, langs_skipped, langs_added, langs_not_translated]
for data in lang_data:
    if data:
        list_name = next(name for name, value in globals().items() if value is data)
        status = list_name.split('langs_')[-1].replace('_', ' ')
        print(f'Languages {status}: {len(data)}\n')  # print tally
        print('[ ' + ', '.join(data) + ' ]\n')  # list languages

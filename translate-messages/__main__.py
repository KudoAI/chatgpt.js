import os, json
from lib import data, init, log
from sys import stdout
from translate import Translator

cli = init.cli(__file__)

if cli.args.init : init.config_file(cli)

print('')

# Prompt user for keys to ignore
cli.ignore_keys = data.csv.parse_val(cli.args.ignore_keys or cli.config_data.get('ignore_keys', ''))
while True:
    if cli.ignore_keys : print('Ignored key(s):', cli.ignore_keys)
    key = input('Enter key to ignore (or ENTER if done): ')
    if not key : break
    cli.ignore_keys.append(key)

# Determine closest locales dir
log.trunc(f'\nSearching for {cli.locales_dir}...')
cli.locales_dir = init.locales_dir(cli.locales_dir)
if cli.locales_dir : log.trunc(f'_locales directory found!\n\n>> {cli.locales_dir}\n')
else : log.trunc(f'Unable to locate a {cli.locales_dir} directory.') ; exit()

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
        log.trunc(f'Skipped {folder}/messages.json...')
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
    log.trunc(f"{ 'Adding' if not messages else 'Updating' } { folder }/messages.json...", end='')
    stdout.flush()
    en_keys = list(en_messages.keys())
    fail_flags = ['INVALID TARGET LANGUAGE', 'TOO MANY REQUESTS', 'MYMEMORY']
    for key in en_keys:
        if key in cli.ignore_keys:
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
            except Exception as err:
                log.trunc(f'Translation failed for key "{key}" in {lang_code}/messages.json: {err}')
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
    log.overwrite_print(
        f"{ 'Added' if lang_added else 'Skipped' if lang_skipped else 'Updated' } { folder }/messages.json")

log.final_summary({
    'translated': langs_translated,
    'skipped': langs_skipped,
    'added': langs_added,
    'not translated': langs_not_translated,
})

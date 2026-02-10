'''
Name:         translate-en-messages.py
Version:      2026.2.10.22
Author:       Adam Lui
Description:  Translate en/messages.json to other locales
Homepage:     https://github.com/adamlui/python-utils
Support:      https://github.com/adamlui/python-utils/issues
Sponsor:      https://github.com/sponsors/adamlui
Notes:        Use --help to print CLI arguments.
'''

import argparse, os, json
from types import SimpleNamespace as sns
from sys import stdout
from translate import Translator
from urllib.request import urlopen

cli = sns(
    name='translate-messages',
    urls=sns(jsdelivr='https://cdn.jsdelivr.net/gh/adamlui/python-utils')
)

provider = ''
default_target_locales = [
    'af', 'am', 'ar', 'az', 'be', 'bem', 'bg', 'bn', 'bo', 'bs', 'ca', 'ceb', 'cs', 'cy', 'da', 'de', 'dv', 'dz', 'el',
    'en', 'en-GB', 'eo', 'es', 'et', 'eu', 'fa', 'fi', 'fo', 'fr', 'gd', 'gl', 'gu', 'haw', 'he', 'hi', 'hr', 'ht',
    'hu', 'hy', 'id', 'is', 'it', 'ja', 'ka', 'kab', 'kk', 'km', 'kn', 'ko', 'ku', 'ky', 'la', 'lb', 'lo', 'lt', 'lv',
    'mg', 'mi', 'mk', 'ml', 'mn', 'ms', 'mt', 'my', 'ne', 'nl', 'no', 'ny', 'pa', 'pap', 'pl', 'ps', 'pt', 'ro', 'ru',
    'rw', 'sg', 'si', 'sk', 'sl', 'sm', 'sn', 'so', 'sr', 'sv', 'sw', 'ta', 'te', 'tg', 'th', 'ti', 'tk', 'tn', 'tpi',
    'tr', 'uk', 'ur', 'uz', 'vi', 'xh', 'yi', 'zh', 'zh-CN', 'zh-HK', 'zh-SG', 'zh-TW', 'zu'
]

# Init/load config file
cli.script_name = os.path.splitext(os.path.basename(__file__))[0]
cli.config_filename = f'{cli.script_name}.config.json'
cli.config_path = os.path.join(os.path.dirname(__file__), cli.config_filename)
cli.config_data = {}
if os.path.exists(cli.config_path):
    with open(cli.config_path, 'r', encoding='utf-8') as file_config:
        cli.config_data.update(json.load(file_config))

# Parse CLI args
parser = argparse.ArgumentParser(description='Translate en/messages.json to other locales')
parser.add_argument('--include-langs', type=str, help='Languages to include (e.g. "en,es,fr")')
parser.add_argument('--exclude-langs', type=str, help='Languages to exclude (e.g. "en,es")')
parser.add_argument('--ignore-keys', type=str, help='Keys to ignore (e.g. "appName,author")')
parser.add_argument('--locales-dir', type=str, help='Name of folder containing locales')
parser.add_argument('--init', action='store_true', help='Create .config.json file to store defaults')
args = parser.parse_args()
locales_dir = args.locales_dir or cli.config_data.get('locales_dir', '') or '_locales'

if args.init: # create config file
    if os.path.exists(cli.config_path):
        print(f'Config already exists at {cli.config_path}')
    else:
        try:  # try to fetch template from jsDelivr
            jsd_url = f'{cli.urls.jsdelivr}/{cli.name}/{cli.config_filename}'
            with urlopen(jsd_url) as resp:
                if resp.status == 200 : cli.config_data = json.loads(resp.read().decode('utf-8'))
        except Exception : pass
        with open(cli.config_path, 'w', encoding='utf-8') as configFile:
            json.dump(cli.config_data, configFile, indent=2)
        print(f'Default config created at {cli.config_path}')
    exit()

# Init target_locales
def parse_csv_langs(str) : return [lang.strip() for lang in str.split(',') if lang.strip()]
include_arg = args.include_langs or cli.config_data.get('include_langs', '')
exclude_arg = args.exclude_langs or cli.config_data.get('exclude_langs', '')
target_locales = parse_csv_langs(include_arg) or default_target_locales
exclude_langs = set(parse_csv_langs(exclude_arg))
target_locales = [lang for lang in target_locales if lang not in exclude_langs]

# UI initializations
try:
    terminal_width = os.get_terminal_size()[0]
except OSError:
    terminal_width = 80
def print_trunc(msg, end='\n'):
    truncated_lines = [
        line if len(line) < terminal_width else line[:terminal_width -4] + '...' for line in msg.splitlines() ]
    print('\n'.join(truncated_lines), end=end)
def overwrite_print(msg) : stdout.write('\r' + msg.ljust(terminal_width)[:terminal_width])

print('')

# Prompt user for keys to ignore
ignore_keys = parse_csv_langs(args.ignore_keys or cli.config_data.get('ignore_keys', ''))
while True:
    if ignore_keys : print('Ignored key(s):', ignore_keys)
    key = input('Enter key to ignore (or ENTER if done): ')
    if not key : break
    ignore_keys.append(key)

# Determine closest locales dir
print_trunc(f'\nSearching for { locales_dir }...')
script_dir = os.path.abspath(os.path.dirname(__file__))
for root, dirs, files in os.walk(script_dir): # search script dir recursively
    if locales_dir in dirs:
        locales_dir = os.path.join(root, locales_dir) ; break
else: # search script parent dirs recursively
    parent_dir = os.path.dirname(script_dir)
    while parent_dir and parent_dir != script_dir:
        for root, dirs, files in os.walk(parent_dir):
            if locales_dir in dirs:
                locales_dir = os.path.join(root, locales_dir) ; break
        if locales_dir : break
        parent_dir = os.path.dirname(parent_dir)
    else : locales_dir = None

# Print result
if locales_dir : print_trunc(f'_locales directory found!\n\n>> { locales_dir }\n')
else : print_trunc(f'Unable to locate a { locales_dir } directory.') ; exit()

# Load en/messages.json
msgs_filename = 'messages.json'
en_msgs_path = os.path.join(locales_dir, 'en', msgs_filename)
with open(en_msgs_path, 'r', encoding='utf-8') as en_file:
    en_messages = json.load(en_file)

# Combine [target_locales] w/ languages discovered in _locales
output_langs = list(set(target_locales)) # remove duplicates
for root, dirs, files in os.walk(locales_dir):
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
    folder_path = os.path.join(locales_dir, folder)
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
                translator = Translator(provider=provider if provider else '', to_lang=lang_code)
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

import os, sys
from lib import data, init, language, log

cli = init.cli(__file__)
if cli.config.init : init.config_file(cli) ; sys.exit(0)

while True: # prompt user for keys to ignore
    if getattr(cli.config, 'ignore_keys', '') : print('Ignored key(s):', cli.config.ignore_keys)
    input_key = input('Enter key to ignore (or ENTER if done): ')
    if not input_key : break
    cli.config.ignore_keys.append(input_key)

log.trunc(f'\nSearching for {cli.config.locales_dir}...')
cli.config.locales_dir = init.locales_dir(cli.config.locales_dir)
if cli.config.locales_dir : log.trunc(f'_locales directory found!\n\n>> {cli.config.locales_dir}\n')
else : log.trunc(f'Unable to locate a {cli.config.locales_dir} directory.') ; sys.exit(1)

cli.config.msgs_filename = 'messages.json'
cli.config.en_msgs = data.json.read(os.path.join(cli.config.locales_dir, 'en', cli.config.msgs_filename))
cli.config.output_langs = list(set(cli.config.target_locales)) # remove dupes

if not cli.config.include_langs: # merge discovered locales w/ output_langs
    for root, dirs, _ in os.walk(cli.config.locales_dir):
        for lang_folder in dirs:
            msgs_path = os.path.join(root, lang_folder, cli.config.msgs_filename)
            discovered_lang = lang_folder.replace('_', '-')
            if os.path.exists(msgs_path) and discovered_lang not in cli.config.output_langs:
                cli.config.output_langs.append(discovered_lang)
cli.config.output_langs.sort()

langs_translated, langs_skipped, langs_added, langs_not_translated = language.writeTranslations(cli)

log.final_summary({
    'translated': langs_translated,
    'skipped': langs_skipped,
    'added': langs_added,
    'not translated': langs_not_translated,
})

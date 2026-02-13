import os, sys
from . import data, log
from translate import Translator

def create_translations(cli, target_msgs, lang_code):
    fail_flags = ['INVALID TARGET LANGUAGE', 'TOO MANY REQUESTS', 'MYMEMORY']
    src_keys = list(cli.config.en_msgs.keys())
    translated_msgs = {}

    for key in src_keys:

        if key in cli.config.ignore_keys:
            translated_msg = cli.config.en_msgs[key]['message']
            translated_msgs[key] = { 'message': translated_msg }
            continue

        if key not in target_msgs:
            original_msg = translated_msg = cli.config.en_msgs[key]['message']
            try:
                translator = Translator(provider=cli.config.provider, to_lang=lang_code)
                translated_msg = translator.translate(original_msg).replace('&quot;', "'").replace('&#39;', "'")
                if any(flag in translated_msg for flag in fail_flags):
                    translated_msg = original_msg
            except Exception as err:
                log.trunc(f'Translation failed for key "{key}" in {lang_code}/{cli.config.msgs_filename}: {err}')
                translated_msg = original_msg
            translated_msgs[key] = { 'message': translated_msg }

        else : translated_msgs[key] = target_msgs[key]
    
    return translated_msgs

def write_translations(cli):
    langs_added, langs_skipped, langs_translated, langs_not_translated = [], [], [], []
    for lang_code in cli.config.output_langs:
        lang_added, lang_skipped, lang_translated = False, False, False
        lang_folder = lang_code.replace('-', '_')

        if lang_code.startswith('en'): # skip EN locales
            log.trunc(f'Skipped {lang_folder}/{cli.config.msgs_filename}...')
            langs_skipped.append(lang_code) ; langs_not_translated.append(lang_code) ; continue

        if '-' in lang_code: # cap suffix
            sep_idx = lang_folder.index('_')
            lang_folder = lang_folder[:sep_idx] + '_' + lang_folder[sep_idx+1:].upper()

        lang_folder_path = os.path.join(cli.config.locales_dir, lang_folder)
        if not os.path.exists(lang_folder_path): # create lang_folder if missing
            os.makedirs(lang_folder_path) ; langs_added.append(lang_code) ; lang_added = True
        msgs_path = os.path.join(lang_folder_path, cli.config.msgs_filename)
        msgs = data.json.read(msgs_path)

        log.trunc(f"{ 'Adding' if not msgs else 'Updating' } {lang_folder}/{cli.config.msgs_filename}...", end='')
        sys.stdout.flush()
        translated_msgs = create_translations(cli, msgs, lang_code)
        data.json.write(translated_msgs, msgs_path)

        if translated_msgs == msgs : langs_skipped.append(lang_code) ; lang_skipped = True
        elif translated_msgs != msgs : langs_translated.append(lang_code) ; lang_translated = True
        if not lang_translated : langs_not_translated.append(lang_code)
        log.overwrite_print(
            f"{'Added' if lang_added else 'Skipped' if lang_skipped else 'Updated'} "
            f"{lang_folder}/{cli.config.msgs_filename}"
        )

    return langs_translated, langs_skipped, langs_added, langs_not_translated

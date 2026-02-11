import argparse, json, os, requests
from lib import data
from types import SimpleNamespace as sns

def cli(caller_file):

    cli = sns(
        name='translate-messages',
        version='2026.2.10.63',
        author=sns(name='Adam Lui', email='adam@kudoa.com', url='https://github.com/adamlui'),
        description='Translate en/messages.json to other locales',
        urls=sns(
            github='https://github.com/adamlui/python-utils',
            jsdelivr='https://cdn.jsdelivr.net/gh/adamlui/python-utils',
            sponsor='https://github.com/sponsors/adamlui',
            support='https://github.com/adamlui/python-utils/issues'
        ),
        default_target_locales=[
            'af', 'am', 'ar', 'az', 'be', 'bem', 'bg', 'bn', 'bo', 'bs', 'ca', 'ceb', 'cs', 'cy', 'da', 'de', 'dv',
            'dz', 'el', 'en', 'en-GB', 'eo', 'es', 'et', 'eu', 'fa', 'fi', 'fo', 'fr', 'gd', 'gl', 'gu', 'haw', 'he',
            'hi', 'hr', 'ht', 'hu', 'hy', 'id', 'is', 'it', 'ja', 'ka', 'kab', 'kk', 'km', 'kn', 'ko', 'ku', 'ky', 'la',
            'lb', 'lo', 'lt', 'lv', 'mg', 'mi', 'mk', 'ml', 'mn', 'ms', 'mt', 'my', 'ne', 'nl', 'no', 'ny', 'pa', 'pap',
            'pl', 'ps', 'pt', 'ro', 'ru', 'rw', 'sg', 'si', 'sk', 'sl', 'sm', 'sn', 'so', 'sr', 'sv', 'sw', 'ta', 'te',
            'tg', 'th', 'ti', 'tk', 'tn', 'tpi', 'tr', 'uk', 'ur', 'uz', 'vi', 'xh', 'yi', 'zh', 'zh-CN', 'zh-HK',
            'zh-SG', 'zh-TW', 'zu'
        ]
    )

    # Load from config file
    cli.config_filename = f'{cli.name}.config.json'
    cli.config_path = os.path.join(os.path.dirname(caller_file), cli.config_filename)
    cli.config_data = {}
    if os.path.exists(cli.config_path):
        with open(cli.config_path, 'r', encoding='utf-8') as f:
            cli.config_data.update(json.load(f))

    # Parse CLI args
    parser = argparse.ArgumentParser(description='Translate en/messages.json to other locales')
    parser.add_argument('--include-langs', type=str, help='Languages to include (e.g. "en,es,fr")')
    parser.add_argument('--exclude-langs', type=str, help='Languages to exclude (e.g. "en,es")')
    parser.add_argument('--ignore-keys', type=str, help='Keys to ignore (e.g. "appName,author")')
    parser.add_argument('--locales-dir', type=str, help='Name of folder containing locales')
    parser.add_argument('--provider', type=str, help='Name of provider to use for translation')
    parser.add_argument('--init', action='store_true', help=f'Create {cli.name}.config.json file to store defaults')
    cli.args = parser.parse_args()
    cli.locales_dir = cli.args.locales_dir or cli.config_data.get('locales_dir', '') or '_locales'
    cli.provider = cli.args.provider or cli.config_data.get('provider', '')
    include_arg = cli.args.include_langs or cli.config_data.get('include_langs', '')
    exclude_arg = cli.args.exclude_langs or cli.config_data.get('exclude_langs', '')
    cli.target_locales = data.csv.parse(include_arg) or cli.default_target_locales
    exclude_langs = set(data.csv.parse(exclude_arg))
    cli.target_locales = [lang for lang in cli.target_locales if lang not in exclude_langs]
    cli.ignore_keys = data.csv.parse(cli.args.ignore_keys or cli.config_data.get('ignore_keys', ''))

    print('')

    return cli

def config_file(cli):
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
        
        data.json.write(cli.config_data, cli.config_path)
        print(f'Default config created at {cli.config_path}')

def locales_dir(locales_dir):
    lib_dir = os.path.abspath(os.path.dirname(__file__))
    for root, dirs, _ in os.walk(lib_dir): # search lib dir recursively
        if locales_dir in dirs:
            locales_dir = os.path.join(root, locales_dir) ; break
        parent_dir = os.path.dirname(lib_dir)
        while parent_dir and parent_dir != lib_dir: # search recursively
            for root, dirs, _ in os.walk(parent_dir):
                if locales_dir in dirs:
                    locales_dir = os.path.join(root, locales_dir) ; break
            if locales_dir : break
            parent_dir = os.path.dirname(parent_dir)
        else : locales_dir = None
    return locales_dir

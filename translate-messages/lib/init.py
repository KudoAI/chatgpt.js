import argparse, json, os
from types import SimpleNamespace as sns
def parse_csv_val(val) : return [item.strip() for item in val.split(',') if item.strip()]

def cli(callerFile):
    cli = sns(
        name='translate-messages',
        version='2026.2.10.39',
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

    # Init config file
    cli.config_filename = f'{cli.name}.config.json'
    cli.config_path = os.path.join(os.path.dirname(callerFile), cli.config_filename)
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
    parser.add_argument('--init', action='store_true', help='Create .config.json file to store defaults')
    cli.args = parser.parse_args()
    cli.locales_dir = cli.args.locales_dir or cli.config_data.get('locales_dir', '') or '_locales'
    cli.provider = cli.args.provider or cli.config_data.get('provider', '')

    # Init cli.target_locales
    include_arg = cli.args.include_langs or cli.config_data.get('include_langs', '')
    exclude_arg = cli.args.exclude_langs or cli.config_data.get('exclude_langs', '')
    cli.target_locales = parse_csv_val(include_arg) or cli.default_target_locales
    exclude_langs = set(parse_csv_val(exclude_arg))
    cli.target_locales = [lang for lang in cli.target_locales if lang not in exclude_langs]

    return cli

def env():
    env = sns()
    try:
        env.terminal_width = os.get_terminal_size()[0]
    except OSError:
        env.terminal_width = 80

    return env

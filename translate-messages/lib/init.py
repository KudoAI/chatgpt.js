import json, os
from types import SimpleNamespace as sns

def cli():
    return sns(
        name='translate-messages',
        urls=sns(jsdelivr='https://cdn.jsdelivr.net/gh/adamlui/python-utils'),
        default_target_locales=[
            'af', 'am', 'ar', 'az', 'be', 'bem', 'bg', 'bn', 'bo', 'bs', 'ca', 'ceb', 'cs', 'cy', 'da', 'de', 'dv', 'dz',
            'el', 'en', 'en-GB', 'eo', 'es', 'et', 'eu', 'fa', 'fi', 'fo', 'fr', 'gd', 'gl', 'gu', 'haw', 'he', 'hi', 'hr',
            'ht', 'hu', 'hy', 'id', 'is', 'it', 'ja', 'ka', 'kab', 'kk', 'km', 'kn', 'ko', 'ku', 'ky', 'la', 'lb', 'lo',
            'lt', 'lv', 'mg', 'mi', 'mk', 'ml', 'mn', 'ms', 'mt', 'my', 'ne', 'nl', 'no', 'ny', 'pa', 'pap', 'pl', 'ps',
            'pt', 'ro', 'ru', 'rw', 'sg', 'si', 'sk', 'sl', 'sm', 'sn', 'so', 'sr', 'sv', 'sw', 'ta', 'te', 'tg', 'th',
            'ti', 'tk', 'tn', 'tpi', 'tr', 'uk', 'ur', 'uz', 'vi', 'xh', 'yi', 'zh', 'zh-CN', 'zh-HK', 'zh-SG', 'zh-TW',
            'zu'
        ]
    )

def configFile(cli, caller_file):
    cli.script_name = os.path.splitext(os.path.basename(caller_file))[0]
    cli.config_filename = f'{cli.script_name}.config.json'
    cli.config_path = os.path.join(os.path.dirname(caller_file), cli.config_filename)
    cli.config_data = {}
    if os.path.exists(cli.config_path):
        with open(cli.config_path, 'r', encoding='utf-8') as f:
            cli.config_data.update(json.load(f))

import argparse, os, requests
from lib import data
from types import SimpleNamespace as sns

def cli(caller_file):

    cli = data.sns.from_dict(data.json.read(os.path.join(os.path.dirname(__file__), '../cli.json')))

    # Load from config file
    cli.config=sns()
    cli.config.filename = f'{cli.name}.config.json'
    cli.config.path = os.path.join(os.path.dirname(caller_file), cli.config.filename)
    for key, val in data.json.read(cli.config.path).items() : setattr(cli.config, key, val)

    # Parse CLI args
    parser = argparse.ArgumentParser(description='Translate en/messages.json to other locales')
    parser.add_argument('--include-langs', type=str, help='Languages to include (e.g. "en,es,fr")')
    parser.add_argument('--exclude-langs', type=str, help='Languages to exclude (e.g. "en,es")')
    parser.add_argument('--ignore-keys', type=str, help='Keys to ignore (e.g. "appName,author")')
    parser.add_argument('--locales-dir', type=str, help='Name of folder containing locales')
    parser.add_argument('--provider', type=str, help='Name of provider to use for translation')
    parser.add_argument('--init', action='store_true', help=f'Create {cli.name}.config.json file to store defaults')
    parser.add_argument('--no-wizard', action='store_true', default=None, help='Skip start-up prompts')
    cli.config.__dict__.update({ key:val for key,val in vars(parser.parse_args()).items() if val is not None })

    # Init cli.config vals
    cli.config.target_locales = data.csv.parse(getattr(cli.config, 'include_langs', None)) or cli.default_target_locales
    cli.config.exclude_langs = data.csv.parse(getattr(cli.config, 'exclude_langs', None)) or []
    cli.config.ignore_keys = data.csv.parse(getattr(cli.config, 'ignore_keys', None)) or []
    cli.config.locales_dir = getattr(cli.config, 'locales_dir', '_locales')
    cli.config.provider = getattr(cli.config, 'provider', '')
    if cli.config.exclude_langs:
       cli.config.target_locales = [lang for lang in cli.config.target_locales if lang not in cli.config.exclude_langs]
    cli.config.no_wizard = getattr(cli.config, 'no_wizard', False)

    return cli

def config_file(cli):
    if os.path.exists(cli.config.path):
        print(f'Config already exists at {cli.config.path}')
    else:
        try:
            jsd_url = f'{cli.urls.jsdelivr}/{cli.name}/{cli.config.filename}'
            resp = requests.get(jsd_url, timeout=5)
            resp.raise_for_status()
            cli.file_config = resp.json()
        except (requests.RequestException, ValueError):
            cli.file_config = {}
        
        data.json.write(cli.file_config, cli.config.path)
        print(f'Default config created at {cli.config.path}')

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

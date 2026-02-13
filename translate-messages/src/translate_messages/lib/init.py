import argparse, os, requests
from . import data
from types import SimpleNamespace as sns

def cli(caller_file):

    cli = data.sns.from_dict(data.json.read(os.path.join(os.path.dirname(__file__), '../package-data.json')))

    # Load from config file
    cli.config = sns()
    cli.project_root = os.path.join(os.path.dirname(caller_file),
        f"{ '' if 'src' in os.path.dirname(caller_file) else '../../' }../../")
    for filename in [f'{cli.name}.config.json', f'{cli.name.replace("messages", "msgs")}.config.json']:
        config_path = os.path.join(cli.project_root, filename)
        if os.path.exists(config_path):
            cli.config = data.sns.from_dict(data.json.read(config_path)) ; break

    # Parse CLI args
    argp = argparse.ArgumentParser(description='Translate en/messages.json to other locales')
    argp.add_argument('--include-langs', type=str, help='Languages to include (e.g. "en,es,fr")')
    argp.add_argument('--exclude-langs', type=str, help='Languages to exclude (e.g. "en,es")')
    argp.add_argument('--ignore-keys', type=str, help='Keys to ignore (e.g. "appName,author")')
    argp.add_argument('--locales-dir', type=str, help='Name of folder containing locales')
    argp.add_argument('--init', action='store_true', help=f'Create {cli.name}.config.json file to store defaults')
    argp.add_argument('--no-wizard', action='store_true', default=None, help='Skip interactive prompts during start-up')
    cli.config.__dict__.update({ key:val for key,val in vars(argp.parse_args()).items() if val is not None })

    # Init cli.config vals
    cli.config.include_langs = data.csv.parse(getattr(cli.config, 'include_langs', None))
    cli.config.target_locales = cli.config.include_langs or cli.default_target_locales
    cli.config.exclude_langs = data.csv.parse(getattr(cli.config, 'exclude_langs', None))
    cli.config.ignore_keys = data.csv.parse(getattr(cli.config, 'ignore_keys', None))
    cli.config.locales_dir = getattr(cli.config, 'locales_dir', '_locales')
    if cli.config.exclude_langs:
       cli.config.target_locales = [lang for lang in cli.config.target_locales if lang not in cli.config.exclude_langs]
    cli.config.no_wizard = getattr(cli.config, 'no_wizard', False)

    return cli

def config_file(cli):
    if os.path.exists(cli.config.path):
        return print(f'Config already exists at {cli.config.path}')
    try:
        jsd_url = f'{cli.urls.jsdelivr}/{cli.name}/{cli.config.filename}'
        resp = requests.get(jsd_url, timeout=5)
        resp.raise_for_status()
        cli.file_config = resp.json()
    except (requests.RequestException, ValueError):
        cli.file_config = {}

    data.json.write(cli.file_config, cli.config.path)
    print(f'Default config created at {cli.config.path}')

def locales_dir(target_dir):
    lib_dir = os.path.abspath(os.path.dirname(__file__))
    for root, dirs, _ in os.walk(lib_dir): # search lib_dir recursively
        if target_dir in dirs:
            return os.path.join(root, target_dir)
    parent_dir = os.path.dirname(lib_dir)
    while parent_dir and parent_dir != os.path.dirname(parent_dir):
        for root, dirs, _ in os.walk(parent_dir): # search parent dirs recursively
            if target_dir in dirs:
                return os.path.join(root, target_dir)
        parent_dir = os.path.dirname(parent_dir)
    return None

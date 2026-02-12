# > translate.py

Translate `en/messages.json` to other locales automatically.  

## Installation

```bash
pip install translate.py
```

## Usage

Run the CLI:
```bash
translate-msgs
```

If no options are provided, the CLI will:
1. Prompt for `en/messages.json` keys to ignore 
2. Search for closest `_locales` directory
3. Translate `en/messages.json` to target languages

## Options

Options can be set using command-line arguments:

| Option            | Description                                                      |
| ----------------- | ---------------------------------------------------------------- |
| `--include-langs` | Comma-separated list of languages to include (e.g. `en,es,fr")   |
| `--exclude-langs` | Comma-separated list of languages to exclude (e.g. `en,es`)    |
| `--ignore-keys`   | Comma-separated list of keys to ignore (e.g. `appName,author`) |
| `--locales-dir`   | Name of the folder containing locale files (default: `_locales`) |
| `--provider`      | Translation provider to use                                      |
| `--init`          | Create a .config.json file to store your defaults                |
| `--no-wizard`     | Skip interactive prompts during start-up                         |

## Config file

- Use `--init` to create `translate.py.config.json` in your project root to set default options
- CLI arguments always override config file

## Example

```bash
translate-msgs --include-langs=fr,es --ignore-keys=appName,author
```

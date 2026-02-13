# > translate-messages

Translate `en/messages.json` to other locales automatically.  

## Installation

```bash
pip install translate-messages
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

| Option            | Description                                                          | Example
| ----------------- | ---------------------------------------------------------------------|--------------------------------
| `--include-langs` | Comma-separated list of languages to include                         | `--include-langs=en,es,fr`
| `--exclude-langs` | Comma-separated list of languages to exclude                         | `--exclude-langs=en,es`
| `--ignore-keys`   | Comma-separated list of keys to ignore                               | `--ignore-keys=appName,author`
| `--locales-dir`   | Name of the folder containing locale files                           | `--locales-dir=_messages`
| `--provider`      | Translation provider to use (requires API key) (default: `mymemory`) | `--provider=deepl`
| `--init`          | Create a .config.json file to store your defaults                    |
| `--no-wizard`     | Skip interactive prompts during start-up                             |

## Config file

- Use `--init` to create `translate-messages.config.json` in your project root to set default options
- CLI arguments always override config file

## Example

```bash
translate-msgs --include-langs=fr,es --ignore-keys=appName,author
```

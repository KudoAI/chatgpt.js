<a id="top"></a>

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
2. Auto-discover closest `_locales` directory
3. Translate `en/messages.json` to target languages

## Options

Options can be set by using command-line arguments:

| Option            | Description                                                          | Example
| ----------------- | ---------------------------------------------------------------------|--------------------------------
| `--include-langs` | Comma-separated list of languages to include                         | `--include-langs=en,es,fr`
| `--exclude-langs` | Comma-separated list of languages to exclude                         | `--exclude-langs=en,es`
| `--ignore-keys`   | Comma-separated list of keys to ignore                               | `--ignore-keys=appName,author`
| `--locales-dir`   | Name of the folder containing locale files                           | `--locales-dir=_messages`
| `--init`          | Create a .config.json file to store your defaults                    |
| `--no-wizard`     | Skip interactive prompts during start-up                             |

## Example

```bash
translate-msgs --include-langs=fr,es --ignore-keys=appName,author
```

## Config file

Use `--init` to create `translate-messages.config.json` in your project root to set default options.

Example defaults:

```json
{
  "include_langs": "",
  "exclude_langs": "",
  "ignore_keys": "",
  "locales_dir": "_locales",
  "no_wizard": false
}
```

###### _Note: CLI arguments always override config file._

## MIT License

**Copyright © 2023–2026 [Adam Lui](https://github.com/adamlui).**

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

#

<a href="#top">Back to top ↑</a>

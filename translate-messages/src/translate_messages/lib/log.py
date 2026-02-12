import os
from sys import stdout

try:
    terminal_width = os.get_terminal_size()[0]
except OSError:
    terminal_width = 80

def final_summary(summary_dict):
    trunc('\nAll JSON files updated successfully!\n')
    for name, lang_set in summary_dict.items():
        if lang_set:
            status = name.replace('_', ' ')
            print(f'\nLanguages {status}: {len(lang_set)}')
            print(f"[ {', '.join(lang_set)} ]")

def overwrite_print(msg) : stdout.write('\r' + msg.ljust(terminal_width)[:terminal_width])

def trunc(msg, end='\n'):
    truncated_lines = [
        line if len(line) < terminal_width else line[:terminal_width -4] + '...' for line in msg.splitlines() ]
    print('\n'.join(truncated_lines), end=end)

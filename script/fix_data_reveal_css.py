import os
import glob
import re

pages_dir = 'src/pages'
astro_files = glob.glob(os.path.join(pages_dir, '*.astro'))

# Regex to match [data-reveal] { ... } and [data-reveal].revealed { ... }
# We need to account for newlines inside the brackets.
pattern = re.compile(r'\[data-reveal\](?:\.revealed)?\s*\{[^}]*\}', re.DOTALL)

for filepath in astro_files:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    new_content = pattern.sub('', content)
    
    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Removed data-reveal CSS from {filepath}")

import os
import re

def add_is_inline(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    new_content = re.sub(r'<script>', '<script is:inline>', content)

    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated script tags in {filepath}")

for root, _, files in os.walk('src'):
    for file in files:
        if file.endswith('.astro'):
            add_is_inline(os.path.join(root, file))

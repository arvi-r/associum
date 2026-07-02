import re
import os
import glob

pages_dir = 'src/pages'
astro_files = glob.glob(os.path.join(pages_dir, '*.astro'))

for filepath in astro_files:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Replace DOMContentLoaded with astro:page-load
    new_content = content.replace("document.addEventListener('DOMContentLoaded'", "document.addEventListener('astro:page-load'")
    
    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {filepath}")

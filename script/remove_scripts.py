import os
import re

for root, _, files in os.walk('src/pages'):
    for file in files:
        if file.endswith('.astro'):
            filepath = os.path.join(root, file)
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
            
            new_content = re.sub(r'<script src="[^"]+\.js"></script>', '', content)
            
            if new_content != content:
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print(f"Removed script tags in {filepath}")

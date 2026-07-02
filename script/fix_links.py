import os
import re

def fix_links_in_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Replace specific paths
    replacements = {
        r'/pages/finance/finance\.html': '/finance',
        r'/pages/consulting/consulting\.html': '/consulting',
        r'/pages/accounting/accounting\.html': '/accounting',
        r'/pages/compliance/compliance\.html': '/compliance',
        r'/pages/enterprise/enterprise\.html': '/enterprise',
        r'/pages/Templates/templates\.html': '/templates',
        r'/pages/blogsList/blogs\.html': '/blogs',
        r'/pages/blogDetails/blogsdetails\.html': '/blogsdetails',
        r'/pages/preview-template-1/preview-template-1\.html': '/preview-template-1',
        r'/pages/preview-template-2/preview-template-2\.html': '/preview-template-2',
        r'/pages/main\.html': '/',
        r'finance\.html': '/finance',
        r'consulting\.html': '/consulting',
        r'accounting\.html': '/accounting',
        r'compliance\.html': '/compliance'
    }

    new_content = content
    for pattern, replacement in replacements.items():
        new_content = re.sub(pattern, replacement, new_content)

    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Fixed links in {filepath}")

for root, _, files in os.walk('src'):
    for file in files:
        if file.endswith('.astro'):
            fix_links_in_file(os.path.join(root, file))

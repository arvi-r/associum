import re

with open('src/pages/templates.astro', 'r', encoding='utf-8') as f:
    content = f.read()

# Fix CSS
css_replacements = {
    r'\.page-btn \{': ':global(.page-btn) {',
    r'\.page-btn:hover \{': ':global(.page-btn:hover) {',
    r'\.page-btn\.active \{': ':global(.page-btn.active) {',
    r'\.page-btn\.active:hover \{': ':global(.page-btn.active:hover) {',
    r'\.page-btn\.disabled \{': ':global(.page-btn.disabled) {',
    r'\.page-dots \{': ':global(.page-dots) {',
    r'\.page-arrow \{': ':global(.page-arrow) {',
    r'\.page-btn:hover \.page-arrow \{': ':global(.page-btn:hover .page-arrow) {'
}

for old, new in css_replacements.items():
    content = re.sub(old, new, content)

# Fix alternating links
# We find all occurrences of onclick="window.location.href='...'" that contain preview-template
pattern = r'onclick="window\.location\.href=\'[^\']*preview-template[^\']*\'"'

count = 0
def replacer(match):
    global count
    count += 1
    # alternate between 1 and 2
    template_num = 1 if count % 2 != 0 else 2
    return f'onclick="window.location.href=\'/preview-template-{template_num}\'"'

content = re.sub(pattern, replacer, content)

with open('src/pages/templates.astro', 'w', encoding='utf-8') as f:
    f.write(content)

print(f"Replaced {count} links and updated CSS for pagination.")

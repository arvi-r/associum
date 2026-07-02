import re

files = [
    'src/pages/preview-template-1.astro',
    'src/pages/preview-template-2.astro'
]

for filepath in files:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    content = content.replace(
        "thumbs.forEach(t => t.classList.remove('active');",
        "thumbs.forEach(t => t.classList.remove('active'));"
    )
    
    content = content.replace(
        "if (thumb.classList.contains('blurred') {",
        "if (thumb.classList.contains('blurred')) {"
    )
    
    content = content.replace(
        "if (!document.getElementById('main-blur-overlay') {",
        "if (!document.getElementById('main-blur-overlay')) {"
    )

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
        
    print(f"Fixed syntax errors in {filepath}")

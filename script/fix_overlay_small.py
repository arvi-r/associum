import re

files = [
    'src/pages/preview-template-1.astro',
    'src/pages/preview-template-2.astro'
]

for filepath in files:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Replace the green gradient with the dark translucent background in .blur-overlay
    content = content.replace(
        "background: linear-gradient(97deg, #05704E 4%, #09573E 103%);",
        "background: rgba(0, 0, 0, 0.6);"
    )

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
        
    print(f"Updated CSS overlay logic in {filepath}")

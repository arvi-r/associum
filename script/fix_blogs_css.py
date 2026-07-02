import re

filepath = 'src/pages/blogs.astro'

with open(filepath, 'r') as f:
    content = f.read()

# Selectors to wrap in :global()
selectors = [
    r'\.blog-card',
    r'\.blog-card:hover',
    r'\.blog-card-image',
    r'\.blog-card-content',
    r'\.blog-card-title',
    r'\.blog-card-text',
    r'\.blog-card-footer',
    r'\.blog-card-date',
    r'\.blog-card-readtime',
    r'\.page-btn',
    r'\.page-btn:hover',
    r'\.page-btn\.active',
    r'\.page-btn\.active:hover',
    r'\.page-btn\.disabled',
    r'\.page-btn:hover \.page-arrow',
]

for sel in selectors:
    # We want to replace exactly the selector when it appears before a `{` or `,` 
    # This regex is a bit tricky, let's just do a simple replacement for the exact lines.
    # It's safer to use a function.
    pattern = r'^(\s*)(' + sel + r')(\s*\{|\s*,)'
    replacement = r'\1:global(\2)\3'
    content = re.sub(pattern, replacement, content, flags=re.MULTILINE)

with open(filepath, 'w') as f:
    f.write(content)

print("Updated CSS with :global()")

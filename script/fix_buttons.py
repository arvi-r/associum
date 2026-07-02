import os
import re

files = [
    'src/pages/finance.astro',
    'src/pages/consulting.astro',
    'src/pages/accounting.astro',
    'src/pages/compliance.astro',
    'src/pages/enterprise.astro'
]

for filepath in files:
    if not os.path.exists(filepath):
        continue
    
    with open(filepath, 'r') as f:
        content = f.read()
    
    # 1. Add import
    if 'ButtonLink' not in content:
        content = content.replace("import Layout from '../layouts/Layout.astro';", "import Layout from '../layouts/Layout.astro';\nimport { ButtonLink } from '../components/ButtonLink.jsx';")
        
    # 2. Replace primary button
    # <a href="#" class="button-link button-primary hero-btn">Start for Free</a>
    content = re.sub(
        r'<a href="([^"]*)" class="button-link button-primary hero-btn">([^<]*)</a>',
        r'<ButtonLink href="\1" variant="primary" size="heroPrimary">\2</ButtonLink>',
        content
    )
    
    # 3. Replace outline button
    # <a href="#" class="button-link button-outline hero-btn">Explore Enterprise Solutions</a>
    content = re.sub(
        r'<a href="([^"]*)" class="button-link button-outline hero-btn">([^<]*)</a>',
        r'<ButtonLink href="\1" variant="outline" size="heroSecondary">\2</ButtonLink>',
        content
    )
    
    with open(filepath, 'w') as f:
        f.write(content)

print("Done replacing buttons.")

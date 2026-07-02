import os
import re

def convert_page(html_path, out_dir, layout_path='../layouts/Layout.astro'):
    with open(html_path, 'r', encoding='utf-8') as f:
        html_content = f.read()

    # Extract title
    title_match = re.search(r'<title>(.*?)</title>', html_content, re.IGNORECASE)
    title = title_match.group(1) if title_match else "Associum"

    # Extract body content (inside <body> tag)
    body_match = re.search(r'<body>(.*?)</body>', html_content, re.IGNORECASE | re.DOTALL)
    if not body_match:
        return
    body = body_match.group(1)

    # Remove placeholder headers/footers
    body = re.sub(r'<header[^>]*>.*?</header>', '', body, flags=re.IGNORECASE | re.DOTALL)
    body = re.sub(r'<div[^>]*id="footer-placeholder"[^>]*>.*?</div>', '', body, flags=re.IGNORECASE | re.DOTALL)
    # Remove loadComponents scripts
    body = re.sub(r'<script[^>]*src="[^"]*loadComponents\.js"[^>]*>.*?</script>', '', body, flags=re.IGNORECASE | re.DOTALL)
    
    # Fix asset paths: from /assets to /assets
    # Actually, they are already /assets/images/... which is perfect for public/assets

    base = os.path.splitext(html_path)[0]
    css_path = base + '.css'
    js_path = base + '.js'

    css_content = ''
    if os.path.exists(css_path):
        with open(css_path, 'r', encoding='utf-8') as f:
            css_content = f.read()

    js_content = ''
    if os.path.exists(js_path):
        with open(js_path, 'r', encoding='utf-8') as f:
            js_content = f.read()

    # Construct astro file
    astro_file = f"""---
import Layout from '{layout_path}';
---

<Layout title="{title}">
{body}
</Layout>
"""
    if css_content.strip():
        astro_file += f"\n<style>\n{css_content}\n</style>\n"
    
    if js_content.strip():
        astro_file += f"\n<script>\n{js_content}\n</script>\n"

    os.makedirs(out_dir, exist_ok=True)
    basename = os.path.basename(html_path).replace('.html', '.astro')
    
    if basename == 'main.astro' or (basename == 'index.astro' and html_path == 'index.html'):
        basename = 'index.astro'
    elif basename == 'templates.astro':
        basename = 'templates.astro' # lowercase T might be better, we'll see
        
    out_path = os.path.join(out_dir, basename)
    
    with open(out_path, 'w', encoding='utf-8') as f:
        f.write(astro_file)
    print(f"Converted {html_path} -> {out_path}")

pages_dir = 'pages'
out_pages = 'src/pages'
for root, _, files in os.walk(pages_dir):
    for f in files:
        if f.endswith('.html'):
            # Calculate layout path relative to out_pages
            # Since everything goes flat into src/pages, it's just '../layouts/Layout.astro'
            html_path = os.path.join(root, f)
            convert_page(html_path, out_pages)

# if os.path.exists('index.html'):
#     convert_page('index.html', out_pages)

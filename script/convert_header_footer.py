import os

def convert_component(name):
    html_path = f"components/{name}/{name.lower()}.html"
    css_path = f"components/{name}/{name.lower()}.css"
    js_path = f"components/{name}/{name.lower()}.js"
    
    with open(html_path, 'r', encoding='utf-8') as f:
        html = f.read()
        
    css = ""
    if os.path.exists(css_path):
        with open(css_path, 'r', encoding='utf-8') as f:
            css = f.read()
            
    js = ""
    if os.path.exists(js_path):
        with open(js_path, 'r', encoding='utf-8') as f:
            js = f.read()
            
    # For header.js, we have an initializeHeader() function that we need to call
    if name == 'Header' and js:
        # Auto-call initializeHeader
        js += "\ninitializeHeader();\n"
        
    astro_content = f"---\n---\n{html}\n"
    if css.strip():
        astro_content += f"<style>\n{css}\n</style>\n"
    if js.strip():
        astro_content += f"<script>\n{js}\n</script>\n"
        
    with open(f"src/components/{name}.astro", 'w', encoding='utf-8') as f:
        f.write(astro_content)
    print(f"Created {name}.astro")

convert_component('Header')
convert_component('Footer')

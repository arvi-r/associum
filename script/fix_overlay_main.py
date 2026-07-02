import re

files = [
    'src/pages/preview-template-1.astro',
    'src/pages/preview-template-2.astro'
]

old_js_pattern = r'const overlay = document\.createElement\(\'div\'\);[\s\S]*?mainCover\.appendChild\(overlay\);'

new_js = """
                    const overlay = document.createElement('div');
                    overlay.id = 'main-blur-overlay';
                    overlay.style.position = 'absolute';
                    overlay.style.top = '0';
                    overlay.style.left = '0';
                    overlay.style.right = '0';
                    overlay.style.bottom = '0';
                    overlay.style.background = 'rgba(0, 0, 0, 0.6)';
                    overlay.style.display = 'flex';
                    overlay.style.flexDirection = 'column';
                    overlay.style.alignItems = 'center';
                    overlay.style.justifyContent = 'center';
                    overlay.style.gap = '16px';
                    overlay.style.textAlign = 'center';
                    overlay.style.padding = '20px';
                    overlay.style.borderRadius = '12px';
                    overlay.innerHTML = `
                        <p style="color: white; font-family: 'Inter', sans-serif; font-size: 16px; font-weight: 600; line-height: 1.4; margin: 0; max-width: 320px;">Create a free Associum account to access the complete document and additional templates.</p>
                        <button style="background: #0F8560; border: 1px solid #14A377; border-radius: 6px; color: white; font-family: 'Inter', sans-serif; font-size: 14px; font-weight: 600; padding: 10px 20px; cursor: pointer;">www.associum.ai</button>
                    `;
                    mainCover.appendChild(overlay);
"""

for filepath in files:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Replace JS
    content = re.sub(old_js_pattern, new_js.strip(), content, flags=re.DOTALL)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
        
    print(f"Updated JS overlay logic in {filepath}")

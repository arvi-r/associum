async function loadComponent(elementId, componentPath) {
    try {
        const response = await fetch(componentPath);
        if (!response.ok) throw new Error(`Failed to load ${componentPath}`);
        const html = await response.text();
        document.getElementById(elementId).innerHTML = html;
    } catch (error) {
        console.error('Error loading component:', error);
        document.getElementById(elementId).innerHTML = `<div style="padding: 20px; color: red; text-align: center; border: 1px solid red;">
            Failed to load component from <code>${componentPath}</code>.<br>
            <strong>Note:</strong> Loading HTML components dynamically requires a local web server (like VS Code Live Server). Opening the file directly via <code>file://</code> will block the request due to CORS policies.
        </div>`;
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    // Inject components into their respective placeholders
    const headerElement = document.getElementById('header-placeholder');
    const footerElement = document.getElementById('footer-placeholder');
    
    if (headerElement) {
        await loadComponent('header-placeholder', '/components/Header/header.html');
        // Load the header JS after HTML is injected
        const script = document.createElement('script');
        script.src = '/components/Header/header.js';
        script.onload = () => {
            if (typeof initializeHeader === 'function') {
                initializeHeader();
            }
        };
        document.body.appendChild(script);
    }
    
    if (footerElement) {
        await loadComponent('footer-placeholder', '/components/Footer/footer.html');
    }

    // Initialize scroll-reveal transition observer
    initScrollReveal();
});

function initScrollReveal() {
    const revealElements = document.querySelectorAll('[data-reveal]');
    
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                obs.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.05,
        rootMargin: '0px 0px -40px 0px'
    });
    
    revealElements.forEach(el => {
        observer.observe(el);
    });
}


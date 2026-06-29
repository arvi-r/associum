function initializeHeader() {
    const dropdowns = document.querySelectorAll('.nav-dropdown');
    
    dropdowns.forEach(dropdown => {
        const toggle = dropdown.querySelector('button');
        const menu = dropdown.querySelector('.nav-dropdown-menu');
        
        if (toggle && menu) {
            toggle.addEventListener('click', (e) => {
                e.stopPropagation();
                
                // Close other open dropdowns first
                dropdowns.forEach(other => {
                    if (other !== dropdown) {
                        const otherMenu = other.querySelector('.nav-dropdown-menu');
                        const otherToggle = other.querySelector('button');
                        if (otherMenu && otherToggle) {
                            otherMenu.classList.remove('nav-dropdown-menu-open');
                            otherToggle.setAttribute('aria-expanded', 'false');
                        }
                    }
                });

                menu.classList.toggle('nav-dropdown-menu-open');
                const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
                toggle.setAttribute('aria-expanded', !isExpanded);
            });
        }
    });

    document.addEventListener('click', (e) => {
        dropdowns.forEach(dropdown => {
            const menu = dropdown.querySelector('.nav-dropdown-menu');
            const toggle = dropdown.querySelector('button');
            if (menu && toggle && !menu.contains(e.target) && !toggle.contains(e.target)) {
                menu.classList.remove('nav-dropdown-menu-open');
                toggle.setAttribute('aria-expanded', 'false');
            }
        });
    });

    const mobileToggle = document.querySelector('.mobile-toggle');
    const mobilePanel = document.querySelector('.mobile-panel');
    const overlay = document.querySelector('.overlay');
    const header = document.querySelector('header.header');

    if (mobileToggle && mobilePanel && overlay) {
        mobileToggle.addEventListener('click', () => {
            const isExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';
            mobileToggle.setAttribute('aria-expanded', !isExpanded);
            
            if (!isExpanded) {
                mobilePanel.classList.add('mobile-panel-open');
                overlay.classList.add('overlay-visible');
                header.classList.add('header-open');
            } else {
                mobilePanel.classList.remove('mobile-panel-open');
                overlay.classList.remove('overlay-visible');
                header.classList.remove('header-open');
            }
        });

        overlay.addEventListener('click', () => {
            mobileToggle.setAttribute('aria-expanded', 'false');
            mobilePanel.classList.remove('mobile-panel-open');
            overlay.classList.remove('overlay-visible');
            header.classList.remove('header-open');
        });
    }

    const mobileGroups = document.querySelectorAll('.mobile-group');

    mobileGroups.forEach(group => {
        const toggle = group.querySelector('.mobile-nav-button');
        const dropdown = group.querySelector('.mobile-dropdown');

        if (toggle && dropdown) {
            toggle.addEventListener('click', () => {
                const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
                
                // Close others
                mobileGroups.forEach(other => {
                    if (other !== group) {
                        const otherToggle = other.querySelector('.mobile-nav-button');
                        const otherDropdown = other.querySelector('.mobile-dropdown');
                        if (otherToggle && otherDropdown) {
                            otherToggle.setAttribute('aria-expanded', 'false');
                            otherDropdown.classList.remove('mobile-dropdown-open');
                        }
                    }
                });

                toggle.setAttribute('aria-expanded', !isExpanded);
                dropdown.classList.toggle('mobile-dropdown-open');
            });
        }
    });

    // Highlight active menu items based on pathname
    const path = window.location.pathname;
    
    // 1. Clear default/existing active states
    document.querySelectorAll('.nav-item').forEach(el => {
        el.classList.remove('nav-item-active');
        const underline = el.querySelector('.active-underline');
        if (underline) underline.remove();
    });
    document.querySelectorAll('.nav-dropdown-item').forEach(el => {
        el.classList.remove('active');
    });
    document.querySelectorAll('.mobile-dropdown-item').forEach(el => {
        el.classList.remove('active');
    });

    // 2. Set active states dynamically
    if (path.includes('/finance/finance.html') || path.includes('/finance.html') ||
        path.includes('/consulting/consulting.html') || path.includes('/consulting.html') ||
        path.includes('/accounting/accounting.html') || path.includes('/accounting.html') ||
        path.includes('/compliance/compliance.html') || path.includes('/compliance.html')) {
        // Desktop Use Cases dropdown
        const useCasesBtn = Array.from(document.querySelectorAll('.nav-dropdown button')).find(btn => 
            btn.textContent.trim().includes('Use Cases')
        );
        if (useCasesBtn) {
            useCasesBtn.classList.add('nav-item-active');
            if (!useCasesBtn.querySelector('.active-underline')) {
                const span = document.createElement('span');
                span.className = 'active-underline';
                span.setAttribute('aria-hidden', 'true');
                useCasesBtn.appendChild(span);
            }
        }
        
        // Find which specific subpage to highlight
        let activeKey = 'finance.html';
        if (path.includes('consulting')) activeKey = 'consulting.html';
        else if (path.includes('accounting')) activeKey = 'accounting.html';
        else if (path.includes('compliance')) activeKey = 'compliance.html';
        
        // Desktop sub-item
        const desktopLink = document.querySelector(`.nav-dropdown-menu a[href*="${activeKey}"]`);
        if (desktopLink) desktopLink.classList.add('active');
        
        // Mobile sub-item
        const mobileLink = document.querySelector(`.mobile-dropdown a[href*="${activeKey}"]`);
        if (mobileLink) mobileLink.classList.add('active');

    } else if (path.includes('/enterprise/enterprise.html') || path.includes('/enterprise.html')) {
        // Desktop Company dropdown
        const companyBtn = Array.from(document.querySelectorAll('.nav-dropdown button')).find(btn => 
            btn.textContent.trim().includes('Company')
        );
        if (companyBtn) {
            companyBtn.classList.add('nav-item-active');
            if (!companyBtn.querySelector('.active-underline')) {
                const span = document.createElement('span');
                span.className = 'active-underline';
                span.setAttribute('aria-hidden', 'true');
                companyBtn.appendChild(span);
            }
        }
        
        // Desktop Enterprise item
        const enterpriseLink = document.querySelector('.nav-dropdown-menu a[href*="enterprise.html"]');
        if (enterpriseLink) enterpriseLink.classList.add('active');
        
        // Mobile Enterprise item
        const mobileEnterpriseLink = document.querySelector('.mobile-dropdown a[href*="enterprise.html"]');
        if (mobileEnterpriseLink) mobileEnterpriseLink.classList.add('active');

    } else if (path.includes('/Templates/') || path.includes('/templates.html')) {
        // Desktop Templates link
        const templatesLink = Array.from(document.querySelectorAll('.nav-primary > .nav-item')).find(el => 
            el.textContent.trim().includes('Templates')
        );
        if (templatesLink) {
            templatesLink.classList.add('nav-item-active');
            if (!templatesLink.querySelector('.active-underline')) {
                const span = document.createElement('span');
                span.className = 'active-underline';
                span.setAttribute('aria-hidden', 'true');
                templatesLink.appendChild(span);
            }
        }
    } else if (path.includes('/blogsList/') || path.includes('/blogsDetails/') || path.includes('/blogs.html')) {
        // Desktop Blogs link
        const blogsLink = Array.from(document.querySelectorAll('.nav-primary > .nav-item')).find(el => 
            el.textContent.trim().includes('Blogs')
        );
        if (blogsLink) {
            blogsLink.classList.add('nav-item-active');
            if (!blogsLink.querySelector('.active-underline')) {
                const span = document.createElement('span');
                span.className = 'active-underline';
                span.setAttribute('aria-hidden', 'true');
                blogsLink.appendChild(span);
            }
        }
    }
}


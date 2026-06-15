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
}

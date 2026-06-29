// Preview Template 2 Page JS

document.addEventListener('DOMContentLoaded', () => {
    renderRelatedTemplates();
    setupThumbnails();
});

function setupThumbnails() {
    const thumbs = document.querySelectorAll('.thumb');
    const mainImg = document.getElementById('tpl-main-img');
    const mainCover = document.querySelector('.main-cover');
    const leftArrow = document.querySelector('.left-nav-arrow');
    const rightArrow = document.querySelector('.right-nav-arrow');

    if (mainCover) {
        mainCover.style.position = 'relative';
    }

    thumbs.forEach(thumb => {
        thumb.addEventListener('click', () => {
            // Remove active class from all
            thumbs.forEach(t => t.classList.remove('active'));
            // Add active class to clicked
            thumb.classList.add('active');
            
            // Update main image src
            const img = thumb.querySelector('img');
            if (img && mainImg) {
                let src = img.src;
                if (src.includes('/thumbnail/')) {
                    src = src.replace('/thumbnail/', '/preview/').replace('Interior', 'Cover');
                }
                mainImg.src = src;
            }

            // Handle blurred state
            if (thumb.classList.contains('blurred')) {
                mainImg.style.filter = 'blur(2px)';
                
                if (!document.getElementById('main-blur-overlay')) {
                    const overlay = document.createElement('div');
                    overlay.id = 'main-blur-overlay';
                    overlay.className = 'blur-overlay';
                    overlay.style.borderRadius = '10px';
                    overlay.innerHTML = `
                        <div class="overlay-content" style="padding: 20px; max-width: 300px;">
                            <p style="font-size: 14px; margin-bottom: 12px;">Create a free Associum account to access the complete document and additional templates.</p>
                            <button class="btn-signup" style="padding: 10px 20px; font-size: 14px; border: none; border-radius: 6px; background: #0F8560; color: #FFF; cursor: pointer;">www.associum.ai</button>
                        </div>
                    `;
                    mainCover.appendChild(overlay);
                }
            } else {
                mainImg.style.filter = 'none';
                const overlay = document.getElementById('main-blur-overlay');
                if (overlay) overlay.remove();
            }

            // Smoothly scroll the thumb into view horizontally
            thumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        });
    });

    // Arrow navigation
    if (leftArrow) {
        leftArrow.addEventListener('click', () => {
            const activeThumb = document.querySelector('.thumb.active');
            const thumbArray = Array.from(thumbs);
            let activeIndex = thumbArray.indexOf(activeThumb);
            if (activeIndex !== -1) {
                let nextIndex = activeIndex - 1;
                if (nextIndex < 0) nextIndex = thumbArray.length - 1;
                thumbArray[nextIndex].click();
            }
        });
    }

    if (rightArrow) {
        rightArrow.addEventListener('click', () => {
            const activeThumb = document.querySelector('.thumb.active');
            const thumbArray = Array.from(thumbs);
            let activeIndex = thumbArray.indexOf(activeThumb);
            if (activeIndex !== -1) {
                let nextIndex = activeIndex + 1;
                if (nextIndex >= thumbArray.length) nextIndex = 0;
                thumbArray[nextIndex].click();
            }
        });
    }
}

function renderRelatedTemplates() {
    const gridContainer = document.getElementById('related-grid');
    if (!gridContainer) return;

    const relatedData = [
        {
            title: "Sector Thematic Research Report",
            desc: "Establish a structural investment thesis with company profiles, trade ideas, and price targets.",
            category: "Finance",
            img: "/assets/images/templates/templates/template-04.png",
            fileType: "PDF Report",
            link: "../preview-template/preview-template.html"
        },
        {
            title: "Private Equity Buyout IC Paper",
            desc: "Present a buyout to your IC with everything needed to make a decision, from thesis to returns.",
            category: "Finance",
            img: "/assets/images/templates/templates/template-05.png",
            fileType: "PDF Report",
            link: "../preview-template/preview-template.html"
        },
        {
            title: "Equity Research Initiation Report",
            desc: "Initiate coverage with an institutional-quality report — thesis, valuation, financials, and risks.",
            category: "Finance",
            img: "/assets/images/templates/templates/template-04.png",
            fileType: "PDF Report",
            link: "../preview-template/preview-template.html"
        }
    ];

    const pdfIconSvg = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
        <line x1="16" y1="13" x2="8" y2="13"></line>
        <line x1="16" y1="17" x2="8" y2="17"></line>
        <polyline points="10 9 9 9 8 9"></polyline>
    </svg>`;

    const pptIconSvg = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="2" y="2" width="20" height="14" rx="2" ry="2"></rect>
        <line x1="12" y1="22" x2="12" y2="16"></line>
        <line x1="8" y1="22" x2="16" y2="22"></line>
        <line x1="12" y1="10" x2="8" y2="10"></line>
        <line x1="12" y1="6" x2="16" y2="6"></line>
    </svg>`;

    relatedData.forEach(item => {
        const card = document.createElement('div');
        card.className = 'template-card';

        const iconSvg = item.fileType === 'PPT Deck' ? pptIconSvg : pdfIconSvg;

        card.innerHTML = `
            <div class="card-image-wrap">
                <img src="${item.img}" alt="${item.title}" class="card-img">
                <span class="category-badge">${item.category}</span>
            </div>
            <div class="card-info">
                <h3 class="card-title">${item.title}</h3>
                <p class="card-desc">${item.desc}</p>
            </div>
            <div class="card-footer">
                <div class="file-type">
                    ${iconSvg}
                    <span>${item.fileType}</span>
                </div>
                <button class="btn-preview" onclick="window.location.href='${item.link}'">Preview Template</button>
            </div>
        `;

        gridContainer.appendChild(card);
    });
}

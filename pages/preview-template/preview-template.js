// Preview Template Page JS

document.addEventListener('DOMContentLoaded', () => {
    // We could dynamically load template data based on URL parameters here in the future
    // For now, it displays the static "Equity Research Initiation Report" content as requested

    renderRelatedTemplates();
    setupThumbnails();
});

function setupThumbnails() {
    const thumbs = document.querySelectorAll('.thumb');
    const mainImg = document.getElementById('tpl-main-img');
    const mainCover = document.querySelector('.main-cover');

    // Ensure main cover can position the overlay correctly
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
        });
    });
}

function renderRelatedTemplates() {
    const gridContainer = document.getElementById('related-grid');
    if (!gridContainer) return;

    const relatedData = [
        {
            title: "Portfolio Company Quarterly Review",
            desc: "A private equity board-pack style review of a portfolio company's operational and financial performance against plan.",
            category: "Finance",
            img: "/assets/images/preview-template-2/preview/preview_fin_008_01.png",
            fileType: "PPT Deck",
            link: "../preview-template-2/preview-template-2.html"
        },
        {
            title: "Market Research Report",
            desc: "Analyze industries, competitors, TAM, growth drivers, and market opportunities using AI-powered research.",
            category: "Research",
            img: "/assets/images/templates/templates/template-02.png",
            fileType: "PDF Report",
            link: "preview-template.html"
        },
        {
            title: "Regulatory Change Brief",
            desc: "Generate macroeconomic analysis, market trends, forecasts, and policy implications.",
            category: "Research",
            img: "/assets/images/templates/templates/template-07.png",
            fileType: "PPT Deck",
            link: "preview-template.html"
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

// Templates page database
const templatesData = [
    // Page 1
    {
        title: "Economic Research Report",
        desc: "Generate institutional-grade investment committee memos with market analysis, risks, valuation insights, and recommendations.",
        category: "Finance",
        img: "/assets/images/templates/templates/template-01.png",
        fileType: "PDF Report"
    },
    {
        title: "Market Research Report",
        desc: "Analyze industries, competitors, TAM, growth drivers, and market opportunities using AI-powered research.",
        category: "Research",
        img: "/assets/images/templates/templates/template-02.png",
        fileType: "PDF Report"
    },
    {
        title: "Due Diligence Report",
        desc: "Review company operations, financials, risks, and commercial viability for investment or acquisition decisions.",
        category: "Operations",
        img: "/assets/images/templates/templates/template-03.png",
        fileType: "PPT Deck"
    },
    {
        title: "Equity Research Initiation Report",
        desc: "Initiate coverage with an institutional-quality report — thesis, valuation, financials, and risks.",
        category: "Finance",
        img: "/assets/images/templates/templates/template-04.png",
        fileType: "PDF Report"
    },
    {
        title: "Private Equity Buyout IC Paper",
        desc: "Present a buyout to your IC with everything needed to make a decision, from thesis to returns.",
        category: "Finance",
        img: "/assets/images/templates/templates/template-05.png",
        fileType: "PDF Report"
    },
    {
        title: "Strategy Engagement Final Deck",
        desc: "Turn engagement findings into a boardroom-ready strategy deck — situation, options, roadmap, and 100-day plan.",
        category: "Consulting",
        img: "/assets/images/templates/templates/template-06.png",
        fileType: "PPT Deck"
    },
    {
        title: "Regulatory Change Brief",
        desc: "Generate macroeconomic analysis, market trends, forecasts, and policy implications.",
        category: "Research",
        img: "/assets/images/templates/templates/template-07.png",
        fileType: "PPT Deck"
    },
    {
        title: "Compliance Assessment",
        desc: "Evaluate regulatory requirements, identify risks, and create compliance action plans.",
        category: "Compliance",
        img: "/assets/images/templates/templates/template-08.png",
        fileType: "PDF Report"
    },
    {
        title: "Board Presentation Pack",
        desc: "Create executive-ready board materials with strategic updates, KPIs, risks, and recommendations.",
        category: "Operations",
        img: "/assets/images/templates/templates/template-09.png",
        fileType: "PDF Report"
    },
    
    // Page 2
    {
        title: "LBO Valuation Model Memo",
        desc: "Perform dynamic leveraged buyout modeling including capital structures, debt schedules, returns, and sensitivity analysis.",
        category: "Finance",
        img: "/assets/images/templates/templates/template-02.png",
        fileType: "PDF Report"
    },
    {
        title: "Competitive Landscape Brief",
        desc: "Deep-dive competitor product positioning, feature matrices, pricing models, market share, and strategic gaps.",
        category: "Research",
        img: "/assets/images/templates/templates/template-04.png",
        fileType: "PDF Report"
    },
    {
        title: "Operational Efficiency Review",
        desc: "Audit internal business unit performance, identify cost reductions, and design process automation opportunities.",
        category: "Operations",
        img: "/assets/images/templates/templates/template-06.png",
        fileType: "PPT Deck"
    },
    {
        title: "Corporate Valuation Summary",
        desc: "Produce discounted cash flow (DCF), trading comparables, and precedent transaction valuation summaries.",
        category: "Finance",
        img: "/assets/images/templates/templates/template-08.png",
        fileType: "PDF Report"
    },
    {
        title: "Credit Analysis Memorandum",
        desc: "Evaluate institutional creditworthiness, debt service coverage ratios (DSCR), leverage metrics, and covenant packages.",
        category: "Finance",
        img: "/assets/images/templates/templates/template-01.png",
        fileType: "PDF Report"
    },
    {
        title: "IT Strategy & Roadmap",
        desc: "Map modern enterprise IT architecture, cloud migration paths, legacy system integrations, and digital transformation goals.",
        category: "Consulting",
        img: "/assets/images/templates/templates/template-03.png",
        fileType: "PPT Deck"
    },
    {
        title: "Macroeconomic Outlook 2026",
        desc: "Forecast inflation trends, interest rate paths, GDP growth corridors, currency movements, and central bank policies.",
        category: "Research",
        img: "/assets/images/templates/templates/template-05.png",
        fileType: "PPT Deck"
    },
    {
        title: "ESG Performance Audit",
        desc: "Measure sustainability impact, carbon accounting metrics, board diversity governance, and compliance reporting alignments.",
        category: "Compliance",
        img: "/assets/images/templates/templates/template-07.png",
        fileType: "PDF Report"
    },
    {
        title: "Quarterly Business Review (QBR)",
        desc: "Review sales performance, customer success metrics, churn analysis, operational milestones, and upcoming targets.",
        category: "Operations",
        img: "/assets/images/templates/templates/template-09.png",
        fileType: "PDF Report"
    },

    // Page 3
    {
        title: "M&A Investment Pitchbook",
        desc: "Outline strategic rationale, transaction structures, synergy estimates, valuation, and post-merger integration paths.",
        category: "Finance",
        img: "/assets/images/templates/templates/template-03.png",
        fileType: "PPT Deck"
    },
    {
        title: "Consumer Survey Insights",
        desc: "Summarize focus group data, brand health index rankings, NPS tracking, demographic trends, and buyer persona updates.",
        category: "Research",
        img: "/assets/images/templates/templates/template-05.png",
        fileType: "PDF Report"
    },
    {
        title: "Supply Chain Risk Assessment",
        desc: "Analyze vendor concentration risks, logistics bottlenecks, tariff impacts, safety stock inventories, and resilience strategies.",
        category: "Operations",
        img: "/assets/images/templates/templates/template-07.png",
        fileType: "PPT Deck"
    },
    {
        title: "Project Finance Model Memo",
        desc: "Detail infrastructure and project finance cash flows, concessions agreements, project IRR, and debt sizing summaries.",
        category: "Finance",
        img: "/assets/images/templates/templates/template-09.png",
        fileType: "PDF Report"
    },
    {
        title: "Venture Capital Investment Memo",
        desc: "Recommend early-stage investments with cap table metrics, founder backgrounds, product moat reviews, and exit modeling.",
        category: "Finance",
        img: "/assets/images/templates/templates/template-02.png",
        fileType: "PDF Report"
    },
    {
        title: "Change Management Framework",
        desc: "Design organizational realignment playbooks covering stakeholder maps, communication matrixes, and training models.",
        category: "Consulting",
        img: "/assets/images/templates/templates/template-04.png",
        fileType: "PPT Deck"
    },
    {
        title: "Industry Deep-Dive Report",
        desc: "Synthesize supply-demand imbalances, key technological disruptions, unit economics profiles, and regulatory outlooks.",
        category: "Research",
        img: "/assets/images/templates/templates/template-06.png",
        fileType: "PDF Report"
    },
    {
        title: "Anti-Money Laundering Policy",
        desc: "Establish firm-wide KYC/AML programs, transaction monitoring protocols, sanction screening, and reporting pipelines.",
        category: "Compliance",
        img: "/assets/images/templates/templates/template-08.png",
        fileType: "PDF Report"
    },
    {
        title: "Post-Merger Integration Plan",
        desc: "Create standard templates for merging systems, organizational structures, employee benefits, and billing processes.",
        category: "Operations",
        img: "/assets/images/templates/templates/template-01.png",
        fileType: "PPT Deck"
    }
];

// SVG Icons
const pdfIconSvg = `
<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
    <polyline points="14 2 14 8 20 8"></polyline>
    <line x1="16" y1="13" x2="8" y2="13"></line>
    <line x1="16" y1="17" x2="8" y2="17"></line>
    <polyline points="10 9 9 9 8 9"></polyline>
</svg>
`;

const pptIconSvg = `
<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="2" y="2" width="20" height="14" rx="2" ry="2"></rect>
    <line x1="12" y1="22" x2="12" y2="16"></line>
    <line x1="8" y1="22" x2="16" y2="22"></line>
    <line x1="12" y1="10" x2="8" y2="10"></line>
    <line x1="12" y1="6" x2="16" y2="6"></line>
</svg>
`;

// Pagination State
let currentPage = 1;
const itemsPerPage = 9;
let filteredData = [...templatesData];

// DOM Elements
let gridContainer;
let pageNumbersContainer;
let btnFirst;
let btnPrev;
let btnNext;
let btnLast;
let searchInput;
let btnClearSearch;

// Filter Popup Elements
let btnFiltersToggle;
let filterPopup;
let btnCloseFilter;
let filterOptions;
let btnFilterReset;
let btnFilterApply;

// Filter State
let activeCategories = [];
let activeFormats = [];

// Initialize Page
document.addEventListener('DOMContentLoaded', () => {
    gridContainer = document.querySelector('.templates-grid');
    pageNumbersContainer = document.getElementById('page-numbers-container');
    btnFirst = document.getElementById('btn-first');
    btnPrev = document.getElementById('btn-prev');
    btnNext = document.getElementById('btn-next');
    btnLast = document.getElementById('btn-last');
    searchInput = document.querySelector('.search-input');
    btnClearSearch = document.getElementById('btn-clear-search');

    btnFiltersToggle = document.getElementById('btn-filters-toggle');
    filterPopup = document.getElementById('filter-popup');
    btnCloseFilter = document.getElementById('btn-close-filter');
    filterOptions = document.querySelectorAll('.filter-option');
    btnFilterReset = document.getElementById('btn-filter-reset');
    btnFilterApply = document.getElementById('btn-filter-apply');

    // Register event listeners
    btnFirst.addEventListener('click', () => changePage(1));
    btnPrev.addEventListener('click', () => changePage(currentPage - 1));
    btnNext.addEventListener('click', () => changePage(currentPage + 1));
    btnLast.addEventListener('click', () => changePage(getTotalPages()));

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            if (btnClearSearch) {
                if (e.target.value.trim().length > 0) {
                    btnClearSearch.classList.add('show');
                } else {
                    btnClearSearch.classList.remove('show');
                }
            }
            applyFilters();
        });
    }

    if (btnClearSearch) {
        btnClearSearch.addEventListener('click', () => {
            if (searchInput) {
                searchInput.value = '';
                btnClearSearch.classList.remove('show');
                applyFilters();
                searchInput.focus();
            }
        });
    }

    // Filter Popup Toggle
    if (btnFiltersToggle && filterPopup) {
        btnFiltersToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            filterPopup.classList.toggle('show');
        });
    }

    // Close Filter Popup
    if (btnCloseFilter) {
        btnCloseFilter.addEventListener('click', () => {
            filterPopup.classList.remove('show');
        });
    }

    // Close when clicking outside
    document.addEventListener('click', (e) => {
        if (filterPopup && filterPopup.classList.contains('show') && !filterPopup.contains(e.target) && !btnFiltersToggle.contains(e.target)) {
            filterPopup.classList.remove('show');
        }
    });

    // Toggle filter options
    if (filterOptions) {
        filterOptions.forEach(option => {
            option.addEventListener('click', () => {
                option.classList.toggle('active');
            });
        });
    }

    // Reset Filters
    if (btnFilterReset) {
        btnFilterReset.addEventListener('click', () => {
            filterOptions.forEach(opt => opt.classList.remove('active'));
            if (searchInput) searchInput.value = '';
            activeCategories = [];
            activeFormats = [];
            applyFilters();
        });
    }

    // Apply Filters
    if (btnFilterApply) {
        btnFilterApply.addEventListener('click', () => {
            activeCategories = Array.from(document.querySelectorAll('.filter-option[data-category].active')).map(el => el.dataset.category);
            activeFormats = Array.from(document.querySelectorAll('.filter-option[data-format].active')).map(el => el.dataset.format);
            applyFilters();
            filterPopup.classList.remove('show');
        });
    }

    // Initial render
    render();
});

// Calculate total pages
function getTotalPages() {
    const pages = Math.ceil(filteredData.length / itemsPerPage);
    return pages > 0 ? pages : 1;
}

// Change Page function
function changePage(page) {
    const totalPages = getTotalPages();
    if (page < 1 || page > totalPages) return;
    currentPage = page;
    render();
    
    // Smooth scroll back to browse title when changing page
    const browseSection = document.querySelector('.browse-section');
    if (browseSection) {
        browseSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Filter Templates by search input and active filters
function applyFilters() {
    const query = searchInput ? searchInput.value.toLowerCase().trim() : '';
    
    filteredData = templatesData.filter(item => {
        // Search query match
        const matchesQuery = !query || 
            item.title.toLowerCase().includes(query) || 
            item.desc.toLowerCase().includes(query) || 
            item.category.toLowerCase().includes(query);
            
        // Category match
        const matchesCategory = activeCategories.length === 0 || activeCategories.includes(item.category);
        
        // Format match (assuming fileType contains the format)
        let matchesFormat = activeFormats.length === 0;
        if (activeFormats.length > 0) {
            if (activeFormats.includes('PDF') && item.fileType.includes('PDF')) matchesFormat = true;
            if (activeFormats.includes('PPTX') && item.fileType.includes('PPT')) matchesFormat = true;
        }
        
        return matchesQuery && matchesCategory && matchesFormat;
    });
    
    currentPage = 1; // Reset to page 1 on filter/search
    render();
}

// Render dynamic elements
function render() {
    renderCards();
    renderPagination();
}

// Render the 9 template cards
function renderCards() {
    if (!gridContainer) return;
    
    gridContainer.innerHTML = '';
    
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const pageItems = filteredData.slice(startIndex, endIndex);

    if (pageItems.length === 0) {
        gridContainer.innerHTML = `
            <div class="no-results" style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; color: #888E9E; font-family: 'Inter', sans-serif;">
                <p style="font-size: 20px; margin: 0 0 10px 0;">No templates found</p>
                <p style="font-size: 16px; margin: 0;">Try adjusting your keywords or filters.</p>
            </div>
        `;
        return;
    }

    pageItems.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'template-card';
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s, box-shadow 0.3s';

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
                <button class="btn-preview" onclick="window.location.href='../preview-template-1/preview-template-1.html'">Preview Template</button>
            </div>
        `;

        gridContainer.appendChild(card);

        // Staggered entry animation for premium loading feel
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 80);
    });
}

// Render and bind pagination controls
function renderPagination() {
    if (!pageNumbersContainer) return;

    pageNumbersContainer.innerHTML = '';
    const totalPages = getTotalPages();

    // Generate numeric buttons
    for (let i = 1; i <= totalPages; i++) {
        const pageBtn = document.createElement('button');
        pageBtn.className = `page-btn${i === currentPage ? ' active' : ''}`;
        pageBtn.textContent = i.toString().padStart(2, '0');
        pageBtn.addEventListener('click', () => changePage(i));
        pageNumbersContainer.appendChild(pageBtn);
    }

    // Toggle navigation button classes based on current page
    if (currentPage === 1) {
        btnFirst.classList.add('disabled');
        btnPrev.classList.add('disabled');
    } else {
        btnFirst.classList.remove('disabled');
        btnPrev.classList.remove('disabled');
    }

    if (currentPage === totalPages) {
        btnNext.classList.add('disabled');
        btnLast.classList.add('disabled');
    } else {
        btnNext.classList.remove('disabled');
        btnLast.classList.remove('disabled');
    }
}

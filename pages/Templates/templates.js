// Templates page logic (Static DOM based)

// Pagination State
let currentPage = 1;
const itemsPerPage = 9;

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

// Static cards from the DOM
let allCards = [];
let filteredCards = [];

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

    // Load static cards from HTML DOM
    allCards = Array.from(document.querySelectorAll('.template-card'));

    // Register event listeners
    if (btnFirst) btnFirst.addEventListener('click', () => changePage(1));
    if (btnPrev) btnPrev.addEventListener('click', () => changePage(currentPage - 1));
    if (btnNext) btnNext.addEventListener('click', () => changePage(currentPage + 1));
    if (btnLast) btnLast.addEventListener('click', () => changePage(getTotalPages()));

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
    applyFilters();
});

// Calculate total pages
function getTotalPages() {
    const pages = Math.ceil(filteredCards.length / itemsPerPage);
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
    
    filteredCards = allCards.filter(card => {
        const title = card.querySelector('.card-title').textContent.toLowerCase();
        const desc = card.querySelector('.card-desc').textContent.toLowerCase();
        const category = card.dataset.category || '';
        const format = card.dataset.format || '';

        // Search query match
        const matchesQuery = !query || 
            title.includes(query) || 
            desc.includes(query) || 
            category.toLowerCase().includes(query);
            
        // Category match
        const matchesCategory = activeCategories.length === 0 || activeCategories.includes(category);
        
        // Format match
        let matchesFormat = activeFormats.length === 0;
        if (activeFormats.length > 0) {
            if (activeFormats.includes('PDF') && format.includes('PDF')) matchesFormat = true;
            if (activeFormats.includes('PPTX') && format.includes('PPT')) matchesFormat = true;
        }
        
        return matchesQuery && matchesCategory && matchesFormat;
    });
    
    currentPage = 1; // Reset to page 1 on filter/search
    render();
}

// Render visible cards based on filter and pagination
function render() {
    // Hide all cards first
    allCards.forEach(card => {
        card.style.display = 'none';
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
    });

    // Handle "No Results" message
    let noResultsEl = document.getElementById('no-templates-found');
    if (filteredCards.length === 0) {
        if (!noResultsEl) {
            noResultsEl = document.createElement('div');
            noResultsEl.id = 'no-templates-found';
            noResultsEl.className = 'no-results';
            noResultsEl.style.gridColumn = '1 / -1';
            noResultsEl.style.textAlign = 'center';
            noResultsEl.style.padding = '60px 20px';
            noResultsEl.style.color = '#888E9E';
            noResultsEl.style.fontFamily = "'Inter', sans-serif";
            noResultsEl.innerHTML = `
                <p style="font-size: 20px; margin: 0 0 10px 0;">No templates found</p>
                <p style="font-size: 16px; margin: 0;">Try adjusting your keywords or filters.</p>
            `;
            gridContainer.appendChild(noResultsEl);
        } else {
            noResultsEl.style.display = 'block';
        }
    } else {
        if (noResultsEl) {
            noResultsEl.style.display = 'none';
        }
    }

    // Show cards for the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const pageCards = filteredCards.slice(startIndex, endIndex);

    pageCards.forEach((card, index) => {
        card.style.display = 'flex';
        // Staggered entry animation for premium feel
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 80);
    });

    renderPagination();
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
        if (btnFirst) btnFirst.classList.add('disabled');
        if (btnPrev) btnPrev.classList.add('disabled');
    } else {
        if (btnFirst) btnFirst.classList.remove('disabled');
        if (btnPrev) btnPrev.classList.remove('disabled');
    }

    if (currentPage === totalPages) {
        if (btnNext) btnNext.classList.add('disabled');
        if (btnLast) btnLast.classList.add('disabled');
    } else {
        if (btnNext) btnNext.classList.remove('disabled');
        if (btnLast) btnLast.classList.remove('disabled');
    }
}

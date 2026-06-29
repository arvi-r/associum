// Note: Dynamic header setup has been removed as the 'Blogs' link is now natively handled in header.html and header.js


// --- Blogs Dynamic Rendering & Pagination ---

const mockBlogs = [
    {
        id: 1,
        title: 'Associum.ai — Redefining Professional Work Through AI',
        excerpt: 'In a world where AI tools are rapidly becoming part of everyday workflows, most platforms struggle to address the specific needs of professional services...',
        image: 'https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&q=80&w=400&h=240',
        publishDate: 'May 15, 2026',
        readTime: 4,
        category: 'Finance'
    },
    {
        id: 2,
        title: 'How AI Is Transforming Investment Research',
        excerpt: 'Discover how AI-powered workflows are helping analysts process data faster, generate insights instantly, and reduce manual research tasks by over 60%.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400&h=240',
        publishDate: 'May 15, 2026',
        readTime: 4,
        category: 'Finance'
    },
    {
        id: 3,
        title: 'The Future of Due Diligence in Private Equity',
        excerpt: 'Explore how modern deal teams are automating diligence processes, organizing data rooms, and accelerating investment decisions.',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=400&h=240',
        publishDate: 'May 15, 2026',
        readTime: 4,
        category: 'Consulting'
    },
    {
        id: 4,
        title: 'Why Research Teams Need a Centralized Knowledge Base',
        excerpt: 'Learn how firms can retain institutional knowledge, surface past analysis, and improve collaboration across teams.',
        image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=400&h=240',
        publishDate: 'May 15, 2026',
        readTime: 4,
        category: 'Consulting'
    },
    {
        id: 5,
        title: 'Automating IC Memos and Board Packs with AI',
        excerpt: 'See how firms are generating polished investment committee memos, compliance reports, and executive summaries in minutes.',
        image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80&w=400&h=240',
        publishDate: 'May 15, 2026',
        readTime: 4,
        category: 'Accounting'
    },
    {
        id: 6,
        title: 'How Modern Firms Are Scaling Research Operations',
        excerpt: 'A look into how growing firms are managing increasing workloads with AI-driven research, reporting, and workflow automation.',
        image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=400&h=240',
        publishDate: 'May 15, 2026',
        readTime: 4,
        category: 'Accounting'
    },
    {
        id: 7,
        title: 'Bridging the Gap Between Data and Strategy',
        excerpt: 'Data is abundant, but turning it into actionable strategy requires the right combination of human expertise and automated intelligence.',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=400&h=240',
        publishDate: 'May 10, 2026',
        readTime: 5,
        category: 'Compliance'
    },
    {
        id: 8,
        title: 'The Rise of Predictive Analytics in Accounting',
        excerpt: 'Accounting is no longer just about looking backwards. See how predictive tools are helping firms forecast trends and advise clients proactively.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400&h=240',
        publishDate: 'May 8, 2026',
        readTime: 3,
        category: 'Accounting'
    },
    {
        id: 9,
        title: 'Streamlining Compliance and Risk Management',
        excerpt: 'Navigating regulatory changes is challenging. Automation is easing the burden of compliance tracking and reducing human error.',
        image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=400&h=240',
        publishDate: 'May 5, 2026',
        readTime: 6,
        category: 'Compliance'
    },
    {
        id: 10,
        title: 'Enhancing Client Experiences with Smart Portals',
        excerpt: 'Client expectations are evolving. Firms are adopting intelligent portals to provide real-time updates and seamless document sharing.',
        image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=400&h=240',
        publishDate: 'May 2, 2026',
        readTime: 4,
        category: 'Consulting'
    },
    {
        id: 11,
        title: 'Building a Resilient Firm Culture in the Digital Age',
        excerpt: 'As technology transforms the workplace, maintaining a strong, connected team culture becomes even more critical for success.',
        image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=400&h=240',
        publishDate: 'April 28, 2026',
        readTime: 5,
        category: 'Finance'
    },
    {
        id: 12,
        title: 'The Impact of Generative AI on Legal Services',
        excerpt: 'From contract review to case research, generative AI is drastically reducing the time lawyers spend on foundational tasks.',
        image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=400&h=240',
        publishDate: 'April 25, 2026',
        readTime: 7,
        category: 'Compliance'
    }
];

let currentPage = 1;
function getBlogsPerPage() { return window.innerWidth < 880 ? 4 : 6; }
let currentBlogsPerPage = getBlogsPerPage();
let currentCategory = 'All';

window.addEventListener('resize', () => {
    const newBlogsPerPage = getBlogsPerPage();
    if (newBlogsPerPage !== currentBlogsPerPage) {
        const firstItemIndex = (currentPage - 1) * currentBlogsPerPage;
        currentPage = Math.floor(firstItemIndex / newBlogsPerPage) + 1;
        currentBlogsPerPage = newBlogsPerPage;
        renderBlogs();
    }
});

function getFilteredBlogs() {
    if (currentCategory === 'All') return mockBlogs;
    return mockBlogs.filter(blog => blog.category === currentCategory);
}

function updateSliderPosition(tab) {
    const slider = document.getElementById('tab-slider');
    if (slider && tab) {
        slider.style.width = `${tab.offsetWidth}px`;
        slider.style.left = `${tab.offsetLeft}px`;
    }
}

function setupTabs() {
    const tabs = document.querySelectorAll('.tabs-container .tab');
    
    // Initialize slider position
    const activeTab = document.querySelector('.tabs-container .tab-active');
    if (activeTab) {
        // Small timeout to ensure fonts are loaded and widths are calculated
        setTimeout(() => updateSliderPosition(activeTab), 50);
    }

    window.addEventListener('resize', () => {
        const currentTab = document.querySelector('.tabs-container .tab-active');
        if (currentTab) updateSliderPosition(currentTab);
    });

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('tab-active'));

            // Set current tab to active
            tab.classList.add('tab-active');
            updateSliderPosition(tab);

            // Ensure the tab is fully visible (useful for mobile horizontal scroll)
            const container = document.getElementById('blogs-tabs-container');
            if (container) {
                const tabRect = tab.getBoundingClientRect();
                const containerRect = container.getBoundingClientRect();
                if (tabRect.left < containerRect.left || tabRect.right > containerRect.right) {
                    tab.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
                }
            }

            // Update category and reset page
            const categoryName = tab.textContent.trim();
            currentCategory = categoryName;
            currentPage = 1;
            renderBlogs();
        });
    });
}

function renderBlogs() {
    const grid = document.getElementById('blogs-grid');
    if (!grid) return;

    grid.innerHTML = '';
    const filteredBlogs = getFilteredBlogs();
    const startIndex = (currentPage - 1) * currentBlogsPerPage;
    const endIndex = startIndex + currentBlogsPerPage;
    const blogsToRender = filteredBlogs.slice(startIndex, endIndex);

    if (blogsToRender.length === 0) {
        grid.innerHTML = '<p style="text-align: center; color: var(--text-tertiary); grid-column: 1 / -1; padding: 40px;">No blogs found for this category.</p>';
        renderPagination();
        return;
    }

    blogsToRender.forEach((blog, index) => {
        const article = document.createElement('article');
        article.className = 'blog-card';
        article.style.cursor = 'pointer';
        article.setAttribute('data-reveal', 'true');
        article.style.setProperty('--reveal-delay', `${0.1 + (index % 3) * 0.1}s`);
        article.onclick = () => {
            window.location.href = `/pages/blogDetails/blogsdetails.html`;
        };

        article.innerHTML = `
            <img src="${blog.image}" alt="${blog.title}" class="blog-card-image">
            <div class="blog-card-content">
                <h2 class="blog-card-title">${blog.title}</h2>
                <p class="blog-card-text">${blog.excerpt}</p>
                <div class="blog-card-footer">
                    <span class="blog-card-date">${blog.publishDate}</span>
                    <span class="blog-card-readtime">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <g clip-path="url(#clip0_3668_6187)">
                                <path d="M7 0C10.8661 0 14 3.1339 14 7C14 10.8661 10.8661 14 7 14C3.1339 14 0 10.8661 0 7C0 3.1339 3.1339 0 7 0ZM7 1.4C5.51479 1.4 4.09041 1.99 3.0402 3.0402C1.99 4.09041 1.4 5.51479 1.4 7C1.4 8.48521 1.99 9.90959 3.0402 10.9598C4.09041 12.01 5.51479 12.6 7 12.6C8.48521 12.6 9.90959 12.01 10.9598 10.9598C12.01 9.90959 12.6 8.48521 12.6 7C12.6 5.51479 12.01 4.09041 10.9598 3.0402C9.90959 1.99 8.48521 1.4 7 1.4ZM7 2.8C7.17145 2.80002 7.33694 2.86297 7.46506 2.9769C7.59318 3.09083 7.67504 3.24782 7.6951 3.4181L7.7 3.5V6.7102L9.5949 8.6051C9.72044 8.73107 9.79333 8.9001 9.79876 9.07787C9.80419 9.25563 9.74175 9.4288 9.62413 9.56219C9.5065 9.69559 9.34251 9.77921 9.16547 9.79608C8.98842 9.81294 8.81159 9.76179 8.6709 9.653L8.6051 9.5949L6.5051 7.4949C6.3963 7.38601 6.32643 7.2443 6.3063 7.0917L6.3 7V3.5C6.3 3.31435 6.37375 3.1363 6.50503 3.00503C6.6363 2.87375 6.81435 2.8 7 2.8Z" fill="#888E9E"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_3668_6187">
                                    <rect width="14" height="14" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                        ${blog.readTime} min read
                    </span>
                </div>
            </div>
        `;
        grid.appendChild(article);
    });

    renderPagination();

    // Re-initialize scroll reveal for dynamically added content
    if (typeof window.initScrollReveal === 'function') {
        window.initScrollReveal();
    }
}

function renderPagination() {
    const pageNumbersContainer = document.getElementById('page-numbers-container');
    const paginationWrapper = document.getElementById('pagination-wrapper');
    if (!pageNumbersContainer || !paginationWrapper) return;

    const filteredBlogs = getFilteredBlogs();
    const totalPages = Math.ceil(filteredBlogs.length / currentBlogsPerPage);
    
    if (totalPages <= 1) {
        paginationWrapper.style.display = 'none';
        return;
    } else {
        paginationWrapper.style.display = 'flex';
    }

    pageNumbersContainer.innerHTML = '';

    // Generate numeric buttons
    for (let i = 1; i <= totalPages; i++) {
        const pageBtn = document.createElement('button');
        pageBtn.className = `page-btn${i === currentPage ? ' active' : ''}`;
        pageBtn.textContent = i.toString().padStart(2, '0');
        pageBtn.onclick = () => { currentPage = i; renderBlogs(); };
        pageNumbersContainer.appendChild(pageBtn);
    }

    const btnFirst = document.getElementById('btn-first');
    const btnPrev = document.getElementById('btn-prev');
    const btnNext = document.getElementById('btn-next');
    const btnLast = document.getElementById('btn-last');

    if (btnFirst) btnFirst.onclick = () => { currentPage = 1; renderBlogs(); };
    if (btnPrev) btnPrev.onclick = () => { if (currentPage > 1) { currentPage--; renderBlogs(); } };
    if (btnNext) btnNext.onclick = () => { if (currentPage < totalPages) { currentPage++; renderBlogs(); } };
    if (btnLast) btnLast.onclick = () => { currentPage = totalPages; renderBlogs(); };

    // Toggle navigation button classes based on current page
    if (currentPage === 1) {
        if(btnFirst) btnFirst.classList.add('disabled');
        if(btnPrev) btnPrev.classList.add('disabled');
    } else {
        if(btnFirst) btnFirst.classList.remove('disabled');
        if(btnPrev) btnPrev.classList.remove('disabled');
    }

    if (currentPage === totalPages) {
        if(btnNext) btnNext.classList.add('disabled');
        if(btnLast) btnLast.classList.add('disabled');
    } else {
        if(btnNext) btnNext.classList.remove('disabled');
        if(btnLast) btnLast.classList.remove('disabled');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    setupTabs();
    renderBlogs();
});

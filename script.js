const projects = [
    {
        name: "Archviz - II",
        year: "2025",
        desc: "Photorealistic architectural visualization created in Unreal Engine 5 with real-time lighting and materials.",
        tags: ["Archviz", "Realtime", "UE5"],
        category: "Archviz",
        duration: "1 month",
        status: "Completed",
        liveUrl: "https://example.com/demo", // Example updated to show functionality
        repoUrl: "#",
        image: 'https://raw.githubusercontent.com/Q3JLZWQ/HTML/refs/heads/main/Archviz-II-3.jpg',
        slides: ["Interior View", "Exterior View", "Lighting Study", "Material Detail", "Final Render"],
        slideImages: [
            'https://raw.githubusercontent.com/Q3JLZWQ/HTML/refs/heads/main/Archviz-II-1.jpg',
            'https://raw.githubusercontent.com/Q3JLZWQ/HTML/refs/heads/main/Archviz-II-2.jpg',
            'https://raw.githubusercontent.com/Q3JLZWQ/HTML/refs/heads/main/Archviz-II-3.jpg',
            'https://raw.githubusercontent.com/Q3JLZWQ/HTML/refs/heads/main/Archviz-II-4.jpg',
            'https://raw.githubusercontent.com/Q3JLZWQ/HTML/refs/heads/main/Archviz-II-5.jpg'
        ]
    },
    {
        name: "Vai - III",
        year: "2024",
        desc: "Character design project featuring detailed modeling, texturing, and rendering in a cinematic style.",
        tags: ["Character design", "Realtime", "UE5"],
        category: "Character design",
        duration: "3 months",
        status: "Completed",
        liveUrl: "#",
        repoUrl: "https://github.com/example/repo", // Example updated to show functionality
        image: 'https://raw.githubusercontent.com/Q3JLZWQ/HTML/refs/heads/main/Vai-III-7.jpg',
        slides: ["Concept", "Blockout", "High Poly", "Low Poly", "Texturing", "Rigging", "Animation", "Final Render"],
        slideImages: [
            'https://raw.githubusercontent.com/Q3JLZWQ/HTML/refs/heads/main/Vai-III-1.jpg',
            'https://raw.githubusercontent.com/Q3JLZWQ/HTML/refs/heads/main/Vai-III-2.jpg',
            'https://raw.githubusercontent.com/Q3JLZWQ/HTML/refs/heads/main/Vai-III-3.jpg',
            'https://raw.githubusercontent.com/Q3JLZWQ/HTML/refs/heads/main/Vai-III-4.jpg',
            'https://raw.githubusercontent.com/Q3JLZWQ/HTML/refs/heads/main/Vai-III-5.jpg',
            'https://raw.githubusercontent.com/Q3JLZWQ/HTML/refs/heads/main/Vai-III-6.jpg',
            'https://raw.githubusercontent.com/Q3JLZWQ/HTML/refs/heads/main/Vai-III-7.jpg',
            'https://raw.githubusercontent.com/Q3JLZWQ/HTML/refs/heads/main/Vai-III-8.jpg'
        ]
    },
    {
        name: "Archviz - I",
        year: "2023",
        desc: "Architectural visualization project showcasing interior and exterior spaces with realistic materials.",
        tags: ["Archviz", "Realtime", "UE4"],
        category: "Archviz",
        duration: "2 months",
        status: "Completed",
        liveUrl: "#",
        repoUrl: "#",
        image: 'https://raw.githubusercontent.com/Q3JLZWQ/HTML/refs/heads/main/Archviz-I-7.jpg',
        slides: ["Floor Plan", "Exterior", "Interior 1", "Interior 2", "Detail Shot", "Lighting", "Final"],
        slideImages: [
            'https://raw.githubusercontent.com/Q3JLZWQ/HTML/refs/heads/main/Archviz-I-1.jpg',
            'https://raw.githubusercontent.com/Q3JLZWQ/HTML/refs/heads/main/Archviz-I-2.jpg',
            'https://raw.githubusercontent.com/Q3JLZWQ/HTML/refs/heads/main/Archviz-I-3.jpg',
            'https://raw.githubusercontent.com/Q3JLZWQ/HTML/refs/heads/main/Archviz-I-4.jpg',
            'https://raw.githubusercontent.com/Q3JLZWQ/HTML/refs/heads/main/Archviz-I-5.jpg',
            'https://raw.githubusercontent.com/Q3JLZWQ/HTML/refs/heads/main/Archviz-I-6.jpg',
            'https://raw.githubusercontent.com/Q3JLZWQ/HTML/refs/heads/main/Archviz-I-7.jpg'
        ]
    },
    {
        name: "Vai - I",
        year: "2022",
        desc: "Initial character design exploration focusing on form, silhouette, and basic texturing workflows.",
        tags: ["Character design", "Render", "Maya"],
        category: "Character design",
        duration: "2 months",
        status: "Completed",
        liveUrl: "#",
        repoUrl: "#",
        image: 'https://raw.githubusercontent.com/Q3JLZWQ/HTML/refs/heads/main/Vai-I-1.jpg',
        slides: ["Concept Art", "Final Render"],
        slideImages: [
            'https://raw.githubusercontent.com/Q3JLZWQ/HTML/refs/heads/main/Vai-I-1.jpg',
            'https://raw.githubusercontent.com/Q3JLZWQ/HTML/refs/heads/main/Vai-I-2.jpg'
        ]
    }
];

// DOM Element Cache
const els = {
    loading: document.getElementById('loadingOverlay'),
    menuBtn: document.getElementById('menuBtn'),
    menuDropdown: document.getElementById('menuDropdown'),
    scrollBtn: document.getElementById('scrollBtn'),
    heroSection: document.getElementById('heroSection'),
    grid: document.getElementById('projectsGrid'),
    filterContainer: document.getElementById('filterContainer'),
    portfolioSection: document.getElementById('portfolio'),
    
    // Modal Cache
    modal: document.getElementById('projectModal'),
    modalBackdrop: document.getElementById('modalBackdrop'),
    modalClose: document.getElementById('modalClose'),
    modalContent: document.getElementById('modalContent'),
    modalTitle: document.getElementById('modalTitle'),
    modalDesc: document.getElementById('modalDesc'),
    modalActions: document.getElementById('modalActions'),
    modalTags: document.getElementById('modalTags'),
    modalMeta: document.getElementById('modalMeta'),
    modalSlideshow: document.getElementById('modalSlideshow'),
    modalSlides: document.getElementById('modalSlides'),
    modalDots: document.getElementById('modalDots'),
    sliderPrev: document.getElementById('sliderArrowPrev'),
    sliderNext: document.getElementById('sliderArrowNext'),
    
    backToTop: document.getElementById('backToTop')
};

let currentProject = null;
let slideInterval = null;
let currentSlideIndex = 0;
let isMenuOpen = false;
let slideshowPaused = false;
let lastFocusedElement = null;
let activeFilter = 'all';
let isFilterAnimating = false;
let touchStartX = 0;

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

window.addEventListener('error', (e) => console.error('Portfolio error:', e.error));
window.addEventListener('unhandledrejection', (e) => console.error('Unhandled promise rejection:', e.reason));

function createSVGIcon(iconType) {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('fill', 'none');
    svg.setAttribute('stroke', 'currentColor');
    svg.setAttribute('style', 'width: 14px; height: 14px;');

    switch (iconType) {
        case 'archviz':
            svg.innerHTML = '<path d="M3 21h18"></path><path d="M4 20V9l5-6 5 6v11h4a1 1 0 0 1 1 1v2"></path><path d="M9 20V14h6v6"></path>';
            return svg.outerHTML;
        case 'realtime':
            svg.innerHTML = '<path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>';
            return svg.outerHTML;
        case 'ue5':
        case 'ue4':
            svg.innerHTML = '<rect x="2" y="3" width="20" height="14" rx="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line>';
            return svg.outerHTML;
        case 'character design':
            svg.innerHTML = '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>';
            return svg.outerHTML;
        case 'render':
            svg.innerHTML = '<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle>';
            return svg.outerHTML;
        case 'maya':
            svg.innerHTML = '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><path d="M3.27 6.96L12 12.01l8.73-5.05"></path><path d="M12 22.08V12"></path>';
            return svg.outerHTML;
        default:
            svg.innerHTML = '<rect x="4" y="4" width="16" height="16" rx="2"></rect>';
            return svg.outerHTML;
    }
}

function escapeText(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.textContent;
}

function createTagElement(tagName) {
    const tagEl = document.createElement('span');
    tagEl.className = 'apple-tag';
    const iconSpan = document.createElement('span');
    iconSpan.innerHTML = createSVGIcon(tagName.toLowerCase());
    const textSpan = document.createElement('span');
    textSpan.textContent = tagName;
    tagEl.appendChild(iconSpan);
    tagEl.appendChild(textSpan);
    return tagEl;
}

const intersectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            intersectionObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('section-visible');
            sectionObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.15, rootMargin: '0px 0px -10% 0px' });

function renderFilters() {
    const allTags = [...new Set(projects.flatMap(p => p.tags))];

    const allBtn = document.createElement('button');
    allBtn.className = 'apple-tag filter-btn active-filter';
    allBtn.setAttribute('data-filter', 'all');
    allBtn.setAttribute('aria-pressed', 'true');
    allBtn.textContent = 'All';
    allBtn.addEventListener('click', () => filterProjects('all'));
    els.filterContainer.appendChild(allBtn);

    allTags.forEach(tag => {
        const btn = document.createElement('button');
        btn.className = 'apple-tag filter-btn';
        btn.setAttribute('data-filter', tag);
        btn.setAttribute('aria-pressed', 'false');
        btn.textContent = tag;
        btn.addEventListener('click', () => filterProjects(tag));
        els.filterContainer.appendChild(btn);
    });

    els.filterContainer.classList.add('reveal-item');
    intersectionObserver.observe(els.filterContainer);
}

function filterProjects(filter) {
    if (isFilterAnimating || activeFilter === filter) return;

    isFilterAnimating = true;
    activeFilter = filter;

    const cards = document.querySelectorAll('.project-card');
    const visibleCards = [];
    const hiddenCards = [];

    document.querySelectorAll('.filter-btn').forEach(btn => {
        if (btn.dataset.filter === filter) {
            btn.classList.add('active-filter');
            btn.setAttribute('aria-pressed', 'true');
        } else {
            btn.classList.remove('active-filter');
            btn.setAttribute('aria-pressed', 'false');
        }
    });

    cards.forEach(card => {
        const index = parseInt(card.dataset.index);
        const project = projects[index];
        if (filter === 'all' || project.tags.includes(filter)) {
            visibleCards.push(card);
        } else {
            hiddenCards.push(card);
        }
    });

    cards.forEach(card => {
        card.classList.add('is-filtering');
        card.style.opacity = '0';
        card.style.transform = 'translateY(8px) scale(0.98)';
    });

    setTimeout(() => {
        hiddenCards.forEach(card => card.style.display = 'none');

        visibleCards.forEach((card, i) => {
            card.style.display = '';
            card.style.opacity = '0';
            card.style.transform = 'translateY(16px) scale(0.98)';

            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0) scale(1)';
            }, i * 50);
        });

        const totalAnimationTime = 300 + (visibleCards.length * 50) + 200;
        setTimeout(() => {
            cards.forEach(card => {
                card.classList.remove('is-filtering');
                card.style.opacity = '';
                card.style.transform = '';
            });
            isFilterAnimating = false;
        }, totalAnimationTime);
    }, 300);
}

function renderProjects() {
    els.grid.innerHTML = '';
    projects.forEach((project, index) => {
        const article = document.createElement('article');
        article.className = 'project-card group cursor-pointer reveal-item';
        article.dataset.index = String(index);
        article.tabIndex = 0;
        article.role = 'listitem';
        article.setAttribute('aria-label', 'View ' + escapeText(project.name) + ' project details');

        const bgMedia = document.createElement('div');
        bgMedia.className = 'card-media';

        if (project.image) {
            const skeleton = document.createElement('div');
            skeleton.className = 'skeleton img-loading';
            skeleton.style.position = 'absolute';
            skeleton.style.inset = '0';
            bgMedia.appendChild(skeleton);

            const img = document.createElement('img');
            img.src = project.image;
            img.alt = escapeText(project.name) + ' thumbnail';
            img.className = 'project-card-image img-loading';
            img.loading = 'lazy';
            img.decoding = 'async';

            img.addEventListener('load', () => {
                img.classList.remove('img-loading');
                img.classList.add('img-loaded');
                skeleton.style.display = 'none';
            });
            bgMedia.appendChild(img);
        }

        const gradientOverlay = document.createElement('div');
        gradientOverlay.className = 'card-overlay';
        bgMedia.appendChild(gradientOverlay);

        article.appendChild(bgMedia);

        const content = document.createElement('div');
        content.className = 'project-card-content';

        const yearBadge = createTagElement(project.year);
        const titleWrapper = document.createElement('div');
        titleWrapper.className = 'project-card-header';
        titleWrapper.appendChild(yearBadge);

        const textWrap = document.createElement('div');
        
        const title = document.createElement('h3');
        title.className = 'project-title';
        title.textContent = project.name;

        const description = document.createElement('p');
        description.className = 'project-desc line-clamp-2';
        description.textContent = project.desc || '';

        textWrap.append(title, description);

        const tagsContainer = document.createElement('div');
        tagsContainer.className = 'tags-container';
        project.tags.forEach(tag => tagsContainer.appendChild(createTagElement(tag)));

        content.append(titleWrapper, textWrap, tagsContainer);
        article.appendChild(content);
        els.grid.appendChild(article);

        intersectionObserver.observe(article);

        article.addEventListener('click', () => openProject(parseInt(article.dataset.index)));
        article.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openProject(parseInt(article.dataset.index));
            }
        });
    });
}

function updateSlideVisuals(index) {
    document.querySelectorAll('.slide-item').forEach(s => s.classList.add('opacity-0'));
    document.querySelectorAll('.slide-dot').forEach(d => d.classList.remove('active'));
    
    const slide = document.querySelector('.slide-item[data-slide="' + index + '"]');
    const dot = document.querySelector('.slide-dot[data-slide="' + index + '"]');
    
    if (slide) slide.classList.remove('opacity-0');
    if (dot) {
        dot.classList.add('active');
        dot.setAttribute('aria-pressed', 'true');
    }
    
    document.querySelectorAll('.slide-dot').forEach((d, i) => {
        if (i !== index) d.setAttribute('aria-pressed', 'false');
    });

    if (els.sliderPrev && currentProject) els.sliderPrev.disabled = index === 0;
    if (els.sliderNext && currentProject) els.sliderNext.disabled = index === currentProject.slides.length - 1;
}

function navigateSlide(direction) {
    if (!currentProject) return;
    const newIndex = direction === 'prev'
        ? Math.max(0, currentSlideIndex - 1)
        : Math.min(currentProject.slides.length - 1, currentSlideIndex + 1);

    if (newIndex !== currentSlideIndex) {
        currentSlideIndex = newIndex;
        updateSlideVisuals(newIndex);
        slideshowPaused = false;
        restartSlideshow();
    }
}

// Attach slider listeners once instead of every open
els.sliderPrev.addEventListener('click', () => navigateSlide('prev'));
els.sliderNext.addEventListener('click', () => navigateSlide('next'));

// Touch / Swipe support for sliders
els.modalSlideshow.addEventListener('touchstart', e => touchStartX = e.changedTouches[0].screenX, {passive: true});
els.modalSlideshow.addEventListener('touchend', e => {
    let touchEndX = e.changedTouches[0].screenX;
    if (touchStartX - touchEndX > 50) navigateSlide('next'); // Swipe left
    if (touchEndX - touchStartX > 50) navigateSlide('prev'); // Swipe right
}, {passive: true});

// Global Keyboard Navigation
document.addEventListener('keydown', (e) => {
    if (!els.modal.classList.contains('invisible')) {
        if (e.key === 'Escape') {
            e.preventDefault();
            closeProject();
        }
        if (e.key === 'ArrowLeft') {
            e.preventDefault();
            navigateSlide('prev');
        }
        if (e.key === 'ArrowRight') {
            e.preventDefault();
            navigateSlide('next');
        }
    }
});

function openProject(index) {
    currentProject = projects[index];
    currentSlideIndex = 0;
    slideshowPaused = false;
    lastFocusedElement = document.activeElement;

    // Utilize DOM Caching - Avoid recreation
    els.modalTitle.textContent = currentProject.name;
    els.modalDesc.textContent = currentProject.desc || '';

    // Action Links (Security implemented via target & rel)
    els.modalActions.innerHTML = '';
    if (currentProject.liveUrl && currentProject.liveUrl !== '#') {
        els.modalActions.innerHTML += `<a href="${currentProject.liveUrl}" target="_blank" rel="noopener noreferrer" class="action-btn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg> Live Demo
        </a>`;
    }
    if (currentProject.repoUrl && currentProject.repoUrl !== '#') {
        els.modalActions.innerHTML += `<a href="${currentProject.repoUrl}" target="_blank" rel="noopener noreferrer" class="action-btn action-btn--outline">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"></path></svg> Repository
        </a>`;
    }

    els.modalTags.innerHTML = '';
    currentProject.tags.forEach(tag => els.modalTags.appendChild(createTagElement(tag)));

    els.modalMeta.innerHTML = '';
    const metaItems = [
        { label: 'Year', value: currentProject.year },
        { label: 'Category', value: currentProject.category || '-' },
        { label: 'Duration', value: currentProject.duration || '-' },
        { label: 'Status', value: currentProject.status || '-' }
    ];
    metaItems.forEach(item => {
        els.modalMeta.innerHTML += `<div><p class="meta-label">${item.label}</p><p class="meta-value">${escapeText(item.value)}</p></div>`;
    });

    els.modalSlides.innerHTML = '';
    els.modalDots.innerHTML = '';

    currentProject.slides.forEach((slide, i) => {
        const slideDiv = document.createElement('div');
        slideDiv.className = 'slide-item opacity-0';
        slideDiv.dataset.slide = String(i);

        const img = document.createElement('img');
        img.src = currentProject.slideImages[i];
        img.alt = escapeText(slide) || ('Slide ' + (i + 1));
        img.loading = i === 0 ? 'eager' : 'lazy';
        img.decoding = 'async';

        slideDiv.appendChild(img);
        els.modalSlides.appendChild(slideDiv);

        const dot = document.createElement('button');
        dot.type = 'button';
        dot.className = 'slide-dot' + (i === 0 ? ' active' : '');
        dot.dataset.slide = String(i);
        dot.setAttribute('aria-label', 'Go to slide ' + (i + 1) + ': ' + escapeText(slide || ('Slide ' + (i + 1))));
        dot.setAttribute('aria-pressed', i === 0 ? 'true' : 'false');

        dot.addEventListener('click', () => {
            currentSlideIndex = i;
            updateSlideVisuals(i);
            slideshowPaused = false;
            restartSlideshow();
        });

        els.modalDots.appendChild(dot);
    });

    els.modal.classList.remove('invisible', 'opacity-0');
    els.modalContent.classList.remove('opacity-0');
    els.modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    requestAnimationFrame(() => els.modalClose.focus());

    // Focus Trapping logic specific to modal content limits
    function trapFocus(element) {
        const focusable = element.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        element.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                if (e.shiftKey && document.activeElement === first) {
                    e.preventDefault();
                    last.focus();
                } else if (!e.shiftKey && document.activeElement === last) {
                    e.preventDefault();
                    first.focus();
                }
            }
        });
    }
    trapFocus(els.modalContent);

    els.modalSlideshow.addEventListener('mouseenter', () => { slideshowPaused = true; });
    els.modalSlideshow.addEventListener('mouseleave', () => { slideshowPaused = false; });

    const firstSlide = document.querySelector('.slide-item[data-slide="0"]');
    if (firstSlide) firstSlide.classList.remove('opacity-0');

    els.sliderPrev.disabled = true;
    startSlideshow();
}

function closeProject() {
    els.modal.classList.add('opacity-0');
    els.modalContent.classList.add('opacity-0');
    setTimeout(() => {
        els.modal.classList.add('invisible');
        els.modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        stopSlideshow();
        if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') lastFocusedElement.focus();
    }, 200);
}

function startSlideshow() {
    if (prefersReducedMotion) return;
    stopSlideshow();
    slideInterval = setInterval(() => {
        if (!slideshowPaused) {
            const nextIndex = (currentSlideIndex + 1) % currentProject.slides.length;
            updateSlideVisuals(nextIndex);
            currentSlideIndex = nextIndex;
        }
    }, 4000);
}

function restartSlideshow() { startSlideshow(); }

function stopSlideshow() {
    if (slideInterval) {
        clearInterval(slideInterval);
        slideInterval = null;
    }
}

// Menu Nav Logics
if (els.menuBtn && els.menuDropdown) {
    els.menuBtn.addEventListener('click', () => {
        isMenuOpen = !isMenuOpen;
        if (isMenuOpen) {
            els.menuBtn.classList.add('active');
            els.menuDropdown.classList.remove('opacity-0', 'invisible');
            els.menuDropdown.setAttribute('aria-hidden', 'false');
            els.menuBtn.setAttribute('aria-expanded', 'true');
            setTimeout(() => {
                const firstLink = els.menuDropdown.querySelector('a');
                if (firstLink) firstLink.focus();
            }, 100);
        } else {
            els.menuBtn.classList.remove('active');
            closeMenu();
        }
    });

    document.addEventListener('click', (e) => {
        if (isMenuOpen && !els.menuBtn.contains(e.target) && !els.menuDropdown.contains(e.target)) {
            els.menuBtn.classList.remove('active');
            closeMenu();
        }
    });

    els.menuDropdown.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            if (targetId && targetId.startsWith('#')) {
                e.preventDefault();
                if (isMenuOpen) {
                    els.menuBtn.classList.remove('active');
                    closeMenu();
                }
                const targetEl = document.getElementById(targetId.slice(1));
                if (targetEl) {
                    setTimeout(() => {
                        targetEl.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
                    }, 150);
                }
            }
        });
    });
}

function closeMenu() {
    isMenuOpen = false;
    els.menuDropdown.classList.add('opacity-0', 'invisible');
    els.menuDropdown.setAttribute('aria-hidden', 'true');
    els.menuBtn.setAttribute('aria-expanded', 'false');
}

if (els.scrollBtn) {
    els.scrollBtn.addEventListener('click', () => {
        if (els.portfolioSection) els.portfolioSection.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    });
}

// Performance Enhancement: IntersectionObserver for Back to Top Button
if (els.backToTop && els.heroSection) {
    const backToTopObserver = new IntersectionObserver((entries) => {
        // If hero section is NOT intersecting (out of view), show the button
        if (!entries[0].isIntersecting) {
            els.backToTop.classList.add('visible');
        } else {
            els.backToTop.classList.remove('visible');
        }
    }, { rootMargin: "0px", threshold: 0 }); // Triggers exactly when the hero leaves/enters viewport
    
    backToTopObserver.observe(els.heroSection);

    els.backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    });
}

if (els.modalClose && els.modalBackdrop) {
    els.modalClose.addEventListener('click', closeProject);
    els.modalBackdrop.addEventListener('click', closeProject);
}

const contentReady = new Promise(resolve => {
    if (document.readyState === 'complete') resolve();
    else window.addEventListener('load', resolve);
});

document.addEventListener('DOMContentLoaded', () => {
    renderFilters();
    renderProjects();

    document.querySelectorAll('.reveal-item').forEach(item => intersectionObserver.observe(item));
    if (els.portfolioSection) sectionObserver.observe(els.portfolioSection);

    const minDisplay = 300;
    const readyTime = Date.now();

    contentReady.then(() => {
        const remaining = Math.max(0, minDisplay - (Date.now() - readyTime));
        setTimeout(() => {
            els.loading.classList.add('opacity-0');
            setTimeout(() => els.loading.classList.add('hidden'), 500);
        }, remaining);
    });
});

const heroVideo = document.querySelector('.hero-video-container');
if (heroVideo) {
    heroVideo.addEventListener('error', () => {
        const fallback = document.querySelector('.hero-fallback');
        if (fallback) fallback.style.display = 'block';
    });
}

window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', (e) => {
    if (e.matches) stopSlideshow();
    else if (currentProject) startSlideshow();
});
/**
 * Portfolio Application Module (script.js)
 * Strict-CSP compliant: zero inline style mutations, zero innerHTML injection.
 */

/* ==========================================================================
   1. Self-Contained Preview Artwork Helper & Portfolio Dataset
   ========================================================================== */

/**
 * Generates crisp SVG data-URI artwork so cards and slides render immediately
 * under `img-src 'self' data:` before you swap in local .webp/.webm assets.
 */
function createPreviewSvg(label, subtitle, accentStart, accentEnd) {
  const svg = [
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 800">`,
    `<defs>`,
    `<linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">`,
    `<stop offset="0%" stop-color="${accentStart}"/>`,
    `<stop offset="100%" stop-color="${accentEnd}"/>`,
    `</linearGradient>`,
    `<radialGradient id="r" cx="75%" cy="25%" r="65%">`,
    `<stop offset="0%" stop-color="#ffffff" stop-opacity="0.16"/>`,
    `<stop offset="100%" stop-color="#000000" stop-opacity="0"/>`,
    `</radialGradient>`,
    `</defs>`,
    `<rect width="1280" height="800" fill="#09090d"/>`,
    `<rect width="1280" height="800" fill="url(#g)" opacity="0.42"/>`,
    `<rect width="1280" height="800" fill="url(#r)"/>`,
    `<circle cx="980" cy="240" r="220" fill="none" stroke="#ffffff" stroke-opacity="0.12" stroke-width="2"/>`,
    `<circle cx="980" cy="240" r="310" fill="none" stroke="#ffffff" stroke-opacity="0.06" stroke-width="1.5"/>`,
    `<text x="88" y="640" fill="#f5f5f7" font-family="Inter, system-ui, sans-serif" font-size="54" font-weight="700" letter-spacing="-1.5">${label}</text>`,
    `<text x="88" y="696" fill="#f5f5f7" fill-opacity="0.72" font-family="Inter, system-ui, sans-serif" font-size="26" font-weight="400">${subtitle}</text>`,
    `</svg>`
  ].join("");

  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

const PROJECTS = [
  {
    id: "aether-fluid-synth",
    title: "Aether Fluid Synth",
    category: "WebGL & 3D",
    year: "2026",
    summary: "GPU-accelerated Navier-Stokes fluid surface driven by Web Audio harmonics.",
    description:
      "An interactive audiovisual instrument built with custom GLSL fragment shaders and the Web Audio API. Pointer velocity injects vorticity and dye momentum into a half-float framebuffer pipeline while real-time FFT spectrum analysis modulates surface refraction at 120 fps.",
    thumbnail: {
      src: createPreviewSvg("Aether Fluid Synth", "GLSL Navier-Stokes + Web Audio", "#3b82f6", "#0f172a"),
      alt: "Iridescent blue fluid simulation preview for Aether Fluid Synth"
    },
    meta: {
      Role: "Creative Technologist",
      Year: "2026",
      Client: "R&D Lab",
      Performance: "120 fps WebGL2"
    },
    tags: ["WebGL2", "GLSL", "Web Audio API", "TypeScript", "Shader Pipeline"],
    links: [
      { label: "Launch Experience", url: "https://github.com/Q3JLZWQ", primary: true },
      { label: "Source Code", url: "https://github.com/Q3JLZWQ", primary: false }
    ],
    slides: [
      {
        type: "image",
        src: createPreviewSvg("01 / Vorticity Pass", "Multi-pass FBO advection & bloom", "#2563eb", "#090d16"),
        alt: "Vorticity advection render pass visualization"
      },
      {
        type: "image",
        src: createPreviewSvg("02 / Spectral Coupling", "FFT frequency bins mapped to surface normals", "#06b6d4", "#1e1b4b"),
        alt: "Audio spectrum reactive surface normals diagram"
      },
      {
        type: "image",
        src: createPreviewSvg("03 / Mobile Fallback", "Adaptive half-resolution render scaling", "#4f46e5", "#09090b"),
        alt: "Adaptive resolution profiler view on mobile devices"
      }
    ]
  },
  {
    id: "kinetix-design-os",
    title: "Kinetix Design OS",
    category: "Design Systems",
    year: "2026",
    summary: "Zero-runtime token engine and accessible motion primitives for multi-brand apps.",
    description:
      "Architected a framework-agnostic component and motion library powering 14 product surfaces. Combines CSS custom property themes, spring-physics micro-interactions, automated WCAG contrast verification, and strict Content-Security-Policy compatibility.",
    thumbnail: {
      src: createPreviewSvg("Kinetix Design OS", "Accessible Motion & Token Architecture", "#ec4899", "#1f122b"),
      alt: "Component token grid preview for Kinetix Design OS"
    },
    meta: {
      Role: "Lead Design Engineer",
      Year: "2026",
      Client: "Kinetix Cloud",
      Bundle: "4.2 kB gzipped"
    },
    tags: ["CSS Architecture", "Web Components", "ARIA", "Design Tokens", "WCAG 2.2 AA"],
    links: [
      { label: "Documentation", url: "https://github.com/Q3JLZWQ", primary: true },
      { label: "GitHub Repo", url: "https://github.com/Q3JLZWQ", primary: false }
    ],
    slides: [
      {
        type: "image",
        src: createPreviewSvg("01 / Token Graph", "Semantic color & elevation tokens across themes", "#db2777", "#18181b"),
        alt: "Semantic design token dependency graph"
      },
      {
        type: "image",
        src: createPreviewSvg("02 / Native Primitives", "Top-layer dialogs, popovers & roving focus", "#9333ea", "#0f172a"),
        alt: "Interactive accessible dialog and toolbar primitives"
      }
    ]
  },
  {
    id: "solstice-spatial-atlas",
    title: "Solstice Spatial Atlas",
    category: "WebGL & 3D",
    year: "2025",
    summary: "Real-time planetary irradiance and orbital telemetry explorer in Three.js.",
    description:
      "Visualizes satellite telemetry and solar angle data across global terrain tiles using instanced geometries and atmospheric Rayleigh/Mie scattering shaders. Engineered custom Web Worker geometry decoders to keep main-thread frame times under 4 ms.",
    thumbnail: {
      src: createPreviewSvg("Solstice Spatial Atlas", "Atmospheric Scattering & Orbital Telemetry", "#f59e0b", "#1c1917"),
      alt: "Atmospheric horizon shader preview for Solstice Spatial Atlas"
    },
    meta: {
      Role: "3D Web Developer",
      Year: "2025",
      Client: "Solstice Earth",
      Architecture: "Three.js + Workers"
    },
    tags: ["Three.js", "Web Workers", "Custom Shaders", "GeoJSON", "InstancedMesh"],
    links: [
      { label: "Explore Atlas", url: "https://github.com/Q3JLZWQ", primary: true }
    ],
    slides: [
      {
        type: "image",
        src: createPreviewSvg("01 / Atmospheric Limb", "Rayleigh & Mie optical depth shader", "#d97706", "#0c0a09"),
        alt: "Planetary limb scattering shader closeup"
      },
      {
        type: "image",
        src: createPreviewSvg("02 / Worker Decoding", "Off-thread terrain mesh quantization", "#ea580c", "#18181b"),
        alt: "Web Worker telemetry stream pipeline"
      },
      {
        type: "image",
        src: createPreviewSvg("03 / Telemetry HUD", "High-contrast SVG data overlays", "#ca8a04", "#09090b"),
        alt: "Orbital inclination HUD overlay"
      }
    ]
  },
  {
    id: "pulse-modular-sequencer",
    title: "Pulse Euclidean Sequencer",
    category: "Generative Audio",
    year: "2025",
    summary: "Browser-based polyrhythmic step sequencer with sample-accurate AudioWorklet clock.",
    description:
      "Solves browser timer drift by running a dedicated DSP clock inside an AudioWorklet thread, paired with concentric SVG rhythm rings rendered at 60 fps. Supports Web MIDI hardware output, Euclidean pattern distribution, and shareable URL state.",
    thumbnail: {
      src: createPreviewSvg("Pulse Sequencer", "AudioWorklet DSP & Web MIDI", "#10b981", "#06241c"),
      alt: "Concentric Euclidean rhythm rings for Pulse Sequencer"
    },
    meta: {
      Role: "Creator & Developer",
      Year: "2025",
      Client: "Open Source",
      Latency: "Sub-3ms AudioWorklet"
    },
    tags: ["AudioWorklet", "Web MIDI", "SVG Animation", "Euclidean Rhythms", "PWA"],
    links: [
      { label: "Play Synth", url: "https://github.com/Q3JLZWQ", primary: true },
      { label: "Source Code", url: "https://github.com/Q3JLZWQ", primary: false }
    ],
    slides: [
      {
        type: "image",
        src: createPreviewSvg("01 / Euclidean Rings", "Interactive polyrhythmic step geometry", "#059669", "#090d16"),
        alt: "Concentric polyrhythmic ring interface"
      },
      {
        type: "image",
        src: createPreviewSvg("02 / MIDI Routing", "External hardware clock & CC mapping", "#14b8a6", "#0f172a"),
        alt: "Web MIDI hardware routing matrix"
      }
    ]
  },
  {
    id: "prism-editorial-engine",
    title: "Prism Scrollytelling Engine",
    category: "Interactive UI",
    year: "2025",
    summary: "Scroll-driven visual essays using native CSS view timelines and zero layout thrashing.",
    description:
      "Built an editorial publishing toolkit for data journalism teams thatchoreographs typography, sticky canvas diagrams, and progressive image reveals using native IntersectionObserver thresholds and hardware-accelerated transforms.",
    thumbnail: {
      src: createPreviewSvg("Prism Editorial Engine", "Zero-Jank Scrollytelling Toolkit", "#8b5cf6", "#170f2e"),
      alt: "Editorial scrollytelling layout preview for Prism"
    },
    meta: {
      Role: "Frontend Architect",
      Year: "2025",
      Client: "Prism Media",
      CoreWebVitals: "99 Lighthouse Perf"
    },
    tags: ["Scroll Choreography", "Canvas 2D", "IntersectionObserver", "Typography"],
    links: [
      { label: "Read Case Study", url: "https://github.com/Q3JLZWQ", primary: true }
    ],
    slides: [
      {
        type: "image",
        src: createPreviewSvg("01 / Sticky Stage", "Viewport-locked canvas transitions", "#7c3aed", "#09090b"),
        alt: "Sticky viewport stage diagram"
      },
      {
        type: "image",
        src: createPreviewSvg("02 / Reduced Motion", "Instant crossfade fallback mode", "#6366f1", "#111827"),
        alt: "Accessible reduced-motion step view"
      }
    ]
  },
  {
    id: "verve-commerce-canvas",
    title: "Verve Spatial Lookbook",
    category: "Interactive UI",
    year: "2024",
    summary: "Infinite 2D pan-and-zoom editorial canvas with physics inertia and instant filtering.",
    description:
      "Reimagined seasonal fashion lookbooks as a tactile 2D spatial canvas supporting trackpad pinch-zoom, pointer momentum, keyboard grid navigation, and instant FLIP layout transitions into structured product detail sheets.",
    thumbnail: {
      src: createPreviewSvg("Verve Spatial Lookbook", "2D Inertia Canvas & FLIP Transitions", "#f43f5e", "#260b14"),
      alt: "Spatial canvas lookbook grid for Verve"
    },
    meta: {
      Role: "Creative Developer",
      Year: "2024",
      Client: "Verve Studio",
      Interaction: "Pointer Events + FLIP"
    },
    tags: ["Pointer Events", "Spring Physics", "Spatial UI", "Accessibility"],
    links: [
      { label: "Live Demo", url: "https://github.com/Q3JLZWQ", primary: true }
    ],
    slides: [
      {
        type: "image",
        src: createPreviewSvg("01 / Freeform Canvas", "60fps inertial panning & spatial clustering", "#e11d48", "#09090b"),
        alt: "Spatial clustering lookbook overview"
      },
      {
        type: "image",
        src: createPreviewSvg("02 / Detail Sheet", "Seamless modal transition & keyboard support", "#fb7185", "#18181b"),
        alt: "Accessible detail sheet view"
      }
    ]
  }
];

/* ==========================================================================
   2. Application State & DOM Cache
   ========================================================================== */

const state = {
  activeCategory: "All",
  activeProject: null,
  activeSlideIndex: 0,
  lastFocusedTrigger: null,
  swipeStartX: null
};

const dom = {
  loadingOverlay: document.getElementById("loadingOverlay"),
  menuBtn: document.getElementById("menuBtn"),
  menuDropdown: document.getElementById("menuDropdown"),
  heroSection: document.getElementById("heroSection"),
  heroVideo: document.querySelector(".hero-video-container"),
  scrollBtn: document.getElementById("scrollBtn"),
  portfolioSection: document.getElementById("portfolio"),
  filterContainer: document.getElementById("filterContainer"),
  projectsGrid: document.getElementById("projectsGrid"),
  backToTop: document.getElementById("backToTop"),
  projectModal: document.getElementById("projectModal"),
  modalContent: document.getElementById("modalContent"),
  modalClose: document.getElementById("modalClose"),
  modalTitle: document.getElementById("modalTitle"),
  modalActions: document.getElementById("modalActions"),
  modalSlideshow: document.getElementById("modalSlideshow"),
  sliderArrowPrev: document.getElementById("sliderArrowPrev"),
  sliderArrowNext: document.getElementById("sliderArrowNext"),
  modalSlides: document.getElementById("modalSlides"),
  modalDots: document.getElementById("modalDots"),
  modalDesc: document.getElementById("modalDesc"),
  modalMeta: document.getElementById("modalMeta"),
  modalTags: document.getElementById("modalTags")
};

const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
const desktopNavQuery = window.matchMedia("(min-width: 768px)");

/* ==========================================================================
   3. Safe DOM & URL Utilities
   ========================================================================== */

/**
 * Creates a DOM element safely without innerHTML or inline styles.
 */
function createEl(tag, options = {}, children = []) {
  const node = document.createElement(tag);

  if (options.className) node.className = options.className;
  if (options.text !== undefined) node.textContent = options.text;
  if (options.attrs) {
    for (const [key, value] of Object.entries(options.attrs)) {
      if (value !== undefined && value !== null) {
        node.setAttribute(key, String(value));
      }
    }
  }

  for (const child of children) {
    if (child) node.append(child);
  }

  return node;
}

/**
 * Validates external action links and media sources against safe protocols.
 */
function sanitizeUrl(rawUrl, allowedIframeHosts = null) {
  if (typeof rawUrl !== "string" || !rawUrl.trim()) return null;

  if (rawUrl.startsWith("data:image/svg+xml;")) {
    return allowedIframeHosts ? null : rawUrl;
  }

  try {
    const parsed = new URL(rawUrl, window.location.origin);

    if (allowedIframeHosts) {
      return parsed.protocol === "https:" && allowedIframeHosts.includes(parsed.hostname)
        ? parsed.href
        : null;
    }

    if (parsed.origin === window.location.origin) return parsed.href;
    if (parsed.protocol === "https:" || parsed.protocol === "mailto:") return parsed.href;
  } catch {
    return null;
  }

  return null;
}

function getScrollBehavior() {
  return reducedMotionQuery.matches ? "auto" : "smooth";
}

/* ==========================================================================
   4. Hero Video & Viewport Observers
   ========================================================================== */

function syncHeroVideoPlayback(isIntersecting = true) {
  if (!dom.heroVideo) return;

  if (reducedMotionQuery.matches || !isIntersecting || dom.projectModal?.open) {
    dom.heroVideo.pause();
    return;
  }

  const playPromise = dom.heroVideo.play();
  if (playPromise !== undefined) {
    playPromise.catch(() => {
      /* Autoplay prevented by browser power-saving or user policy; poster remains visible */
    });
  }
}

function initHeroAndScrollObservers() {
  if (!dom.heroSection) return;

  const heroObserver = new IntersectionObserver(
    (entries) => {
      const [entry] = entries;
      if (!entry) return;

      syncHeroVideoPlayback(entry.isIntersecting);

      // Show Back-to-Top button only after scrolling past the hero section
      if (dom.backToTop) {
        dom.backToTop.hidden = entry.isIntersecting;
      }
    },
    { threshold: 0.1 }
  );

  heroObserver.observe(dom.heroSection);

  reducedMotionQuery.addEventListener("change", () => {
    syncHeroVideoPlayback(true);
  });
}

function observeRevealItems(elements) {
  if (!elements.length) return;

  if (reducedMotionQuery.matches || !("IntersectionObserver" in window)) {
    elements.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  elements.forEach((item) => revealObserver.observe(item));
}

/* ==========================================================================
   5. Navigation & Smooth Scroll Controls
   ========================================================================== */

function setMobileMenuOpen(isOpen, restoreFocus = false) {
  if (!dom.menuBtn || !dom.menuDropdown) return;

  dom.menuBtn.setAttribute("aria-expanded", String(isOpen));
  dom.menuDropdown.hidden = !isOpen;

  if (!isOpen && restoreFocus) {
    dom.menuBtn.focus();
  }
}

function initNavigation() {
  if (dom.menuBtn && dom.menuDropdown) {
    dom.menuBtn.addEventListener("click", () => {
      const isExpanded = dom.menuBtn.getAttribute("aria-expanded") === "true";
      setMobileMenuOpen(!isExpanded);
    });

    dom.menuDropdown.addEventListener("click", (event) => {
      if (event.target.closest("a") && !desktopNavQuery.matches) {
        setMobileMenuOpen(false);
      }
    });

    document.addEventListener("click", (event) => {
      const isExpanded = dom.menuBtn.getAttribute("aria-expanded") === "true";
      if (!isExpanded || desktopNavQuery.matches) return;

      if (!dom.menuDropdown.contains(event.target) && !dom.menuBtn.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && dom.menuBtn.getAttribute("aria-expanded") === "true") {
        setMobileMenuOpen(false, true);
      }
    });

    desktopNavQuery.addEventListener("change", (event) => {
      if (event.matches) {
        setMobileMenuOpen(false);
      }
    });
  }

  dom.scrollBtn?.addEventListener("click", () => {
    dom.portfolioSection?.scrollIntoView({ behavior: getScrollBehavior() });
  });

  dom.backToTop?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: getScrollBehavior() });
  });
}

/* ==========================================================================
   6. Category Filter Toolbar & Project Grid Rendering
   ========================================================================== */

function getCategories() {
  const unique = new Set(PROJECTS.map((project) => project.category));
  return ["All", ...unique];
}

function renderFilters() {
  if (!dom.filterContainer) return;

  const categories = getCategories();
  dom.filterContainer.replaceChildren();

  categories.forEach((category, index) => {
    const isSelected = category === state.activeCategory;
    const button = createEl("button", {
      className: `filter-btn apple-glass${isSelected ? " is-active" : ""}`,
      text: category,
      attrs: {
        type: "button",
        "aria-pressed": String(isSelected),
        tabindex: index === 0 ? "0" : "-1",
        "data-category": category
      }
    });

    button.addEventListener("click", () => {
      if (state.activeCategory === category) return;
      state.activeCategory = category;
      updateFilterSelection(category);
      renderProjectsGrid();
    });

    dom.filterContainer.append(button);
  });

  // Roving tabindex keyboard support for role="toolbar"
  dom.filterContainer.addEventListener("keydown", (event) => {
    const buttons = Array.from(dom.filterContainer.querySelectorAll(".filter-btn"));
    const currentIndex = buttons.indexOf(document.activeElement);
    if (currentIndex === -1) return;

    let nextIndex = -1;
    if (event.key === "ArrowRight") nextIndex = (currentIndex + 1) % buttons.length;
    if (event.key === "ArrowLeft") nextIndex = (currentIndex - 1 + buttons.length) % buttons.length;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = buttons.length - 1;

    if (nextIndex !== -1) {
      event.preventDefault();
      buttons.forEach((btn, idx) => btn.setAttribute("tabindex", idx === nextIndex ? "0" : "-1"));
      buttons[nextIndex].focus();
    }
  });
}

function updateFilterSelection(selectedCategory) {
  if (!dom.filterContainer) return;

  const buttons = dom.filterContainer.querySelectorAll(".filter-btn");
  buttons.forEach((btn) => {
    const isMatch = btn.dataset.category === selectedCategory;
    btn.classList.toggle("is-active", isMatch);
    btn.setAttribute("aria-pressed", String(isMatch));
  });
}

function createProjectCard(project) {
  const safeThumb = sanitizeUrl(project.thumbnail?.src) || "";
  const image = createEl("img", {
    className: "project-card__image",
    attrs: {
      src: safeThumb,
      alt: project.thumbnail?.alt || `${project.title} preview`,
      loading: "lazy",
      decoding: "async",
      width: "640",
      height: "400"
    }
  });

  const mediaWrap = createEl("div", { className: "project-card__media" }, [image]);

  const metaLine = createEl("div", { className: "project-card__eyebrow" }, [
    createEl("span", { text: project.category }),
    createEl("span", { attrs: { "aria-hidden": "true" }, text: "·" }),
    createEl("span", { text: project.year })
  ]);

  const title = createEl("h3", {
    className: "project-card__title",
    text: project.title
  });

  const summary = createEl("p", {
    className: "project-card__summary",
    text: project.summary
  });

  const tagPreview = createEl(
    "ul",
    { className: "project-card__tags", attrs: { "aria-label": "Technologies" } },
    project.tags.slice(0, 3).map((tag) =>
      createEl("li", { className: "tag-pill", text: tag })
    )
  );

  const body = createEl("div", { className: "project-card__body" }, [
    metaLine,
    title,
    summary,
    tagPreview
  ]);

  const triggerBtn = createEl(
    "button",
    {
      className: "project-card__trigger",
      attrs: {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-label": `Open project details for ${project.title}`
      }
    },
    [mediaWrap, body]
  );

  triggerBtn.addEventListener("click", () => {
    openProjectModal(project, triggerBtn);
  });

  return createEl("article", { className: "project-card apple-glass reveal-item" }, [triggerBtn]);
}

function renderProjectsGrid() {
  if (!dom.projectsGrid) return;

  const filtered =
    state.activeCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === state.activeCategory);

  dom.projectsGrid.replaceChildren();

  if (!filtered.length) {
    dom.projectsGrid.append(
      createEl("p", {
        className: "empty-state",
        text: "No projects match this category yet."
      })
    );
    return;
  }

  const cards = filtered.map((project) => createProjectCard(project));
  dom.projectsGrid.append(...cards);
  observeRevealItems(cards);
}

/* ==========================================================================
   7. Native Dialog Modal & Accessible Media Slideshow
   ========================================================================== */

function buildSlideElement(slide, index, projectTitle) {
  const wrapper = createEl("div", {
    className: "slide-item",
    attrs: {
      role: "group",
      "aria-roledescription": "slide",
      "aria-label": `Slide ${index + 1}`
    }
  });
  wrapper.hidden = index !== 0;

  if (slide.type === "video") {
    const safeVideo = sanitizeUrl(slide.src);
    if (safeVideo) {
      const video = createEl("video", {
        className: "slide-media",
        attrs: {
          src: safeVideo,
          controls: "",
          playsinline: "",
          preload: "metadata",
          ...(sanitizeUrl(slide.poster) ? { poster: sanitizeUrl(slide.poster) } : {})
        }
      });
      wrapper.append(video);
      return wrapper;
    }
  }

  if (slide.type === "youtube" || slide.type === "vimeo") {
    const safeEmbed = sanitizeUrl(slide.src, [
      "www.youtube-nocookie.com",
      "www.youtube.com",
      "player.vimeo.com"
    ]);
    if (safeEmbed) {
      const iframe = createEl("iframe", {
        className: "slide-media",
        attrs: {
          src: safeEmbed,
          title: slide.title || `${projectTitle} video demonstration`,
          loading: "lazy",
          allow: "fullscreen; picture-in-picture",
          referrerpolicy: "strict-origin-when-cross-origin"
        }
      });
      wrapper.append(iframe);
      return wrapper;
    }
  }

  const safeImg = sanitizeUrl(slide.src) || "";
  const img = createEl("img", {
    className: "slide-media",
    attrs: {
      src: safeImg,
      alt: slide.alt || `${projectTitle} slide ${index + 1}`,
      decoding: "async"
    }
  });
  wrapper.append(img);
  return wrapper;
}

function pauseInactiveSlideMedia() {
  if (!dom.modalSlides) return;

  dom.modalSlides.querySelectorAll("video").forEach((video) => video.pause());
  dom.modalSlides.querySelectorAll("iframe").forEach((iframe) => {
    const parentSlide = iframe.closest(".slide-item");
    if (parentSlide?.hidden) {
      const currentSrc = iframe.getAttribute("src");
      if (currentSrc) iframe.setAttribute("src", currentSrc);
    }
  });
}

function setActiveSlide(targetIndex) {
  const slides = state.activeProject?.slides || [];
  if (!slides.length || !dom.modalSlides) return;

  const total = slides.length;
  state.activeSlideIndex = ((targetIndex % total) + total) % total;

  const slideNodes = Array.from(dom.modalSlides.children);
  slideNodes.forEach((node, idx) => {
    node.hidden = idx !== state.activeSlideIndex;
  });

  pauseInactiveSlideMedia();

  if (dom.modalDots) {
    Array.from(dom.modalDots.children).forEach((dot, idx) => {
      const isCurrent = idx === state.activeSlideIndex;
      dot.classList.toggle("is-active", isCurrent);
      dot.setAttribute("aria-current", isCurrent ? "true" : "false");
    });
  }
}

function populateModalContent(project) {
  if (dom.modalTitle) dom.modalTitle.textContent = project.title;
  if (dom.modalDesc) dom.modalDesc.textContent = project.description;

  // Action buttons
  if (dom.modalActions) {
    dom.modalActions.replaceChildren();
    (project.links || []).forEach((link) => {
      const safeHref = sanitizeUrl(link.url);
      if (!safeHref) return;

      const anchor = createEl("a", {
        className: `action-btn ${link.primary ? "action-btn--primary" : "action-btn--ghost"}`,
        text: link.label,
        attrs: {
          href: safeHref,
          target: "_blank",
          rel: "noopener noreferrer"
        }
      });
      dom.modalActions.append(anchor);
    });
  }

  // Metadata grid
  if (dom.modalMeta) {
    dom.modalMeta.replaceChildren();
    for (const [label, value] of Object.entries(project.meta || {})) {
      const item = createEl("div", { className: "meta-item" }, [
        createEl("span", { className: "meta-item__label", text: label }),
        createEl("strong", { className: "meta-item__value", text: value })
      ]);
      dom.modalMeta.append(item);
    }
  }

  // Tags
  if (dom.modalTags) {
    dom.modalTags.replaceChildren();
    (project.tags || []).forEach((tag) => {
      dom.modalTags.append(createEl("span", { className: "tag-pill", text: tag }));
    });
  }

  // Slideshow & indicator dots
  const slides = project.slides || [];
  if (dom.modalSlides && dom.modalDots && dom.modalSlideshow) {
    dom.modalSlides.replaceChildren();
    dom.modalDots.replaceChildren();

    dom.modalSlideshow.hidden = slides.length === 0;
    const hasMultiple = slides.length > 1;
    if (dom.sliderArrowPrev) dom.sliderArrowPrev.hidden = !hasMultiple;
    if (dom.sliderArrowNext) dom.sliderArrowNext.hidden = !hasMultiple;
    dom.modalDots.hidden = !hasMultiple;

    slides.forEach((slide, index) => {
      dom.modalSlides.append(buildSlideElement(slide, index, project.title));

      if (hasMultiple) {
        const dot = createEl("button", {
          className: `dot-btn${index === 0 ? " is-active" : ""}`,
          attrs: {
            type: "button",
            "aria-label": `Go to slide ${index + 1}`,
            "aria-current": index === 0 ? "true" : "false"
          }
        });
        dot.addEventListener("click", () => setActiveSlide(index));
        dom.modalDots.append(dot);
      }
    });
  }
}

function openProjectModal(project, triggerElement) {
  if (!dom.projectModal) return;

  state.activeProject = project;
  state.activeSlideIndex = 0;
  state.lastFocusedTrigger = triggerElement || document.activeElement;

  populateModalContent(project);
  dom.modalContent?.scrollTo({ top: 0, behavior: "auto" });

  if (!dom.projectModal.open) {
    dom.projectModal.showModal();
  }

  syncHeroVideoPlayback(false);
}

function initModalControls() {
  if (!dom.projectModal) return;

  dom.modalClose?.addEventListener("click", () => {
    dom.projectModal.close();
  });

  // Dismiss when clicking the native ::backdrop outside .modal-card
  dom.projectModal.addEventListener("click", (event) => {
    if (event.target === dom.projectModal) {
      dom.projectModal.close();
    }
  });

  // Clean up embedded media and restore trigger focus whenever modal closes (button, backdrop, or Escape)
  dom.projectModal.addEventListener("close", () => {
    dom.modalSlides?.replaceChildren();
    state.activeProject = null;
    syncHeroVideoPlayback(true);

    if (state.lastFocusedTrigger instanceof HTMLElement) {
      state.lastFocusedTrigger.focus({ preventScroll: true });
      state.lastFocusedTrigger = null;
    }
  });

  dom.sliderArrowPrev?.addEventListener("click", () => {
    setActiveSlide(state.activeSlideIndex - 1);
  });

  dom.sliderArrowNext?.addEventListener("click", () => {
    setActiveSlide(state.activeSlideIndex + 1);
  });

  // Left / Right keyboard navigation inside open modal
  dom.projectModal.addEventListener("keydown", (event) => {
    const slideCount = state.activeProject?.slides?.length || 0;
    if (slideCount <= 1) return;

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      setActiveSlide(state.activeSlideIndex - 1);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      setActiveSlide(state.activeSlideIndex + 1);
    }
  });

  // Pointer swipe support on slideshow stage
  dom.modalSlideshow?.addEventListener("pointerdown", (event) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    state.swipeStartX = event.clientX;
  });

  dom.modalSlideshow?.addEventListener("pointerup", (event) => {
    if (state.swipeStartX === null) return;
    const deltaX = event.clientX - state.swipeStartX;
    state.swipeStartX = null;

    if (Math.abs(deltaX) >= 44) {
      setActiveSlide(deltaX < 0 ? state.activeSlideIndex + 1 : state.activeSlideIndex - 1);
    }
  });

  dom.modalSlideshow?.addEventListener("pointercancel", () => {
    state.swipeStartX = null;
  });
}

/* ==========================================================================
   8. Initialization
   ========================================================================== */

function dismissLoadingOverlay() {
  if (!dom.loadingOverlay) return;
  dom.loadingOverlay.setAttribute("aria-busy", "false");
  dom.loadingOverlay.hidden = true;
}

function init() {
  renderFilters();
  renderProjectsGrid();
  observeRevealItems(Array.from(document.querySelectorAll(".section-header.reveal-item, .filters-wrapper.reveal-item")));
  initNavigation();
  initHeroAndScrollObservers();
  initModalControls();
  dismissLoadingOverlay();
}

init();

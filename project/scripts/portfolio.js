const projects = [
  {
    id: 1,
    title: "Verdant Foods — Brand Identity",
    category: "branding",
    year: "2024",
    image: "images/foodbranddesign.webp",
    icon: "fa-solid fa-leaf",
    iconBg:
      "linear-gradient(135deg,rgba(16,185,129,0.18),rgba(16,185,129,0.05))",
    description:
      "Complete brand overhaul for a Lagos-based organic food company — logo, packaging, colour system, and brand guidelines.",
    longDesc:
      "Verdant needed a brand that matched their premium product. We developed a full identity system: wordmark, sub-mark, packaging design across 12 SKUs, a brand bible, and social media templates. The new identity launched to immediate market recognition.",
    tags: ["Logo Design", "Packaging", "Brand Guidelines", "Typography"],
    catClass: "cat-branding",
    catLabel: "Branding",
    featured: true,
  },
  {
    id: 2,
    title: "NovaPay — Mobile App UI",
    category: "uiux",
    year: "2024",
    image: "images/fintechux.webp",
    icon: "fa-solid fa-mobile-screen",
    iconBg:
      "linear-gradient(135deg,rgba(168,85,247,0.18),rgba(168,85,247,0.05))",
    description:
      "End-to-end UI/UX design for a fintech payments app targeting young professionals across West Africa.",
    longDesc:
      "From user research through to high-fidelity prototype, we designed NovaPay's full mobile experience — onboarding, transfers, bill payments, and savings goals. Usability testing ran across 3 cities before handoff.",
    tags: ["Figma", "User Research", "Prototyping", "Design System"],
    catClass: "cat-uiux",
    catLabel: "UI/UX",
    featured: false,
  },
  {
    id: 3,
    title: "E-Commerce Website",
    category: "web",
    year: "2023",
    image: "images/ecommerceweb.webp",
    icon: "fa-solid fa-hotel",
    iconBg:
      "linear-gradient(135deg,rgba(59,130,246,0.18),rgba(59,130,246,0.05))",
    description:
      "Responsive e-commerce website for a luxury hotel chain — custom booking flow, 360° room previews, and EN/FR language switching.",
    longDesc:
      "Lagoon Suites wanted a site that matched their 5-star experience. We designed and built a responsive site with a custom booking flow, 360° room previews, and EN/FR language switching. Page speed scores hit 95+ on Lighthouse.",
    tags: ["Web Design", "HTML/CSS", "Booking System", "Performance"],
    catClass: "cat-web",
    catLabel: "Web Design",
    featured: false,
  },
  {
    id: 4,
    title: "PulseGym — Brand & Web",
    category: "branding",
    year: "2022",
    image: "images/gymbrand.webp",
    icon: "fa-solid fa-dumbbell",
    iconBg:
      "linear-gradient(135deg,rgba(245,158,11,0.18),rgba(245,158,11,0.05))",
    description:
      "High-energy brand identity and membership website for a premium fitness chain launching across 4 cities.",
    longDesc:
      "PulseGym needed a brand with attitude. We built a bold identity — custom typeface pairing, neon-accent colour system, and photography art direction. The website drove 1,200 pre-launch memberships in the first week.",
    tags: ["Brand Identity", "Web Design", "Photography Direction"],
    catClass: "cat-branding",
    catLabel: "Branding",
    featured: false,
  },
  {
    id: 5,
    title: "Amara Skincare — Product Launch",
    category: "design",
    year: "2024",
    image: "images/skincarebrand.jpg",
    icon: "fa-solid fa-spa",
    iconBg: "linear-gradient(135deg,rgba(244,63,94,0.18),rgba(244,63,94,0.05))",
    description:
      "Full graphic design suite for a product launch — campaign visuals, packaging, and in-store display materials.",
    longDesc:
      "Amara's new line needed a cohesive launch campaign. We designed packaging for 8 products, a full OOH billboard campaign, point-of-sale displays, and a digital ad set. The launch sold out within 3 weeks.",
    tags: ["Packaging Design", "Print", "Campaign", "OOH"],
    catClass: "cat-design",
    catLabel: "Graphic Design",
    featured: false,
  },
  {
    id: 6,
    title: "TechTide — SaaS Dashboard",
    category: "uiux",
    year: "2025",
    image: "images/techweb.webp",
    icon: "fa-solid fa-chart-line",
    iconBg:
      "linear-gradient(135deg,rgba(168,85,247,0.18),rgba(168,85,247,0.05))",
    description:
      "Dashboard and data visualisation UI for a B2B analytics SaaS platform serving 50+ enterprise clients.",
    longDesc:
      "TechTide needed their complex data to feel manageable. We designed a modular dashboard system — customisable widgets, dark/light mode, role-based views, and onboarding flows. Engineers praised the component-level Figma organisation.",
    tags: ["Dashboard UI", "Data Viz", "Figma", "SaaS"],
    catClass: "cat-uiux",
    catLabel: "UI/UX",
    featured: false,
  },

  {
    id: 9,
    title: "UrbanEats — Restaurant Rebrand",
    category: "branding",
    year: "2022",
    image: "images/urbaneat.webp",
    icon: "fa-solid fa-utensils",
    iconBg:
      "linear-gradient(135deg,rgba(245,158,11,0.18),rgba(245,158,11,0.05))",
    description:
      "Complete rebrand for a restaurant chain expanding from 3 to 12 locations — identity, menus, signage, and digital presence.",
    longDesc:
      "UrbanEats needed a brand that could scale. We built a flexible identity system with primary and secondary logos, a full colour palette, menu design templates, digital menu boards, and social media guidelines — all in a single brand playbook.",
    tags: ["Rebrand", "Signage", "Menu Design", "Digital"],
    catClass: "cat-branding",
    catLabel: "Branding",
    featured: false,
  },
];

/* ── TESTIMONIALS DATA ── */
const testimonials = [
  {
    stars: 5,
    text: "PixelCraft didn't just design our brand — they helped us understand what we stood for. The process was thorough, collaborative, and the final result exceeded every expectation.",
    name: "Chisom Adeyemi",
    title: "CEO, Verdant Foods",
    initials: "CA",
    avClass: "av-green",
  },
  {
    stars: 5,
    text: "Working with PixelCraft on our app UI was one of the best decisions we made as a startup. They asked the right questions, challenged our assumptions, and delivered something truly special.",
    name: "Emeka Okonkwo",
    title: "Co-founder, NovaPay",
    initials: "EO",
    avClass: "av-amber",
  },
  {
    stars: 5,
    text: "The website they built for us regularly gets commented on by guests before they've even checked in. It set the tone for the entire Lagoon Suites experience perfectly.",
    name: "Funmi Olatunji",
    title: "GM, Lagoon Suites",
    initials: "FO",
    avClass: "av-blue",
  },
];

/* =============================================
   PURE FUNCTIONS — no DOM access, safe anywhere
============================================= */

function getCatClass(category) {
  const map = {
    branding: "cat-branding",
    web: "cat-web",
    uiux: "cat-uiux",
    motion: "cat-motion",
    design: "cat-design",
  };
  return map[category] || "cat-design";
}

function getCatLabel(category) {
  const map = {
    branding: "Branding",
    web: "Web Design",
    uiux: "UI/UX",
    motion: "Motion",
    design: "Graphic Design",
  };
  return map[category] || category;
}

function buildThumb(project) {
  if (project.image) {
    return `<div class="project-thumb">
      <img src="${project.image}" alt="${project.title}" loading="lazy" />
      <div class="project-overlay">
        <button class="overlay-btn" onclick="openLightbox(${project.id})">
          <i class="fa-solid fa-expand"></i> View
        </button>
        <button class="overlay-btn outline" onclick="window.location.href='contact.html'">
          <i class="fa-solid fa-envelope"></i> Enquire
        </button>
      </div>
    </div>`;
  }
  return `<div class="project-thumb no-image" style="background:${project.iconBg}">
    <i class="${project.icon}" style="color:rgba(255,255,255,0.25);font-size:3.5rem;"></i>
    <div class="project-overlay">
      <button class="overlay-btn" onclick="openLightbox(${project.id})">
        <i class="fa-solid fa-expand"></i> View
      </button>
      <button class="overlay-btn outline" onclick="window.location.href='contact.html'">
        <i class="fa-solid fa-envelope"></i> Enquire
      </button>
    </div>
  </div>`;
}

function buildCard(project) {
  const tags = project.tags
    .map((t) => `<span class="project-tag">${t}</span>`)
    .join("");
  const featuredClass = project.featured ? " featured" : "";
  const catClass = project.catClass || getCatClass(project.category);
  const catLabel = project.catLabel || getCatLabel(project.category);
  return `
    <div class="project-card${featuredClass}" data-category="${project.category}" data-title="${project.title.toLowerCase()}">
      ${buildThumb(project)}
      <div class="project-body">
        <div class="project-meta">
          <span class="project-category ${catClass}">${catLabel}</span>
          <span class="project-year">${project.year}</span>
        </div>
        <h3 class="project-title">${project.title}</h3>
        <p class="project-desc">${project.description}</p>
        <div class="project-tags">${tags}</div>
      </div>
    </div>`;
}

/* =============================================
   DOM FUNCTIONS — only called after DOM is ready
============================================= */

function renderProjects(list) {
  const grid = document.getElementById("projects-grid");
  const empty = document.getElementById("empty-state");
  const countEl = document.getElementById("count-num");

  // remove all cards except the empty-state placeholder
  Array.from(grid.children).forEach((child) => {
    if (child.id !== "empty-state") child.remove();
  });

  countEl.textContent = list.length;

  if (list.length === 0) {
    empty.style.display = "block";
    return;
  }

  empty.style.display = "none";
  list.forEach((project, i) => {
    const wrapper = document.createElement("div");
    wrapper.innerHTML = buildCard(project);
    const card = wrapper.firstElementChild;
    card.style.animationDelay = `${i * 0.05}s`;
    grid.insertBefore(card, empty);
  });
}

function renderTestimonials() {
  const grid = document.getElementById("testimonials-grid");
  grid.innerHTML = testimonials
    .map(
      (t) => `
    <div class="testimonial-card">
      <div class="testimonial-stars">${"★".repeat(t.stars)}</div>
      <p class="testimonial-text">"${t.text}"</p>
      <div class="testimonial-author">
        <div class="author-avatar ${t.avClass}">${t.initials}</div>
        <div>
          <div class="author-name">${t.name}</div>
          <div class="author-title">${t.title}</div>
        </div>
      </div>
    </div>`,
    )
    .join("");
}

function openLightbox(id) {
  const p = projects.find((proj) => proj.id === id);
  if (!p) return;

  const tags = p.tags
    .map(
      (t) =>
        `<span class="project-tag" style="font-size:0.72rem;padding:4px 12px;">${t}</span>`,
    )
    .join("");

  const imgHTML = p.image
    ? `<img class="lightbox-img" src="${p.image}" alt="${p.title}" />`
    : `<div class="lightbox-img-placeholder" style="background:${p.iconBg}">
         <i class="${p.icon}" style="color:rgba(255,255,255,0.22);font-size:5rem;"></i>
       </div>`;

  document.getElementById("lightbox-box").innerHTML = `
    ${imgHTML}
    <div class="lightbox-body">
      <div class="lightbox-meta">
        <span class="project-category ${p.catClass}" style="font-size:0.65rem;padding:4px 14px;border-radius:20px;">${p.catLabel}</span>
        <button class="lightbox-close" onclick="closeLightbox()"><i class="fa-solid fa-xmark"></i></button>
      </div>
      <h2 class="lightbox-title">${p.title}</h2>
      <p class="lightbox-desc">${p.longDesc}</p>
      <div class="lightbox-tags">${tags}</div>
      <div class="lightbox-actions">
        <button class="btn-primary" onclick="window.location.href='contact.html'">
          <i class="fa-solid fa-envelope"></i> Enquire about this project
        </button>
        <button class="btn-outline" onclick="closeLightbox()">Close</button>
      </div>
    </div>`;

  document.getElementById("lightbox").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  document.getElementById("lightbox").classList.remove("open");
  document.body.style.overflow = "";
}

/* =============================================
   STATE
============================================= */
let activeFilter = "all";
let searchQuery = "";

function getFiltered() {
  return projects.filter((p) => {
    const matchCat = activeFilter === "all" || p.category === activeFilter;
    const matchSearch =
      p.title.toLowerCase().includes(searchQuery) ||
      p.tags.some((t) => t.toLowerCase().includes(searchQuery));
    return matchCat && matchSearch;
  });
}

/* =============================================
   INIT — everything that touches the DOM
   goes inside DOMContentLoaded
============================================= */
document.addEventListener("DOMContentLoaded", () => {
  /* ── hamburger ── */
  const hamburger = document.querySelector(".hamburger");
  const navList = document.querySelector("nav ul");

  if (hamburger && navList) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navList.classList.toggle("active");
    });
    navList.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navList.classList.remove("active");
      });
    });
  }

  /* ── filter tabs ── */
  const filterTabsEl = document.getElementById("filter-tabs");
  if (filterTabsEl) {
    filterTabsEl.addEventListener("click", (e) => {
      const tab = e.target.closest(".filter-tab");
      if (!tab) return;
      document
        .querySelectorAll(".filter-tab")
        .forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
      activeFilter = tab.dataset.filter;
      renderProjects(getFiltered());
    });
  }

  /* ── search ── */
  const searchInput = document.getElementById("search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      renderProjects(getFiltered());
    });
  }

  /* ── lightbox backdrop click ── */
  const lightboxEl = document.getElementById("lightbox");
  if (lightboxEl) {
    lightboxEl.addEventListener("click", (e) => {
      if (e.target === lightboxEl) closeLightbox();
    });
  }

  /* ── lightbox escape key ── */
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLightbox();
  });

  /* ── footer year & last modified ── */
  const yearEl = document.getElementById("current-year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const lastModEl = document.getElementById("lastModified");
  if (lastModEl) lastModEl.textContent = document.lastModified;

  /* ── render ── */
  renderProjects(projects);
  renderTestimonials();
});

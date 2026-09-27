/* =========================================================
   Shared site behaviour. Reads all content from PORTFOLIO
   (assets/js/data.js) so pages stay in sync automatically.
   ========================================================= */

(function () {
  "use strict";

  const $ = (sel, ctx) => (ctx || document).querySelector(sel);
  const $all = (sel, ctx) => Array.from((ctx || document).querySelectorAll(sel));
  const icon = (name, extra) => `<i data-lucide="${name}" ${extra || ""}></i>`;

  /* ---------------- THEME ---------------- */
  function initTheme() {
    const stored = localStorage.getItem("theme");
    const theme = stored || "dark";
    document.documentElement.setAttribute("data-theme", theme);
    const toggleBtns = $all(".theme-toggle");
    toggleBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        const current = document.documentElement.getAttribute("data-theme");
        const next = current === "light" ? "dark" : "light";
        document.documentElement.setAttribute("data-theme", next);
        localStorage.setItem("theme", next);
      });
    });
  }

  /* ---------------- NAVBAR (build + behaviour) ---------------- */
  function buildNav() {
    const navMount = $("#site-navbar");
    if (!navMount) return;
    const current = document.body.getAttribute("data-page");
    const links = PORTFOLIO.nav.map(l =>
      `<a href="${l.href}" class="${l.href === current ? "active" : ""}">${l.label}</a>`
    ).join("");

    navMount.innerHTML = `
      <div class="container">
        <a href="index.html" class="brand">
          <img src="${PORTFOLIO.person.logo}" alt="${PORTFOLIO.person.name} logo">
          <span>${PORTFOLIO.person.shortName}</span>
        </a>
        <nav class="nav-links" aria-label="Primary">${links}</nav>
        <div class="nav-right">
          <button class="theme-toggle" aria-label="Toggle color theme">
            ${icon("moon", 'class="icon-moon"')}
            ${icon("sun", 'class="icon-sun"')}
          </button>
          <button class="hamburger" aria-label="Open menu" aria-expanded="false" id="hamburgerBtn">
            ${icon("menu")}
          </button>
        </div>
      </div>`;

    const mobileMount = $("#mobile-menu");
    if (mobileMount) {
      const mLinks = PORTFOLIO.nav.map(l =>
        `<a href="${l.href}" class="${l.href === current ? "active" : ""}">${l.label}</a>`
      ).join("");
      mobileMount.innerHTML = `
        ${mLinks}
        <div class="mobile-actions">
          <a href="contact.html" class="btn btn-primary btn-block">${icon("mail")} Contact Me</a>
          <a href="${PORTFOLIO.person.resume}" class="btn btn-outline btn-block" download>${icon("download")} Download Resume</a>
        </div>`;
    }

    const hamburgerBtn = $("#hamburgerBtn");
    if (hamburgerBtn && mobileMount) {
      hamburgerBtn.addEventListener("click", () => {
        const open = mobileMount.classList.toggle("is-open");
        hamburgerBtn.setAttribute("aria-expanded", String(open));
        hamburgerBtn.innerHTML = icon(open ? "x" : "menu");
        document.body.style.overflow = open ? "hidden" : "";
      });
      $all("a", mobileMount).forEach(a => a.addEventListener("click", () => {
        mobileMount.classList.remove("is-open");
        hamburgerBtn.setAttribute("aria-expanded", "false");
        hamburgerBtn.innerHTML = icon("menu");
        document.body.style.overflow = "";
        refreshIcons();
      }));
    }
    refreshIcons();
  }

  function navScrollState() {
    const nav = $(".navbar");
    if (!nav) return;
    const onScroll = () => nav.classList.toggle("is-scrolled", window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---------------- SCROLL PROGRESS + BACK TO TOP ---------------- */
  function scrollFx() {
    const bar = $("#scrollProgress");
    const backBtn = $("#backToTop");
    const onScroll = () => {
      const h = document.documentElement;
      const scrolled = (h.scrollTop) / (h.scrollHeight - h.clientHeight) * 100;
      if (bar) bar.style.width = (scrolled || 0) + "%";
      if (backBtn) backBtn.classList.toggle("is-visible", h.scrollTop > 480);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    if (backBtn) backBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  }

  /* ---------------- REVEAL ON SCROLL ---------------- */
  function revealOnScroll() {
    const items = $all("[data-reveal]");
    if (!items.length) return;
    if (!("IntersectionObserver" in window)) { items.forEach(i => i.classList.add("is-visible")); return; }
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("is-visible"); obs.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    items.forEach(i => obs.observe(i));
  }

  function refreshIcons() {
    if (window.lucide) window.lucide.createIcons();
  }

  /* ---------------- FOOTER ---------------- */
  function buildFooter() {
    const mount = $("#site-footer");
    if (!mount) return;
    const links = PORTFOLIO.nav.map(l => `<a href="${l.href}">${l.label}</a>`).join("");
    mount.innerHTML = `
      <div class="container">
        <div class="footer-grid">
          <a href="index.html" class="brand">
            <img src="${PORTFOLIO.person.logo}" alt="${PORTFOLIO.person.name} logo">
            <span>${PORTFOLIO.person.shortName}</span>
          </a>
          <div class="footer-links">${links}</div>
          <div class="social-row">
            <a href="${PORTFOLIO.person.linkedin}" target="_blank" rel="noopener" aria-label="LinkedIn">${icon("linkedin.jpg")}</a>
            <a href="${PORTFOLIO.person.github}" target="_blank" rel="noopener" aria-label="GitHub">${icon("github.jpg")}</a>
            <a href="mailto:${PORTFOLIO.person.email}" aria-label="Email">${icon("mail")}</a>
          </div>
        </div>
        <div class="footer-bottom">
          <span>© ${new Date().getFullYear()} ${PORTFOLIO.person.name}. All rights reserved.</span>
          <span>Built with care — Cloud, Data & AI.</span>
        </div>
      </div>`;
    refreshIcons();
  }

  /* ---------------- HOME PAGE ---------------- */
  function renderHome() {
    const photoMount = $("#heroPhoto");
    if (photoMount) photoMount.src = PORTFOLIO.person.photo;

    const badgeMount = $("#heroBadges");
    if (badgeMount) {
      badgeMount.innerHTML = PORTFOLIO.heroBadges.map((b, i) =>
        `<span class="badge-float b${i + 1}">${icon(b.icon)} ${b.label}</span>`
      ).join("");
    }
    const statsMount = $("#heroStats");
    if (statsMount) {
      statsMount.innerHTML = PORTFOLIO.heroStats.map(s =>
        `<div><strong>${s.value}</strong><span>${s.label}</span></div>`
      ).join("");
    }
    const resumeLinks = $all(".resume-link");
    resumeLinks.forEach(a => a.setAttribute("href", PORTFOLIO.person.resume));

    const focusMount = $("#homeFocus");
    if (focusMount) {
      focusMount.innerHTML = PORTFOLIO.focusAreas.map((f, i) => `
        <div class="card glass" data-reveal data-reveal-delay="${(i % 4) + 1}">
          <div class="service-card">
            <h3>${f.title}</h3>
            <p class="desc">${f.desc}</p>
          </div>
        </div>`).join("");
    }
  }

  /* ---------------- ABOUT PAGE ---------------- */
  function renderAbout() {
    const skillMount = $("#skillPills");
    if (skillMount) {
      skillMount.innerHTML = PORTFOLIO.skills.map(s => `<span class="tag">${s}</span>`).join("");
    }
  }

  /* ---------------- EXPERIENCE PAGE ---------------- */
  function renderExperience() {
    const mount = $("#timelineMount");
    if (!mount) return;
    mount.innerHTML = PORTFOLIO.experience.map((e, i) => `
      <div class="timeline-item" data-reveal data-reveal-delay="${i + 1}">
        <span class="timeline-dot"></span>
        <div class="timeline-card card glass">
          <div class="role-row">
            <div>
              <h3>${e.role}</h3>
              <div class="company">${e.company}</div>
            </div>
            <span class="period">${e.period}</span>
          </div>
          <ul>${e.points.map(p => `<li>${p}</li>`).join("")}</ul>
          <div class="tech-row">${e.tech.map(t => `<span class="tag">${t}</span>`).join("")}</div>
        </div>
      </div>`).join("");
  }

  /* ---------------- PROJECTS PAGE ---------------- */
  function projectCardHTML(p, idx) {
    return `
      <div class="project-card card glass" data-category="${p.category}" data-index="${idx}" data-reveal data-reveal-delay="${(idx % 4) + 1}" tabindex="0" role="button" aria-label="View details for ${p.title}">
        <div class="thumb">${icon(categoryIcon(p.category))}</div>
        <h3>${p.title}</h3>
        <p class="desc">${p.desc}</p>
        <div class="tags">${p.tagsShown.map(t => `<span class="tag">${t}</span>`).join("")}</div>
      </div>`;
  }
  function categoryIcon(cat) {
    return { aws: "cloud", data: "database", ai: "brain-circuit", web: "monitor-smartphone" }[cat] || "layers";
  }

  function renderProjects() {
    const grid = $("#projectGrid");
    if (!grid) return;
    grid.innerHTML = PORTFOLIO.projects.map((p, i) => projectCardHTML(p, i)).join("");
    refreshIcons();
    revealOnScroll();

    // filtering
    const filterBtns = $all(".filter-btn");
    filterBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        filterBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        const filter = btn.getAttribute("data-filter");
        $all(".project-card", grid).forEach(card => {
          const match = filter === "all" || card.getAttribute("data-category") === filter;
          card.classList.toggle("hide", !match);
        });
      });
    });

    // modal
    const overlay = $("#projectModal");
    const modalBox = $("#projectModalBox");
    function openModal(index) {
      const p = PORTFOLIO.projects[index];
      if (!p || !overlay || !modalBox) return;
      modalBox.innerHTML = `
        <button class="modal-close" id="modalCloseBtn" aria-label="Close">${icon("x")}</button>
        <div class="thumb">${icon(categoryIcon(p.category))}</div>
        <h3>${p.title}</h3>
        <p>${p.details}</p>
        <div class="tags">${p.tech.map(t => `<span class="tag">${t}</span>`).join("")}</div>
      `;
      overlay.classList.add("is-open");
      document.body.style.overflow = "hidden";
      refreshIcons();
      $("#modalCloseBtn").addEventListener("click", closeModal);
    }
    function closeModal() {
      overlay.classList.remove("is-open");
      document.body.style.overflow = "";
    }
    $all(".project-card", grid).forEach(card => {
      const idx = Number(card.getAttribute("data-index"));
      card.addEventListener("click", () => openModal(idx));
      card.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openModal(idx); } });
    });
    if (overlay) overlay.addEventListener("click", (e) => { if (e.target === overlay) closeModal(); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeModal(); });
  }

  /* ---------------- SERVICES PAGE ---------------- */
  function renderServices() {
    const mount = $("#servicesGrid");
    if (!mount) return;
    mount.innerHTML = PORTFOLIO.services.map((s, i) => `
      <div class="card glass service-card" data-reveal data-reveal-delay="${(i % 4) + 1}">
        <div class="icon-wrap">${icon(s.icon)}</div>
        <h3>${s.title}</h3>
        <p class="desc">${s.desc}</p>
        <ul>${s.points.map(p => `<li>${p}</li>`).join("")}</ul>
      </div>`).join("");
    refreshIcons();
  }

  /* ---------------- CERTIFICATIONS PAGE ---------------- */
  function renderCertifications() {
    const mount = $("#certGrid");
    if (!mount) return;
    mount.innerHTML = PORTFOLIO.certifications.map((c, i) => `
      <div class="card glass cert-card" data-reveal data-reveal-delay="${i + 1}">
        <div class="badge">${icon(c.icon)}</div>
        <div>
          <h3>${c.title}</h3>
          <div class="issuer">${c.issuer}</div>
        </div>
      </div>`).join("") + `
      <div class="cert-empty" data-reveal data-reveal-delay="${PORTFOLIO.certifications.length + 1}">
        ${icon("plus-circle")}
        <span>More certifications will appear here as they're earned.</span>
      </div>`;
    refreshIcons();
  }

  /* ---------------- CONTACT PAGE ---------------- */
  function renderContact() {
    const mount = $("#contactInfo");
    if (mount) {
      const p = PORTFOLIO.person;
      mount.innerHTML = `
        <div class="contact-info-item">
          <span class="ic">${icon("mail")}</span>
          <div><div class="label">Email</div><div class="value">${p.email}</div></div>
          <button class="copy-btn" id="copyEmailBtn" aria-label="Copy email">${icon("copy")}</button>
        </div>
        <div class="contact-info-item">
          <span class="ic">${icon("phone")}</span>
          <div><div class="label">Phone</div><div class="value">${p.phone}</div></div>
        </div>
        <div class="contact-info-item">
          <span class="ic">${icon("linkedin")}</span>
          <div><div class="label">LinkedIn</div><div class="value">/in/m-shivang</div></div>
        </div>
        <div class="contact-info-item">
          <span class="ic">${icon("github")}</span>
          <div><div class="label">GitHub</div><div class="value">/Shivangmishra9936</div></div>
        </div>`;
      refreshIcons();
      const copyBtn = $("#copyEmailBtn");
      if (copyBtn) {
        copyBtn.addEventListener("click", async () => {
          try {
            await navigator.clipboard.writeText(p.email);
            copyBtn.classList.add("copied");
            copyBtn.innerHTML = icon("check");
            refreshIcons();
            setTimeout(() => { copyBtn.classList.remove("copied"); copyBtn.innerHTML = icon("copy"); refreshIcons(); }, 1800);
          } catch (err) { /* clipboard unavailable, silently ignore */ }
        });
      }
    }

    const socialMount = $("#contactSocial");
    if (socialMount) {
      const p = PORTFOLIO.person;
      socialMount.innerHTML = `
           <a href="${PORTFOLIO.person.linkedin}" target="_blank" rel="noopener" aria-label="LinkedIn"><img src="assets/img/linkedin-icon.png" alt="LinkedIn" style="width:20px;height:20px;"></a>
           <a href="${PORTFOLIO.person.github}" target="_blank" rel="noopener" aria-label="GitHub"><img src="assets/img/github-icon.png" alt="GitHub" style="width:20px;height:20px;"></a>
        <a href="mailto:${p.email}" aria-label="Email">${icon("mail")}</a>`;
      refreshIcons();
    }

    const form = $("#contactForm");
    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = $("#cf-name").value.trim();
        const email = $("#cf-email").value.trim();
        const message = $("#cf-message").value.trim();
        const subject = encodeURIComponent(`Portfolio enquiry from ${name || "website visitor"}`);
        const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
        window.location.href = `mailto:${PORTFOLIO.person.email}?subject=${subject}&body=${body}`;
        const success = $("#formSuccess");
        if (success) success.classList.add("is-visible");
        form.reset();
      });
    }
  }

  /* ---------------- INIT ---------------- */
  document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    buildNav();
    buildFooter();
    navScrollState();
    scrollFx();
    refreshIcons();

    renderHome();
    renderAbout();
    renderExperience();
    renderProjects();
    renderServices();
    renderCertifications();
    renderContact();

    revealOnScroll();
    refreshIcons();
  });
})();

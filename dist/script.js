const CONTACT_EMAIL = "vedantshuklablr@gmail.com";
const RESUME_PATH = "assets/resume/Vedant-Shukla-Resume.pdf";
const SOCIAL_LINKS = [
    { name: 'X', url: 'https://x.com/vedantshukla07', icon: 'x' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/vedant-shukla-7735a7313/', icon: 'linkedin' },
    { name: 'GitHub', url: 'https://github.com/vedantshuklablr-ai', icon: 'github' }
];
const TECH_LOGOS = {
    c: { name: 'C', url: 'https://en.cppreference.com/w/c/language', src: 'assets/icons/tech/c.svg' },
    cpp: { name: 'C++', url: 'https://en.cppreference.com/w/cpp', src: 'assets/icons/tech/cplusplus.svg' },
    java: { name: 'Java', url: 'https://dev.java/', src: 'assets/icons/tech/java.svg' },
    python: { name: 'Python', url: 'https://www.python.org/', src: 'assets/icons/tech/python.svg' },
    javascript: { name: 'JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', src: 'assets/icons/tech/javascript.svg' },
    typescript: { name: 'TypeScript', url: 'https://www.typescriptlang.org/', src: 'assets/icons/tech/typescript.svg' },
    html5: { name: 'HTML5', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML', src: 'assets/icons/tech/html5.svg' },
    css3: { name: 'CSS3', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS', src: 'assets/icons/tech/css3.svg' },
    nodejs: { name: 'Node.js', url: 'https://nodejs.org/', src: 'assets/icons/tech/nodejs.svg' },
    express: { name: 'Express', url: 'https://expressjs.com/', src: 'assets/icons/tech/express.svg', tileClass: 'tech-logo-light' },
    blender: { name: 'Blender', url: 'https://www.blender.org/', src: 'assets/icons/tech/blender.svg' },
    vscode: { name: 'VS Code', url: 'https://code.visualstudio.com/', src: 'assets/icons/tech/vscode.svg' },
    github: { name: 'GitHub', url: 'https://github.com/vedantshuklablr-ai', src: 'assets/icons/tech/github.svg', tileClass: 'tech-logo-light' },
    autocad: { name: 'AutoCAD', url: 'https://www.autodesk.com/products/autocad/overview', src: 'assets/icons/tech/autodesk.svg' },
    excel: { name: 'Excel', url: 'https://www.microsoft.com/microsoft-365/excel', src: 'assets/icons/tech/excel.svg' },
    powerpoint: { name: 'PowerPoint', url: 'https://www.microsoft.com/microsoft-365/powerpoint', src: 'assets/icons/tech/powerpoint.svg' },
    word: { name: 'Word', url: 'https://www.microsoft.com/microsoft-365/word', src: 'assets/icons/tech/word.svg' }
};
const SOCIAL_ICON_PATHS = {
    x: 'M18.901 1.153h3.68L14.54 10.02l9.45 12.827h-7.406l-5.8-7.584-6.64 7.584H.46l8.6-9.83L0 1.154h7.594l5.243 6.932zm-1.293 19.43h2.039L6.486 3.278H4.298z',
    linkedin: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.555V9h3.564z',
    github: 'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.043-1.61-4.043-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.998.108-.776.418-1.305.762-1.605-2.665-.304-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.236-3.22-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 6.006 0c2.29-1.552 3.297-1.23 3.297-1.23.655 1.652.243 2.873.12 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.805 5.623-5.475 5.921.43.372.815 1.103.815 2.222 0 1.605-.015 2.898-.015 3.293 0 .322.216.694.825.576C20.565 22.092 24 17.597 24 12.297c0-6.627-5.373-12-12-12'
};
const SKILLS = [
    { cat: "Languages", items: "C, C++, Java, Python, JavaScript, TypeScript", logos: [TECH_LOGOS.c, TECH_LOGOS.cpp, TECH_LOGOS.java, TECH_LOGOS.python, TECH_LOGOS.javascript, TECH_LOGOS.typescript] },
    { cat: "Web", items: "HTML5, CSS3, JavaScript, Node.js, Express", logos: [TECH_LOGOS.html5, TECH_LOGOS.css3, TECH_LOGOS.javascript, TECH_LOGOS.nodejs, TECH_LOGOS.express] },
    { cat: "Databases", items: "SQL" },
    { cat: "3D / Visualization", items: "Blender, 3D modelling, 3D visualization, aerospace concept modelling", logos: [TECH_LOGOS.blender] },
    { cat: "AI / Automation", items: "AI Automation & Voice Systems, Artificial Intelligence, Machine Learning, AI-assisted development" },
    { cat: "Cybersecurity / Analytics", items: "Cybersecurity, CTFs, Data Analytics, Data Science" }
];
const TOOLS = [
    { name: "VS Code • GitHub", use: "Developer tools", logos: [TECH_LOGOS.vscode, TECH_LOGOS.github] },
    { name: "AutoCAD", use: "Design tool", logos: [TECH_LOGOS.autocad] },
    { name: "Excel • PowerPoint • Word", use: "Productivity tools", logos: [TECH_LOGOS.excel, TECH_LOGOS.powerpoint, TECH_LOGOS.word] }
];
const PROJECTS = [
    {
        num: "001",
        title: "STARK-PROJECT",
        tag: "AI Automation / Voice",
        desc: "Node.js-based AI automation framework with a futuristic HUD interface, voice commands integrated with local system control, real-time telemetry, and automation.",
        notes: "A voice-driven automation framework described as a personal software project.",
        tools: "Node.js, AI automation, voice interfaces",
        link: "https://github.com/vedantshuklablr-ai/STARK-PROJECT"
    },
    {
        num: "002",
        title: "SKYGUARD AI",
        tag: "AI / Aerospace Concept · Dec 2025 – Present",
        desc: "Concept-stage AI air-defense project exploring real-time data processing, predictive analytics, and aerial-threat detection. It is not an operational defense system.",
        notes: "A personal concept and development project; no operational use or validated detection performance is claimed.",
        tools: "AI, data processing, predictive analytics",
        link: "https://github.com/vedantshuklablr-ai/SKYGUARD",
        demo: "https://vedantshuklablr-ai.github.io/SKYGUARD/"
    },
    {
        num: "003",
        title: "AI-VOICE-PORTFOLIO",
        tag: "Web / Voice UX",
        desc: "Portfolio integrated with an AI-powered voice chatbot, built with HTML, CSS, and JavaScript.",
        notes: "The supplied project description identifies this portfolio as including an AI-powered voice chatbot.",
        tools: "HTML, CSS, JavaScript",
        link: "https://github.com/vedantshuklablr-ai/AI-VOICE-PORTFOLIO"
    },
    {
        num: "004",
        title: "PERSONAL-PORTFOLIO-WEBSITE",
        tag: "Web / Portfolio",
        desc: "Performance-optimized personal portfolio.",
        notes: "A personal web development project.",
        tools: "Web development",
        link: "https://github.com/vedantshuklablr-ai/PERSONAL-PORTFOLIO-WEBSITE"
    },
    {
        num: "005",
        title: "MARVEL-STUDIOS-UI",
        tag: "Web / Responsive UI",
        desc: "Modern UI featuring Marvel movie pages in chronological order.",
        notes: "A web interface project focused on presenting movie pages in chronological order.",
        tools: "HTML, CSS, JavaScript",
        link: "https://github.com/vedantshuklablr-ai/MARVEL-STUDIOS-UI"
    },
    {
        num: "006",
        title: "RoadRakshak",
        tag: "AI / Mapping / Full-stack",
        desc: "AI-powered road-issue reporting platform using Gemini AI, JWT, Cloudinary, MongoDB Atlas, and interactive maps.",
        notes: "Project details are based on the supplied description; its public repository has not been verified.",
        tools: "Gemini AI, JWT, Cloudinary, MongoDB Atlas"
        // TODO: Add a repository link only after its exact public URL is confirmed.
    },
    {
        num: "007",
        title: "AETHER-01",
        tag: "Aerospace / Visualization Concept",
        desc: "AI-assisted aerospace and spacecraft visualization concept. In development; no model, render, preview, or screenshot is available in this repository.",
        notes: "A personal concept-stage exploration, not professional or operational aerospace work.",
        tools: "Concept-stage exploration"
    }
];
const TRACK = [
    {
        role: "Founder & Content Creator",
        org: "Java 007 YouTube Channel",
        date: "Apr 2024 – Jan 2026",
        desc: "Produced and published eSports and gaming content covering Free Fire, BGMI, and other games.",
        link: "https://youtube.com/@vedant_shukla007?si=Y3tyqGtemUBXXCxx",
        linkLabel: "Visit YouTube channel",
        logo: "assets/images/java007-channel-avatar.jpg",
        logoAlt: "JAVA007 YouTube channel logo"
    },
    {
        role: "Founder & In-Game Leader (IGL)",
        org: "GOAT Esports Organisation",
        date: "Apr 2019 – Dec 2025",
        desc: "Founded and led a competitive Indian eSports organisation managing five active rosters; led team strategy, player roles, communication, roster planning, organisational leadership, performance management, and competitive coordination.",
        link: "https://goat-esports.vercel.app/",
        linkLabel: "Visit GOAT Esports website",
        duration: "6 years 9 months",
        logo: "assets/images/goat-esports-logo.svg",
        logoAlt: "GOAT Esports official logo",
        logoLayout: "wide",
        location: "Bengaluru, India",
        workArrangement: "Hybrid"
    }
];
const VENTURES = [
    {
        name: "DROPSHIPPING & E-COMMERCE VENTURE",
        icon: "store",
        description: "Developing an e-commerce business concept focused on product research, digital storefront development, supplier exploration, and understanding the Indian e-commerce market.",
        status: "UNDER CONSTRUCTION — IN DEVELOPMENT",
        businessModel: "Dropshipping + Affiliate Marketing",
        focusAreas: ["Indian e-commerce", "Product research", "Supplier research", "Store development", "Digital storefront design", "Customer experience", "Business operations", "Brand building"]
    },
    {
        name: "AFFILIATE MARKETING INITIATIVE",
        icon: "affiliate",
        description: "Exploring affiliate marketing strategies, product discovery, content distribution, digital platforms, and performance-based online business models.",
        status: "UNDER CONSTRUCTION — RESEARCH & DEVELOPMENT",
        focusAreas: ["Affiliate platform research", "Product discovery", "Content marketing", "Digital distribution", "Link management", "Audience research", "Conversion analysis", "Marketing strategy"]
    },
    {
        name: "VIDEO PRODUCTION & CREATIVE MEDIA AGENCY",
        icon: "video",
        description: "Developing a future creative media venture focused on professional video production, editing, content creation, visual storytelling, and digital media services.",
        status: "UNDER CONSTRUCTION — BUILDING THE CREATIVE AGENCY",
        focusAreas: ["Video editing", "Video production", "Content creation", "Creative direction", "Brand storytelling", "Social-media content", "Digital marketing creatives", "Motion graphics", "Post-production", "Visual communication"]
    }
];
const VENTURE_ICON_PATHS = {
    store: ['M3 9h18l-1.5-6h-15L3 9Z', 'M5 9v12h14V9', 'M9 21v-7h6v7', 'M3 9a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0'],
    affiliate: ['M7 7h3v3H7z', 'M14 14h3v3h-3z', 'M15.5 4.5h3v3h-3z', 'M10 8.5h3a3 3 0 0 1 3 3V14', 'M7 10v4a3 3 0 0 0 3 3h4', 'M12 5h3.5'],
    video: ['M3 6h13a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z', 'm18 10 5-3v10l-5-3z', 'm8 10 4 2-4 2z']
};
const EDUCATION = [
    {
        role: "B.Tech, Computer Science Engineering",
        org: "Dayananda Sagar University",
        date: "Aug 2025 – Aug 2029 (expected)",
        desc: "Bengaluru, Karnataka, India · Activities: The Technical Arsenal · Coursework: Python, AutoCAD."
    },
    {
        role: "PCM Stream (Physics, Chemistry, Mathematics), First Division",
        org: "Kendriya Vidyalaya",
        date: "Apr 2014 – May 2025",
        desc: "Scout & Guide Troop Leader at KV Kollam."
    }
];
const HACKATHONS = [
    { name: "HACKANOVA 2026", detail: "NMKRV College · 10-hour hackathon" },
    { name: "BNMIT Hackathon", detail: "BNM Institute of Technology" },
    { name: "TechFix Hackathon", detail: "Hackathon participation" },
    { name: "Virtual CTF – SPARC", detail: "BMS Institute of Technology and Management" }
];
const CERTIFICATIONS = [
    { name: "Introduction to Cybersecurity", detail: "Cisco" },
    { name: "Machine Learning for Beginners", detail: "SimpliLearn" },
    { name: "Python 101 for Data Science", detail: "IBM" },
    { name: "Digital Skills: Artificial Intelligence", detail: "Accenture" },
    { name: "Deloitte Australia – Data Analytics Job Simulation", detail: "Forage" },
    { name: "Fundamentals of Digital Marketing", detail: "Google" }
];
function getElement(id) {
    const element = document.getElementById(id);
    if (!element)
        throw new Error(`Required page element #${id} is missing.`);
    return element;
}
const HTML_ESCAPES = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
};
const escapeHtml = (value) => String(value).replace(/[&<>"']/g, character => HTML_ESCAPES[character]);
function renderSkills() {
    const el = getElement('skillRows');
    el.innerHTML = SKILLS.map(skill => `
    <div class="skill-row tilt-card">
      <div class="cat">${escapeHtml(skill.cat)}</div>
      <div class="skill-content">
        <div class="items">${escapeHtml(skill.items)}</div>
        ${skill.logos ? renderTechLogos(skill.logos) : ''}
      </div>
    </div>`).join('');
}
function renderTechLogos(logos) {
    return `<div class="tech-logo-list">
    ${logos.map(logo => `<a class="tech-logo-link${logo.tileClass ? ` ${logo.tileClass}` : ''}" href="${escapeHtml(logo.url)}" target="_blank" rel="noopener noreferrer" aria-label="${escapeHtml(`${logo.name} official website`)}" title="${escapeHtml(logo.name)}">
      <img src="${escapeHtml(logo.src)}" alt="" width="40" height="40" loading="lazy" decoding="async">
      <span class="tech-logo-tooltip" aria-hidden="true">${escapeHtml(logo.name)}</span>
    </a>`).join('')}
  </div>`;
}
function renderSocialLinks() {
    const markup = SOCIAL_LINKS.map(({ name, url, icon }) => `
    <a class="social-link" href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer"
       aria-label="${escapeHtml(`${name} profile`)}" title="${escapeHtml(name)}" data-tooltip="${escapeHtml(name)}">
      <svg class="social-icon social-icon-${icon}" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="${SOCIAL_ICON_PATHS[icon]}"></path>
      </svg>
    </a>`).join('');
    ['heroSocialLinks', 'contactSocialLinks', 'footerSocialLinks'].forEach(id => {
        getElement(id).innerHTML = markup;
    });
}
function renderTools() {
    const el = getElement('toolGrid');
    el.innerHTML = TOOLS.map(tool => `
    <article class="tool-card tilt-card">
      <span class="tool-use">${escapeHtml(tool.use)}</span>
      ${renderTechLogos(tool.logos)}
      <span class="tool-name">${escapeHtml(tool.name)}</span>
    </article>`).join('');
}
function safeProjectUrl(value, kind) {
    if (!value)
        return '';
    try {
        const url = new URL(value);
        if (url.protocol !== 'https:' || url.username || url.password)
            return '';
        if (kind === 'github' && (url.hostname !== 'github.com' || !url.pathname.startsWith('/vedantshuklablr-ai/')))
            return '';
        if (kind === 'demo' && (url.hostname !== 'vedantshuklablr-ai.github.io' || url.pathname !== '/SKYGUARD/'))
            return '';
        return url.href;
    }
    catch {
        return '';
    }
}
function renderProjects() {
    const el = getElement('projList');
    el.innerHTML = PROJECTS.map((project, index) => {
        const repoUrl = safeProjectUrl(project.link, 'github');
        const demoUrl = safeProjectUrl(project.demo, 'demo');
        return `
      <article class="proj-card tilt-card">
        <div class="proj-body">
          <span class="proj-num">${escapeHtml(project.num)}</span>
          <span class="proj-tag">${escapeHtml(project.tag)}</span>
          <h3 class="proj-title">${escapeHtml(project.title)}</h3>
          <p class="proj-desc">${escapeHtml(project.desc)}</p>
          <div class="proj-actions">
            <button class="proj-link" type="button" data-project="${index}">View project details</button>
            ${repoUrl ? `<a class="proj-link" href="${escapeHtml(repoUrl)}" target="_blank" rel="noopener noreferrer">GitHub repository ↗</a>` : ''}
            ${demoUrl ? `<a class="proj-link" href="${escapeHtml(demoUrl)}" target="_blank" rel="noopener noreferrer">Live demo ↗</a>` : ''}
          </div>
        </div>
      </article>`;
    }).join('');
}
function renderEntries(targetId, entries) {
    const el = getElement(targetId);
    el.innerHTML = entries.map(entry => `
    <div class="track-item">
      <div class="track-top">
        <div class="track-identity">
          ${entry.logo && entry.link ? `<a class="track-logo-link${entry.logoLayout === 'wide' ? ' track-logo-wide' : ''}" href="${escapeHtml(entry.link)}" target="_blank" rel="noopener noreferrer" aria-label="${escapeHtml(`Visit ${entry.org}`)}"><img class="track-logo" src="${escapeHtml(entry.logo)}" alt="${escapeHtml(entry.logoAlt ?? '')}" loading="lazy" decoding="async"></a>` : ''}
          <div class="track-heading">
          <div class="track-role">${escapeHtml(entry.role)}</div>
          <div class="track-org">${entry.link ? `<a class="track-org-link" href="${escapeHtml(entry.link)}" target="_blank" rel="noopener noreferrer">${escapeHtml(entry.org)}</a>` : escapeHtml(entry.org)}</div>
          </div>
        </div>
        <div class="track-dates">
          <div class="track-date">${escapeHtml(entry.date)}</div>
          ${entry.duration ? `<div class="track-duration">${escapeHtml(entry.duration)}</div>` : ''}
        </div>
      </div>
      ${entry.location || entry.workArrangement ? `<p class="track-location">${[entry.location, entry.workArrangement].filter((value) => value !== undefined).map(escapeHtml).join(' · ')}</p>` : ''}
      <p class="track-desc">${escapeHtml(entry.desc)}</p>
      ${entry.link && entry.linkLabel ? `<a class="track-visit-link" href="${escapeHtml(entry.link)}" target="_blank" rel="noopener noreferrer">${escapeHtml(entry.linkLabel)} ↗</a>` : ''}
    </div>`).join('');
}
function renderVentures() {
    const el = getElement('ventureList');
    el.innerHTML = VENTURES.map(venture => `
    <article class="venture-card">
      <div class="venture-card-top">
        <span class="venture-icon venture-icon-${venture.icon}" aria-hidden="true">
          <svg viewBox="0 0 24 24" focusable="false">${VENTURE_ICON_PATHS[venture.icon].map(path => `<path d="${path}"></path>`).join('')}</svg>
        </span>
        <span class="venture-status-badge">UNDER CONSTRUCTION</span>
      </div>
      <h4 class="venture-name">${escapeHtml(venture.name)}</h4>
      <p class="venture-desc">${escapeHtml(venture.description)}</p>
      ${venture.businessModel ? `<p class="venture-model"><strong>Business model:</strong> ${escapeHtml(venture.businessModel)}</p>` : ''}
      <p class="venture-status">${escapeHtml(venture.status)}</p>
      <ul class="venture-focus" aria-label="${escapeHtml(`${venture.name} focus areas`)}">
        ${venture.focusAreas.map(area => `<li>${escapeHtml(area)}</li>`).join('')}
      </ul>
    </article>`).join('');
}
function renderCards(targetId, entries) {
    const el = getElement(targetId);
    el.innerHTML = entries.map(entry => `
    <article class="credential-card">
      <h3>${escapeHtml(entry.name)}</h3>
      <p>${escapeHtml(entry.detail)}</p>
    </article>`).join('');
}
renderSkills();
renderSocialLinks();
renderTools();
renderProjects();
renderEntries('trackList', TRACK);
renderVentures();
renderEntries('educationList', EDUCATION);
renderCards('hackathonList', HACKATHONS);
renderCards('certificationList', CERTIFICATIONS);
function initTiltCards() {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches)
        return;
    document.querySelectorAll('.tilt-card').forEach(card => {
        const glare = document.createElement('span');
        glare.className = 'card-glare';
        card.appendChild(glare);
        const reset = () => {
            card.style.transform = '';
            glare.style.opacity = '0';
        };
        card.addEventListener('pointermove', event => {
            if (event.pointerType !== 'mouse')
                return;
            const rect = card.getBoundingClientRect();
            const x = (event.clientX - rect.left) / rect.width;
            const y = (event.clientY - rect.top) / rect.height;
            card.style.transform = `perspective(1000px) rotateX(${(0.5 - y) * 5}deg) rotateY(${(x - 0.5) * 5}deg)`;
            glare.style.opacity = '1';
            glare.style.background = `radial-gradient(circle at ${x * 100}% ${y * 100}%, rgba(255,255,255,.2), transparent 58%)`;
        });
        card.addEventListener('pointerleave', reset);
        card.addEventListener('pointercancel', reset);
    });
}
function initParallax() {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches)
        return;
    const items = document.querySelectorAll('[data-depth]');
    let queued = false;
    const update = () => {
        queued = false;
        items.forEach(item => {
            const depth = Number(item.dataset.depth) || 0.1;
            const offset = ((window.innerHeight - item.getBoundingClientRect().top) * depth) - (window.innerHeight * depth * 0.5);
            item.style.transform = `translate3d(0, ${offset * 0.18}px, 0)`;
        });
    };
    const queueUpdate = () => {
        if (!queued) {
            queued = true;
            requestAnimationFrame(update);
        }
    };
    update();
    window.addEventListener('scroll', queueUpdate, { passive: true });
    window.addEventListener('resize', queueUpdate);
}
initTiltCards();
initParallax();
getElement('year').textContent = new Date().getFullYear().toString();
const progress = getElement('progress');
window.addEventListener('scroll', () => {
    const max = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    progress.style.width = `${max > 0 ? (document.documentElement.scrollTop / max) * 100 : 0}%`;
}, { passive: true });
const menuBtn = getElement('menuBtn');
const navLinks = getElement('navLinks');
function setMenuOpen(open) {
    navLinks.classList.toggle('open', open);
    menuBtn.setAttribute('aria-expanded', String(open));
    menuBtn.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
}
menuBtn.addEventListener('click', () => setMenuOpen(!navLinks.classList.contains('open')));
navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    setMenuOpen(false);
    const target = document.querySelector(link.hash);
    if (target) {
        target.tabIndex = -1;
        target.focus({ preventScroll: true });
    }
}));
document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && navLinks.classList.contains('open')) {
        setMenuOpen(false);
        menuBtn.focus();
        return;
    }
    if (event.key === 'Tab' && navLinks.classList.contains('open') && matchMedia('(max-width: 1120px)').matches) {
        const links = [...navLinks.querySelectorAll('a[href]')];
        const first = links[0];
        const last = links[links.length - 1];
        if (document.activeElement === menuBtn) {
            event.preventDefault();
            (event.shiftKey ? last : first).focus();
        }
        else if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            menuBtn.focus();
        }
        else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            menuBtn.focus();
        }
    }
});
const navAnchors = [...navLinks.querySelectorAll('a[href^="#"]')];
const navSections = navAnchors
    .map(link => document.getElementById(link.hash.slice(1)))
    .filter((section) => section instanceof HTMLElement);
if ('IntersectionObserver' in window && navSections.length) {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting)
                return;
            navAnchors.forEach(link => link.classList.toggle('active', link.hash === `#${entry.target.id}`));
        });
    }, { rootMargin: '-45% 0px -50% 0px' });
    navSections.forEach(section => observer.observe(section));
}
const backTop = getElement('backTop');
backTop.hidden = true;
window.addEventListener('scroll', () => {
    backTop.hidden = window.scrollY < 700;
}, { passive: true });
backTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
});
const toast = getElement('toast');
let toastTimeout;
function showToast(message) {
    toast.textContent = message;
    toast.classList.add('show');
    if (toastTimeout !== undefined)
        clearTimeout(toastTimeout);
    toastTimeout = window.setTimeout(() => toast.classList.remove('show'), 2600);
}
const caseBackdrop = getElement('caseBackdrop');
const caseDialog = getElement('caseDialog');
const caseClose = getElement('caseClose');
let lastFocus = null;
function openCase(index) {
    const project = PROJECTS[index];
    if (!project)
        return;
    lastFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    getElement('caseMeta').textContent = `${project.num} · ${project.tag} · ${project.tools}`;
    getElement('caseTitle').textContent = project.title;
    getElement('caseDesc').textContent = project.desc;
    getElement('caseNotes').textContent = project.notes;
    caseBackdrop.hidden = false;
    caseClose.focus();
}
function closeCase() {
    if (caseBackdrop.hidden)
        return;
    caseBackdrop.hidden = true;
    if (lastFocus && typeof lastFocus.focus === 'function')
        lastFocus.focus();
}
getElement('projList').addEventListener('click', event => {
    if (!(event.target instanceof Element))
        return;
    const button = event.target.closest('[data-project]');
    if (button)
        openCase(Number(button.dataset.project));
});
caseClose.addEventListener('click', closeCase);
caseDialog.addEventListener('keydown', event => {
    if (event.key === 'Tab') {
        const focusable = [...caseDialog.querySelectorAll('a[href], button:not(:disabled), [tabindex]:not([tabindex="-1"])')];
        if (focusable.length === 0)
            return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last.focus();
        }
        else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first.focus();
        }
    }
});
caseBackdrop.addEventListener('click', event => {
    if (event.target === caseBackdrop)
        closeCase();
});
document.addEventListener('keydown', event => {
    if (event.key === 'Escape')
        closeCase();
});
const contactForm = getElement('contactForm');
contactForm.addEventListener('submit', event => {
    event.preventDefault();
    if (!contactForm.reportValidity())
        return;
    const formData = new FormData(contactForm);
    const name = String(formData.get('name') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const message = String(formData.get('message') || '').trim();
    if (!name || !email || !message) {
        showToast('Please complete each field before preparing your email.');
        return;
    }
    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    showToast('Opening your email app with a prepared draft. It has not been sent.');
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
});
async function initResumeCard() {
    const qrContainer = getElement('resumeQr');
    const placeholder = getElement('resumeQrPlaceholder');
    const status = getElement('resumeStatus');
    const destination = getElement('resumeDestination');
    const download = getElement('downloadResume');
    const open = getElement('openResume');
    const copy = getElement('copyResumeLink');
    const downloadQr = getElement('downloadResumeQr');
    const fallbackInput = getElement('resumeLinkFallback');
    const heroDownload = getElement('heroResumeDownload');
    let verifiedResumeUrl = '';
    let qrSvg = '';
    const setStatus = (message, state = 'error') => {
        status.textContent = message;
        status.dataset.state = state;
    };
    const enableResumeLinks = (url) => {
        [download, open, heroDownload].forEach(link => {
            link.href = url.href;
            link.removeAttribute('aria-disabled');
            link.removeAttribute('tabindex');
        });
        download.download = 'Vedant-Shukla-Resume.pdf';
        destination.href = url.href;
        destination.textContent = url.href;
        destination.hidden = false;
        fallbackInput.value = url.href;
        copy.disabled = false;
        verifiedResumeUrl = url.href;
    };
    if (window.location.protocol === 'file:') {
        setStatus('Open the deployed HTTPS website to create a résumé QR code that another device can reach.');
        placeholder.textContent = 'A live, deployed website URL is needed to create a shareable QR code.';
        return;
    }
    if (!['http:', 'https:'].includes(window.location.protocol)) {
        setStatus('A public HTTPS website is required for a shareable résumé QR code.');
        placeholder.textContent = 'Deploy the website over HTTPS to create a shareable QR code.';
        return;
    }
    const resumeUrl = new URL(RESUME_PATH, window.location.href);
    try {
        const response = await fetch(resumeUrl.href, { method: 'HEAD', cache: 'no-store' });
        const contentType = response.headers.get('content-type') || '';
        const contentLength = response.headers.get('content-length');
        if (!response.ok || !contentType.toLowerCase().includes('application/pdf') || contentLength === '0') {
            setStatus('Résumé PDF not found. Add assets/resume/Vedant-Shukla-Resume.pdf to enable the download and QR code.');
            placeholder.textContent = 'Add the résumé PDF at the documented path to generate its QR code.';
            return;
        }
    }
    catch {
        setStatus('Could not verify the résumé PDF. Check that the PDF is deployed at the documented path.');
        placeholder.textContent = 'The résumé file must be reachable on the deployed website before a QR code can be generated.';
        return;
    }
    enableResumeLinks(resumeUrl);
    try {
        if (typeof window.qrcode !== 'function')
            throw new Error('The local QR generator did not load.');
        const code = window.qrcode(0, 'M');
        code.addData(resumeUrl.href);
        code.make();
        qrSvg = code.createSvgTag(8, 4, 'QR code linking to Vedant Shukla’s résumé PDF');
        const image = new Image();
        image.alt = 'QR code linking to Vedant Shukla’s résumé PDF';
        image.className = 'resume-qr-image';
        image.onload = () => {
            if (!image.naturalWidth || !image.naturalHeight) {
                setStatus('QR code could not be rendered. Use the résumé links below.', 'error');
                return;
            }
            placeholder.hidden = true;
            downloadQr.disabled = false;
            setStatus('Ready', 'ready');
        };
        image.onerror = () => {
            setStatus('QR code could not be rendered. Use the résumé links below.', 'error');
            placeholder.textContent = 'QR generation failed. The verified PDF links are still available below.';
            placeholder.hidden = false;
        };
        image.src = code.createDataURL(8, 4);
        qrContainer.appendChild(image);
        fallbackInput.value = resumeUrl.href;
        setStatus('Rendering QR code…', 'pending');
    }
    catch {
        setStatus('QR generation failed. The verified PDF links are still available below.', 'error');
        placeholder.textContent = 'QR generation failed. The verified PDF links are still available below.';
    }
    copy.addEventListener('click', async () => {
        if (!verifiedResumeUrl)
            return;
        try {
            await navigator.clipboard.writeText(verifiedResumeUrl);
            showToast('Résumé link copied.');
        }
        catch {
            fallbackInput.hidden = false;
            fallbackInput.focus();
            fallbackInput.select();
            showToast('Clipboard unavailable. The résumé link is selected for you to copy.');
        }
    });
    downloadQr.addEventListener('click', () => {
        if (!qrSvg)
            return;
        const imageUrl = URL.createObjectURL(new Blob([qrSvg], { type: 'image/svg+xml;charset=utf-8' }));
        const link = document.createElement('a');
        link.href = imageUrl;
        link.download = 'Vedant-Shukla-Resume-QR.svg';
        link.click();
        window.setTimeout(() => URL.revokeObjectURL(imageUrl), 1000);
    });
}
function initHeroIntroVideo() {
    const hero = getElement('hero');
    const video = getElement('heroIntroVideo');
    const poster = getElement('heroIntroPoster');
    const playButton = getElement('heroIntroPlay');
    const playLabel = getElement('heroIntroPlayLabel');
    const card = video.closest('.hero-video-card');
    if (!card)
        throw new Error('The hero introduction video card is missing.');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let heroIsVisible = false;
    let videoSourceLoaded = false;
    let userInitiated = false;
    const shouldUsePoster = () => {
        const connection = navigator.connection;
        return window.matchMedia('(max-width: 860px)').matches
            || connection?.saveData === true
            || connection?.effectiveType === 'slow-2g'
            || connection?.effectiveType === '2g'
            || connection?.effectiveType === '3g';
    };
    const setPlayButton = (visible, label = 'Play intro video') => {
        playButton.hidden = !visible;
        playButton.disabled = false;
        playLabel.textContent = label;
        playButton.setAttribute('aria-label', label);
    };
    const startVideo = (fromUser = false) => {
        if (!heroIsVisible || reducedMotion.matches || (!fromUser && shouldUsePoster()))
            return;
        if (fromUser) {
            userInitiated = true;
            video.controls = true;
            video.classList.add('is-user-playing');
            playButton.disabled = true;
            playLabel.textContent = 'Loading intro video…';
            playButton.setAttribute('aria-label', 'Loading intro video');
        }
        if (!videoSourceLoaded || (fromUser && video.error)) {
            const source = video.dataset.src;
            if (!source)
                throw new Error('The hero introduction video source is missing.');
            video.src = source;
            video.load();
            videoSourceLoaded = true;
        }
        void video.play().catch(() => {
            if (reducedMotion.matches)
                return;
            setPlayButton(true, 'Video did not start. Try again.');
        });
    };
    const updatePlaybackPreference = () => {
        if (reducedMotion.matches) {
            video.pause();
            video.classList.remove('is-user-playing');
            card.classList.remove('is-playing');
            poster.hidden = false;
            setPlayButton(false);
            return;
        }
        if (shouldUsePoster() && !userInitiated) {
            video.pause();
            card.classList.remove('is-playing');
            poster.hidden = false;
            setPlayButton(true);
            return;
        }
        setPlayButton(!videoSourceLoaded || video.paused);
        startVideo();
    };
    video.addEventListener('playing', () => {
        poster.hidden = true;
        card.classList.add('is-playing');
        setPlayButton(false);
    });
    video.addEventListener('error', () => {
        setPlayButton(true, 'Video could not load. Try again.');
    });
    playButton.addEventListener('click', () => {
        if (reducedMotion.matches)
            return;
        heroIsVisible = true;
        startVideo(true);
    });
    reducedMotion.addEventListener('change', updatePlaybackPreference);
    window.addEventListener('resize', updatePlaybackPreference, { passive: true });
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver(entries => {
            if (!entries.some(entry => entry.isIntersecting))
                return;
            heroIsVisible = true;
            observer.disconnect();
            startVideo();
        });
        observer.observe(hero);
    }
    else {
        heroIsVisible = true;
    }
    updatePlaybackPreference();
}
initHeroIntroVideo();
initResumeCard();
if ('serviceWorker' in navigator && window.location.protocol !== 'file:') {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./service-worker.js').catch(error => {
            console.warn('Offline support could not be enabled; the portfolio remains available online.', error);
        });
    });
}
export {};

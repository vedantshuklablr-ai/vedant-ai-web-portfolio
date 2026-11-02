const CONTACT_EMAIL = "vedantshuklablr@gmail.com";
const RESUME_PATH = "assets/resume/Vedant-Shukla-Resume.pdf";
const SKILLS = [
    { cat: "Languages", items: "C, C++, Java, Python, JavaScript, TypeScript" },
    { cat: "Web", items: "HTML5, CSS3, JavaScript, Node.js, Express" },
    { cat: "Databases", items: "SQL" },
    { cat: "3D / Visualization", items: "Blender, 3D modelling, 3D visualization, aerospace concept modelling" },
    { cat: "AI / Automation", items: "AI Automation & Voice Systems, Artificial Intelligence, Machine Learning, AI-assisted development" },
    { cat: "Cybersecurity / Analytics", items: "Cybersecurity, CTFs, Data Analytics, Data Science" }
];
const TOOLS = [
    { name: "VS Code · GitHub", use: "Developer tools" },
    { name: "AutoCAD", use: "Design tool" },
    { name: "Excel · PowerPoint · Word", use: "Productivity tools" },
    { name: "LeetCode · HackerRank", use: "Learning platforms" },
    { name: "Microsoft Learn · Kaggle", use: "Learning platforms" },
    { name: "Devfolio · Unstop", use: "Hackathon platforms" }
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
        desc: "Produced and published eSports and gaming content, including Free Fire and BGMI.",
        link: "https://youtube.com/@vedant_shukla007?si=Y3tyqGtemUBXXCxx"
    },
    {
        role: "Founder & In-Game Leader (IGL)",
        org: "GOAT Esports Organisation",
        date: "Apr 2019 – Dec 2025",
        desc: "Bengaluru, India · Hybrid. Founded and led a competitive Indian eSports organisation managing five active rosters; owned team strategy, player roles, communication, roster planning, and decision-making under pressure."
    }
];
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
      <div class="items">${escapeHtml(skill.items)}</div>
    </div>`).join('');
}
function renderTools() {
    const el = getElement('toolGrid');
    el.innerHTML = TOOLS.map(tool => `
    <article class="tool-card tilt-card">
      <span class="tool-use">${escapeHtml(tool.use)}</span>
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
        <div>
          <div class="track-role">${escapeHtml(entry.role)}</div>
          <div class="track-org">${escapeHtml(entry.org)}${entry.link ? ` · <a href="${escapeHtml(entry.link)}" target="_blank" rel="noopener noreferrer">YouTube channel ↗</a>` : ''}</div>
        </div>
        <div class="track-date">${escapeHtml(entry.date)}</div>
      </div>
      <p class="track-desc">${escapeHtml(entry.desc)}</p>
    </div>`).join('');
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
renderTools();
renderProjects();
renderEntries('trackList', TRACK);
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
    const card = video.closest('.hero-video-card');
    if (!card)
        throw new Error('The hero introduction video card is missing.');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let heroIsVisible = false;
    let videoSourceLoaded = false;
    const shouldUsePoster = () => {
        const connection = navigator.connection;
        return reducedMotion.matches
            || window.matchMedia('(max-width: 860px)').matches
            || connection?.saveData === true
            || connection?.effectiveType === 'slow-2g'
            || connection?.effectiveType === '2g'
            || connection?.effectiveType === '3g';
    };
    const startVideo = () => {
        if (!heroIsVisible || shouldUsePoster())
            return;
        if (!videoSourceLoaded) {
            const source = video.dataset.src;
            if (!source)
                throw new Error('The hero introduction video source is missing.');
            video.src = source;
            video.load();
            videoSourceLoaded = true;
        }
        void video.play().catch(() => {
            // Keep the poster visible if the browser blocks autoplay.
        });
    };
    const updatePlaybackPreference = () => {
        if (shouldUsePoster()) {
            video.pause();
            card.classList.remove('is-playing');
            poster.hidden = false;
            return;
        }
        startVideo();
    };
    video.addEventListener('playing', () => {
        poster.hidden = true;
        card.classList.add('is-playing');
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

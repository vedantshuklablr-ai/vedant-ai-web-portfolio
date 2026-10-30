const CONTACT_EMAIL = "vedantshuklablr@gmail.com";
const RESUME_PATH = "assets/resume/Vedant-Shukla-Resume.pdf";
const PROJECT_THUMB = "assets/images/project-thumb-placeholder.jpg";

const SKILLS = [
  { cat: "Languages & Frameworks", items: "HTML5, CSS3, JavaScript, TypeScript, Node.js, Express, Python, C, C++" },
  { cat: "Tools & Platforms", items: "GitHub, VS Code, AutoCAD, Microsoft Excel, Microsoft PowerPoint, Microsoft Word" },
  { cat: "Core Specializations", items: "AI Automation & Voice Systems, Software Development, Cybersecurity & CTFs, Data Analytics, Data Science, Machine Learning, Artificial Intelligence" },
  { cat: "Learning Platforms", items: "LeetCode, HackerRank, Microsoft Learn, Kaggle, Devfolio, Unstop" }
];

const TOOLS = [
  { name: "HTML5 · CSS3", use: "Interface design" },
  { name: "JavaScript · TypeScript", use: "Frontend + logic" },
  { name: "Node.js · Express", use: "Backend systems" },
  { name: "Python · C · C++", use: "Problem solving" },
  { name: "GitHub · VS Code", use: "Build workflow" },
  { name: "Excel · PowerPoint · Word", use: "Analysis + communication" }
];

const PROJECTS = [
  {
    num: "001",
    title: "STARK-PROJECT",
    tag: "AI Automation / Voice",
    desc: "High-performance Node.js-based AI automation framework with a futuristic HUD interface; integrates voice commands with local system control for native app execution, real-time telemetry, and automation.",
    notes: "This project combines voice-driven control with practical automation and a strong interface layer, making the experience feel both functional and exploratory.",
    tools: "Node.js, AI automation, voice interfaces",
    link: "https://github.com/vedantshuklablr-ai/STARK-PROJECT",
    thumb: PROJECT_THUMB
  },
  {
    num: "002",
    title: "SKYGUARD AI",
    tag: "AI / Monitoring",
    desc: "Next-gen AI-driven air defense system integrating real-time data processing, predictive analytics, and intelligent surveillance for aerial threat detection.",
    notes: "A concept-focused project that applies predictive thinking to monitoring workflows, with a strong emphasis on data interpretation and operational awareness.",
    tools: "AI, real-time data, predictive analytics",
    link: "https://github.com/vedantshuklablr-ai/SKYGUARD",
    demo: "https://vedantshuklablr-ai.github.io/SKYGUARD/",
    thumb: PROJECT_THUMB
  },
  {
    num: "003",
    title: "AI-VOICE-PORTFOLIO",
    tag: "Web / Voice UX",
    desc: "Personal portfolio with an AI-powered voice chatbot. HTML, CSS, JavaScript.",
    notes: "Designed to feel interactive and memorable while keeping the technical implementation lightweight and accessible.",
    tools: "HTML, CSS, JavaScript",
    link: "https://github.com/vedantshuklablr-ai/AI-VOICE-PORTFOLIO",
    thumb: PROJECT_THUMB
  },
  {
    num: "004",
    title: "PERSONAL-PORTFOLIO-WEBSITE",
    tag: "Web / Portfolio",
    desc: "Performance-optimized personal portfolio.",
    notes: "Built to communicate capability clearly: projects first, skills second, and personal brand without unnecessary clutter.",
    tools: "Web development",
    link: "https://github.com/vedantshuklablr-ai/PERSONAL-PORTFOLIO-WEBSITE",
    thumb: PROJECT_THUMB
  },
  {
    num: "005",
    title: "MARVEL-STUDIOS-UI",
    tag: "Web / Responsive UI",
    desc: "Marvel movie pages in chronological order, upcoming releases, modern UI. HTML, CSS, JavaScript.",
    notes: "A design-and-structure exercise that focuses on clean layouts, flow, and user-friendly content presentation.",
    tools: "HTML, CSS, JavaScript",
    link: "https://github.com/vedantshuklablr-ai/MARVEL-STUDIOS-UI",
    thumb: PROJECT_THUMB
  },
  {
    num: "006",
    title: "RoadRakshak",
    tag: "AI / Mapping / Full-stack",
    desc: "AI-powered road issue reporting platform: Gemini AI, JWT, Cloudinary, MongoDB Atlas, interactive maps.",
    notes: "This concept emphasizes practical civic utility through AI-assisted reporting and modern full-stack architecture.",
    tools: "Gemini AI, JWT, Cloudinary, MongoDB Atlas",
    link: "",
    thumb: PROJECT_THUMB
  }
];

const TRACK = [
  {
    role: "Founder & In-Game Leader (IGL)",
    org: "GOAT Esports Organisation",
    date: "Apr 2019 – Dec 2025",
    desc: "Founded and led a competitive Indian eSports organisation managing five active rosters; owned team strategy, roles, communication, roster planning, decision-making under pressure."
  },
  {
    role: "Founder & Content Creator",
    org: "Java 007 YouTube Channel",
    date: "Apr 2024 – Jan 2026",
    desc: "eSports/gaming content (Free Fire, BGMI, others). No invented stats."
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
  { name: "Introduction to Cybersecurity", issuer: "Cisco" },
  { name: "Machine Learning for Beginners", issuer: "SimpliLearn" },
  { name: "Python 101 for Data Science", issuer: "IBM" },
  { name: "Digital Skills: Artificial Intelligence", issuer: "Accenture" },
  { name: "Deloitte Australia – Data Analytics Job Simulation", issuer: "Forage" },
  { name: "Fundamentals of Digital Marketing", issuer: "Google" }
];

const escapeHtml = value => String(value).replace(/[&<>"']/g, character => ({
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;'
})[character]);

function renderSkills() {
  const el = document.getElementById('skillRows');
  if (!el) return;
  el.innerHTML = SKILLS.map(skill => `
    <div class="skill-row tilt-card">
      <div class="cat">${escapeHtml(skill.cat)}</div>
      <div class="items">${escapeHtml(skill.items)}</div>
    </div>`).join('');
}

function renderTools() {
  const el = document.getElementById('toolGrid');
  if (!el) return;
  el.innerHTML = TOOLS.map(tool => `
    <article class="tool-card tilt-card">
      <span class="tool-use">${escapeHtml(tool.use)}</span>
      <span class="tool-name">${escapeHtml(tool.name)}</span>
    </article>`).join('');
}

function safeProjectUrl(value, kind) {
  if (!value) return '';
  try {
    const url = new URL(value);
    if (url.protocol !== 'https:' || url.username || url.password) return '';
    if (kind === 'github' && (url.hostname !== 'github.com' || !url.pathname.startsWith('/vedantshuklablr-ai/'))) return '';
    if (kind === 'demo' && (url.hostname !== 'vedantshuklablr-ai.github.io' || url.pathname !== '/SKYGUARD/')) return '';
    return url.href;
  } catch {
    return '';
  }
}

function renderProjects() {
  const el = document.getElementById('projList');
  if (!el) return;
  el.innerHTML = PROJECTS.map((project, index) => {
    const repoUrl = safeProjectUrl(project.link, 'github');
    const demoUrl = safeProjectUrl(project.demo, 'demo');
    return `
      <article class="proj-card tilt-card">
        <div class="proj-thumb">
          <span class="proj-num">${escapeHtml(project.num)}</span>
          <img src="${escapeHtml(project.thumb)}" alt="${escapeHtml(project.title)} project thumbnail" loading="lazy" width="1280" height="720">
        </div>
        <div class="proj-body">
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
  const el = document.getElementById(targetId);
  if (!el) return;
  el.innerHTML = entries.map(entry => `
    <div class="track-item">
      <div class="track-top">
        <div>
          <div class="track-role">${escapeHtml(entry.role)}</div>
          <div class="track-org">${escapeHtml(entry.org)}</div>
        </div>
        <div class="track-date">${escapeHtml(entry.date)}</div>
      </div>
      <p class="track-desc">${escapeHtml(entry.desc)}</p>
    </div>`).join('');
}

function renderCards(targetId, entries, titleKey, subtitleKey) {
  const el = document.getElementById(targetId);
  if (!el) return;
  el.innerHTML = entries.map(entry => `
    <article class="credential-card">
      <h3>${escapeHtml(entry[titleKey])}</h3>
      <p>${escapeHtml(entry[subtitleKey])}</p>
    </article>`).join('');
}

renderSkills();
renderTools();
renderProjects();
renderEntries('trackList', TRACK);
renderEntries('educationList', EDUCATION);
renderCards('hackathonList', HACKATHONS, 'name', 'detail');
renderCards('certificationList', CERTIFICATIONS, 'name', 'issuer');

function initTiltCards() {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  document.querySelectorAll('.tilt-card').forEach(card => {
    const glare = document.createElement('span');
    glare.className = 'card-glare';
    card.appendChild(glare);
    const reset = () => {
      card.style.transform = '';
      glare.style.opacity = '0';
    };

    card.addEventListener('pointermove', event => {
      if (event.pointerType !== 'mouse') return;
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
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
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

document.getElementById('year').textContent = new Date().getFullYear();

const progress = document.getElementById('progress');
window.addEventListener('scroll', () => {
  const max = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  progress.style.width = `${max > 0 ? (document.documentElement.scrollTop / max) * 100 : 0}%`;
}, { passive: true });

const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

function setMenuOpen(open) {
  navLinks.classList.toggle('open', open);
  menuBtn.setAttribute('aria-expanded', String(open));
  menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
}

menuBtn.addEventListener('click', () => setMenuOpen(!navLinks.classList.contains('open')));
navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenuOpen(false)));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && navLinks.classList.contains('open')) {
    setMenuOpen(false);
    menuBtn.focus();
  }
});

const navAnchors = [...navLinks.querySelectorAll('a[href^="#"]')];
const navSections = navAnchors.map(link => document.querySelector(link.getAttribute('href'))).filter(Boolean);
if ('IntersectionObserver' in window && navSections.length) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navAnchors.forEach(link => link.classList.toggle('active', link.hash === `#${entry.target.id}`));
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  navSections.forEach(section => observer.observe(section));
}

const backTop = document.getElementById('backTop');
backTop.hidden = true;
window.addEventListener('scroll', () => {
  backTop.hidden = window.scrollY < 700;
}, { passive: true });
backTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
});

const toast = document.getElementById('toast');
function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(showToast.timeout);
  showToast.timeout = setTimeout(() => toast.classList.remove('show'), 2600);
}

const caseBackdrop = document.getElementById('caseBackdrop');
const caseDialog = document.getElementById('caseDialog');
const caseClose = document.getElementById('caseClose');
let lastFocus = null;

function openCase(index) {
  const project = PROJECTS[index];
  if (!project) return;
  lastFocus = document.activeElement;
  document.getElementById('caseMeta').textContent = `${project.num} · ${project.tag} · ${project.tools}`;
  document.getElementById('caseTitle').textContent = project.title;
  document.getElementById('caseDesc').textContent = project.desc;
  document.getElementById('caseNotes').textContent = project.notes;
  caseBackdrop.hidden = false;
  caseDialog.focus();
}

function closeCase() {
  if (caseBackdrop.hidden) return;
  caseBackdrop.hidden = true;
  if (lastFocus && typeof lastFocus.focus === 'function') lastFocus.focus();
}

document.getElementById('projList').addEventListener('click', event => {
  const button = event.target.closest('[data-project]');
  if (button) openCase(Number(button.dataset.project));
});
caseClose.addEventListener('click', closeCase);
caseDialog.addEventListener('keydown', event => {
  if (event.key === 'Tab') {
    event.preventDefault();
    caseClose.focus();
  }
});
caseBackdrop.addEventListener('click', event => {
  if (event.target === caseBackdrop) closeCase();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') closeCase();
});

const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', event => {
  event.preventDefault();
  if (!contactForm.reportValidity()) return;

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
  const qrContainer = document.getElementById('resumeQr');
  const placeholder = document.getElementById('resumeQrPlaceholder');
  const status = document.getElementById('resumeStatus');
  const destination = document.getElementById('resumeDestination');
  const download = document.getElementById('downloadResume');
  const open = document.getElementById('openResume');
  const copy = document.getElementById('copyResumeLink');
  const fallbackInput = document.getElementById('resumeLinkFallback');
  const heroDownload = document.getElementById('heroResumeDownload');
  let verifiedResumeUrl = '';

  const setStatus = (message, state = 'error') => {
    status.textContent = message;
    status.dataset.state = state;
  };

  const enableResumeLinks = url => {
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
  } catch {
    setStatus('Could not verify the résumé PDF. Check that the PDF is deployed at the documented path.');
    placeholder.textContent = 'The résumé file must be reachable on the deployed website before a QR code can be generated.';
    return;
  }

  enableResumeLinks(resumeUrl);
  try {
    if (typeof window.qrcode !== 'function') throw new Error('The local QR generator did not load.');
    const code = window.qrcode(0, 'M');
    code.addData(resumeUrl.href);
    code.make();

    const image = new Image();
    image.alt = 'QR code linking to Vedant Shukla’s résumé PDF';
    image.className = 'resume-qr-image';
    image.onload = () => {
      if (!image.naturalWidth || !image.naturalHeight) {
        setStatus('QR code could not be rendered. Use the résumé links below.', 'error');
        return;
      }
      placeholder.hidden = true;
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
  } catch {
    setStatus('QR generation failed. The verified PDF links are still available below.', 'error');
    placeholder.textContent = 'QR generation failed. The verified PDF links are still available below.';
  }

  copy.addEventListener('click', async () => {
    if (!verifiedResumeUrl) return;
    try {
      await navigator.clipboard.writeText(verifiedResumeUrl);
      showToast('Résumé link copied.');
    } catch {
      fallbackInput.hidden = false;
      fallbackInput.focus();
      fallbackInput.select();
      showToast('Clipboard unavailable. The résumé link is selected for you to copy.');
    }
  });
}

initResumeCard();

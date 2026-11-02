# VEDANT SHUKLA — AEROSPACE, AI & TECHNOLOGY PORTFOLIO

A responsive static portfolio for Vedant Shukla, a B.Tech Computer Science Engineering student exploring AI, software engineering, automation, aerospace technology concepts, and 3D visualization. It includes project case studies, experience, education, events, certifications, a client-side résumé QR card, and an installable offline-capable experience.

## Technology

- Semantic HTML5 and responsive CSS
- TypeScript source compiled to browser-native JavaScript
- Self-hosted `qrcode-generator` at `assets/js/qrcode.js`; no QR API or résumé data leaves the site
- A versioned service worker caches the static site and résumé for repeat/offline access
- No React, runtime framework, backend, runtime build, or deploy-time build command
- Three.js is not loaded: no genuine `.glb`/`.gltf` model is present. AETHER-01 is shown as in development without fabricated imagery or specifications.

## Features

- Aerospace-blue design system, reduced-motion support, responsive mobile navigation, and keyboard focus states
- Projects and keyboard-accessible case-study dialog, with links shown only for checked repositories and the working SKYGUARD demo
- Aerospace Lab clearly labeled as personal, concept-stage work
- Experience, education, events, skills, tools, and six selected certifications
- Resume QR generated locally from the current site URL after the PDF is verified; Download, Open, Copy Link, and QR-as-SVG actions
- Contact form validates fields and opens a prepared `mailto:` draft; it does not send or store messages
- Person JSON-LD, Open Graph/Twitter metadata, and a web app manifest

## Project structure

```text
portfolio-site/
├── index.html
├── style.css
├── src/
│   └── script.ts
├── dist/
│   └── script.js          # Compiled output; committed and loaded by index.html
├── assets/
│   ├── icons/
│   ├── images/
│   ├── js/
│   │   └── qrcode.js
│   └── resume/
│       └── Vedant-Shukla-Resume.pdf
├── manifest.json
├── service-worker.js
├── package.json
├── package-lock.json
└── tsconfig.json
```

`assets/images/project-thumb-placeholder.jpg` is retained from the existing site but is not used as a project image.

## Local development

Install the TypeScript compiler and compile the source:

```powershell
npm install
npm run build
```

Serve the project root over HTTP (needed for the résumé check and service worker). For example, with `npx`:

```powershell
npx --yes serve . --listen 8000
```

Open `http://localhost:8000`. The browser loads the committed `dist/script.js`; it never loads TypeScript directly. Re-run `npm run build` after source changes and commit the updated `dist/script.js`. This is a local development step only—Vercel should serve the already-compiled static files with no build command.

## Résumé QR and offline behavior

Place the PDF at `assets/resume/Vedant-Shukla-Resume.pdf`. The page verifies that the same-origin PDF is reachable before enabling résumé actions, then generates a QR code locally from the URL derived at runtime from `window.location`. The QR can be downloaded as SVG. On `file://`, the shareable QR is withheld because a local file URL cannot be reached from another device.

The service worker precaches the HTML, CSS, compiled JavaScript, QR library, icons, manifest, cover image, and résumé PDF. The initial visit and cache installation need a network connection; later visits can use the cached content offline. Bump `CACHE_NAME` in `service-worker.js` when changing the precache set so old caches are replaced.

The résumé is a public static file in this repository. Only publish or deploy it if you are comfortable making it publicly downloadable.

## Verified project links and TODOs

- GitHub account: <https://github.com/vedantshuklablr-ai>
- Existing portfolio repository: <https://github.com/vedantshuklablr-ai/vedant-ai-web-portfolio>
- The SKYGUARD demo is <https://vedantshuklablr-ai.github.io/SKYGUARD/>. The hostname variant `vedantshuklablrai.github.io` does not resolve.
- RoadRakshak has no repository link until its exact public URL is confirmed.
- AETHER-01 has no model or preview asset in this repository. Add a real `.glb`/`.gltf` model or render before considering an interactive 3D preview.
- VASTAV AI, a distinct AI Voice Chatbot, and an esports website are not listed as featured projects because their implemented scope/assets could not be confirmed.

## Deployment

The site is static. Vercel serves the repository root directly; `vercel.json` skips deployment-time dependency installation and compilation because the committed `dist/script.js` is the production asset. Run `npm run build` locally after TypeScript changes and commit the updated output before deploying. Verify the homepage and `assets/resume/Vedant-Shukla-Resume.pdf` on the production URL before sharing the generated QR code.

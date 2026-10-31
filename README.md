# VEDANT SHUKLA — AI & WEB DEVELOPER PORTFOLIO

A responsive portfolio for Vedant Shukla featuring AI and web development projects, technical skills, leadership experience, education, hackathon participation, certifications, contact details, and a public résumé QR card. Built with static HTML, CSS, and vanilla JavaScript; there is no build step or backend.

## Tech stack

- HTML5, CSS3, and browser-native JavaScript
- `qrcode-generator` 2.0.4, bundled locally at `assets/js/qrcode.js` (MIT license notice is in the source header)
- No package installation is required to run the site

## Features

- Responsive cinematic-dark layout with mobile navigation and reduced-motion support
- Project details dialog with verified GitHub repository links and the verified SKYGUARD demo
- Education, leadership and experience, hackathons, and certifications
- Résumé QR card that only reports **Ready** after verifying the PDF response and rendering the QR image
- Download, open, and copy-link actions enabled only after the PDF is verified
- Contact form validates required fields and opens a prepared email draft; the website does not send or store submissions

## Project structure

```text
portfolio-site/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    ├── icons/
    │   ├── favicon.svg
    │   ├── favicon.png
    │   └── favicon-32.png
    ├── images/
    │   ├── og-image.png
    │   └── project-thumb-placeholder.jpg
    ├── js/
    │   └── qrcode.js
    └── resume/
        └── Vedant-Shukla-Resume.pdf
```

## Run locally

With Node.js installed, open PowerShell in this project folder and run:

```powershell
Set-Location "C:\path\to\portfolio-site"
npx --yes serve . --listen 8000
```

Then open `http://localhost:8000`. Stop the server with `Ctrl+C`. Alternatively, if Python is installed:

```powershell
Set-Location "C:\path\to\portfolio-site"
py -m http.server 8000
```

## Résumé PDF and QR code

The résumé PDF is included at:

```text
assets/resume/Vedant-Shukla-Resume.pdf
```

The PDF is publicly downloadable from the deployed site and public repository. Only publish a résumé you are comfortable making public.

The page checks the PDF at the expected relative path using a same-origin `HEAD` request. It enables the PDF links only when the file is reachable as a non-empty PDF. It then generates a QR code locally using the bundled `qrcode-generator` library; no résumé URL is sent to a QR service. The QR destination is based on the current page URL, so it follows the actual deployed host and project path. On `file://`, QR generation is withheld because another device cannot reach a local file URL. The QR card never requests camera access.

If the file is missing, unreachable, or QR rendering fails, the card displays a clear message instead of a false **Ready** state. Keep the résumé in the site root’s `assets/resume/` folder so static hosting serves it at the expected location.

## Project links

Public GitHub repositories are linked only when an exact matching repository was verified. The RoadRakshak repository link remains a TODO until its public URL is confirmed. The provided SKYGUARD demo URL had a hostname typo and returned 404; the corrected `https://vedantshuklablr-ai.github.io/SKYGUARD/` URL was verified.

GitHub account: <https://github.com/vedantshuklablr-ai>.
Portfolio repository: <https://github.com/vedantshuklablr-ai/vedant-ai-web-portfolio>.

## GitHub setup

The public repository is `vedantshuklablr-ai/vedant-ai-web-portfolio`. The site and résumé PDF are pushed to its `main` branch.

To push future changes, use PowerShell in the project folder:

```powershell
git add .
git commit -m "Build AI and web developer portfolio"
git push -u origin main
```

## Deploy

### GitHub Pages

To use GitHub Pages instead, open **Settings → Pages**, choose **Deploy from a branch**, select `main` and `/ (root)`, and save. Verify that both the site and `assets/resume/Vedant-Shukla-Resume.pdf` load before sharing the résumé QR.

### Vercel

The Vercel project is connected to the public GitHub repository and deploys this static site from the repository root. Production URL: <https://portfolio-site-fawn-sigma.vercel.app>.

The production homepage and résumé PDF URL have been verified. Git pushes to `main` are connected to Vercel for deployment. There is no deployment-specific routing requirement, so a `vercel.json` is not needed.

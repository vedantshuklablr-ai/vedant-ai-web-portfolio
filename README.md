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
        └── Vedant-Shukla-Resume.pdf (add this file)
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

The expected PDF is **not currently included**. Add the résumé you intend to publish at:

```text
assets/resume/Vedant-Shukla-Resume.pdf
```

The PDF will be publicly downloadable after deployment. Confirm that you want to publish it before adding it to a public repository or static host.

The page checks the PDF at the expected relative path using a same-origin `HEAD` request. It enables the PDF links only when the file is reachable as a non-empty PDF. It then generates a QR code locally using the bundled `qrcode-generator` library; no résumé URL is sent to a QR service. The QR destination is based on the current page URL, so it follows the actual deployed host and project path. On `file://`, QR generation is withheld because another device cannot reach a local file URL. The QR card never requests camera access.

If the file is missing, unreachable, or QR rendering fails, the card displays a clear message instead of a false **Ready** state. Keep the résumé in the site root’s `assets/resume/` folder so static hosting serves it at the expected location.

## Project links

Public GitHub repositories are linked only when an exact matching repository was verified. The RoadRakshak repository link remains a TODO until its public URL is confirmed. The provided SKYGUARD demo URL had a hostname typo and returned 404; the corrected `https://vedantshuklablr-ai.github.io/SKYGUARD/` URL was verified.

GitHub account: <https://github.com/vedantshuklablr-ai>. A repository for this portfolio has **not** been created yet.

## GitHub setup

GitHub CLI authentication and Git are not available in the current environment. To create the requested new public repository:

1. Install Git for Windows and sign in to GitHub.
2. Create a **public** repository named `personal-portfolio-website` under the `vedantshuklablr-ai` account. Do not initialize it with a README or other files.
3. Before adding the résumé PDF, decide whether you want that document to be publicly downloadable and committed to a public repository. The PDF is not currently in this project.
4. In PowerShell, from the project folder, run:

```powershell
git init
git add .
git commit -m "Build AI and web developer portfolio"
git branch -M main
git remote add origin https://github.com/vedantshuklablr-ai/personal-portfolio-website.git
git push -u origin main
```

The repository URL above is the requested destination; it has not been created or verified as an existing repository.

## Deploy

### GitHub Pages

After pushing the new repository, open **Settings → Pages**, choose **Deploy from a branch**, select `main` and `/ (root)`, and save. Wait for the Pages URL to become available. Verify that both the site and `assets/resume/Vedant-Shukla-Resume.pdf` load before sharing the résumé QR.

### Vercel

No Vercel project has been created; Vercel authentication is not configured in the current environment. After pushing to GitHub:

1. Sign in at Vercel and import `vedantshuklablr-ai/personal-portfolio-website`.
2. Choose the **Other** static preset, leave the build command empty, and use the repository root as the output directory.
3. Deploy, then verify the production site and résumé PDF URL return successfully.
4. Open the production `/` page and confirm the résumé card reports **Ready** only after the PDF and QR image have both loaded.

There is no deployment-specific routing requirement, so a `vercel.json` is not needed.

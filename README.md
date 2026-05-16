# BENVITA Portfolio

Premium cinematic portfolio website for **BENVITA**, a visual creator, AI artist, and creative director.

## Overview

This portfolio presents creative work across:

- AI product visuals
- Product photography
- Social media design
- Branding and identity
- Campaign design
- Creative direction

The site uses a dark luxury visual direction, editorial typography, cinematic spacing, animated sections, curated portfolio filters, and fullscreen image previews.

## Tech Stack

- React via CDN
- Tailwind CSS via CDN
- Framer Motion via CDN
- Static HTML, CSS, and JavaScript
- Vercel-ready static deployment

## Project Structure

```text
.
├── index.html
├── src/
│   ├── main.jsx
│   └── styles.css
├── public/
│   ├── portrait.jpg
│   └── works/
│       └── portfolio artwork images
├── build.js
├── server.js
├── vercel.json
├── package.json
└── README.md
```

## Local Preview

Run:

```bash
npm run dev
```

Then open:

```text
http://127.0.0.1:5175/
```

## Build For Vercel

Run:

```bash
npm run build
```

The deployment-ready files will be created in:

```text
dist/
```

## Contact

- Instagram: https://www.instagram.com/benvita_visualstudio/
- Email: bluepurple1414@gmail.com

## Deployment Notes

This project is configured for Vercel using `vercel.json`.

Vercel settings:

- Framework Preset: Other
- Build Command: `npm run build`
- Output Directory: `dist`

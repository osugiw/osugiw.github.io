# Portfolio Redesign — Setup Guide

Full rebuild of your `osugiw.github.io` site: Tailwind CSS + vanilla JS, no framework, deploys
straight to GitHub Pages as static files. Includes the homepage and all five project detail
pages, rebuilt in the same design system — the old Bootstrap/Colorlib theme, jQuery, Owl
Carousel, Flexslider, Animate.css, and the visitor-counter widget are gone entirely.

## What's here
```
index.html                          ← homepage
projects/
  alzo.html                         ← rebuilt, clean
  cofight.html                      ← rebuilt, clean
  motorcycle_tracking.html          ← rebuilt, clean
  sign_language.html                ← rebuilt, clean
  wireless_attendance.html          ← rebuilt, clean
css/site.css                        ← compiled, production-ready CSS
js/site.js                          ← nav toggle, scroll-spy, reveal animations
src/                                ← source files, only needed to edit styles later
tailwind.config.js                  ← design tokens (colors, fonts)
package.json
```

## 1. Add your photo
Drop your Zion National Park photo at `images/profile.jpeg` — 4:5 portrait crop, `object-cover`.
Shows a placeholder with instructions until you add one.

## 2. Bring over your project images/videos
Copy these folders from your old repo, unchanged:
```
projects/alzo/
projects/cofight/
projects/motorcycle_tracking/
projects/sign_language/
projects/wireless_attendance/
```
Also copy `images/favicon.ico`.

## 3. Preview locally
```bash
python3 -m http.server 8080
# open http://localhost:8080
```

## 4. Editing styles later (optional)
```bash
npm install
npx tailwindcss -i ./src/input.css -o ./css/site.css --minify --watch
```

## 5. Deploy
Copy everything into your `osugiw.github.io` repo root, add back image/video subfolders,
commit, push.

## Recent changes
- Degree corrected from "M.S." to "MECE" in both the hero tag pill and the Education section
- Photo caption now reads "Zion National Park" / "Based in Houston, TX" to match your photo
- Removed the "Contact" nav pill and email line in the footer entirely
- Profile photo path: `images/profile.jpeg`
- Nav logo: "Sugiarto Wibowo"
- Headline: "Building embedded systems from prototype to production." — leads with your
  Polytron, Sally, and Houdini experience, not RF-first
- About section mentions 7 U.S. national parks visited so far, plus the upcoming PNW/CA road
  trip that'll bring the count to 14

## Design notes
- **Palette**: ink navy background, burnt-copper accent, signal-cyan accent
- **Type**: Newsreader (serif display) + Inter (body) + IBM Plex Mono (technical data/labels)
- **Hero**: framed portrait photo with technical corner brackets
- **Trace rail**: thin vertical line (desktop, homepage only) fills as you scroll

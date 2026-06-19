# Vansh Singh — Portfolio

My personal portfolio site. A single static page: semantic HTML, modern CSS, and a
small amount of vanilla JavaScript. No frameworks, no build step, no dependencies.

The design is deliberately monochrome — black and white only, editorial minimalism
with strong typographic hierarchy and a lot of whitespace.

## Live

https://vansh4195.github.io/vanshsingh-portfolio/

## Run locally

It's a static site, so you can open `index.html` directly, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Structure

```
index.html    markup + content (semantic landmarks, full meta, JSON-LD)
styles.css    grayscale design system — type scale, layout, subtle motion, responsive
main.js       scroll-reveal, sticky-header hairline, footer year (progressive enhancement)
favicon.svg   favicon
og.svg        Open Graph / social preview image
```

## Notes

- Fully responsive and keyboard accessible — skip link, ARIA labels, semantic
  landmarks, visible focus styles.
- Honors `prefers-reduced-motion`: all animation is disabled when the OS requests it,
  and the JavaScript is purely an enhancement (the page reads fine with JS off).
- Total payload is well under 50KB (excluding webfonts).

## Editing content

All copy lives directly in `index.html`. Update the relevant section, commit, and push —
GitHub Pages redeploys automatically.

## License

© Vansh Singh. All rights reserved.

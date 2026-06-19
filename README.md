# vanshsingh.dev

My personal portfolio. A fast, single-page static site — semantic HTML, modern CSS, and a
small amount of vanilla JavaScript. No frameworks, no build step.

## Live

- https://vansh4195.github.io/vanshsingh-portfolio/

## Run locally

It's a static site, so just open `index.html` — or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Structure

```
index.html    markup + content
styles.css    Cortyx design system — palette, glass, motion, responsive
main.js       collapsing pill nav, scroll-reveal, card glow (progressive enhancement)
favicon.svg   favicon
og.svg        Open Graph / social preview image
```

## Editing content

All copy lives directly in `index.html`. Update the relevant section, commit, and push —
GitHub Pages redeploys automatically.

## License

© Vansh Singh. All rights reserved.

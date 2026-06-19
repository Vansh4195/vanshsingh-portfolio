# vanshsingh.dev

My personal portfolio. A fast, single-page static site — semantic HTML, modern CSS, and a
small amount of vanilla JavaScript. No frameworks, no build step.

## Live

- https://vanshsingh.dev (custom domain)
- GitHub Pages: https://vansh4195.github.io/vanshsingh-portfolio/

## Run locally

It's a static site, so just open `index.html` — or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Structure

```
index.html    markup + content
styles.css    styling, layout, responsive + light-mode
main.js       scroll-reveal + sticky-nav (progressive enhancement)
favicon.svg   favicon
og.svg        Open Graph / social preview image
CNAME         custom domain for GitHub Pages
```

## Editing content

All copy lives directly in `index.html`. Update the relevant section, commit, and push —
GitHub Pages redeploys automatically.

## License

© Vansh Singh. All rights reserved.

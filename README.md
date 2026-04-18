# countychambercollective.ca

Source for [countychambercollective.ca](https://countychambercollective.ca) — a one-page Jekyll site for the County Chamber Collective.

Based on the [Creative Theme](http://startbootstrap.com/template-overviews/creative/) by Start Bootstrap.

## Running locally

Requires Ruby 3.3+.

```sh
bundle install
bundle exec jekyll serve
```

Site is served at <http://localhost:4000>. Changes to `_includes/`, `_layouts/`, and `_sass/` rebuild automatically.

## Structure

- `index.html` — entry page, uses the `front` layout
- `_layouts/front.html` — page shell, stitches includes together
- `_includes/` — section partials (nav, header, about, services, audioclips, portfolio, call-to-action, contact, head, scripts)
- `_sass/_base.scss` — site styles
- `img/`, `css/`, `js/`, `docs/`, `fonts/` — static assets

## Deployment

Pushes to `main` auto-deploy via GitHub Actions (`.github/workflows/jekyll.yml`) to GitHub Pages.

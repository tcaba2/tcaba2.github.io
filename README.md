# tcaba2.github.io

Personal academic website of **Thara Caba**, doctoral researcher in astroparticle physics
(Karlsruhe Institute of Technology / Pierre Auger Observatory).

Live at <https://tcaba2.github.io>.

## Stack

Static HTML, no build step. Based on the [Massively](https://html5up.net/massively)
template by HTML5 UP (CCA 3.0). Hosted on GitHub Pages.

## Editing

| Page | File |
| --- | --- |
| Home + News snapshot + upcoming events | `index.html` |
| Full news archive | `news.html` |
| Research + publications | `research.html` |
| Outreach & community | `community.html` |
| Conferences & travel | `calendar.html` |
| Press, talks & posters | `media.html` |
| Learning resources | `resources.html` |
| Privacy & cookies | `privacy.html` |

Shared markup (`<head>`, nav, footer, the Google Tag Manager snippet) is **duplicated in
every page** — there is no templating, so a change to the nav or head must be made in each
file. Custom styles live in `assets/css/custom.css` (loaded after the template's
`assets/css/main.css`); the template CSS is not edited directly.

### Adding a news item

Add an `<li>` at the top of the `<ul class="news-list">` in `index.html` (keep ~4 there)
and mirror it into the right year group in `news.html`.

### Adding a calendar entry

Copy the commented template row in the relevant `<tbody>` of `calendar.html` (and, for
upcoming events, `index.html`).

### After adding a page

Add its URL to `sitemap.xml`.

## Analytics

Google Analytics 4 (`G-PCVMN7NH2T`) is loaded through Google Tag Manager
(`GTM-P42C9G82`). Consent is handled by the consentmanager.net CMP configured inside the
GTM container. See `privacy.html`.

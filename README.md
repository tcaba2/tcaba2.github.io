# tcaba2.github.io

Personal academic website of **Thara Caba**, doctoral researcher in astroparticle physics
(Karlsruhe Institute of Technology / Pierre Auger Observatory).

Live at <https://tcaba2.github.io>.

## Stack

Built with [Jekyll](https://jekyllrb.com), which GitHub Pages runs automatically on every
push — there is nothing to build or deploy by hand. Based on the
[Massively](https://html5up.net/massively) template by HTML5 UP (CCA 3.0).

| What | Where |
| --- | --- |
| Shared page frame: head/meta, intro, footer, scripts | `_layouts/default.html` |
| `<head>` tags (SEO, social preview, favicons, GTM) | `_includes/head.html` |
| Header, menu and social icons | `_includes/nav.html` |
| Menu entries | `_data/navigation.yml` |
| News items | `_data/news.yml` |
| Conferences, talks, visits | `_data/events.yml` |
| Structured data (JSON-LD) about you, home page only | `_includes/person-jsonld.html` |
| Site-wide settings (URL, GTM container ID) | `_config.yml` |

Each page (`index.html`, `research.html`, …) holds only its own content, with a short
front-matter block at the top for its title, description and options:

```yaml
---
layout: "default"
title: "Research — Thara Caba"
description: "…"          # search-result snippet
og_description: "…"       # optional shorter text for link previews
og_type: "article"        # omit to leave out social-preview tags
cv_button: true           # show the CV button at the bottom
---
```

## Common edits

**Add a news item:** add an entry at the **top** of `_data/news.yml`:

```yaml
- year: 2026
  date: October 2026
  text: Gave a talk at <a href="https://…">Some Meeting</a>.
```

The home page shows the 4 newest; `news.html` shows all of them, grouped by year.

**Add an event:** add an entry anywhere in `_data/events.yml`:

```yaml
- kind: talk            # talk | poster | conference | school | workshop | panel | visit
  start: "2027-03-02"   # quoted YYYY-MM-DD
  end: "2027-03-05"
  dates: "2&ndash;5 Mar 2027"
  title: Some Conference
  place: City, Country
```

Events are sorted by date and appear under "Upcoming" until their `end` date, then move to
"Past" automatically. The site only rebuilds on a push, so an event moves to "Past" at the
first push after it ends. The home page shows the next 3 upcoming events.

**Add a page:** copy an existing page, change its front matter and content, and add it to
`_data/navigation.yml` and `sitemap.xml`.

## Previewing locally (optional)

Needs Ruby 3.x (e.g. from Homebrew: `brew install ruby`), then:

```bash
bundle install
bundle exec jekyll serve
```

and open <http://localhost:4000>. You can also just push and check the live site.

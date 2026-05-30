# CLAUDE.md — knoodlepotstudio-web

This is the Knoodlepot Studio website — a Next.js app deployed on Vercel at **knoodlepotstudio.com**.
It serves as the public studio hub: app portfolio, legal pages (privacy, terms, delete-account), and brand presence.

---

## Project Path

```
C:\Users\Knoodlepot\Desktop\Projects\knoodlepotstudio-web\
```

Deployed at: **https://knoodlepotstudio.com**
Hosting: **Vercel** (never Railway or any other provider)

---

## Tech Stack

| Layer | Tool |
|---|---|
| Framework | Next.js (App Router) + TypeScript |
| Styling | Inline styles + CSS custom properties (NOT Tailwind utility classes) |
| Fonts | Cinzel (headings), Playfair Display (body/italic) — Victorian aesthetic |
| Hosting | Vercel |
| Theme | Dark/light toggle via `ThemeToggle` component and CSS variables |

> **Important:** Although Tailwind is installed, this project uses **inline styles and CSS variables** throughout — not Tailwind utility classes. Follow the existing pattern when adding new pages or components.

---

## CSS Variables (Theming)

All colours come from CSS custom properties defined in `app/globals.css`:

- `--gold` — accent colour (gold)
- `--text` — primary text
- `--text-muted` — secondary/dimmed text
- `--border` — divider lines
- `--surface` — card/panel backgrounds
- `--nav-bg` — navigation background (with blur)

Always use these variables — never hardcode colour values.

---

## Project Structure

```
app/
├── page.tsx                        ← Homepage (app grid, about, footer)
├── layout.tsx                      ← Root layout (fonts, metadata)
├── globals.css                     ← CSS variables and base styles
├── favicon.ico
├── privacy/page.tsx                ← Studio-wide privacy policy
├── cookies/page.tsx                ← Cookie policy
├── apps/[slug]/page.tsx            ← Dynamic app detail page
│
├── floriography/
│   ├── privacy/page.tsx
│   ├── terms/page.tsx
│   └── delete-account/page.tsx
│
├── greenman/
│   ├── privacy/page.tsx
│   └── terms/page.tsx
│
├── plain-english-please/
│   ├── privacy/page.tsx
│   ├── terms/page.tsx
│   └── delete-account/page.tsx
│
├── naturlore/
│   ├── privacy/page.tsx
│   ├── terms/page.tsx
│   └── delete-account/page.tsx
│
├── describr/
│   ├── privacy/page.tsx
│   ├── terms/page.tsx
│   └── delete-account/page.tsx
│
├── veracitor/
│   ├── privacy/page.tsx
│   ├── terms/page.tsx
│   └── delete-account/page.tsx
│
├── togetherly/
│   ├── privacy/page.tsx
│   └── terms/page.tsx
│
├── lunarium/
│   ├── privacy/page.tsx
│   └── terms/page.tsx
│
└── selene/
    ├── page.tsx
    ├── privacy/page.tsx
    └── terms/page.tsx

lib/
├── apps.ts                         ← Master app data (drives homepage grid)
└── app-details.ts                  ← Extended detail data for /apps/[slug]

components/
└── ThemeToggle.tsx                 ← Dark/light mode toggle

public/
└── studio-logo.png
```

---

## App Data — `lib/apps.ts`

The homepage app grid is driven entirely by the `apps` array in `lib/apps.ts`.
To add a new app to the homepage, add an entry there. Do NOT hardcode app cards in `page.tsx`.

### Current Apps

| App | Status | Category | Play Store |
|---|---|---|---|
| Floriography | live | nature | ✅ |
| Naturlore | in-development | nature | — |
| Greenman | live | lore | ✅ |
| Lunarium | coming-soon | lore | — |
| Describr | in-development | utility | — |
| Veracitor | coming-soon | utility | — |
| Togetherly | coming-soon | utility | — |
| Plain English, Please. | live | fun | ✅ |

### App Status Labels (displayed on cards)

| Status value | Displayed as |
|---|---|
| `live` | Available |
| `in-development` | In Development |
| `coming-soon` | In Design |

### Sections (categories)

| ID | Label | Tagline |
|---|---|---|
| nature | Nature | Apps rooted in the living world |
| lore | Lore | Myth, place, and the patterns of the sky |
| utility | Utility | Tools built with purpose and craft |
| fun | Fun | For the joy of it |

---

## Social & Contact Links

| Platform | URL |
|---|---|
| Instagram | https://www.instagram.com/knoodlepot_studio/ |
| Facebook | https://www.facebook.com/profile.php?id=61589830114090&locale=en_GB |
| LinkedIn | https://www.linkedin.com/in/daniel-grommes-0726a140b |
| GitHub | https://github.com/Knoodlepot |
| Email | knoodlepot@knoodlepotstudio.com |

---

## Legal Pages Convention

Every app that has an Android release needs three pages:
- `/<app-slug>/privacy/page.tsx`
- `/<app-slug>/terms/page.tsx`
- `/<app-slug>/delete-account/page.tsx` (required for GDPR Art.17)

Apps still in development/design only need privacy + terms.
Add the `privacyPath` and `termsPath` fields to `lib/apps.ts` when creating pages.

---

## Adding a New App — Checklist

1. Add entry to `apps` array in `lib/apps.ts` (name, slug, tagline, description, status, category, platform)
2. Create `app/<slug>/privacy/page.tsx`
3. Create `app/<slug>/terms/page.tsx`
4. Create `app/<slug>/delete-account/page.tsx` (once the app has auth/data)
5. Add `privacyPath` and `termsPath` to the `lib/apps.ts` entry
6. If the app has a Play Store listing, add `playStoreUrl` to the entry
7. Deploy — Vercel picks up the push automatically

---

## Deployment

Vercel auto-deploys on every push to `main`.
No manual build step needed — just commit and push.

```powershell
git add .
git commit -m "your message"
git push
```

---

## Next.js Rules

- This is the **App Router** version of Next.js — use `app/` directory conventions only
- Server components by default — only add `"use client"` when interactivity is needed
- Read `node_modules/next/dist/docs/` if unsure about an API — this version may differ from training data
- Use `next/image` for any `<img>` tags (or suppress the lint warning with a comment if using an external badge URL)

---

## Notes for Claude Code

- **Never use `mkdir -p`** — use `New-Item -ItemType Directory` in PowerShell
- **British English** in all copy, comments, and docs
- **Never commit** `.env`, secrets, or API keys
- Follow the existing inline-style pattern — do not introduce Tailwind utility classes
- The developer cannot read code — always explain what you're doing in plain English

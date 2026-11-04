# AfterClass Kigali

A demo directory of after-school clubs for parents and teenagers in Kigali.
Built for the Ishvexa Hub Web Development Internship (November to December 2026).

> All clubs, names, schedules, prices, and contacts are fictional demo data.

## Scope
- Intended user: parents and teenagers looking for an after-school activity
- Primary action: search and filter clubs
- Pages: Home, Clubs, About
- Interactive feature: search and filters (Week 3)
- Each club shows a fictional price per month in RWF
- Data: local JSON file (`src/data/clubs.json`), 6 or more clubs by Week 4
- Not included: backend, login, real sign-ups

## Tech
- Languages: HTML, CSS, JavaScript (JSX)
- Framework and tools: React, Vite, React Router, Tailwind CSS v4, Git

## Setup
1. Install Node.js (LTS version)
2. `npm install`
3. `npm run dev`
4. Open the local address shown in the terminal (usually http://localhost:5173)

Build for production: `npm run build`, then preview with `npm run preview`.

## Hero photos
Add three free-licence photos with **no people** to `public/images/`:
`hero-sports.jpg`, `hero-creative.jpg`, `hero-coding.jpg`.
Until they are added, a colour gradient is shown. Record each photo in `docs/source-log.md`.

## Folder structure
```
afterclass-kigali/
├── docs/                brief, source log, link-check record
├── public/              favicon and images
├── src/
│   ├── components/      Header, Footer, HeroSlideshow, SearchBar, Welcome,
│   │                    ActivityStrip, FeaturedClubs, ClubCard
│   ├── pages/           Home, Clubs, About, NotFound
│   ├── data/            clubs.json, activities.js
│   ├── hooks/           usePageTitle.js
│   ├── index.css        design tokens (colours, fonts) and base styles
│   ├── App.jsx          layout and routes
│   └── main.jsx         app entry
├── index.html
└── package.json
```

## Design tokens
Raspberry `#D6336C` (primary), cocoa `#5C3A2E` (secondary), butter `#FFE066` (highlight),
brick `#B3261E` (alerts), ivory `#FFFBF5` (page), rose sand `#F8E1E7` (soft fills).
Defined once in `src/index.css`.

## Credits
Photos, icons, and fonts are listed in `docs/source-log.md`.

## Status
Week 1: planning complete, Home page built. Clubs and About are placeholders until Week 2.

## AI assistance
Planning documents and a first draft of the code were prepared with AI assistance (Claude).
Design decisions, testing, and final edits are my own.

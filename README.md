# Tartu Kontsert — AI demo

Local prototype to show the family what a redesigned **kontsert.ee + onlinepilet.ee** experience could feel like.

- Placeholder photos only (Unsplash atmosphere shots — **not** official posters)
- No real payments or emails
- Estonian UI, city/month filters, event page, mobile-friendly seat mock

## Run

```bash
npm install
npm run dev
```

Opens http://localhost:5173/

**Live demo (GitHub Pages):** https://upperchaos.github.io/tartu-kontsert-demo/

## Pages

| Path | What it demos |
|------|----------------|
| `/` | Brand hero + upcoming list |
| `/kontserdid.html` | Filters by city & month |
| `/kontsert.html?id=abba2026` | Event page before checkout |
| `/osta.html?id=abba2026&date=ab-28` | Seat / quantity purchase mock |
| `/teenused.html` | Services + inquiry form |

Replace placeholder images later with your own photography (still avoid reusing licensed official posters unless you own the rights).

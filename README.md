# Content Viral Media

React + Vite + Tailwind CSS marketing site.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Vite dev server + Express API (port 4001) |
| `npm run dev:vite` | Vite only |
| `npm run build` | Production build → `dist/` |
| `npm run preview` | Preview production build |

## Stack

- **React 19** + **TypeScript**
- **Vite 6**
- **Tailwind CSS 4**
- **React Router 7**
- **Framer Motion**

## Project structure

```
src/
  pages/          Route pages (Home, About, Services, Portfolio, Admin)
  components/     UI components (same layout as before migration)
  styles/         globals.css + home.css (Tailwind)
public/           Static assets
```

## API

Form submissions proxy to Express at `http://localhost:4001` via Vite dev proxy.
Set `API_URL` in environment for production deployments.

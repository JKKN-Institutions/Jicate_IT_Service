# Jicate IT Service

A [Next.js](https://nextjs.org) **16.2** application built with React 19, TypeScript, and Tailwind CSS v4 (App Router + Turbopack).

## Getting Started

Install dependencies (already done if you scaffolded this project):

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app. Edit `src/app/page.tsx` and the page auto-updates.

## Scripts

| Command         | Description                          |
| --------------- | ------------------------------------ |
| `npm run dev`   | Start the dev server (Turbopack)     |
| `npm run build` | Production build                     |
| `npm run start` | Run the production build             |
| `npm run lint`  | Lint with ESLint                     |

## Folder Structure

```
.
├── public/                  # Static assets (images, fonts, icons)
├── src/
│   ├── app/                 # App Router — routes, layouts, pages
│   │   ├── layout.tsx       # Root layout (fonts + metadata)
│   │   ├── page.tsx         # Home page
│   │   └── globals.css      # Tailwind import + global styles
│   ├── components/          # Reusable React components
│   │   └── ui/              # Low-level UI primitives (Button, Card, …)
│   ├── lib/                 # Utilities & helpers (e.g. cn())
│   ├── hooks/               # Custom React hooks
│   ├── types/               # Shared TypeScript types
│   ├── config/              # App constants / site metadata
│   └── features/            # Feature-scoped modules (grows as you build)
├── next.config.ts
├── tsconfig.json            # Path alias: "@/*" → "src/*"
├── eslint.config.mjs
└── postcss.config.mjs
```

## Conventions

- **Path alias:** import from `@/` instead of long relative paths, e.g. `import { cn } from "@/lib/utils"`.
- **Class names:** use `cn(...)` from `@/lib/utils` to merge conditional and conflicting Tailwind classes.
- **Site metadata:** keep app-wide constants in `@/config/site`.
- **Feature code:** group related components/hooks/types under `src/features/<feature>/`.

## Tech Stack

- Next.js 16.2.7 (App Router, Turbopack)
- React 19.2
- TypeScript 5
- Tailwind CSS v4
- ESLint 9

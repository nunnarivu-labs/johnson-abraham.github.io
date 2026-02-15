# CLAUDE.md

## Project Overview

Personal portfolio website for Johnson Abraham, hosted via GitHub Pages at `johnson-abraham.github.io`.

## Tech Stack

- **Framework**: React 19 + TypeScript
- **Build Tool**: Vite (using rolldown-vite)
- **Styling**: Tailwind CSS v4 (via `@tailwindcss/vite` plugin)
- **Icons**: lucide-react
- **Linting**: ESLint 9 (flat config) with TypeScript + React hooks plugins
- **Formatting**: Prettier (single quotes)

## Commands

- `npm run dev` — Start dev server (with `--host`)
- `npm run build` — Type-check with `tsc -b` then build with Vite
- `npm run lint` — Run ESLint
- `npm run prettier` — Format all files with Prettier

## Project Structure

```
src/
├── App.tsx              # Root app component
├── main.tsx             # Entry point
├── index.css            # Global styles
├── utils.ts             # Utility functions
├── assets/              # Static assets
├── hooks/               # Custom React hooks
├── icons/               # Icon components
└── components/
    ├── header.tsx
    ├── mobile-menu.tsx
    ├── contact-footer.tsx
    ├── scroll-to-top.tsx
    └── sections/
        ├── intro.tsx
        ├── about.tsx
        ├── experience.tsx
        ├── skills.tsx
        └── projects.tsx
```

## Conventions

- Component files use **kebab-case** filenames (e.g., `scroll-to-top.tsx`)
- Commit messages follow **conventional commits** (`feat:`, `fix:`, `chore:`, `refactor:`)
- Deployed from the `dist/` folder; `dist/` is gitignored

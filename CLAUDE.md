# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website for Johnson Abraham, a Staff Software Engineer. The site is a single-page application (SPA) built with React and deployed to GitHub Pages. It showcases professional experience, featured projects, technical skills, and contact information.

## Technology Stack

- **Build Tool**: Vite (using rolldown-vite@7.1.14 as a faster Vite alternative)
- **Framework**: React 19.1.1 with TypeScript
- **Styling**: Tailwind CSS v4 (using @tailwindcss/vite plugin)
- **Icons**: lucide-react
- **Date Utilities**: date-fns (used to calculate years of experience dynamically)
- **Type Checking**: TypeScript 5.9.3
- **Linting**: ESLint 9 with TypeScript ESLint and React plugins
- **Code Formatting**: Prettier 3.6.2

## Common Commands

### Development

```bash
npm run dev              # Start dev server with --host flag (accessible on network)
npm run build            # Type-check with tsc and build for production
npm run preview          # Preview production build locally
```

### Code Quality

```bash
npm run lint             # Run ESLint on all files
npm run prettier         # Format all files with Prettier
```

## Architecture & Structure

### Single-Component Architecture

The entire application is contained in a single React component (`src/App.tsx`). This is intentional for a simple portfolio site - all sections (hero, projects, about, skills, experience, contact) are rendered within one component.

### Key Sections in App.tsx

1. **Header**: Fixed navigation bar with links to Projects, About, and Contact sections
2. **Hero Section**: Introduction with dynamically calculated experience years using date-fns
3. **Projects Section**: Three featured projects (Ishtar, Slate, The Daily Ledger) with logos, descriptions, tech stacks, and links
4. **About Section**: Personal bio with profile photo
5. **Skills Section**: Three categories (Frontend, Backend, Cloud/Databases/Tools) displayed with icons
6. **Experience Section**: Timeline of professional roles with accomplishments
7. **Footer/Contact**: Email contact and social links (GitHub, LinkedIn)

### Styling Approach

- Tailwind CSS v4 with custom utility classes defined in `src/index.css`
- Custom classes for reusable components:
  - `.tech-tag`: Technology badge styling
  - `.project-button`: Project action button styling
  - `.skill-card`: Skill category card styling
  - `.social-link`: Social media icon link styling
  - `.experience-item`, `.experience-dot`, `.experience-content`: Timeline styling

### Assets

All images are stored in `src/assets/`:

- Project logos (ishtar-logo.png, slate-logo.png, the-daily-ledger-logo.png)
- Profile photo (profile-photo.jpg)
- Hero background (hero-background.jpg)

## Important Development Notes

### Dynamic Experience Calculation

The years of experience are calculated dynamically using date-fns:

```typescript
const experienceDuration = intervalToDuration({
  start: new Date(2017, 6, 1), // July 1, 2017
  end: new Date(),
});
```

This ensures the experience counter updates automatically without manual edits.

### Vite Configuration

The project uses `rolldown-vite` (a faster Vite implementation) instead of standard Vite. This is configured in both `dependencies` and `overrides` in package.json. The vite.config.ts uses both React and Tailwind CSS plugins.

### TypeScript Configuration

The project uses TypeScript project references with two separate configs:

- `tsconfig.app.json`: For application code
- `tsconfig.node.json`: For Vite config files
- `tsconfig.json`: Root config that references both

### ESLint Configuration

Uses the new flat config format (eslint.config.js) with:

- Recommended JS rules
- TypeScript ESLint recommended rules
- React Hooks recommended rules
- React Refresh Vite rules
- Ignores the `dist` directory

## Deployment

This is a GitHub Pages site. The build output goes to the `dist/` directory, which is excluded from version control (.gitignore). Deployment is likely handled through GitHub Actions or manual push to a gh-pages branch (not visible in current repo state).

## Making Changes

### Adding New Projects

To add a new project, edit `src/App.tsx`:

1. Import the project logo from assets
2. Add a new project card div in the projects grid section (around line 96-241)
3. Follow the existing structure with logo, title, description, tech tags, and links

### Updating Experience

Edit the experience section in `src/App.tsx` (around line 330-446). Add new timeline items following the `.experience-item` structure.

### Modifying Skills

Update the skills section in `src/App.tsx` (around line 284-329). Three cards are displayed for Frontend, Backend, and Cloud/Databases/Tools.

### Styling Changes

- For Tailwind utilities: Use standard Tailwind v4 classes directly in JSX
- For custom reusable styles: Add to `src/index.css` using @apply directives
- For global styles: Add to `src/index.css`

# Repository Guidelines

## Project Structure & Module Organization

This is a Next.js 15 App Router project. Route entry points live in `src/app`, including `about`, `services`, `blog`, `ai-chatbots`, `ai-calling-agents`, `digital-marketing`, and `website-development`. Reusable UI and content sections live in `src/components`; shared primitives are in `src/components/ui`, service sections in `src/components/services`, and helpers in `src/lib`. Static images, SVGs, `robots.txt`, and `sitemap.xml` live in `public`. Do not edit generated folders such as `.next` or `node_modules`.

## Build, Test, and Development Commands

Use the package manager that matches the lockfile you update. The repo includes `package-lock.json` and `bun.lock`; avoid changing both unless needed.

- `npm run dev`: start the local Next.js development server.
- `npm run build`: create a production build and catch deploy-time Next.js errors.
- `npm run start`: run the production build locally after `npm run build`.
- `npm run lint`: run the configured Next.js ESLint checks.

## Coding Style & Naming Conventions

Write React components in JSX/TSX as functional components. Keep route files named by App Router convention, for example `src/app/services/page.js`. Use PascalCase for exported component files, camelCase for functions and variables, and lowercase route folders. Preserve nearby formatting when editing older files. Styling is CSS/Tailwind-oriented; prefer `src/lib/utils.ts` and existing component patterns before adding helpers.

## Testing Guidelines

No automated test framework or `test` script is configured. For changes, run `npm run lint` and `npm run build` before handoff. If adding tests, colocate them near the affected component or route with names such as `Component.test.jsx`, and add a matching `npm test` script.

## Commit & Pull Request Guidelines

Recent history uses short, imperative subjects such as `Fix Vercel deployment CSS error` and `Update .gitignore and remove local config files`. Keep commits focused and describe user-visible or deployment impact. Pull requests should include a summary, linked issue when available, screenshots for visual changes, and verification commands. Mention environment variables, content updates, or deployment considerations.

## Security & Configuration Tips

Do not commit `.env` values or local editor settings. Keep secrets in the deployment provider or local environment only. Review `public/robots.txt`, `public/sitemap.xml`, and SEO-heavy route content carefully because they affect crawl behavior.

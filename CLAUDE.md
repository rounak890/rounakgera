# Project guide

## Stack
Next.js App Router, strict TypeScript, Tailwind CSS v4, Framer Motion, Lucide React. Deploy to Vercel. No CMS or database.

## Structure
- `app/`: route, metadata, global styles, robots, sitemap, OG image, 404.
- `components/`: reserved for reusable presentation components.
- `content/`: typed source-of-truth profile, work, education, skills, awards, publications, and FAQ.
- `lib/`: reserved for shared helpers.
- `public/`: static files, including the resume.

## Content rules
- Edit content in `content/`; keep presentation in `app/` and `components/`.
- Use only resume facts or facts explicitly provided by Rounak.
- Never publish phone number or invent quotes, dates, metrics, employers, titles, or links.
- Keep unresolved details visibly marked `TODO(confirm)`.
- Buildify role description must stay as supplied and must not gain metrics.
- Generic contract text in the mockup is invented UI-only sample text.

## Commands
- `npm run dev`: local development.
- `npm run lint`: ESLint.
- `npm run typecheck`: TypeScript check.
- `npm run build`: production build.
- `npm start`: production server.

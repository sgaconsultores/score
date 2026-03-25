# Technology Stack

## Core Framework
- **Next.js** v16.1.6 (App Router)
- **React** v19.2.3 (Server Components)
- **TypeScript** v5.x (strict mode)

## Styling
- **Tailwind CSS** v4 (PostCSS integration)
- CSS custom properties for design tokens
- Google Fonts: Inter (400-900), Material Symbols Outlined

## Icons
- **lucide-react** v0.577.0

## Design Tokens
```
--bg: #0F0F0F           (main background)
--surface: #1C1C1E      (card/surface)
--surface-elevated: #252528
--accent: #00FF85       (primary green)
--gold: #FFD700         (rankings)
--error: #FF453A        (destructive)
--text-primary: #FFFFFF
--text-secondary: #8E8E93
--border: #2C2E3C
--overlay: #000000BF
```

## Configuration
- **next.config.ts**: Minimal, extensible
- **tsconfig.json**: Strict checking, `@/*` path alias to `./src/*`
- **postcss.config.mjs**: Tailwind v4 PostCSS plugin
- **ESLint** v9 with Next.js config

## Build & Dev
- `npm run dev`: Development server
- `npm run build`: Production build
- `npm run start`: Production server
- `npm run lint`: ESLint check

## Not Yet Implemented
- Backend API / Database
- Authentication / Authorization
- State management library
- Data fetching / API client
- Testing framework
- CI/CD pipeline
- Deployment configuration

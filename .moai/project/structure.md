# Project Structure

## Architecture
Next.js App Router with React Server Components. Mobile-first design at 375x812px (iPhone 11 size).

## Directory Layout

```
score/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # RootLayout: metadata, Inter font, Spanish lang
│   │   ├── page.tsx            # Home: 16 screens rendered in grid mockup
│   │   └── globals.css         # Design tokens (CSS vars), Tailwind import, base styles
│   └── components/
│       ├── PhoneFrame.tsx      # Mobile device frame wrapper (375x812px)
│       ├── StatusBar.tsx       # iOS-style status bar (time, signal, WiFi, battery)
│       ├── BottomNav.tsx       # 5-item bottom navigation with screen variants
│       ├── ScoreRing.tsx       # SVG circular progress indicator with glow
│       └── screens/            # 16 screen components
│           ├── SplashScreen.tsx
│           ├── OnboardingScreen.tsx
│           ├── SignUpScreen.tsx
│           ├── HomeScreen.tsx
│           ├── AICoachScreen.tsx
│           ├── RecordScreen.tsx
│           ├── AIScoreResultsScreen.tsx
│           ├── LeaderboardScreen.tsx
│           ├── EventsScreen.tsx
│           ├── EventDetailScreen.tsx
│           ├── PlayerProfileScreen.tsx
│           ├── SocialFeedScreen.tsx
│           ├── ChallengeScreen.tsx
│           ├── NotificationsScreen.tsx
│           ├── PostEventResultsScreen.tsx
│           └── ShareCardScreen.tsx
├── public/                      # Static assets (default Next.js SVGs)
├── .moai/                       # MoAI configuration
├── .claude/                     # Claude Code rules & skills
├── next.config.ts               # Minimal Next.js config
├── tsconfig.json                # TypeScript strict mode, @/* path alias
├── postcss.config.mjs           # Tailwind v4 PostCSS
├── package.json                 # Dependencies and scripts
└── package-lock.json
```

## Component Patterns

### Screen Layout Pattern
All screens follow: PhoneFrame > StatusBar + ScrollableContent + BottomNav

### BottomNav Variants
- home: HOME active
- coach: ENTRENAR active
- events: EVENTS active
- social: SOCIAL active
- profile: PERFIL active
- alerts: ALERTAS active (different nav items)

## Key Conventions
- Path alias: `@/` resolves to `./src/`
- All components use explicit TypeScript prop types
- Static mockup data embedded in components (no API calls)
- Mobile-first: assumes 375px viewport width
- Spanish language for all user-facing text

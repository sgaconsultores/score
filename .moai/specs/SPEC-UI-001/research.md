# Research: Convert Screens to Functional App

## Architecture Analysis

### Current State
- All 16 screens are static React components rendered in a single `page.tsx`
- `page.tsx` imports all screens and renders them in a grid layout using `PhoneFrame` wrapper
- No routing, no navigation, no state management
- `BottomNav` has variant-based config (home/coach/events/social/profile/alerts) but no click handlers
- All screen components are pure presentational with hardcoded data

### Key Files
- `src/app/page.tsx:1-56` - Grid layout rendering all 16 screens
- `src/app/layout.tsx` - RootLayout with Inter font, metadata, Spanish lang
- `src/components/BottomNav.tsx:1-74` - Navigation config with 6 variants
- `src/components/PhoneFrame.tsx` - Phone device mockup wrapper
- `src/components/StatusBar.tsx` - iOS-style status bar
- `src/components/ScoreRing.tsx` - SVG score circle
- `src/components/screens/` - 16 screen components

### Screen-to-Route Mapping
| Screen | Suggested Route | BottomNav Variant | Auth Required |
|--------|----------------|-------------------|---------------|
| SplashScreen | / | none | No |
| OnboardingScreen | /onboarding | none | No |
| SignUpScreen | /signup | none | No |
| HomeScreen | /home | home | Yes |
| AICoachScreen | /train | coach | Yes |
| RecordScreen | /record | alerts | Yes |
| AIScoreResultsScreen | /results | coach | Yes |
| LeaderboardScreen | /leaderboard | events | Yes |
| EventsScreen | /events | events | Yes |
| EventDetailScreen | /events/[id] | events | Yes |
| PlayerProfileScreen | /profile | profile | Yes |
| SocialFeedScreen | /social | social | Yes |
| ChallengeScreen | /challenge | social | Yes |
| NotificationsScreen | /notifications | alerts | Yes |
| PostEventResultsScreen | /events/[id]/results | events | Yes |
| ShareCardScreen | /share/[id] | none | Yes |

### Proposed Route Groups
- `(auth)` - Splash, Onboarding, SignUp (no BottomNav, no StatusBar)
- `(app)` - All authenticated screens (shared layout with BottomNav)

### Dependencies & Constraints
- PhoneFrame should be removed for production routes (only kept for a /mockup gallery page)
- BottomNav needs `href`-based navigation using Next.js `Link`
- StatusBar may need to become part of the app layout or be removed for real mobile use
- Screen components need `"use client"` directive for interactive elements
- No backend exists - screens will still use hardcoded data for now

### Risks
- Removing PhoneFrame changes the visual experience (screens go full-width)
- StatusBar is decorative (not real iOS) - may confuse on actual mobile
- Some screens need dynamic routes ([id] params) but have no real data source yet

### Recommendations
1. Keep a /mockup route that preserves the current gallery view
2. Create proper App Router routes with (auth) and (app) route groups
3. Make BottomNav interactive with Next.js Link components
4. Keep StatusBar optional/configurable per layout
5. Add basic page transitions for mobile feel
6. Use responsive design to work on both mobile and desktop

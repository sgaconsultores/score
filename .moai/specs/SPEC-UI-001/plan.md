# SPEC-UI-001: Implementation Plan

## Convert Static Screen Mockups to Functional App Router Application

**SPEC ID:** SPEC-UI-001
**Status:** Planned
**Priority:** High
**Complexity:** Medium
**Traceability:** SPEC-UI-001 > plan.md

---

## 1. Overview

Transform the current 16 static screen mockups (rendered as a single-page grid in `src/app/page.tsx`) into a fully navigable Next.js App Router application with proper routing, route groups, shared layouts, and interactive bottom navigation.

### Scope

**In scope:**
- App Router directory structure with `(auth)` and `(app)` route groups
- Shared layouts for each route group
- Interactive BottomNav with Next.js `Link` navigation
- Preserving the `/mockup` gallery route for design reference
- StatusBar handling appropriate for production vs mockup contexts
- Basic responsive design for mobile-first experience
- All existing visual UI preserved as-is (no redesign)

**Out of scope:**
- Backend API, database, or authentication logic
- Dynamic data fetching (hardcoded data remains)
- Animations or page transitions (future SPEC)
- State management library integration
- Testing setup (future SPEC)
- PWA configuration

---

## 2. Technology Decisions

### 2.1 App Router Patterns

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Routing strategy | Next.js App Router with route groups | Enables shared layouts per section, aligns with Next.js 16 conventions |
| Auth group | `(auth)` route group | Splash, onboarding, signup screens share a layout with no BottomNav |
| App group | `(app)` route group | All authenticated screens share a layout with BottomNav |
| Dynamic routes | `[id]` segments for events and share | Prepares for future dynamic data without requiring it now |
| Mockup preservation | `/mockup` standard route | Keeps the current gallery view accessible for design review |

### 2.2 Server vs Client Components

| Component/Page | Rendering | Reason |
|----------------|-----------|--------|
| Root `layout.tsx` | Server | Static metadata, font loading, no interactivity |
| `(auth)/layout.tsx` | Server | Static wrapper, no interactivity |
| `(app)/layout.tsx` | Client | BottomNav requires `usePathname()` for active state |
| Screen page components | Server (default) | Static content with hardcoded data, no hooks |
| BottomNav (refactored) | Client | Uses `Link`, `usePathname()` for active state detection |
| StatusBar | Server | Static decorative component, no interactivity |
| ScoreRing | Server | Pure SVG rendering, no interactivity |
| Screen components with buttons | Client where needed | Interactive elements (buttons, expand/collapse) need client |

**Strategy:** Keep components as Server Components by default. Only add `"use client"` when a component uses hooks (`useState`, `usePathname`, etc.), event handlers, or browser APIs. Most screen components are presentational and can remain server components.

### 2.3 BottomNav Refactoring Approach

The current `BottomNav` uses a `variant` prop to set which tab is active. The refactored version will:

1. Replace `variant` prop with automatic detection via `usePathname()`
2. Replace `<div>` wrappers with Next.js `<Link>` components
3. Map each nav item to its corresponding route path
4. Determine active state by matching current pathname against route mappings
5. Keep the `alerts` variant as an alternate nav configuration for specific routes

### 2.4 StatusBar Handling

| Context | StatusBar Behavior |
|---------|-------------------|
| `/mockup` gallery | Rendered inside PhoneFrame (current behavior) |
| `(auth)` routes | Not rendered (splash/onboarding/signup have their own layouts) |
| `(app)` routes | Rendered in shared layout, above page content |

**Decision:** StatusBar is a decorative iOS-style element. In the production app, it will be included in the `(app)` layout for visual consistency with the mockups. On real mobile devices with a real status bar, it can be hidden via a future configuration or CSS media query. For now, keeping it maintains design fidelity.

### 2.5 PhoneFrame Handling

| Context | PhoneFrame Behavior |
|---------|---------------------|
| `/mockup` gallery | Used as device wrapper (current behavior preserved) |
| All other routes | Not used (screens render at full viewport width) |

**Decision:** PhoneFrame is exclusively for the mockup gallery. Production routes render screen content directly at full viewport width with `max-w-[430px]` centering for desktop viewability.

---

## 3. Route Structure

### 3.1 Route Groups and Pages

```
src/app/
  layout.tsx                          # Root layout (existing, modified)
  globals.css                         # Design tokens (existing, unchanged)
  (auth)/
    layout.tsx                        # Auth layout: no BottomNav, no StatusBar
    page.tsx                          # / -> SplashScreen
    onboarding/
      page.tsx                        # /onboarding -> OnboardingScreen
    signup/
      page.tsx                        # /signup -> SignUpScreen
  (app)/
    layout.tsx                        # App layout: StatusBar + scrollable area + BottomNav
    home/
      page.tsx                        # /home -> HomeScreen
    train/
      page.tsx                        # /train -> AICoachScreen
    record/
      page.tsx                        # /record -> RecordScreen
    results/
      page.tsx                        # /results -> AIScoreResultsScreen
    leaderboard/
      page.tsx                        # /leaderboard -> LeaderboardScreen
    events/
      page.tsx                        # /events -> EventsScreen
      [id]/
        page.tsx                      # /events/[id] -> EventDetailScreen
        results/
          page.tsx                    # /events/[id]/results -> PostEventResultsScreen
    profile/
      page.tsx                        # /profile -> PlayerProfileScreen
    social/
      page.tsx                        # /social -> SocialFeedScreen
    challenge/
      page.tsx                        # /challenge -> ChallengeScreen
    notifications/
      page.tsx                        # /notifications -> NotificationsScreen
    share/
      [id]/
        page.tsx                      # /share/[id] -> ShareCardScreen
  mockup/
    page.tsx                          # /mockup -> Current gallery grid (preserved)
```

### 3.2 BottomNav Route Mapping

| Nav Item | Label | Route | Active When Path Starts With |
|----------|-------|-------|------------------------------|
| Home | HOME | `/home` | `/home` |
| Crosshair | ENTRENAR | `/train` | `/train`, `/record`, `/results` |
| Trophy | EVENTS | `/events` | `/events`, `/leaderboard` |
| Users | SOCIAL | `/social` | `/social`, `/challenge` |
| User | PERFIL | `/profile` | `/profile` |

**Note:** The `alerts` variant (used by RecordScreen and NotificationsScreen) uses a different set of nav items. The refactored BottomNav will detect which nav configuration to use based on the current path. Routes like `/record` and `/notifications` will use the `alerts` nav config; all other `(app)` routes use the standard 5-item config.

**Revised approach:** For simplicity in this initial SPEC, use the standard 5-item nav for all `(app)` routes. The `alerts` variant can be addressed in a follow-up SPEC if the product design requires it. This reduces implementation complexity and keeps navigation predictable.

### 3.3 Routes Without BottomNav

| Route | Reason |
|-------|--------|
| `/` (splash) | Auth flow, full-screen |
| `/onboarding` | Auth flow, full-screen |
| `/signup` | Auth flow, full-screen |
| `/share/[id]` | Standalone share card, no navigation needed |
| `/record` | Full-screen camera/recording interface |

**Implementation:** `/share/[id]` and `/record` are within the `(app)` group but need to hide BottomNav. Options:
- **Option A (chosen):** Use a nested layout or conditional rendering in the `(app)` layout based on pathname
- **Option B:** Move these routes to their own route group

**Decision:** Use Option A. The `(app)/layout.tsx` will conditionally hide BottomNav for specific paths (`/record`, `/share/*`). This avoids duplicating layout logic across multiple route groups.

---

## 4. Task Decomposition

### Milestone 1: Directory Structure and Layouts (Primary Goal)

**Task 1.1: Create route group directories**
- Create `src/app/(auth)/` directory
- Create `src/app/(app)/` directory
- Create `src/app/mockup/` directory
- Create all nested route directories per the route structure above

**Task 1.2: Create auth group layout**
- Create `src/app/(auth)/layout.tsx`
- Full-screen layout with dark background, no BottomNav, no StatusBar
- Simple pass-through layout wrapping `{children}`

**Task 1.3: Create app group layout**
- Create `src/app/(app)/layout.tsx` as client component
- Import and render StatusBar at top
- Render `{children}` in scrollable area
- Import and render BottomNav at bottom
- Use `usePathname()` to conditionally hide BottomNav on `/record` and `/share/*` paths

**Task 1.4: Update root layout**
- Modify `src/app/layout.tsx` to remove any page-specific rendering
- Keep metadata, fonts, `<html lang="es">`, and body styling
- Ensure it serves as a clean shell for route groups

### Milestone 2: Refactor BottomNav (Primary Goal)

**Task 2.1: Add Link-based navigation**
- Add `"use client"` directive
- Import `Link` from `next/link` and `usePathname` from `next/navigation`
- Define route mappings: `{ label, icon, href }[]`
- Replace `<div>` nav items with `<Link href={...}>` wrappers
- Determine active state by matching `usePathname()` against route paths

**Task 2.2: Remove variant prop system**
- Remove the `navConfigs` variant object
- Replace with a single nav items array with `href` properties
- Active state derived from current path, not from props
- Keep the visual styling identical

### Milestone 3: Move Screens to Route Pages (Primary Goal)

**Task 3.1: Create auth route pages**
- Create `src/app/(auth)/page.tsx` importing SplashScreen
- Create `src/app/(auth)/onboarding/page.tsx` importing OnboardingScreen
- Create `src/app/(auth)/signup/page.tsx` importing SignUpScreen
- Each page renders the screen component without PhoneFrame, StatusBar, or BottomNav
- Screen components must be updated to remove their internal StatusBar and BottomNav imports (these are now in the layout)

**Task 3.2: Create app route pages (core navigation)**
- Create pages for: home, train, record, results, leaderboard, profile, social, challenge, notifications
- Each page imports and renders its corresponding screen component
- Screen components must be refactored to remove internal StatusBar and BottomNav (provided by layout)

**Task 3.3: Create app route pages (dynamic routes)**
- Create `src/app/(app)/events/page.tsx` for events list
- Create `src/app/(app)/events/[id]/page.tsx` for event detail (hardcoded `id` param ignored for now)
- Create `src/app/(app)/events/[id]/results/page.tsx` for post-event results
- Create `src/app/(app)/share/[id]/page.tsx` for share card

**Task 3.4: Refactor screen components**
- Remove `StatusBar` import and rendering from each screen component (13 screens that use it)
- Remove `BottomNav` import and rendering from each screen component (13 screens that use it)
- Ensure each screen fills its container (`flex-1`, `overflow-y-auto`)
- Keep all visual content and hardcoded data intact
- Special handling for screens that don't use StatusBar/BottomNav (SplashScreen, OnboardingScreen, SignUpScreen, ShareCardScreen, RecordScreen, EventDetailScreen)

### Milestone 4: Preserve Mockup Gallery (Secondary Goal)

**Task 4.1: Create mockup route**
- Create `src/app/mockup/page.tsx`
- Move the current `page.tsx` gallery grid logic here
- Keep PhoneFrame wrapper for all 16 screens
- Screen components in mockup mode should render with their own StatusBar and BottomNav

**Task 4.2: Handle dual rendering of screens**
- Screen components need to work in two contexts:
  - **App routes:** No StatusBar/BottomNav (provided by layout)
  - **Mockup gallery:** With StatusBar/BottomNav (self-contained)
- **Approach:** Add an optional `standalone` prop (default `false`) to screen components
  - When `standalone={true}` (mockup mode): render StatusBar and BottomNav internally
  - When `standalone={false}` (app mode): render only the content area
- Alternative simpler approach: Create mockup-specific wrapper components that add StatusBar and BottomNav around the screen content

**Decision:** Use the simpler wrapper approach. Create a `MockupScreen` wrapper component that adds StatusBar and BottomNav around any screen component. This avoids modifying all 16 screen component interfaces and keeps the separation clean.

### Milestone 5: Responsive Design (Secondary Goal)

**Task 5.1: Mobile-first viewport setup**
- Ensure `<meta name="viewport" content="width=device-width, initial-scale=1">` in root layout (Next.js adds this by default)
- App layout constrains content to `max-w-[430px] mx-auto` for centered mobile experience on desktop
- Full-width on mobile devices (no constraint below 430px)

**Task 5.2: Desktop viewing experience**
- Add a subtle background color or pattern outside the `max-w-[430px]` container
- BottomNav fixed at bottom within the max-width container, not full viewport width
- Content scrolls within the container

---

## 5. File Change Summary

### New Files (22 files)

| File | Purpose |
|------|---------|
| `src/app/(auth)/layout.tsx` | Auth group layout (no nav) |
| `src/app/(auth)/page.tsx` | Splash screen route |
| `src/app/(auth)/onboarding/page.tsx` | Onboarding route |
| `src/app/(auth)/signup/page.tsx` | Sign up route |
| `src/app/(app)/layout.tsx` | App group layout (StatusBar + BottomNav) |
| `src/app/(app)/home/page.tsx` | Home route |
| `src/app/(app)/train/page.tsx` | AI Coach route |
| `src/app/(app)/record/page.tsx` | Record route |
| `src/app/(app)/results/page.tsx` | AI Score Results route |
| `src/app/(app)/leaderboard/page.tsx` | Leaderboard route |
| `src/app/(app)/events/page.tsx` | Events list route |
| `src/app/(app)/events/[id]/page.tsx` | Event detail route |
| `src/app/(app)/events/[id]/results/page.tsx` | Post-event results route |
| `src/app/(app)/profile/page.tsx` | Player profile route |
| `src/app/(app)/social/page.tsx` | Social feed route |
| `src/app/(app)/challenge/page.tsx` | Challenge route |
| `src/app/(app)/notifications/page.tsx` | Notifications route |
| `src/app/(app)/share/[id]/page.tsx` | Share card route |
| `src/app/mockup/page.tsx` | Preserved gallery view |
| `src/components/MockupScreen.tsx` | Wrapper for mockup gallery rendering |

### Modified Files (16 files)

| File | Change |
|------|--------|
| `src/app/layout.tsx` | Minor adjustments for route group compatibility |
| `src/app/page.tsx` | Replaced: redirect to `/home` or becomes `(auth)/page.tsx` |
| `src/components/BottomNav.tsx` | Major refactor: Link-based navigation with usePathname |
| `src/components/screens/HomeScreen.tsx` | Remove StatusBar and BottomNav imports/rendering |
| `src/components/screens/AICoachScreen.tsx` | Remove StatusBar and BottomNav imports/rendering |
| `src/components/screens/RecordScreen.tsx` | Remove top bar StatusBar references if any |
| `src/components/screens/AIScoreResultsScreen.tsx` | Remove StatusBar and BottomNav imports/rendering |
| `src/components/screens/LeaderboardScreen.tsx` | Remove StatusBar and BottomNav imports/rendering |
| `src/components/screens/EventsScreen.tsx` | Remove StatusBar and BottomNav imports/rendering |
| `src/components/screens/EventDetailScreen.tsx` | Verify no BottomNav (already absent) |
| `src/components/screens/PlayerProfileScreen.tsx` | Remove StatusBar and BottomNav imports/rendering |
| `src/components/screens/SocialFeedScreen.tsx` | Remove StatusBar and BottomNav imports/rendering |
| `src/components/screens/ChallengeScreen.tsx` | Remove StatusBar and BottomNav imports/rendering |
| `src/components/screens/NotificationsScreen.tsx` | Remove StatusBar and BottomNav imports/rendering |
| `src/components/screens/PostEventResultsScreen.tsx` | Remove StatusBar and BottomNav imports/rendering |
| `src/components/screens/ShareCardScreen.tsx` | Verify no BottomNav/StatusBar (already absent) |

### Unchanged Files

| File | Reason |
|------|--------|
| `src/components/PhoneFrame.tsx` | Only used in mockup route |
| `src/components/StatusBar.tsx` | Moved to layout, component itself unchanged |
| `src/components/ScoreRing.tsx` | No routing or layout changes needed |
| `src/app/globals.css` | Design tokens remain the same |
| `next.config.ts` | No configuration changes needed |
| `tsconfig.json` | Path alias already configured |
| `postcss.config.mjs` | Tailwind config unchanged |

---

## 6. Risk Analysis

### Risk 1: Visual Regression When Removing PhoneFrame
- **Likelihood:** High
- **Impact:** Medium
- **Description:** Screens were designed at 375x812px inside PhoneFrame. Removing the frame means screens render at full viewport width, which may cause layout issues on larger screens.
- **Mitigation:** Use `max-w-[430px] mx-auto` on the app layout container. Test visually on common mobile viewport sizes (375px, 390px, 414px, 430px). The mockup gallery at `/mockup` preserves the original PhoneFrame view for comparison.

### Risk 2: StatusBar Behavior on Real Mobile Devices
- **Likelihood:** Medium
- **Impact:** Low
- **Description:** The decorative iOS StatusBar overlaps with the real device status bar on actual phones.
- **Mitigation:** For this SPEC, keep StatusBar in the app layout for visual consistency. Add a CSS class to allow hiding it via `safe-area-inset-top` or `env(safe-area-inset-top)` in a future SPEC. The StatusBar component is isolated and easy to remove later.

### Risk 3: BottomNav Refactoring Breaks Screen Layouts
- **Likelihood:** Medium
- **Impact:** Medium
- **Description:** Removing BottomNav from individual screens and placing it in the shared layout may cause height calculation issues (screens used `h-full` with BottomNav at the bottom).
- **Mitigation:** The `(app)` layout uses a flexbox column structure: StatusBar (fixed) + Content (flex-1, overflow-y-auto) + BottomNav (fixed). Screens only need to fill `flex-1`. Test each screen after refactoring.

### Risk 4: Dynamic Route Params Without Data
- **Likelihood:** Low
- **Impact:** Low
- **Description:** Routes like `/events/[id]` accept a parameter but have no data to fetch. The `id` is unused.
- **Mitigation:** Ignore the param for now. The screen component renders the same hardcoded content regardless of the `id` value. Add a comment in each dynamic route page indicating where data fetching will be added in the future.

### Risk 5: Dual-Mode Screen Components (Mockup vs App)
- **Likelihood:** Medium
- **Impact:** Medium
- **Description:** Screen components need to work both inside the mockup gallery (with PhoneFrame + StatusBar + BottomNav) and in app routes (without these wrappers).
- **Mitigation:** Use the `MockupScreen` wrapper approach. Screen components are refactored once to remove StatusBar/BottomNav. The mockup page uses `MockupScreen` wrapper to re-add these elements. This is a clean one-directional dependency.

### Risk 6: Screens With No StatusBar/BottomNav in Original Design
- **Likelihood:** Low
- **Impact:** Low
- **Description:** Some screens (SplashScreen, RecordScreen, EventDetailScreen, ShareCardScreen) intentionally lack StatusBar or BottomNav. The shared layout must not force these on them.
- **Mitigation:** Auth screens are in a separate route group without BottomNav. RecordScreen and ShareCardScreen paths are excluded from BottomNav rendering via pathname check in the `(app)` layout. EventDetailScreen has its own back-button header, which is fine within the BottomNav layout.

---

## 7. Architectural Notes

### Screen Component Contract (Post-Refactoring)

After this SPEC, each screen component follows this contract:

```
- Receives no layout props (no variant, no standalone)
- Renders only its own content area
- Uses flex-1 to fill available space
- Manages its own scrolling if needed (overflow-y-auto)
- Does NOT render StatusBar or BottomNav
- Does NOT render PhoneFrame
- All hardcoded data remains inline
```

### Layout Hierarchy

```
RootLayout (Server)
  - <html lang="es">
  - <body> with Inter font
  - {children}

(auth)/layout.tsx (Server)
  - Full-screen dark container
  - No StatusBar, no BottomNav
  - {children}

(app)/layout.tsx (Client)
  - max-w-[430px] mx-auto container
  - StatusBar (top, fixed height)
  - {children} (flex-1, scrollable)
  - BottomNav (bottom, fixed height)
  - Conditional: hide BottomNav on /record, /share/* paths

mockup/page.tsx (Server)
  - Grid layout with PhoneFrame wrappers
  - Each screen wrapped in MockupScreen (adds StatusBar + BottomNav)
```

### Navigation Flow (Future Consideration)

This SPEC establishes the routing structure. Future SPECs will add:
- Auth state management (redirect unauthenticated users to `/`)
- Page transitions and animations
- Deep linking support
- Back navigation patterns (especially for detail pages)
- Tab-based navigation history preservation

---

## 8. Implementation Order

The recommended implementation order minimizes broken states:

1. **Create directory structure** (Task 1.1) - No breaking changes
2. **Create layouts** (Tasks 1.2, 1.3, 1.4) - No breaking changes
3. **Refactor BottomNav** (Tasks 2.1, 2.2) - Standalone change
4. **Create MockupScreen wrapper** (from Task 4.2) - Standalone utility
5. **Create mockup route** (Task 4.1) - Preserves current gallery
6. **Refactor screen components** (Task 3.4) - Remove StatusBar/BottomNav
7. **Create route pages** (Tasks 3.1, 3.2, 3.3) - Wire everything up
8. **Update root page.tsx** (redirect or replace) - Final switch
9. **Add responsive styling** (Tasks 5.1, 5.2) - Polish

Each step should result in a buildable, lintable application.

---

## 9. Definition of Done

- All 16 screens accessible via their designated URL paths
- BottomNav reflects active route and navigates correctly between tabs
- `/mockup` route shows the original gallery grid with PhoneFrame wrappers
- No visual regression on mobile viewport (375-430px width)
- `npm run build` completes without errors
- `npm run lint` passes without errors
- No `"use client"` directives added unnecessarily (only where hooks/events are used)
- All existing hardcoded data and visual design preserved exactly

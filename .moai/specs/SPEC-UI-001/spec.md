---
id: SPEC-UI-001
version: "1.0.0"
status: draft
created: "2026-03-14"
updated: "2026-03-14"
author: sebasgona
priority: high
issue_number: 0
---

# SPEC-UI-001: Convert Static Screen Mockups to Functional Next.js App Router Application

**Traceability:** SPEC-UI-001 > spec.md

## HISTORY

| Date | Version | Author | Changes |
|------|---------|--------|---------|
| 2026-03-14 | 1.0.0 | sebasgona | Initial SPEC creation |

---

## 1. Overview

### Problem Statement

The SCORE application currently renders all 16 screen components as static mockups in a single-page grid layout (`src/app/page.tsx`). Each screen is wrapped in a `PhoneFrame` component at a fixed 375x812px viewport and includes its own `StatusBar` and `BottomNav` elements internally. There is no routing, no navigation, and no way for users to interact with the app as a multi-page mobile experience.

This SPEC transforms the static mockup gallery into a fully navigable, mobile-first Next.js App Router application with proper URL-based routing, shared layouts, interactive bottom navigation, and route groups that separate auth and app flows.

### Goals

- Establish a production-ready App Router directory structure with route groups
- Enable interactive navigation between all 16 screens via URL routing
- Refactor screen components to delegate layout concerns (StatusBar, BottomNav) to shared layouts
- Preserve the existing mockup gallery as a reference page at `/mockup`
- Maintain complete visual fidelity with the original screen designs

---

## 2. Environment

### Technology Stack

- **Next.js** v16.1.6 with App Router
- **React** v19.2.3 with Server Components (default)
- **TypeScript** v5.x (strict mode)
- **Tailwind CSS** v4 (PostCSS integration)
- **lucide-react** v0.577.0 for icons

### Existing Architecture

- 16 screen components in `src/components/screens/`
- Shared components: `PhoneFrame`, `StatusBar`, `BottomNav`, `ScoreRing`
- Single `src/app/page.tsx` rendering all screens in a grid
- `BottomNav` uses variant-based configuration (home/coach/events/social/profile/alerts) with no navigation handlers
- All screens contain hardcoded Spanish-language data (no API calls)
- Mobile-first design at 375px viewport width

### Constraints

- No backend, database, or authentication logic exists or will be added in this SPEC
- All screen data remains hardcoded (no dynamic data fetching)
- Spanish (es) is the user-facing language for all screen content
- English for code comments and documentation
- Design tokens defined in `src/app/globals.css` must remain unchanged

---

## 3. Assumptions

- A1: Screen components can be cleanly separated from their StatusBar and BottomNav rendering without breaking internal layout structure
- A2: The BottomNav variant system can be replaced by pathname-based active state detection without loss of visual fidelity
- A3: Removing PhoneFrame wrappers from production routes and using `max-w-[430px]` centering will produce an acceptable mobile-first experience
- A4: All 16 screen components will render correctly as both standalone route pages and within the mockup gallery (via a wrapper component)
- A5: Next.js App Router route groups `(auth)` and `(app)` provide sufficient layout separation for the current screen taxonomy
- A6: Dynamic route parameters (`[id]`) for events and share screens can be accepted but ignored until backend data is available

---

## 4. Requirements

### 4.1 Ubiquitous Requirements

**REQ-U-001:** The application SHALL use Next.js App Router with file-system-based routing for all screen navigation.

**REQ-U-002:** All screen components SHALL render without `PhoneFrame` wrapper in production routes (all routes except `/mockup`).

**REQ-U-003:** The application SHALL maintain the existing visual design of every screen component exactly as it appears in the current mockup gallery.

**REQ-U-004:** All route pages SHALL be Server Components by default, with `"use client"` added only where hooks, event handlers, or browser APIs are required.

**REQ-U-005:** The application SHALL use the `(auth)` and `(app)` route groups to separate authentication flow screens from main application screens.

### 4.2 Event-Driven Requirements

**REQ-E-001:** WHEN a user taps a BottomNav item, THEN the application SHALL navigate to the corresponding route using Next.js `Link` component navigation.

**REQ-E-002:** WHEN a user visits the root path `/`, THEN the application SHALL display the `SplashScreen` component.

**REQ-E-003:** WHEN a user visits `/onboarding`, THEN the application SHALL display the `OnboardingScreen` component.

**REQ-E-004:** WHEN a user visits `/signup`, THEN the application SHALL display the `SignUpScreen` component.

**REQ-E-005:** WHEN a user visits `/home`, THEN the application SHALL display the `HomeScreen` component with the shared `(app)` layout (StatusBar + BottomNav).

**REQ-E-006:** WHEN a user visits `/train`, THEN the application SHALL display the `AICoachScreen` component.

**REQ-E-007:** WHEN a user visits `/record`, THEN the application SHALL display the `RecordScreen` component without BottomNav.

**REQ-E-008:** WHEN a user visits `/results`, THEN the application SHALL display the `AIScoreResultsScreen` component.

**REQ-E-009:** WHEN a user visits `/leaderboard`, THEN the application SHALL display the `LeaderboardScreen` component.

**REQ-E-010:** WHEN a user visits `/events`, THEN the application SHALL display the `EventsScreen` component.

**REQ-E-011:** WHEN a user visits `/events/[id]`, THEN the application SHALL display the `EventDetailScreen` component, accepting the `id` parameter for future use.

**REQ-E-012:** WHEN a user visits `/events/[id]/results`, THEN the application SHALL display the `PostEventResultsScreen` component.

**REQ-E-013:** WHEN a user visits `/profile`, THEN the application SHALL display the `PlayerProfileScreen` component.

**REQ-E-014:** WHEN a user visits `/social`, THEN the application SHALL display the `SocialFeedScreen` component.

**REQ-E-015:** WHEN a user visits `/challenge`, THEN the application SHALL display the `ChallengeScreen` component.

**REQ-E-016:** WHEN a user visits `/notifications`, THEN the application SHALL display the `NotificationsScreen` component.

**REQ-E-017:** WHEN a user visits `/share/[id]`, THEN the application SHALL display the `ShareCardScreen` component without BottomNav.

**REQ-E-018:** WHEN a user visits `/mockup`, THEN the application SHALL display all 16 screen components in a grid gallery layout with `PhoneFrame` wrappers, reproducing the current `page.tsx` behavior.

### 4.3 State-Driven Requirements

**REQ-S-001:** WHILE on any `(app)` route (except `/record` and `/share/*`), the BottomNav SHALL be visible and SHALL highlight the active tab based on the current pathname.

**REQ-S-002:** WHILE on `/record` or `/share/*` paths, the BottomNav SHALL be hidden.

**REQ-S-003:** WHILE on any `(auth)` route (`/`, `/onboarding`, `/signup`), the BottomNav and StatusBar SHALL NOT be rendered.

**REQ-S-004:** WHILE on any `(app)` route, the shared layout SHALL render the StatusBar at the top and the scrollable content area in the middle.

**REQ-S-005:** WHILE on any route, the application container SHALL be constrained to `max-w-[430px]` with horizontal centering for desktop viewability.

### 4.4 Optional Feature Requirements

**REQ-O-001:** WHERE the `/mockup` route is accessed, the application SHALL display all 16 screens in a grid gallery with `PhoneFrame` wrappers, preserving the original mockup gallery experience for design reference.

**REQ-O-002:** WHERE a `MockupScreen` wrapper component exists, it SHALL re-add `StatusBar` and `BottomNav` around screen content so that mockup gallery screens appear self-contained.

### 4.5 Unwanted Behavior Requirements

**REQ-N-001:** IF a screen component is rendered in an `(app)` route, THEN it SHALL NOT render its own `StatusBar` or `BottomNav` (these are provided by the shared layout).

**REQ-N-002:** IF a screen component is rendered in an `(auth)` route, THEN it SHALL NOT render `StatusBar` or `BottomNav` (these are absent from the auth layout).

**REQ-N-003:** The application SHALL NOT break the existing visual design of any screen component during the refactoring process.

**REQ-N-004:** The application SHALL NOT introduce any `"use client"` directive unless the component requires hooks, event handlers, or browser APIs.

**REQ-N-005:** The application SHALL NOT add backend API calls, authentication logic, or dynamic data fetching as part of this SPEC.

**REQ-N-006:** The application SHALL NOT modify the design tokens defined in `src/app/globals.css`.

---

## 5. Specifications

### 5.1 Route Structure

```
src/app/
  layout.tsx                          # Root layout (modified)
  globals.css                         # Design tokens (unchanged)
  (auth)/
    layout.tsx                        # Auth layout: no BottomNav, no StatusBar
    page.tsx                          # / -> SplashScreen
    onboarding/
      page.tsx                        # /onboarding -> OnboardingScreen
    signup/
      page.tsx                        # /signup -> SignUpScreen
  (app)/
    layout.tsx                        # App layout: StatusBar + content + BottomNav
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
    page.tsx                          # /mockup -> Gallery grid (preserved)
```

### 5.2 BottomNav Route Mapping

| Nav Item | Icon | Label | Route | Active When Path Starts With |
|----------|------|-------|-------|------------------------------|
| Home | Home | HOME | `/home` | `/home` |
| Train | Crosshair | ENTRENAR | `/train` | `/train`, `/record`, `/results` |
| Events | Trophy | EVENTS | `/events` | `/events`, `/leaderboard` |
| Social | Users | SOCIAL | `/social` | `/social`, `/challenge` |
| Profile | User | PERFIL | `/profile` | `/profile` |

### 5.3 Component Rendering Strategy

| Component | Production Routes | Mockup Gallery |
|-----------|-------------------|----------------|
| Screen Components | Render content only (no StatusBar, no BottomNav, no PhoneFrame) | Wrapped in MockupScreen (adds StatusBar + BottomNav) + PhoneFrame |
| StatusBar | Rendered in `(app)` layout | Rendered inside MockupScreen wrapper |
| BottomNav | Rendered in `(app)` layout with `usePathname()` active detection | Rendered inside MockupScreen wrapper with variant prop |
| PhoneFrame | Not used | Wraps each MockupScreen in the gallery grid |
| ScoreRing | Unchanged (used within screen components) | Unchanged |

### 5.4 Server vs Client Component Strategy

| Component/Page | Rendering | Reason |
|----------------|-----------|--------|
| Root `layout.tsx` | Server | Static metadata, font loading |
| `(auth)/layout.tsx` | Server | Static wrapper, no interactivity |
| `(app)/layout.tsx` | Client | BottomNav requires `usePathname()` |
| Route page components | Server (default) | Static content, hardcoded data |
| BottomNav (refactored) | Client | Uses `Link`, `usePathname()` |
| StatusBar | Server | Static decorative component |
| ScoreRing | Server | Pure SVG rendering |
| MockupScreen | Server | Static wrapper, no interactivity |

---

## 6. Technical Constraints

- TC-001: Next.js App Router route groups use parenthesized directory names `(auth)` and `(app)` which do not appear in URLs
- TC-002: The `(app)/layout.tsx` must be a client component because `usePathname()` requires the client-side router
- TC-003: Dynamic route segments `[id]` accept any string parameter but will render hardcoded content regardless of value
- TC-004: The `max-w-[430px]` constraint ensures the mobile-first layout looks appropriate on desktop browsers
- TC-005: Each route page should be a thin wrapper that imports and renders its corresponding screen component

---

## 7. Dependencies

- DEP-001: All 16 screen components in `src/components/screens/` (existing)
- DEP-002: `src/components/PhoneFrame.tsx` (existing, used only in mockup route)
- DEP-003: `src/components/StatusBar.tsx` (existing, moved to layout usage)
- DEP-004: `src/components/BottomNav.tsx` (existing, requires major refactoring)
- DEP-005: `src/components/ScoreRing.tsx` (existing, unchanged)
- DEP-006: `src/app/globals.css` (existing, unchanged)
- DEP-007: `lucide-react` icons package (existing dependency)
- DEP-008: `next/link` and `next/navigation` (Next.js built-in modules)

---

## 8. Out of Scope

- OS-001: Backend API or database integration
- OS-002: Authentication and authorization logic
- OS-003: Dynamic data fetching (all data remains hardcoded)
- OS-004: State management library integration
- OS-005: Page transitions or animations
- OS-006: PWA configuration
- OS-007: Testing framework setup
- OS-008: CI/CD pipeline configuration
- OS-009: Deployment configuration
- OS-010: Deep linking or browser history management beyond basic routing
- OS-011: The `alerts` BottomNav variant (different nav items for record/notifications screens) -- deferred to a follow-up SPEC for simplicity

---

## 9. Traceability

| Requirement | Plan Reference | Acceptance Reference |
|-------------|----------------|----------------------|
| REQ-U-001 | plan.md: Section 2.1 | acceptance.md: AC-009, AC-010 |
| REQ-U-002 | plan.md: Section 2.5 | acceptance.md: AC-005 |
| REQ-U-003 | plan.md: Section 7 | acceptance.md: AC-008 |
| REQ-E-001 | plan.md: Task 2.1 | acceptance.md: AC-001 |
| REQ-E-002 | plan.md: Section 3.1 | acceptance.md: AC-003 |
| REQ-E-018 | plan.md: Task 4.1 | acceptance.md: AC-005 |
| REQ-S-001 | plan.md: Section 3.2 | acceptance.md: AC-002 |
| REQ-S-002 | plan.md: Section 3.3 | acceptance.md: AC-007 |
| REQ-N-001 | plan.md: Task 3.4 | acceptance.md: AC-008 |

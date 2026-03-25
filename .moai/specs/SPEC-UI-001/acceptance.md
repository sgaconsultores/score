---
id: SPEC-UI-001
version: "1.0.0"
status: draft
created: "2026-03-14"
updated: "2026-03-14"
author: sebasgona
priority: high
---

# SPEC-UI-001: Acceptance Criteria

**Traceability:** SPEC-UI-001 > acceptance.md

---

## Acceptance Criteria

### AC-001: BottomNav Navigates Between Main Routes

**Related Requirements:** REQ-E-001, REQ-S-001

```gherkin
Given the user is on the /home route
When the user taps the "ENTRENAR" item in the BottomNav
Then the application navigates to /train
And the "ENTRENAR" tab is highlighted as active in the BottomNav
And the AICoachScreen content is displayed

Given the user is on the /train route
When the user taps the "EVENTS" item in the BottomNav
Then the application navigates to /events
And the "EVENTS" tab is highlighted as active in the BottomNav
And the EventsScreen content is displayed

Given the user is on the /events route
When the user taps the "SOCIAL" item in the BottomNav
Then the application navigates to /social
And the "SOCIAL" tab is highlighted as active in the BottomNav

Given the user is on the /social route
When the user taps the "PERFIL" item in the BottomNav
Then the application navigates to /profile
And the "PERFIL" tab is highlighted as active in the BottomNav

Given the user is on the /profile route
When the user taps the "HOME" item in the BottomNav
Then the application navigates to /home
And the "HOME" tab is highlighted as active in the BottomNav
```

### AC-002: BottomNav Highlights Correct Active Tab

**Related Requirements:** REQ-S-001

```gherkin
Given the user navigates to /home
Then the "HOME" tab in BottomNav is highlighted with the accent color (--accent: #00FF85)
And all other tabs display in the secondary text color (--text-secondary)

Given the user navigates to /train
Then the "ENTRENAR" tab in BottomNav is highlighted with the accent color
And all other tabs display in the secondary text color

Given the user navigates to /record
Then the "ENTRENAR" tab in BottomNav remains highlighted as the closest parent section
(Note: BottomNav is hidden on /record per REQ-S-002, but the active mapping is /train group)

Given the user navigates to /results
Then the "ENTRENAR" tab in BottomNav is highlighted with the accent color

Given the user navigates to /events
Then the "EVENTS" tab in BottomNav is highlighted with the accent color

Given the user navigates to /events/123
Then the "EVENTS" tab in BottomNav is highlighted with the accent color

Given the user navigates to /leaderboard
Then the "EVENTS" tab in BottomNav is highlighted with the accent color

Given the user navigates to /social
Then the "SOCIAL" tab in BottomNav is highlighted with the accent color

Given the user navigates to /challenge
Then the "SOCIAL" tab in BottomNav is highlighted with the accent color

Given the user navigates to /profile
Then the "PERFIL" tab in BottomNav is highlighted with the accent color

Given the user navigates to /notifications
Then the "PERFIL" tab in BottomNav is highlighted or no tab is active
(Note: /notifications is not directly mapped to a primary nav item)
```

### AC-003: Auth Flow Screens Have No BottomNav

**Related Requirements:** REQ-E-002, REQ-E-003, REQ-E-004, REQ-S-003

```gherkin
Given the user navigates to / (root path)
Then the SplashScreen is displayed
And no BottomNav is visible
And no StatusBar is visible
And the screen occupies the full viewport height

Given the user navigates to /onboarding
Then the OnboardingScreen is displayed
And no BottomNav is visible
And no StatusBar is visible
And the screen occupies the full viewport height

Given the user navigates to /signup
Then the SignUpScreen is displayed
And no BottomNav is visible
And no StatusBar is visible
And the screen occupies the full viewport height
```

### AC-004: Dynamic Routes Accept [id] Parameters

**Related Requirements:** REQ-E-011, REQ-E-012, REQ-E-017

```gherkin
Given the user navigates to /events/event-001
Then the EventDetailScreen is displayed
And the page renders without errors
And the hardcoded event content is shown regardless of the id value

Given the user navigates to /events/event-001/results
Then the PostEventResultsScreen is displayed
And the page renders without errors
And the hardcoded results content is shown regardless of the id value

Given the user navigates to /share/result-001
Then the ShareCardScreen is displayed
And the page renders without errors
And the hardcoded share card content is shown regardless of the id value
And no BottomNav is visible
```

### AC-005: Mockup Gallery Shows All 16 Screens With PhoneFrame

**Related Requirements:** REQ-E-018, REQ-O-001, REQ-O-002

```gherkin
Given the user navigates to /mockup
Then all 16 screen components are displayed in a grid layout
And each screen is wrapped in a PhoneFrame component at 375x812px
And each screen shows its own StatusBar and BottomNav inside the PhoneFrame
And the gallery title "SCORE" and subtitle "Tu Juego. Tu Nivel. -- Mockups" are displayed
And the screens appear in the same order as the original page.tsx:
  | Position | Label               | Component               |
  | 01       | Splash              | SplashScreen            |
  | 02       | Onboarding          | OnboardingScreen        |
  | 03       | Sign Up             | SignUpScreen             |
  | 04       | Home                | HomeScreen              |
  | 05       | AI Coach            | AICoachScreen           |
  | 06       | Grabar              | RecordScreen            |
  | 07       | AI Score            | AIScoreResultsScreen    |
  | 08       | Leaderboard         | LeaderboardScreen       |
  | 09       | Eventos             | EventsScreen            |
  | 10       | Evento Detalle      | EventDetailScreen       |
  | 11       | Perfil              | PlayerProfileScreen     |
  | 12       | Social Feed         | SocialFeedScreen        |
  | 13       | 1v1 Challenge       | ChallengeScreen         |
  | 14       | Notificaciones      | NotificationsScreen     |
  | 15       | Post-Event          | PostEventResultsScreen  |
  | 16       | Share Card          | ShareCardScreen         |
```

### AC-006: Responsive Rendering at Mobile Widths

**Related Requirements:** REQ-S-005

```gherkin
Given the browser viewport width is 375px (iPhone SE/11 size)
When the user navigates to any (app) route
Then the screen content fills the full viewport width
And the BottomNav spans the full viewport width
And no horizontal scrollbar appears
And all text, icons, and layout elements are properly sized

Given the browser viewport width is 430px (iPhone 14 Pro Max size)
When the user navigates to any (app) route
Then the screen content fills the full viewport width
And the BottomNav spans the full viewport width
And no horizontal scrollbar appears
And the layout renders without visual overflow
```

### AC-007: BottomNav Hidden on /record and /share/* Routes

**Related Requirements:** REQ-S-002, REQ-E-007, REQ-E-017

```gherkin
Given the user navigates to /record
Then the RecordScreen is displayed
And the BottomNav is NOT visible
And the StatusBar is visible (part of the app layout)
And the screen content fills the space that BottomNav would normally occupy

Given the user navigates to /share/any-id
Then the ShareCardScreen is displayed
And the BottomNav is NOT visible
And the screen content fills the available area
```

### AC-008: Screen Content Preserved After Refactoring

**Related Requirements:** REQ-U-003, REQ-N-001, REQ-N-003

```gherkin
Given the HomeScreen component has been refactored to remove internal StatusBar and BottomNav
When the user navigates to /home
Then all content elements are present: greeting text, score ring, training card, challenges section, leaderboard preview
And the visual styling matches the original mockup (colors, spacing, typography)
And no content is missing or displaced

Given the AICoachScreen component has been refactored
When the user navigates to /train
Then all content elements are present: weekly plan, sessions list, active challenges
And the visual styling matches the original mockup

Given the LeaderboardScreen component has been refactored
When the user navigates to /leaderboard
Then all content elements are present: podium, ranking tabs (city/national/friends), player list
And the visual styling matches the original mockup

Given the SocialFeedScreen component has been refactored
When the user navigates to /social
Then all content elements are present: stories rail, post cards with reactions
And the visual styling matches the original mockup

Given the EventsScreen component has been refactored
When the user navigates to /events
Then all content elements are present: event cards with categories, capacity info
And the visual styling matches the original mockup

Given the PlayerProfileScreen component has been refactored
When the user navigates to /profile
Then all content elements are present: profile header, stats, activity/challenges/events tabs
And the visual styling matches the original mockup

Given the NotificationsScreen component has been refactored
When the user navigates to /notifications
Then all content elements are present: notification list with unread/read states
And the visual styling matches the original mockup

Given the ChallengeScreen component has been refactored
When the user navigates to /challenge
Then all content elements are present: challenge card with player info, reputation stakes
And the visual styling matches the original mockup

Given the AIScoreResultsScreen component has been refactored
When the user navigates to /results
Then all content elements are present: score ring, metric breakdown, coach feedback
And the visual styling matches the original mockup
```

### AC-009: Build Succeeds Without Errors

**Related Requirements:** REQ-U-001, REQ-N-004

```gherkin
Given all route pages, layouts, and refactored components are in place
When the command "npm run build" is executed
Then the build process completes successfully with exit code 0
And no TypeScript type errors are reported
And all route pages are pre-rendered or marked for dynamic rendering as appropriate
And the build output shows all expected routes
```

### AC-010: Lint Passes Without Errors

**Related Requirements:** REQ-U-004, REQ-N-004

```gherkin
Given all source files have been created or modified
When the command "npm run lint" is executed
Then the lint process completes with zero errors
And zero warnings related to unused imports, missing types, or invalid patterns
And all "use client" directives are placed only where required
```

---

## Edge Cases

### EC-001: Direct URL Access to Any Route

```gherkin
Given the user enters /events/some-random-id directly in the browser address bar
Then the EventDetailScreen renders with hardcoded content
And no 404 error is displayed
And the BottomNav shows "EVENTS" as the active tab

Given the user enters /share/any-value directly in the browser address bar
Then the ShareCardScreen renders with hardcoded content
And no 404 error is displayed
And no BottomNav is visible
```

### EC-002: Browser Back/Forward Navigation

```gherkin
Given the user navigates from /home to /events via BottomNav
When the user clicks the browser back button
Then the application navigates back to /home
And the "HOME" tab is highlighted as active in the BottomNav

Given the user navigates from /home to /train to /events
When the user clicks the browser back button twice
Then the application navigates back to /home
And the BottomNav reflects /home as the active route
```

### EC-003: Desktop Viewport (Width > 430px)

```gherkin
Given the browser viewport width is 1024px (desktop)
When the user navigates to any (app) route
Then the screen content is centered horizontally
And the content area is constrained to a maximum width of 430px
And the BottomNav is constrained within the max-width container
And the background outside the content area is visible

Given the browser viewport width is 1440px (large desktop)
When the user navigates to /mockup
Then the gallery grid displays multiple PhoneFrame cards per row
And the layout is visually appropriate for the wide viewport
```

### EC-004: Non-Existent Routes

```gherkin
Given the user navigates to /nonexistent
Then the Next.js default 404 page is displayed
And no application crash occurs
```

### EC-005: Root Path Behavior

```gherkin
Given the user navigates to /
Then the SplashScreen is displayed within the (auth) layout
And no BottomNav or StatusBar is rendered
And the URL remains as / (no redirect occurs)
```

---

## Quality Gates

### QG-001: Zero TypeScript Errors

- `npx tsc --noEmit` exits with code 0
- No type assertions (`as any`) introduced during refactoring
- All props and component types are explicitly typed

### QG-002: Zero ESLint Errors

- `npm run lint` exits with code 0
- No `@ts-ignore` or `eslint-disable` comments added
- All imports are valid and used

### QG-003: Successful Production Build

- `npm run build` exits with code 0
- All route pages compile without errors
- No build warnings related to route conflicts or missing components

### QG-004: Visual Fidelity

- All 16 screens are visually identical to their mockup versions when compared at 375px width
- The `/mockup` gallery route produces the exact same visual output as the current `page.tsx`
- No design tokens or CSS custom properties have been modified

### QG-005: Minimal Client Components

- `"use client"` directive present only on components that use:
  - `usePathname()` (BottomNav, `(app)/layout.tsx`)
  - `useState`, `useEffect`, or other React hooks
  - Browser event handlers (`onClick`, `onChange`, etc.)
- All route page files remain Server Components unless they contain interactive elements

### QG-006: Route Coverage

- All 16 screens are accessible via their designated URL paths
- The `/mockup` route displays all 16 screens in the gallery grid
- Total route count: 18 unique URL patterns (16 screen routes + `/mockup` + `/`)

---

## Definition of Done

- [ ] All 16 screens accessible via their designated URL paths
- [ ] BottomNav reflects active route and navigates correctly between all 5 tabs
- [ ] BottomNav hidden on `/record` and `/share/*` routes
- [ ] Auth flow screens (`/`, `/onboarding`, `/signup`) have no BottomNav or StatusBar
- [ ] `/mockup` route shows the original gallery grid with PhoneFrame wrappers
- [ ] No visual regression on mobile viewport (375-430px width)
- [ ] `npm run build` completes with exit code 0
- [ ] `npm run lint` passes with zero errors
- [ ] No unnecessary `"use client"` directives
- [ ] All existing hardcoded data and visual design preserved exactly
- [ ] `src/app/globals.css` design tokens unchanged
- [ ] Dynamic routes (`/events/[id]`, `/share/[id]`) accept parameters without errors

import { PhoneFrame } from "@/components/PhoneFrame";
import { StatusBar } from "@/components/StatusBar";
import { SplashScreen } from "@/components/screens/SplashScreen";
import { OnboardingScreen } from "@/components/screens/OnboardingScreen";
import { SignUpScreen } from "@/components/screens/SignUpScreen";
import { HomeScreen } from "@/components/screens/HomeScreen";
import { AICoachScreen } from "@/components/screens/AICoachScreen";
import { RecordScreen } from "@/components/screens/RecordScreen";
import { AIScoreResultsScreen } from "@/components/screens/AIScoreResultsScreen";
import { LeaderboardScreen } from "@/components/screens/LeaderboardScreen";
import { EventsScreen } from "@/components/screens/EventsScreen";
import { EventDetailScreen } from "@/components/screens/EventDetailScreen";
import { PlayerProfileScreen } from "@/components/screens/PlayerProfileScreen";
import { SocialFeedScreen } from "@/components/screens/SocialFeedScreen";
import { ChallengeScreen } from "@/components/screens/ChallengeScreen";
import { NotificationsScreen } from "@/components/screens/NotificationsScreen";
import { PostEventResultsScreen } from "@/components/screens/PostEventResultsScreen";
import { ShareCardScreen } from "@/components/screens/ShareCardScreen";

import { Home, Crosshair, Trophy, Users, User, CirclePlus, Bell } from "lucide-react";

/* BottomNav variant configs (restored original per-screen variants) */
const navConfigs = {
  home: [
    { icon: Home, label: "HOME", active: true },
    { icon: Crosshair, label: "ENTRENAR" },
    { icon: Trophy, label: "EVENTS" },
    { icon: Users, label: "SOCIAL" },
    { icon: User, label: "PERFIL" },
  ],
  coach: [
    { icon: Home, label: "HOME" },
    { icon: Crosshair, label: "ENTRENAR", active: true },
    { icon: Trophy, label: "EVENTS" },
    { icon: Users, label: "SOCIAL" },
    { icon: User, label: "PERFIL" },
  ],
  events: [
    { icon: Home, label: "HOME" },
    { icon: Crosshair, label: "ENTRENAR" },
    { icon: Trophy, label: "EVENTS", active: true },
    { icon: Users, label: "SOCIAL" },
    { icon: User, label: "PERFIL" },
  ],
  social: [
    { icon: Home, label: "HOME" },
    { icon: Crosshair, label: "ENTRENAR" },
    { icon: Trophy, label: "EVENTS" },
    { icon: Users, label: "SOCIAL", active: true },
    { icon: User, label: "PERFIL" },
  ],
  profile: [
    { icon: Home, label: "HOME" },
    { icon: Crosshair, label: "ENTRENAR" },
    { icon: Trophy, label: "EVENTS" },
    { icon: Users, label: "SOCIAL" },
    { icon: User, label: "PERFIL", active: true },
  ],
  alerts: [
    { icon: Home, label: "INICIO" },
    { icon: Trophy, label: "RANKING" },
    { icon: CirclePlus, label: "GRABAR", accent: true },
    { icon: Bell, label: "ALERTAS", active: true },
    { icon: User, label: "PERFIL" },
  ],
} as const;

type NavVariant = keyof typeof navConfigs;

function MockupBottomNav({ variant }: { variant: NavVariant }) {
  const items = navConfigs[variant];
  return (
    <div className="flex items-center justify-around h-[64px] bg-[var(--surface)] border-t border-[var(--border)] shrink-0">
      {items.map((item) => {
        const Icon = item.icon;
        const isActive = "active" in item && item.active;
        const isAccent = "accent" in item && item.accent;
        const color = isActive || isAccent ? "var(--accent)" : "var(--text-secondary)";
        return (
          <div key={item.label} className="flex flex-col items-center justify-center gap-1">
            <Icon size={isAccent ? 28 : 22} color={color} strokeWidth={1.5} />
            <span
              className="text-[10px] font-medium tracking-wider"
              style={{ color }}
            >
              {item.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}

/* Screen config: maps each screen to its shell (StatusBar/BottomNav) */
type ScreenConfig = {
  component: React.ComponentType;
  label: string;
  statusBar?: boolean;
  bottomNav?: NavVariant;
};

const screens: ScreenConfig[] = [
  { component: SplashScreen, label: "01 -- Splash" },
  { component: OnboardingScreen, label: "02 -- Onboarding" },
  { component: SignUpScreen, label: "03 -- Sign Up", statusBar: true },
  { component: HomeScreen, label: "04 -- Home", statusBar: true, bottomNav: "home" },
  { component: AICoachScreen, label: "05 -- AI Coach", statusBar: true, bottomNav: "coach" },
  { component: RecordScreen, label: "06 -- Grabar" },
  { component: AIScoreResultsScreen, label: "07 -- AI Score", statusBar: true },
  { component: LeaderboardScreen, label: "08 -- Leaderboard", statusBar: true, bottomNav: "events" },
  { component: EventsScreen, label: "09 -- Eventos", statusBar: true, bottomNav: "events" },
  { component: EventDetailScreen, label: "10 -- Evento Detalle" },
  { component: PlayerProfileScreen, label: "11 -- Perfil", statusBar: true, bottomNav: "profile" },
  { component: SocialFeedScreen, label: "12 -- Social Feed", statusBar: true, bottomNav: "social" },
  { component: ChallengeScreen, label: "13 -- 1v1 Challenge" },
  { component: NotificationsScreen, label: "14 -- Notificaciones", statusBar: true, bottomNav: "alerts" },
  { component: PostEventResultsScreen, label: "15 -- Post-Event", statusBar: true },
  { component: ShareCardScreen, label: "16 -- Share Card" },
];

export default function MockupGallery() {
  return (
    <div className="min-h-screen bg-[#080808] py-16 px-8">
      <div className="max-w-[1800px] mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-black text-[var(--accent)] tracking-tight">
            SCORE
          </h1>
          <p className="text-[var(--text-secondary)] mt-3 text-lg">
            Tu Juego. Tu Nivel. -- Mockups
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-10">
          {screens.map(({ component: Screen, label, statusBar, bottomNav }) => (
            <PhoneFrame key={label} label={label}>
              <div className="flex flex-col w-full h-full overflow-hidden">
                {statusBar && <StatusBar />}
                <div className="flex-1 overflow-y-auto flex flex-col">
                  <Screen />
                </div>
                {bottomNav && <MockupBottomNav variant={bottomNav} />}
              </div>
            </PhoneFrame>
          ))}
        </div>
      </div>
    </div>
  );
}

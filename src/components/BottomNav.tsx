"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Crosshair, Trophy, Users, User } from "lucide-react";

const navItems = [
  { icon: Home, label: "HOME", href: "/home", activePaths: ["/home"] },
  {
    icon: Crosshair,
    label: "ENTRENAR",
    href: "/train",
    activePaths: ["/train", "/record", "/results"],
  },
  {
    icon: Trophy,
    label: "EVENTS",
    href: "/events",
    activePaths: ["/events", "/leaderboard"],
  },
  {
    icon: Users,
    label: "SOCIAL",
    href: "/social",
    activePaths: ["/social", "/challenge"],
  },
  {
    icon: User,
    label: "PERFIL",
    href: "/profile",
    activePaths: ["/profile", "/notifications"],
  },
] as const;

export function BottomNav() {
  const pathname = usePathname();

  return (
    <div className="flex items-center justify-around h-[64px] bg-[var(--surface)] border-t border-[var(--border)] shrink-0">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = item.activePaths.some((p) => pathname.startsWith(p));
        const color = isActive ? "var(--accent)" : "var(--text-secondary)";
        return (
          <Link
            key={item.label}
            href={item.href}
            className="flex flex-col items-center justify-center gap-1"
          >
            <Icon size={22} color={color} strokeWidth={1.5} />
            <span
              className="text-[10px] font-medium tracking-wider"
              style={{ color }}
            >
              {item.label}
            </span>
          </Link>
        );
      })}
    </div>
  );
}

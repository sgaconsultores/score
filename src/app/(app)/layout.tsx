"use client";

import { usePathname } from "next/navigation";
import { StatusBar } from "@/components/StatusBar";
import { BottomNav } from "@/components/BottomNav";

const HIDE_NAV_PATTERNS = ["/record", "/share/"];

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hideNav = HIDE_NAV_PATTERNS.some((p) => pathname.startsWith(p));

  return (
    <div className="min-h-screen bg-[var(--bg)] flex flex-col max-w-[430px] mx-auto">
      <StatusBar />
      <main className="flex-1 overflow-y-auto">{children}</main>
      {!hideNav && <BottomNav />}
    </div>
  );
}

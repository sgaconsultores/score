import { Sparkles, Swords, TrendingUp, Calendar } from "lucide-react";

export function NotificationsScreen() {
  return (
    <div className="flex-1 flex flex-col overflow-y-auto bg-[var(--bg)]">

      {/* Header */}
      <div className="flex items-center justify-between px-5 h-[44px] shrink-0">
        <h1 className="text-[24px] font-bold text-[var(--text-primary)]">
          Notificaciones
        </h1>
        <button className="text-[14px] font-medium" style={{ color: "var(--accent)" }}>
          Marcar todo le&iacute;do
        </button>
      </div>

      {/* Notification list */}
      <div className="flex-1 overflow-y-auto">
        <div className="flex flex-col">
          {/* Notification 1 - Unread */}
          <NotificationRow
            iconBg="rgba(0,255,133,0.15)"
            iconColor="var(--accent)"
            icon={Sparkles}
            title="Tu video del reto fue analizado"
            subtitle="Score: 84/100 — Muy bueno"
            time="2h"
            unread
          />

          <Divider />

          {/* Notification 2 - Unread */}
          <NotificationRow
            iconBg="rgba(255,69,58,0.15)"
            iconColor="var(--error)"
            icon={Swords}
            title="@pablo_gzz te retó 1v1"
            subtitle="Control en 10 toques · Acepta antes de 24h"
            time="5h"
            unread
          />

          <Divider />

          {/* Notification 3 - Read */}
          <NotificationRow
            iconBg="rgba(255,215,0,0.15)"
            iconColor="var(--gold)"
            icon={TrendingUp}
            title="Subiste al #41 en Puebla"
            subtitle="+2 posiciones esta semana"
            time="1d"
            read
          />

          <Divider />

          {/* Notification 4 - Read */}
          <NotificationRow
            iconBg="var(--surface-elevated)"
            iconColor="var(--text-secondary)"
            icon={Calendar}
            title="SCORE Puebla — 8 lugares restantes"
            subtitle="El evento es en 5 días"
            time="2d"
            read
          />
        </div>
      </div>

    </div>
  );
}

/* ---- Notification Row ---- */

function NotificationRow({
  iconBg,
  iconColor,
  icon: Icon,
  title,
  subtitle,
  time,
  unread = false,
  read = false,
}: {
  iconBg: string;
  iconColor: string;
  icon: React.ComponentType<{ size?: number; color?: string; strokeWidth?: number }>;
  title: string;
  subtitle: string;
  time: string;
  unread?: boolean;
  read?: boolean;
}) {
  return (
    <div
      className="flex items-start gap-3.5 px-5 py-4"
      style={{
        backgroundColor: read ? "var(--bg)" : "var(--surface)",
      }}
    >
      {/* Icon circle */}
      <div
        className="w-[42px] h-[42px] rounded-full flex items-center justify-center shrink-0"
        style={{ backgroundColor: iconBg }}
      >
        <Icon size={20} color={iconColor} strokeWidth={1.5} />
      </div>

      {/* Text */}
      <div className="flex flex-col flex-1 min-w-0">
        <span className="text-[14px] font-bold text-[var(--text-primary)] leading-snug">
          {title}
        </span>
        <span className="text-[13px] text-[var(--text-secondary)] leading-snug mt-0.5">
          {subtitle}
        </span>
      </div>

      {/* Time + unread dot */}
      <div className="flex flex-col items-end gap-2 shrink-0 pt-0.5">
        <span className="text-[12px] text-[var(--text-secondary)]">{time}</span>
        {unread && (
          <div className="w-[8px] h-[8px] rounded-full bg-[var(--accent)]" />
        )}
      </div>
    </div>
  );
}

/* ---- Divider ---- */

function Divider() {
  return (
    <div className="h-px bg-[var(--border)] ml-[72px] mr-5" />
  );
}

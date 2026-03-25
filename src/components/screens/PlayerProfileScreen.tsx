import { BadgeCheck, Clock, ChevronRight } from "lucide-react";

const stats = [
  { label: "Rango", value: "#41" },
  { label: "Score Prom.", value: "78" },
  { label: "Racha", value: "6" },
] as const;

const tabs = ["Actividad", "Retos", "Eventos", "Stats"] as const;
const activeTab = "Actividad";

export function PlayerProfileScreen() {
  return (
    <div className="flex-1 flex flex-col overflow-y-auto bg-[var(--bg)]">

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto pb-4">
        {/* Profile header */}
        <div className="flex flex-col items-center pt-4 pb-5 px-5">
          {/* Avatar */}
          <div
            className="w-[88px] h-[88px] rounded-full overflow-hidden mb-3"
            style={{
              border: "3px solid var(--accent)",
              boxShadow: "0 0 20px rgba(0,255,133,0.2)",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Verified badge */}
          <span
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase mb-2.5"
            style={{
              color: "var(--accent)",
              backgroundColor: "rgba(0,255,133,0.12)",
              border: "1px solid rgba(0,255,133,0.2)",
            }}
          >
            <BadgeCheck size={12} />
            SCORE Verified
          </span>

          {/* Name */}
          <h1 className="text-[22px] font-bold text-[var(--text-primary)] leading-tight mb-0.5">
            Sebasti&aacute;n Gonz&aacute;lez
          </h1>
          <span className="text-[14px] text-[var(--text-secondary)] mb-1">
            @sebas_gzz
          </span>
          <span className="text-[13px] text-[var(--text-secondary)]">
            MID &middot; Puebla
          </span>
        </div>

        {/* Stats strip */}
        <div className="flex items-stretch gap-2.5 px-4 mb-5">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex-1 flex flex-col items-center justify-center rounded-xl py-3.5 bg-[var(--surface)] border border-[var(--border)]"
            >
              <span className="text-[22px] font-black text-[var(--text-primary)] leading-none mb-1">
                {stat.value}
              </span>
              <span className="text-[10px] font-semibold tracking-wider text-[var(--text-secondary)] uppercase">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Tab bar */}
        <div className="flex items-center gap-0 px-4 mb-4 border-b border-[var(--border)]">
          {tabs.map((tab) => {
            const isActive = tab === activeTab;
            return (
              <button
                key={tab}
                className="flex-1 pb-3 text-center text-[13px] font-semibold transition-colors relative"
                style={{
                  color: isActive ? "var(--accent)" : "var(--text-secondary)",
                }}
              >
                {tab}
                {isActive && (
                  <div
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-[60%] rounded-full"
                    style={{ backgroundColor: "var(--accent)" }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Activity feed */}
        <div className="px-4">
          {/* Activity label */}
          <div className="flex items-center gap-2 mb-3">
            <Clock size={14} color="var(--accent)" strokeWidth={1.5} />
            <span className="text-[12px] font-semibold text-[var(--accent)]">
              Reto completado &middot; hace 3h
            </span>
          </div>

          {/* Activity card */}
          <div className="rounded-2xl bg-[var(--surface)] border border-[var(--border)] overflow-hidden">
            {/* Thumbnail */}
            <div className="relative w-full h-[160px]">
              <img
                src="https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=800&q=80"
                alt="Soccer drill"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 50%)",
                }}
              />
              {/* Score overlay */}
              <div className="absolute bottom-3 left-4 flex items-center gap-2">
                <span
                  className="text-[28px] font-black leading-none"
                  style={{
                    color: "var(--accent)",
                    textShadow: "0 0 16px rgba(0,255,133,0.4)",
                  }}
                >
                  84
                </span>
                <span className="text-[14px] font-medium text-[var(--text-secondary)]">
                  /100
                </span>
              </div>
            </div>

            {/* Card content */}
            <div className="flex items-center justify-between px-4 py-3.5">
              <div className="flex flex-col">
                <span className="text-[15px] font-semibold text-[var(--text-primary)]">
                  Control &mdash; 84/100
                </span>
                <span className="text-[12px] text-[var(--text-secondary)]">
                  Reto semanal &middot; Video analizado por IA
                </span>
              </div>
              <ChevronRight size={18} color="var(--text-secondary)" strokeWidth={1.5} />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

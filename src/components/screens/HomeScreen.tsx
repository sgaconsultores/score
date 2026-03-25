import { Bell, Heart, MessageCircle, Play, Swords } from "lucide-react";

export function HomeScreen() {
  return (
    <div className="flex-1 flex flex-col overflow-y-auto bg-[var(--bg)]">

      {/* Top bar */}
      <div className="flex items-center justify-between px-5 h-[44px] shrink-0">
        {/* Left: logo */}
        <div className="flex items-center gap-2">
          <svg
            width="20"
            height="24"
            viewBox="0 0 56 70"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M32.5 2L6 38h18.5L20 68l30-40H30.5L32.5 2Z"
              fill="var(--accent)"
            />
          </svg>
          <span className="text-[18px] font-black text-[var(--text-primary)] tracking-[0.12em]">
            SCORE
          </span>
        </div>

        {/* Right: bell + avatar */}
        <div className="flex items-center gap-3.5">
          <div className="relative">
            <Bell
              size={22}
              color="var(--text-secondary)"
              strokeWidth={1.5}
            />
            <div className="absolute -top-0.5 -right-0.5 w-[8px] h-[8px] rounded-full bg-[var(--error)] border-2 border-[var(--bg)]" />
          </div>
          <div className="w-[32px] h-[32px] rounded-full overflow-hidden border-[1.5px] border-[var(--accent)]">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80"
              alt="Avatar"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto">
        {/* Hero card */}
        <div className="mx-4 mt-3 rounded-2xl overflow-hidden border border-[var(--border)]"
          style={{
            background:
              "linear-gradient(135deg, var(--surface) 0%, rgba(0,255,133,0.06) 100%)",
          }}
        >
          <div className="p-5">
            {/* Green pill */}
            <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold tracking-wider text-[var(--accent)] mb-3 uppercase"
              style={{
                backgroundColor: "rgba(0,255,133,0.12)",
                border: "1px solid rgba(0,255,133,0.2)",
              }}
            >
              Challenge activo
            </span>

            {/* Title */}
            <h2 className="text-[22px] font-bold text-[var(--text-primary)] leading-tight mb-2">
              Reto de la Semana
            </h2>

            {/* Description */}
            <p className="text-[13px] text-[var(--text-secondary)] leading-relaxed mb-4">
              Graba 3 pases filtrados en un partido real y sube tu video para
              an&aacute;lisis de IA.
            </p>

            {/* Stats row */}
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-1.5">
                <div className="w-[6px] h-[6px] rounded-full bg-[var(--accent)]" />
                <span className="text-[12px] text-[var(--text-secondary)]">
                  4 d&iacute;as restantes
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-[6px] h-[6px] rounded-full bg-[var(--gold)]" />
                <span className="text-[12px] text-[var(--text-secondary)]">
                  847 jugadores
                </span>
              </div>
            </div>

            {/* CTA button */}
            <button
              className="w-full h-[44px] rounded-xl font-semibold text-[14px] text-[var(--accent)] transition-all active:scale-[0.98]"
              style={{
                backgroundColor: "rgba(0,255,133,0.1)",
                border: "1px solid rgba(0,255,133,0.25)",
              }}
            >
              Subir mi video
            </button>
          </div>
        </div>

        {/* Tu semana section */}
        <div className="mt-6 px-4">
          <h3 className="text-[16px] font-bold text-[var(--text-primary)] mb-3">
            Tu semana
          </h3>
          <div className="flex items-stretch gap-2.5">
            {/* Rango Ciudad */}
            <StatCard label="RANGO CIUDAD" value="#43" accent={false} />
            {/* Racha */}
            <StatCard label="RACHA" value="6" unit="semanas" accent={false} />
            {/* Score IA */}
            <StatCard label="SCORE IA" value="78" unit="/100" accent />
          </div>
        </div>

        {/* Comunidad section */}
        <div className="mt-6 px-4 pb-4">
          <h3 className="text-[16px] font-bold text-[var(--text-primary)] mb-3">
            Comunidad
          </h3>

          {/* Post card */}
          <div className="rounded-2xl bg-[var(--surface)] border border-[var(--border)] overflow-hidden">
            {/* Post header */}
            <div className="flex items-center gap-3 px-4 pt-4 pb-3">
              <div className="w-[36px] h-[36px] rounded-full overflow-hidden shrink-0 bg-[var(--surface-elevated)]">
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80"
                  alt="carlos_mtz"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="text-[14px] font-semibold text-[var(--text-primary)]">
                    carlos_mtz
                  </span>
                  <span
                    className="text-[10px] font-bold tracking-wider px-1.5 py-0.5 rounded"
                    style={{
                      color: "var(--accent)",
                      backgroundColor: "rgba(0,255,133,0.1)",
                    }}
                  >
                    MID
                  </span>
                </div>
                <span className="text-[11px] text-[var(--text-secondary)]">
                  hace 2h
                </span>
              </div>
            </div>

            {/* Video thumbnail */}
            <div className="relative w-full h-[200px] bg-[var(--surface-elevated)]">
              <img
                src="https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=800&q=80"
                alt="Soccer video"
                className="w-full h-full object-cover"
              />
              {/* Gradient overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 50%)",
                }}
              />
              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="w-[48px] h-[48px] rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "var(--overlay)" }}
                >
                  <Play
                    size={22}
                    color="var(--text-primary)"
                    fill="var(--text-primary)"
                    strokeWidth={0}
                  />
                </div>
              </div>
            </div>

            {/* Reactions row */}
            <div className="flex items-center gap-5 px-4 py-3">
              <div className="flex items-center gap-1.5">
                <Heart
                  size={18}
                  color="var(--error)"
                  fill="var(--error)"
                />
                <span className="text-[13px] text-[var(--text-secondary)]">
                  89
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <MessageCircle
                  size={18}
                  color="var(--text-secondary)"
                  strokeWidth={1.5}
                />
                <span className="text-[13px] text-[var(--text-secondary)]">
                  12
                </span>
              </div>
              <div className="flex items-center gap-1.5 ml-auto">
                <Swords
                  size={16}
                  color="var(--accent)"
                  strokeWidth={1.5}
                />
                <span className="text-[13px] font-semibold text-[var(--accent)]">
                  Retar
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

/* ---- Internal stat card ---- */

function StatCard({
  label,
  value,
  unit,
  accent,
}: {
  label: string;
  value: string;
  unit?: string;
  accent: boolean;
}) {
  return (
    <div
      className="flex-1 flex flex-col items-center justify-center rounded-xl py-3.5 border border-[var(--border)]"
      style={{
        backgroundColor: accent
          ? "rgba(0,255,133,0.06)"
          : "var(--surface)",
        borderColor: accent
          ? "rgba(0,255,133,0.2)"
          : "var(--border)",
      }}
    >
      <span className="text-[10px] font-semibold tracking-wider text-[var(--text-secondary)] mb-1.5 uppercase">
        {label}
      </span>
      <div className="flex items-baseline gap-0.5">
        <span
          className="text-[22px] font-black leading-none"
          style={{
            color: accent ? "var(--accent)" : "var(--text-primary)",
          }}
        >
          {value}
        </span>
        {unit && (
          <span className="text-[11px] text-[var(--text-secondary)]">
            {unit}
          </span>
        )}
      </div>
    </div>
  );
}

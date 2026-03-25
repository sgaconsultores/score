import {
  ArrowLeft,
  Share2,
  Flame,
  CalendarDays,
  MapPin,
  Users,
  Crosshair,
  Hand,
  Dribbble,
  Zap,
  Trophy,
} from "lucide-react";

const stations = [
  { icon: Crosshair, label: "Disparo", max: 100 },
  { icon: Hand, label: "Control", max: 100 },
  { icon: Dribbble, label: "Regate", max: 100 },
  { icon: Zap, label: "Velocidad", max: 100 },
] as const;

export function EventDetailScreen() {
  return (
    <div className="relative flex flex-col w-full h-full bg-[var(--bg)] overflow-hidden">
      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto pb-[100px]">
        {/* Hero image */}
        <div className="relative w-full h-[280px] shrink-0">
          <img
            src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80"
            alt="Soccer tournament"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, var(--bg) 0%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0.2) 100%)",
            }}
          />

          {/* Top actions */}
          <div className="absolute top-[48px] left-4 right-4 flex items-center justify-between z-10">
            <button
              className="w-[36px] h-[36px] rounded-full flex items-center justify-center"
              style={{
                backgroundColor: "rgba(0,0,0,0.4)",
                backdropFilter: "blur(8px)",
              }}
            >
              <ArrowLeft size={20} color="var(--text-primary)" strokeWidth={1.8} />
            </button>
            <button
              className="w-[36px] h-[36px] rounded-full flex items-center justify-center"
              style={{
                backgroundColor: "rgba(0,0,0,0.4)",
                backdropFilter: "blur(8px)",
              }}
            >
              <Share2 size={18} color="var(--text-primary)" strokeWidth={1.8} />
            </button>
          </div>

          {/* Green pill on hero */}
          <span
            className="absolute bottom-[72px] left-5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold tracking-wider text-[var(--accent)] uppercase z-10"
            style={{
              backgroundColor: "rgba(0,255,133,0.15)",
              border: "1px solid rgba(0,255,133,0.25)",
            }}
          >
            <Flame size={12} />
            Evento destacado
          </span>
        </div>

        {/* Event info */}
        <div className="px-5 -mt-10 relative z-10">
          <h1 className="text-[26px] font-bold text-[var(--text-primary)] leading-tight mb-2">
            SCORE Puebla &mdash; Edici&oacute;n 3
          </h1>

          <div className="flex items-center gap-3 mb-3">
            <div className="flex items-center gap-1.5">
              <CalendarDays size={13} color="var(--text-secondary)" strokeWidth={1.5} />
              <span className="text-[13px] text-[var(--text-secondary)]">
                S&aacute;b 15 Mar, 10:00
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin size={13} color="var(--text-secondary)" strokeWidth={1.5} />
              <span className="text-[13px] text-[var(--text-secondary)]">
                Cancha La Victoria
              </span>
            </div>
          </div>

          {/* Registered counter badge */}
          <span
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[12px] font-semibold mb-5"
            style={{
              color: "var(--accent)",
              backgroundColor: "rgba(0,255,133,0.1)",
              border: "1px solid rgba(0,255,133,0.2)",
            }}
          >
            <Users size={13} />
            24/32 registrados
          </span>

          {/* Info card */}
          <div className="rounded-xl bg-[var(--surface)] border border-[var(--border)] overflow-hidden mb-5">
            <InfoRow
              icon={CalendarDays}
              label="Fecha y hora"
              value="S\u00e1bado 15 Mar, 10:00 \u2013 14:00"
            />
            <div className="h-px bg-[var(--border)] mx-4" />
            <InfoRow
              icon={MapPin}
              label="Ubicaci\u00f3n"
              value="Cancha La Victoria, Puebla"
            />
            <div className="h-px bg-[var(--border)] mx-4" />
            <div className="flex items-center gap-3.5 px-4 py-3.5">
              <div
                className="w-[36px] h-[36px] rounded-full flex items-center justify-center shrink-0"
                style={{ backgroundColor: "rgba(0,255,133,0.1)" }}
              >
                <Users size={17} color="var(--accent)" strokeWidth={1.5} />
              </div>
              <div className="flex flex-col">
                <span className="text-[12px] text-[var(--text-secondary)]">Capacidad</span>
                <span className="text-[14px] font-medium text-[var(--text-primary)]">
                  24/32 llenos &middot;{" "}
                  <span className="text-[var(--accent)]">8 disponibles</span>
                </span>
              </div>
            </div>
          </div>

          {/* Las 4 estaciones */}
          <h3 className="text-[16px] font-bold text-[var(--text-primary)] mb-3">
            Las 4 estaciones
          </h3>
          <div className="grid grid-cols-2 gap-2.5 mb-5">
            {stations.map((station) => {
              const Icon = station.icon;
              return (
                <div
                  key={station.label}
                  className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-[var(--surface)] border border-[var(--border)]"
                >
                  <div
                    className="w-[44px] h-[44px] rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "rgba(0,255,133,0.1)" }}
                  >
                    <Icon size={22} color="var(--accent)" strokeWidth={1.5} />
                  </div>
                  <span className="text-[14px] font-semibold text-[var(--text-primary)]">
                    {station.label}
                  </span>
                  <span className="text-[11px] text-[var(--text-secondary)]">
                    Max: {station.max} pts
                  </span>
                </div>
              );
            })}
          </div>

          {/* Prize card */}
          <div
            className="rounded-xl bg-[var(--surface)] border border-[var(--border)] p-4 mb-4"
            style={{ borderLeft: "3px solid var(--gold)" }}
          >
            <div className="flex items-center gap-2 mb-2">
              <Trophy size={18} color="var(--gold)" strokeWidth={1.5} />
              <h4 className="text-[15px] font-bold text-[var(--gold)]">
                Premios
              </h4>
            </div>
            <p className="text-[13px] text-[var(--text-secondary)] leading-relaxed">
              1er lugar: Jersey oficial + 3 meses premium gratis. Top 5: medalla SCORE verificada en perfil y acceso anticipado a eventos exclusivos.
            </p>
          </div>
        </div>
      </div>

      {/* Sticky bottom CTA */}
      <div
        className="absolute bottom-0 left-0 right-0 px-5 pb-6 pt-4 z-20"
        style={{
          background:
            "linear-gradient(to top, var(--bg) 60%, transparent 100%)",
        }}
      >
        <p className="text-center text-[12px] font-semibold text-[var(--error)] mb-3">
          &#128293; Solo 8 lugares &mdash; &iexcl;casi lleno!
        </p>
        <div className="flex items-center gap-3">
          <div className="flex flex-col items-center shrink-0">
            <span className="text-[11px] text-[var(--text-secondary)]">Precio</span>
            <span className="text-[20px] font-black text-[var(--text-primary)]">
              $200
              <span className="text-[12px] font-medium text-[var(--text-secondary)]"> MXN</span>
            </span>
          </div>
          <button
            className="flex-1 h-[52px] rounded-xl font-bold text-[16px] text-[var(--bg)] transition-all active:scale-[0.98]"
            style={{
              backgroundColor: "var(--accent)",
              boxShadow: "0 0 24px rgba(0,255,133,0.35), 0 0 60px rgba(0,255,133,0.15)",
            }}
          >
            Registrarme ahora
          </button>
        </div>
      </div>
    </div>
  );
}

/* ---- Internal info row ---- */

function InfoRow({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ size?: number; color?: string; strokeWidth?: number }>;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3.5 px-4 py-3.5">
      <div
        className="w-[36px] h-[36px] rounded-full flex items-center justify-center shrink-0"
        style={{ backgroundColor: "rgba(0,255,133,0.1)" }}
      >
        <Icon size={17} color="var(--accent)" strokeWidth={1.5} />
      </div>
      <div className="flex flex-col">
        <span className="text-[12px] text-[var(--text-secondary)]">{label}</span>
        <span className="text-[14px] font-medium text-[var(--text-primary)]">{value}</span>
      </div>
    </div>
  );
}

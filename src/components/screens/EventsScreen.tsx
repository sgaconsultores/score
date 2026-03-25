import {
  Flame,
  CalendarDays,
  MapPin,
  Users,
  Crosshair,
  Hand,
  Dribbble,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";

const categories = [
  { icon: Crosshair, label: "Disparo" },
  { icon: Hand, label: "Control" },
  { icon: Dribbble, label: "Regate" },
] as const;

const steps = [
  {
    num: "1",
    title: "Reg\u00edstrate",
    desc: "Elige un evento cercano y aparta tu lugar con un pago r\u00e1pido.",
  },
  {
    num: "2",
    title: "Compite",
    desc: "Asiste y completa las estaciones de habilidad evaluadas con IA.",
  },
  {
    num: "3",
    title: "Obt\u00e9n tu SCORE",
    desc: "Recibe tu puntaje oficial y compara con jugadores de tu ciudad.",
  },
] as const;

export function EventsScreen() {
  return (
    <div className="flex-1 flex flex-col overflow-y-auto bg-[var(--bg)]">

      {/* Title bar */}
      <div className="flex items-center px-5 h-[44px] shrink-0">
        <h1 className="text-[24px] font-bold text-[var(--text-primary)]">
          SCORE Events
        </h1>
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto pb-4">
        {/* Hero event card */}
        <div className="mx-4 mt-2 rounded-2xl overflow-hidden border border-[var(--border)]">
          <div className="relative w-full h-[220px]">
            <img
              src="https://images.unsplash.com/photo-1508098682722-e99c643e7f0b?w=800&q=80"
              alt="Soccer stadium"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.1) 100%)",
              }}
            />
            <div className="absolute inset-0 flex flex-col justify-end p-5">
              {/* Green pill */}
              <span
                className="inline-flex items-center gap-1.5 self-start px-3 py-1 rounded-full text-[11px] font-bold tracking-wider text-[var(--accent)] mb-3 uppercase"
                style={{
                  backgroundColor: "rgba(0,255,133,0.15)",
                  border: "1px solid rgba(0,255,133,0.25)",
                }}
              >
                <Flame size={12} />
                Evento destacado
              </span>

              <h2 className="text-[20px] font-bold text-[var(--text-primary)] leading-tight mb-2">
                SCORE Puebla &mdash; Edici&oacute;n 3
              </h2>

              <div className="flex items-center gap-3 mb-3">
                <div className="flex items-center gap-1.5">
                  <CalendarDays size={13} color="var(--text-secondary)" strokeWidth={1.5} />
                  <span className="text-[12px] text-[var(--text-secondary)]">
                    S&aacute;b 15 Mar, 10:00
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin size={13} color="var(--text-secondary)" strokeWidth={1.5} />
                  <span className="text-[12px] text-[var(--text-secondary)]">
                    Cancha La Victoria
                  </span>
                </div>
              </div>

              <span
                className="inline-flex items-center gap-1.5 self-start px-3 py-1 rounded-full text-[11px] font-semibold"
                style={{
                  color: "var(--accent)",
                  backgroundColor: "rgba(0,255,133,0.1)",
                }}
              >
                <Users size={12} />
                24/32 registrados
              </span>
            </div>
          </div>
        </div>

        {/* Categories section */}
        <div className="mt-6 px-4">
          <h3 className="text-[16px] font-bold text-[var(--text-primary)] mb-3">
            Categor&iacute;as
          </h3>
          <div className="flex items-stretch gap-2.5">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <div
                  key={cat.label}
                  className="flex-1 flex flex-col items-center justify-center gap-2 rounded-xl py-4 bg-[var(--surface)] border border-[var(--border)]"
                >
                  <div
                    className="w-[40px] h-[40px] rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "rgba(0,255,133,0.1)" }}
                  >
                    <Icon size={20} color="var(--accent)" strokeWidth={1.5} />
                  </div>
                  <span className="text-[13px] font-medium text-[var(--text-primary)]">
                    {cat.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* How it works section */}
        <div className="mt-6 px-4">
          <h3 className="text-[16px] font-bold text-[var(--text-primary)] mb-3">
            &iquest;C&oacute;mo funciona SCORE?
          </h3>
          <div className="flex flex-col gap-3">
            {steps.map((step) => (
              <div
                key={step.num}
                className="flex items-start gap-3.5 p-4 rounded-xl bg-[var(--surface)] border border-[var(--border)]"
              >
                <div
                  className="w-[32px] h-[32px] rounded-full flex items-center justify-center shrink-0 text-[14px] font-bold"
                  style={{
                    color: "var(--accent)",
                    backgroundColor: "rgba(0,255,133,0.12)",
                    border: "1px solid rgba(0,255,133,0.2)",
                  }}
                >
                  {step.num}
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-[14px] font-semibold text-[var(--text-primary)]">
                    {step.title}
                  </span>
                  <span className="text-[12px] text-[var(--text-secondary)] leading-relaxed">
                    {step.desc}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Past events */}
        <div className="mt-6 px-4 pb-2">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-[16px] font-bold text-[var(--text-primary)]">
              Eventos pasados
            </h3>
            <ChevronRight size={18} color="var(--text-secondary)" strokeWidth={1.5} />
          </div>
          <div className="rounded-2xl overflow-hidden border border-[var(--border)] bg-[var(--surface)]">
            <div className="relative w-full h-[140px]">
              <img
                src="https://images.unsplash.com/photo-1529900748604-07564a03e7a6?w=800&q=80"
                alt="Past event"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)",
                }}
              />
              {/* Completado badge */}
              <span
                className="absolute top-3 right-3 inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase"
                style={{
                  color: "var(--text-primary)",
                  backgroundColor: "rgba(255,255,255,0.15)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <CheckCircle2 size={12} />
                Completado
              </span>
            </div>
            <div className="px-4 py-3">
              <h4 className="text-[15px] font-semibold text-[var(--text-primary)] mb-1">
                SCORE Puebla &mdash; Edici&oacute;n 2
              </h4>
              <div className="flex items-center gap-3">
                <span className="text-[12px] text-[var(--text-secondary)]">
                  22 Feb, 2025
                </span>
                <span className="text-[12px] text-[var(--text-secondary)]">
                  32/32 jugadores
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

import {
  ShieldCheck,
  Target,
  Hand,
  Dribbble,
  Timer,
  Share2,
  Download,
  CheckCircle2,
} from "lucide-react";
import { ScoreRing } from "@/components/ScoreRing";

export function PostEventResultsScreen() {
  return (
    <div className="flex-1 flex flex-col overflow-y-auto bg-[var(--bg)]">

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto">
        {/* Hero photo section */}
        <div className="relative h-[200px] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80"
            alt="Soccer event"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Gradient overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(15,15,15,0.4) 0%, var(--bg) 100%)",
            }}
          />

          {/* Pill badge */}
          <div className="absolute top-4 left-0 right-0 flex justify-center z-10">
            <span
              className="px-3 py-1 rounded-full text-[11px] font-bold tracking-wider"
              style={{
                color: "var(--accent)",
                backgroundColor: "rgba(0,255,133,0.12)",
                border: "1px solid rgba(0,255,133,0.2)",
              }}
            >
              SCORE Puebla &middot; Edici&oacute;n 3
            </span>
          </div>

          {/* Completion text */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center z-10">
            <h1 className="text-[22px] font-bold text-[var(--text-primary)] text-center">
              &iexcl;Completaste el evento!
            </h1>
          </div>
        </div>

        {/* Score Ring */}
        <div className="flex flex-col items-center mt-2">
          <ScoreRing score={92} />

          {/* Position text */}
          <p
            className="text-[16px] font-bold mt-3"
            style={{ color: "var(--gold)" }}
          >
            Posici&oacute;n final: #3 de 32
          </p>

          {/* SCORE VERIFIED pill */}
          <div
            className="flex items-center gap-1.5 mt-2.5 px-3.5 py-1.5 rounded-full"
            style={{
              backgroundColor: "rgba(0,255,133,0.1)",
              border: "1px solid rgba(0,255,133,0.25)",
            }}
          >
            <ShieldCheck
              size={14}
              color="var(--accent)"
              strokeWidth={2}
            />
            <span className="text-[12px] font-bold tracking-wider text-[var(--accent)]">
              SCORE VERIFIED
            </span>
          </div>
        </div>

        {/* Station breakdown card */}
        <div className="mx-4 mt-6">
          <div className="rounded-2xl bg-[var(--surface)] border border-[var(--border)] p-4">
            <h3 className="text-[16px] font-bold text-[var(--text-primary)] mb-4">
              Desglose por estaci&oacute;n
            </h3>

            <div className="flex flex-col gap-3.5">
              <StationRow
                icon={Target}
                label="Disparo"
                score={95}
              />
              <StationRow
                icon={Hand}
                label="Control"
                score={90}
              />
              <StationRow
                icon={Dribbble}
                label="Regate"
                score={88}
              />
              <StationRow
                icon={Timer}
                label="Velocidad"
                score={93}
              />
            </div>
          </div>
        </div>

        {/* Share section */}
        <div className="mx-4 mt-5">
          <h3 className="text-[16px] font-bold text-[var(--text-primary)] mb-3">
            Comparte tus resultados
          </h3>

          <div className="flex gap-3">
            {/* Compartir historia */}
            <button
              className="flex-1 h-[44px] rounded-xl font-semibold text-[14px] flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
              style={{
                color: "var(--accent)",
                border: "1.5px solid rgba(0,255,133,0.3)",
                backgroundColor: "transparent",
              }}
            >
              <Share2 size={16} color="var(--accent)" strokeWidth={2} />
              Compartir historia
            </button>

            {/* Descargar imagen */}
            <button
              className="flex-1 h-[44px] rounded-xl font-semibold text-[14px] flex items-center justify-center gap-2 text-[var(--bg)] transition-all active:scale-[0.98]"
              style={{
                backgroundColor: "var(--accent)",
              }}
            >
              <Download size={16} color="var(--bg)" strokeWidth={2} />
              Descargar imagen
            </button>
          </div>
        </div>

        {/* Profile note */}
        <div className="mx-4 mt-5 mb-6">
          <div
            className="flex items-center gap-3 rounded-xl px-4 py-3.5"
            style={{
              backgroundColor: "rgba(0,255,133,0.06)",
              border: "1px solid rgba(0,255,133,0.15)",
            }}
          >
            <CheckCircle2
              size={20}
              color="var(--accent)"
              strokeWidth={2}
            />
            <span className="text-[13px] text-[var(--text-primary)] leading-snug">
              Tu perfil ahora muestra{" "}
              <span className="font-bold text-[var(--accent)]">
                &lsquo;SCORE Verified &middot; Puebla Ed.3&rsquo;
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---- Station Row ---- */

function StationRow({
  icon: Icon,
  label,
  score,
}: {
  icon: React.ComponentType<{ size?: number; color?: string; strokeWidth?: number }>;
  label: string;
  score: number;
}) {
  const barColor =
    score >= 93
      ? "var(--accent)"
      : score >= 90
        ? "var(--accent)"
        : "var(--gold)";

  return (
    <div className="flex items-center gap-3">
      <Icon size={18} color="var(--text-secondary)" strokeWidth={1.5} />
      <span className="text-[13px] text-[var(--text-secondary)] w-[68px] shrink-0">
        {label}
      </span>
      <div className="flex-1 h-[6px] rounded-full bg-[var(--surface-elevated)] overflow-hidden">
        <div
          className="h-full rounded-full transition-all"
          style={{
            width: `${score}%`,
            backgroundColor: barColor,
          }}
        />
      </div>
      <span className="text-[14px] font-bold text-[var(--text-primary)] w-[28px] text-right shrink-0">
        {score}
      </span>
    </div>
  );
}

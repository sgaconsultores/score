import { ArrowLeft, Share2, TrendingUp } from "lucide-react";
import { ScoreRing } from "@/components/ScoreRing";

export function AIScoreResultsScreen() {
  return (
    <div className="flex-1 flex flex-col overflow-y-auto bg-[var(--bg)]">

      {/* Header */}
      <div className="flex items-center gap-3 px-5 h-[44px] shrink-0">
        <ArrowLeft
          size={22}
          color="var(--text-primary)"
          strokeWidth={1.5}
        />
        <h1 className="text-[17px] font-semibold text-[var(--text-primary)]">
          Resultado del reto
        </h1>
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto">
        {/* Score Ring */}
        <div className="flex flex-col items-center mt-4 mb-2">
          <ScoreRing score={84} />
          <span
            className="text-[16px] font-bold mt-2"
            style={{ color: "var(--accent)" }}
          >
            Muy bueno
          </span>
        </div>

        {/* Metrics Breakdown Card */}
        <div className="mx-4 mt-4">
          <h3 className="text-[16px] font-bold text-[var(--text-primary)] mb-3">
            Desglose IA
          </h3>
          <div
            className="rounded-2xl border border-[var(--border)] p-4"
            style={{ backgroundColor: "var(--surface)" }}
          >
            <div className="flex flex-col gap-4">
              <MetricRow label="Posición corporal" value={82} />
              <MetricRow label="Precisión de toque" value={87} />
              <MetricRow label="Ritmo" value={88} />
              <MetricRow label="Equilibrio" value={79} />
            </div>
          </div>
        </div>

        {/* AI Feedback Card */}
        <div className="mx-4 mt-4">
          <div
            className="rounded-2xl border border-[var(--border)] p-4 relative overflow-hidden"
            style={{ backgroundColor: "var(--surface)" }}
          >
            {/* Green left accent border */}
            <div
              className="absolute left-0 top-0 bottom-0 w-[4px] rounded-l-2xl"
              style={{ backgroundColor: "var(--accent)" }}
            />

            <div className="pl-3">
              {/* Label */}
              <span
                className="inline-block text-[10px] font-bold tracking-wider mb-2.5 px-2 py-0.5 rounded"
                style={{
                  color: "var(--accent)",
                  backgroundColor: "rgba(0,255,133,0.1)",
                }}
              >
                FEEDBACK DEL COACH IA
              </span>

              {/* Feedback text */}
              <p className="text-[13px] text-[var(--text-secondary)] leading-relaxed">
                Excelente ejecución en el control del balón. Tu postura corporal
                ha mejorado notablemente respecto a la semana pasada. Para subir
                al siguiente nivel, enfócate en mantener el equilibrio durante
                los giros rápidos y reduce el tiempo entre toque y pase.
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mx-4 mt-5 flex flex-col gap-2.5">
          <button
            className="w-full h-[48px] rounded-xl font-semibold text-[14px] text-[var(--text-primary)] flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
            style={{
              border: "1px solid var(--border)",
              backgroundColor: "transparent",
            }}
          >
            <Share2 size={18} color="var(--text-primary)" strokeWidth={1.5} />
            Compartir resultado
          </button>
          <button
            className="w-full h-[48px] rounded-xl font-semibold text-[14px] text-[var(--bg)] transition-all active:scale-[0.98]"
            style={{ backgroundColor: "var(--accent)" }}
          >
            Ver ranking actualizado
          </button>
        </div>

        {/* Gold rank note */}
        <div className="mx-4 mt-4 mb-6">
          <div
            className="flex items-center gap-2.5 rounded-xl px-4 py-3"
            style={{
              backgroundColor: "rgba(255,215,0,0.08)",
              border: "1px solid rgba(255,215,0,0.2)",
            }}
          >
            <TrendingUp size={18} color="var(--gold)" strokeWidth={2} />
            <span className="text-[13px] font-medium" style={{ color: "var(--gold)" }}>
              Tu nuevo rango: #41 en Puebla (+2 posiciones)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---- Metric Row ---- */

function MetricRow({ label, value }: { label: string; value: number }) {
  const percentage = value;

  return (
    <div className="flex items-center gap-3">
      {/* Label */}
      <span className="text-[13px] text-[var(--text-secondary)] w-[120px] shrink-0">
        {label}
      </span>

      {/* Progress bar */}
      <div className="flex-1 h-[6px] rounded-full bg-[var(--surface-elevated)] overflow-hidden">
        <div
          className="h-full rounded-full"
          style={{
            width: `${percentage}%`,
            backgroundColor: "var(--accent)",
            boxShadow: "0 0 8px rgba(0,255,133,0.3)",
          }}
        />
      </div>

      {/* Score */}
      <span className="text-[14px] font-bold text-[var(--text-primary)] w-[30px] text-right shrink-0">
        {value}
      </span>
    </div>
  );
}

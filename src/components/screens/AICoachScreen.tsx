import {
  Brain,
  CheckCircle2,
  Circle,
  Lock,
  Zap,
  Clock,
  ChevronRight,
} from "lucide-react";

export function AICoachScreen() {
  return (
    <div className="flex-1 flex flex-col overflow-y-auto bg-[var(--bg)]">

      {/* Header */}
      <div className="flex items-center gap-2.5 px-5 h-[44px] shrink-0">
        <Brain size={22} color="var(--accent)" strokeWidth={1.5} />
        <h1 className="text-[20px] font-bold text-[var(--text-primary)]">
          Coach IA
        </h1>
      </div>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto">
        {/* AI Insight Card */}
        <div className="mx-4 mt-3">
          <div
            className="rounded-2xl border border-[var(--border)] p-4 relative overflow-hidden"
            style={{
              backgroundColor: "var(--surface)",
            }}
          >
            {/* Green left accent border */}
            <div
              className="absolute left-0 top-0 bottom-0 w-[4px] rounded-l-2xl"
              style={{ backgroundColor: "var(--accent)" }}
            />

            <div className="pl-3">
              {/* Label */}
              <span
                className="inline-block text-[10px] font-bold tracking-wider mb-2 px-2 py-0.5 rounded"
                style={{
                  color: "var(--accent)",
                  backgroundColor: "rgba(0,255,133,0.1)",
                }}
              >
                ANÁLISIS IA
              </span>

              {/* Title */}
              <h3 className="text-[15px] font-bold text-[var(--text-primary)] leading-snug mb-1.5">
                Tu ritmo mejoró 12% esta semana
              </h3>

              {/* Body */}
              <p className="text-[13px] text-[var(--text-secondary)] leading-relaxed">
                Basado en tus últimos 3 videos, tu control de balón y velocidad
                de reacción muestran progreso constante. Recomendamos enfocarte
                en pases largos esta semana.
              </p>
            </div>
          </div>
        </div>

        {/* Weekly Plan */}
        <div className="mt-6 px-4">
          <h3 className="text-[16px] font-bold text-[var(--text-primary)] mb-3">
            Plan semanal
          </h3>

          <div className="flex flex-col gap-2.5">
            {/* Session 1: Completed */}
            <SessionCard
              icon="done"
              title="Control de balón"
              status="Completado"
              statusColor="var(--accent)"
            />

            {/* Session 2: Pending */}
            <SessionCard
              icon="pending"
              title="Pase largo"
              status="Pendiente"
              statusColor="var(--text-secondary)"
            />

            {/* Session 3: Locked */}
            <SessionCard
              icon="locked"
              title="Tiro de precisión"
              status="Bloqueado"
              statusColor="var(--text-secondary)"
              locked
            />
          </div>
        </div>

        {/* Active Challenges */}
        <div className="mt-6 px-4 pb-4">
          <div className="flex items-center gap-2.5 mb-3">
            <h3 className="text-[16px] font-bold text-[var(--text-primary)]">
              Retos activos
            </h3>
            <span
              className="flex items-center justify-center w-[22px] h-[22px] rounded-full text-[11px] font-bold"
              style={{
                backgroundColor: "rgba(0,255,133,0.15)",
                color: "var(--accent)",
              }}
            >
              3
            </span>
          </div>

          <div className="flex flex-col gap-2.5">
            {/* Challenge 1 */}
            <ChallengeCard
              title="Pase filtrado en partido"
              points={150}
              deadline="4 días restantes"
            />

            {/* Challenge 2 */}
            <ChallengeCard
              title="Control y giro bajo presión"
              points={200}
              deadline="6 días restantes"
            />
          </div>
        </div>
      </div>

    </div>
  );
}

/* ---- Session Card ---- */

function SessionCard({
  icon,
  title,
  status,
  statusColor,
  locked = false,
}: {
  icon: "done" | "pending" | "locked";
  title: string;
  status: string;
  statusColor: string;
  locked?: boolean;
}) {
  return (
    <div
      className="flex items-center gap-3.5 rounded-xl border border-[var(--border)] px-4 py-3.5"
      style={{
        backgroundColor: "var(--surface)",
        opacity: locked ? 0.45 : 1,
      }}
    >
      {/* Icon */}
      {icon === "done" && (
        <CheckCircle2
          size={22}
          color="var(--accent)"
          strokeWidth={1.5}
        />
      )}
      {icon === "pending" && (
        <Circle
          size={22}
          color="var(--text-secondary)"
          strokeWidth={1.5}
        />
      )}
      {icon === "locked" && (
        <Lock
          size={22}
          color="var(--text-secondary)"
          strokeWidth={1.5}
        />
      )}

      {/* Text */}
      <div className="flex flex-col flex-1">
        <span className="text-[14px] font-semibold text-[var(--text-primary)]">
          {title}
        </span>
        <span className="text-[12px] font-medium" style={{ color: statusColor }}>
          {status}
        </span>
      </div>

      {/* Chevron */}
      {!locked && (
        <ChevronRight
          size={18}
          color="var(--text-secondary)"
          strokeWidth={1.5}
        />
      )}
    </div>
  );
}

/* ---- Challenge Card ---- */

function ChallengeCard({
  title,
  points,
  deadline,
}: {
  title: string;
  points: number;
  deadline: string;
}) {
  return (
    <div
      className="flex items-center gap-3.5 rounded-xl border border-[var(--border)] px-4 py-3.5"
      style={{ backgroundColor: "var(--surface)" }}
    >
      {/* Icon */}
      <div
        className="flex items-center justify-center w-[38px] h-[38px] rounded-xl shrink-0"
        style={{ backgroundColor: "rgba(0,255,133,0.1)" }}
      >
        <Zap size={20} color="var(--accent)" strokeWidth={1.5} />
      </div>

      {/* Text */}
      <div className="flex flex-col flex-1 min-w-0">
        <span className="text-[14px] font-semibold text-[var(--text-primary)] truncate">
          {title}
        </span>
        <div className="flex items-center gap-2 mt-0.5">
          <Clock size={12} color="var(--text-secondary)" strokeWidth={1.5} />
          <span className="text-[11px] text-[var(--text-secondary)]">
            {deadline}
          </span>
        </div>
      </div>

      {/* Points */}
      <span
        className="text-[14px] font-bold shrink-0"
        style={{ color: "var(--gold)" }}
      >
        +{points} pts
      </span>
    </div>
  );
}

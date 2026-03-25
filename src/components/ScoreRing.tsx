export function ScoreRing({ score, max = 100, size = 180 }: { score: number; max?: number; size?: number }) {
  const radius = (size - 20) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = (score / max) * circumference;
  const offset = circumference - progress;

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="absolute -rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="var(--surface-elevated)"
          strokeWidth="10"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="var(--accent)"
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{ filter: "drop-shadow(0 0 12px rgba(0,255,133,0.3))" }}
        />
      </svg>
      <div className="flex flex-col items-center z-10">
        <span className="text-[60px] font-black text-[var(--accent)] leading-none">{score}</span>
        <span className="text-[13px] font-medium text-[var(--text-secondary)]">/{max}</span>
      </div>
    </div>
  );
}

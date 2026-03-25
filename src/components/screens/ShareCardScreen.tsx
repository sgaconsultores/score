import { ShieldCheck } from "lucide-react";

export function ShareCardScreen() {
  return (
    <div
      className="relative overflow-hidden"
      style={{
        width: 375,
        height: 667,
        backgroundColor: "var(--bg)",
      }}
    >
      {/* Background pattern - diagonal green lines */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 375 667"
      >
        {/* Subtle repeating diagonal lines */}
        <defs>
          <pattern
            id="diag-lines"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(45)"
          >
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="40"
              stroke="rgba(0,255,133,0.04)"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#diag-lines)" />

        {/* Accent stripes top-right */}
        <line x1="280" y1="0" x2="375" y2="95" stroke="rgba(0,255,133,0.12)" strokeWidth="3" />
        <line x1="300" y1="0" x2="375" y2="75" stroke="rgba(0,255,133,0.08)" strokeWidth="6" />
        <line x1="330" y1="0" x2="375" y2="45" stroke="rgba(0,255,133,0.15)" strokeWidth="2" />
        <line x1="310" y1="0" x2="375" y2="65" stroke="rgba(0,255,133,0.06)" strokeWidth="10" />
        <line x1="350" y1="0" x2="375" y2="25" stroke="rgba(0,255,133,0.1)" strokeWidth="4" />
      </svg>

      {/* Radial green glow behind score */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[10%] w-[300px] h-[300px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(0,255,133,0.12) 0%, transparent 70%)",
        }}
      />

      {/* SCORE logo top-left */}
      <div className="absolute top-5 left-5 z-10">
        <span className="text-[20px] font-black text-[var(--text-primary)] tracking-[0.2em]">
          SCORE
        </span>
      </div>

      {/* Centered content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        {/* Avatar */}
        <div
          className="w-[110px] h-[110px] rounded-full overflow-hidden shrink-0"
          style={{ border: "4px solid var(--accent)" }}
        >
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80"
            alt="@carlos_mx"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Username */}
        <span className="text-[26px] font-bold text-[var(--text-primary)] mt-4">
          @carlos_mx
        </span>

        {/* Massive score number */}
        <span
          className="text-[110px] font-bold leading-none mt-2"
          style={{
            color: "var(--accent)",
            textShadow:
              "0 0 40px rgba(0,255,133,0.4), 0 0 80px rgba(0,255,133,0.2)",
          }}
        >
          84
        </span>

        {/* SCORE label */}
        <span
          className="text-[16px] font-bold tracking-[0.3em] -mt-1"
          style={{ color: "var(--accent)" }}
        >
          SCORE
        </span>

        {/* Detail text */}
        <span className="text-[14px] text-[var(--text-secondary)] mt-2.5">
          Control en 10 toques &middot; #41 Puebla
        </span>

        {/* SCORE VERIFIED badge */}
        <div
          className="flex items-center gap-1.5 mt-5 px-4 py-2 rounded-full"
          style={{
            border: "1.5px solid var(--accent)",
            backgroundColor: "rgba(0,255,133,0.08)",
          }}
        >
          <ShieldCheck
            size={16}
            color="var(--accent)"
            strokeWidth={2}
          />
          <span className="text-[13px] font-bold tracking-wider text-[var(--accent)]">
            SCORE VERIFIED
          </span>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-5 py-4 z-10"
        style={{
          background:
            "linear-gradient(to top, var(--surface) 0%, rgba(28,28,30,0.8) 100%)",
        }}
      >
        <span className="text-[14px] text-[var(--text-secondary)] font-medium">
          score.mx
        </span>
        <button
          className="px-5 py-2 rounded-full text-[13px] font-bold text-[var(--bg)]"
          style={{
            backgroundColor: "var(--accent)",
            boxShadow: "0 0 16px rgba(0,255,133,0.3)",
          }}
        >
          &Uacute;nete
        </button>
      </div>
    </div>
  );
}

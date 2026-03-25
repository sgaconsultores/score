export function SplashScreen() {
  return (
    <div className="relative flex flex-col items-center justify-center w-full h-full bg-[var(--bg)] overflow-hidden">
      {/* Subtle diagonal green accent lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-[600px] h-[2px] bg-[var(--accent)] rotate-[-35deg]"
          style={{ top: "15%", left: "-20%", opacity: 0.06 }}
        />
        <div
          className="absolute w-[500px] h-[2px] bg-[var(--accent)] rotate-[-35deg]"
          style={{ top: "30%", left: "10%", opacity: 0.05 }}
        />
        <div
          className="absolute w-[700px] h-[1.5px] bg-[var(--accent)] rotate-[-35deg]"
          style={{ top: "55%", left: "-30%", opacity: 0.07 }}
        />
        <div
          className="absolute w-[400px] h-[2px] bg-[var(--accent)] rotate-[-35deg]"
          style={{ top: "70%", left: "5%", opacity: 0.05 }}
        />
        <div
          className="absolute w-[550px] h-[1.5px] bg-[var(--accent)] rotate-[-35deg]"
          style={{ top: "85%", left: "-15%", opacity: 0.08 }}
        />
        <div
          className="absolute w-[350px] h-[2px] bg-[var(--accent)] rotate-[-35deg]"
          style={{ top: "42%", left: "30%", opacity: 0.06 }}
        />
      </div>

      {/* Radial green glow behind center content */}
      <div
        className="absolute rounded-full"
        style={{
          width: 320,
          height: 320,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(circle, rgba(0,255,133,0.12) 0%, rgba(0,255,133,0.04) 40%, transparent 70%)",
        }}
      />

      {/* Center content */}
      <div className="relative z-10 flex flex-col items-center gap-5">
        {/* Lightning bolt icon */}
        <svg
          width="56"
          height="70"
          viewBox="0 0 56 70"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M32.5 2L6 38h18.5L20 68l30-40H30.5L32.5 2Z"
            fill="var(--accent)"
          />
        </svg>

        {/* SCORE text */}
        <h1
          className="text-[64px] font-black text-[var(--text-primary)] tracking-[0.18em] leading-none"
          style={{
            textShadow:
              "0 0 40px rgba(0,255,133,0.35), 0 0 80px rgba(0,255,133,0.15)",
          }}
        >
          SCORE
        </h1>

        {/* Green gradient accent bar */}
        <div
          className="h-[3px] rounded-full"
          style={{
            width: 140,
            background:
              "linear-gradient(90deg, transparent 0%, var(--accent) 50%, transparent 100%)",
          }}
        />

        {/* Tagline */}
        <span className="text-[13px] font-bold tracking-[0.25em] text-[var(--accent)] uppercase">
          TU JUEGO. TU NIVEL.
        </span>

        {/* Subtitle */}
        <span className="text-[11px] text-[var(--text-secondary)]">
          Entrena &middot; Compite &middot; Destaca
        </span>
      </div>
    </div>
  );
}

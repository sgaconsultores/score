export function OnboardingScreen() {
  return (
    <div className="relative flex flex-col w-full h-full bg-[var(--bg)] overflow-hidden">
      {/* Top half: background image with gradient overlay */}
      <div className="relative w-full h-[55%] shrink-0">
        <img
          src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80"
          alt="Soccer"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Gradient overlay: transparent top to dark bottom */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, transparent 20%, var(--bg) 95%)",
          }}
        />

        {/* Skip button top-right */}
        <button className="absolute top-[52px] right-5 text-[var(--text-secondary)] text-[14px] font-medium z-10">
          Skip
        </button>
      </div>

      {/* Bottom panel */}
      <div className="flex flex-col flex-1 px-6 pb-10 -mt-4 z-10">
        {/* Title */}
        <h2 className="text-[28px] font-bold text-[var(--text-primary)] leading-tight mb-3">
          Entrena con IA
        </h2>

        {/* Body text */}
        <p className="text-[16px] text-[var(--text-secondary)] leading-relaxed mb-8">
          Retos semanales personalizados con inteligencia artificial que
          analizan tu juego y te ayudan a mejorar cada d&iacute;a. Sube
          tus videos y recibe retroalimentaci&oacute;n instant&aacute;nea.
        </p>

        {/* Dot indicators */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="w-[8px] h-[8px] rounded-full bg-[var(--accent)]" />
          <div className="w-[8px] h-[8px] rounded-full bg-[var(--border)]" />
          <div className="w-[8px] h-[8px] rounded-full bg-[var(--border)]" />
        </div>

        {/* CTA button */}
        <button
          className="w-full h-[52px] rounded-xl font-semibold text-[16px] text-[var(--bg)] transition-all active:scale-[0.98]"
          style={{ backgroundColor: "var(--accent)" }}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}

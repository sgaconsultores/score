import { X, CircleDot, Target, Zap } from "lucide-react";

export function ChallengeScreen() {
  return (
    <div className="flex flex-col w-full h-full bg-[var(--bg)] overflow-hidden">
      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto">
        {/* Hero section with stadium background */}
        <div className="relative h-[260px] shrink-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=800&q=80"
            alt="Stadium"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Gradient overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(15,15,15,0.3) 0%, rgba(15,15,15,0.7) 50%, var(--bg) 100%)",
            }}
          />

          {/* Close button */}
          <button className="absolute top-12 right-5 w-[36px] h-[36px] rounded-full flex items-center justify-center bg-black/50 backdrop-blur-sm z-10">
            <X size={20} color="var(--text-primary)" strokeWidth={2} />
          </button>

          {/* Hero title */}
          <div className="absolute bottom-6 left-0 right-0 flex justify-center z-10">
            <h1
              className="text-[28px] font-black tracking-[0.15em]"
              style={{
                color: "var(--accent)",
                textShadow: "0 0 30px rgba(0,255,133,0.4)",
              }}
            >
              DESAF&Iacute;O 1v1
            </h1>
          </div>
        </div>

        {/* VS Card */}
        <div className="mx-4 -mt-2 relative z-10">
          <div
            className="rounded-2xl border border-[var(--border)] px-4 py-5"
            style={{
              background:
                "linear-gradient(135deg, var(--surface) 0%, rgba(37,37,40,0.9) 100%)",
            }}
          >
            <div className="flex items-center justify-between">
              {/* Left player */}
              <div className="flex flex-col items-center gap-2 flex-1">
                <div
                  className="w-[80px] h-[80px] rounded-full overflow-hidden"
                  style={{ border: "3px solid var(--accent)" }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80"
                    alt="Tú"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-[14px] font-bold text-[var(--text-primary)]">
                  T&uacute;
                </span>
                <span
                  className="text-[14px] font-bold"
                  style={{ color: "var(--accent)" }}
                >
                  78 pts
                </span>
              </div>

              {/* VS */}
              <div className="flex items-center justify-center px-3">
                <span
                  className="text-[36px] font-black"
                  style={{
                    color: "var(--gold)",
                    textShadow: "0 0 20px rgba(255,215,0,0.5)",
                  }}
                >
                  VS
                </span>
              </div>

              {/* Right player */}
              <div className="flex flex-col items-center gap-2 flex-1">
                <div
                  className="w-[80px] h-[80px] rounded-full overflow-hidden"
                  style={{ border: "3px solid var(--error)" }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80"
                    alt="@pablo_gzz"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-[14px] font-bold text-[var(--text-primary)]">
                  @pablo_gzz
                </span>
                <span
                  className="text-[14px] font-bold"
                  style={{ color: "var(--error)" }}
                >
                  82 pts
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Challenge options */}
        <div className="px-4 mt-6">
          <span className="text-[18px] font-bold text-[var(--text-primary)] block mb-3">
            ELIGE TU RETO
          </span>

          <div className="flex flex-col gap-2.5">
            {/* Option 1 - Selected */}
            <ChallengeOption
              icon={CircleDot}
              title="Control en 10 toques"
              subtitle="Tu mejor: 84pts"
              selected
            />

            {/* Option 2 */}
            <ChallengeOption
              icon={Target}
              title="Disparo de precisión"
              subtitle="Tu mejor: 91pts"
            />

            {/* Option 3 */}
            <ChallengeOption
              icon={Zap}
              title="Regate 1v1"
              subtitle="Tu mejor: 76pts"
            />
          </div>
        </div>

        {/* Stake toggle */}
        <div className="px-4 mt-5">
          <div className="flex items-center justify-between">
            <span className="text-[14px] text-[var(--text-primary)]">
              Apostar reputaci&oacute;n:{" "}
              <span className="font-semibold text-[var(--text-secondary)]">
                +/-15 pts
              </span>
            </span>
            {/* Toggle switch */}
            <div
              className="w-[51px] h-[31px] rounded-full relative cursor-pointer shrink-0"
              style={{ backgroundColor: "var(--accent)" }}
            >
              <div
                className="absolute top-[2px] right-[2px] w-[27px] h-[27px] rounded-full bg-white shadow-md transition-transform"
              />
            </div>
          </div>
        </div>

        {/* Send challenge button */}
        <div className="px-4 mt-6 pb-8">
          <button
            className="w-full h-[52px] rounded-xl font-bold text-[16px] text-[var(--bg)] transition-all active:scale-[0.98]"
            style={{
              backgroundColor: "var(--accent)",
              boxShadow: "0 0 24px rgba(0,255,133,0.35)",
            }}
          >
            &#9876;&#65039; ENVIAR RETO
          </button>
        </div>
      </div>
    </div>
  );
}

/* ---- Challenge Option Card ---- */

function ChallengeOption({
  icon: Icon,
  title,
  subtitle,
  selected = false,
}: {
  icon: React.ComponentType<{ size?: number; color?: string; strokeWidth?: number }>;
  title: string;
  subtitle: string;
  selected?: boolean;
}) {
  return (
    <div
      className="flex items-center gap-3.5 rounded-xl px-4 py-3.5"
      style={{
        backgroundColor: selected ? "var(--surface)" : "var(--surface-elevated)",
        border: selected
          ? "1.5px solid var(--accent)"
          : "1.5px solid var(--border)",
      }}
    >
      <Icon
        size={22}
        color={selected ? "var(--accent)" : "var(--text-secondary)"}
        strokeWidth={1.5}
      />
      <div className="flex flex-col flex-1">
        <span className="text-[14px] font-semibold text-[var(--text-primary)]">
          {title}
        </span>
        <span className="text-[12px] text-[var(--text-secondary)]">
          {subtitle}
        </span>
      </div>
      {selected && (
        <div className="w-[8px] h-[8px] rounded-full bg-[var(--accent)]" />
      )}
    </div>
  );
}

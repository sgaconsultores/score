import { X, Image, SwitchCamera, Sparkles } from "lucide-react";

export function RecordScreen() {
  return (
    <div className="relative flex flex-col w-full h-full bg-[#000000] overflow-hidden">
      {/* Top bar */}
      <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-center h-[88px] pt-[44px] px-5">
        <h1 className="text-[17px] font-semibold text-[var(--text-primary)]">
          Grabar reto
        </h1>
        <button className="absolute right-5 top-[50px] flex items-center justify-center w-[32px] h-[32px] rounded-full bg-[var(--surface-elevated)]/60">
          <X size={20} color="var(--text-primary)" strokeWidth={1.5} />
        </button>
      </div>

      {/* Camera viewport */}
      <div className="relative flex-1">
        {/* Background placeholder / image */}
        <img
          src="https://images.unsplash.com/photo-1508098682722-e99c643e7f0b?w=800&q=80"
          alt="Soccer field"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark overlay for camera feel */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, transparent 20%, transparent 80%, rgba(0,0,0,0.5) 100%)",
          }}
        />

        {/* Corner brackets */}
        {/* Top-left */}
        <div className="absolute top-[100px] left-[28px] w-[28px] h-[28px] z-10">
          <div
            className="absolute top-0 left-0 w-full h-[3px] rounded-full"
            style={{ backgroundColor: "var(--accent)" }}
          />
          <div
            className="absolute top-0 left-0 w-[3px] h-full rounded-full"
            style={{ backgroundColor: "var(--accent)" }}
          />
        </div>

        {/* Top-right */}
        <div className="absolute top-[100px] right-[28px] w-[28px] h-[28px] z-10">
          <div
            className="absolute top-0 right-0 w-full h-[3px] rounded-full"
            style={{ backgroundColor: "var(--accent)" }}
          />
          <div
            className="absolute top-0 right-0 w-[3px] h-full rounded-full"
            style={{ backgroundColor: "var(--accent)" }}
          />
        </div>

        {/* Bottom-left */}
        <div className="absolute bottom-[220px] left-[28px] w-[28px] h-[28px] z-10">
          <div
            className="absolute bottom-0 left-0 w-full h-[3px] rounded-full"
            style={{ backgroundColor: "var(--accent)" }}
          />
          <div
            className="absolute bottom-0 left-0 w-[3px] h-full rounded-full"
            style={{ backgroundColor: "var(--accent)" }}
          />
        </div>

        {/* Bottom-right */}
        <div className="absolute bottom-[220px] right-[28px] w-[28px] h-[28px] z-10">
          <div
            className="absolute bottom-0 right-0 w-full h-[3px] rounded-full"
            style={{ backgroundColor: "var(--accent)" }}
          />
          <div
            className="absolute bottom-0 right-0 w-[3px] h-full rounded-full"
            style={{ backgroundColor: "var(--accent)" }}
          />
        </div>

        {/* IA ACTIVA badge */}
        <div className="absolute top-[116px] left-1/2 -translate-x-1/2 z-10">
          <div
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full"
            style={{
              backgroundColor: "rgba(0,255,133,0.15)",
              border: "1px solid rgba(0,255,133,0.3)",
            }}
          >
            <Sparkles size={14} color="var(--accent)" strokeWidth={2} />
            <span className="text-[12px] font-bold tracking-wider text-[var(--accent)]">
              IA ACTIVA
            </span>
          </div>
        </div>
      </div>

      {/* Bottom controls area */}
      <div className="absolute bottom-0 left-0 right-0 z-20 pb-8">
        {/* Main controls row */}
        <div className="flex items-center justify-center gap-12 mb-6 px-8">
          {/* Gallery icon */}
          <button className="flex items-center justify-center w-[44px] h-[44px] rounded-xl bg-[var(--surface-elevated)]/60 border border-[var(--border)]">
            <Image
              size={22}
              color="var(--text-primary)"
              strokeWidth={1.5}
            />
          </button>

          {/* Record button */}
          <button className="flex items-center justify-center w-[72px] h-[72px] rounded-full border-[4px] border-[var(--text-primary)]">
            <div
              className="w-[56px] h-[56px] rounded-full"
              style={{ backgroundColor: "var(--error)" }}
            />
          </button>

          {/* Flip camera icon */}
          <button className="flex items-center justify-center w-[44px] h-[44px] rounded-xl bg-[var(--surface-elevated)]/60 border border-[var(--border)]">
            <SwitchCamera
              size={22}
              color="var(--text-primary)"
              strokeWidth={1.5}
            />
          </button>
        </div>

        {/* Action buttons row */}
        <div className="flex items-center gap-3 px-6">
          <button
            className="flex-1 h-[44px] rounded-xl text-[14px] font-semibold text-[var(--text-primary)] transition-all active:scale-[0.98]"
            style={{
              backgroundColor: "var(--surface-elevated)",
              border: "1px solid var(--border)",
            }}
          >
            Repetir
          </button>
          <button
            className="flex-1 h-[44px] rounded-xl text-[14px] font-semibold text-[var(--bg)] transition-all active:scale-[0.98]"
            style={{ backgroundColor: "var(--accent)" }}
          >
            Subir video
          </button>
        </div>
      </div>
    </div>
  );
}

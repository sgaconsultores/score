import { ArrowLeft, ChevronDown, Eye } from "lucide-react";

const positions = [
  { key: "GK", label: "GK" },
  { key: "DEF", label: "DEF" },
  { key: "MID", label: "MID" },
  { key: "FWD", label: "FWD" },
] as const;

const selectedPosition = "MID";

export function SignUpScreen() {
  return (
    <div className="flex-1 flex flex-col overflow-y-auto bg-[var(--bg)]">

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto px-6 pb-6">
        {/* Back arrow */}
        <button className="flex items-center justify-center w-10 h-10 -ml-2 mb-2">
          <ArrowLeft size={22} color="var(--text-primary)" strokeWidth={1.8} />
        </button>

        {/* Header */}
        <h1 className="text-[28px] font-bold text-[var(--text-primary)] leading-tight mb-1">
          Crea tu perfil
        </h1>
        <p className="text-[14px] text-[var(--text-secondary)] mb-6">
          Configura tu cuenta para comenzar a entrenar
        </p>

        {/* Form fields */}
        <div className="flex flex-col gap-3.5">
          {/* Nombre completo */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[12px] font-medium text-[var(--text-secondary)] uppercase tracking-wider">
              Nombre completo
            </label>
            <div className="h-[48px] rounded-xl bg-[var(--surface)] border border-[var(--border)] px-4 flex items-center">
              <span className="text-[15px] text-[var(--text-secondary)]">
                Juan P&eacute;rez
              </span>
            </div>
          </div>

          {/* Username */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[12px] font-medium text-[var(--text-secondary)] uppercase tracking-wider">
              @username
            </label>
            <div className="h-[48px] rounded-xl bg-[var(--surface)] border border-[var(--border)] px-4 flex items-center">
              <span className="text-[15px] text-[var(--text-secondary)]">
                @juanperez
              </span>
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[12px] font-medium text-[var(--text-secondary)] uppercase tracking-wider">
              Email
            </label>
            <div className="h-[48px] rounded-xl bg-[var(--surface)] border border-[var(--border)] px-4 flex items-center">
              <span className="text-[15px] text-[var(--text-secondary)]">
                juan@email.com
              </span>
            </div>
          </div>

          {/* Contrasena */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[12px] font-medium text-[var(--text-secondary)] uppercase tracking-wider">
              Contrase&ntilde;a
            </label>
            <div className="h-[48px] rounded-xl bg-[var(--surface)] border border-[var(--border)] px-4 flex items-center justify-between">
              <span className="text-[15px] text-[var(--text-secondary)] tracking-widest">
                &bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;
              </span>
              <Eye
                size={18}
                color="var(--text-secondary)"
                strokeWidth={1.5}
              />
            </div>
          </div>

          {/* Position selector */}
          <div className="flex flex-col gap-2 mt-1">
            <label className="text-[12px] font-medium text-[var(--text-secondary)] uppercase tracking-wider">
              Posici&oacute;n
            </label>
            <div className="flex items-center gap-2.5">
              {positions.map((pos) => {
                const isSelected = pos.key === selectedPosition;
                return (
                  <button
                    key={pos.key}
                    className="flex-1 h-[40px] rounded-full text-[13px] font-semibold transition-all"
                    style={{
                      border: isSelected
                        ? "1.5px solid var(--accent)"
                        : "1.5px solid var(--border)",
                      color: isSelected
                        ? "var(--accent)"
                        : "var(--text-secondary)",
                      backgroundColor: isSelected
                        ? "rgba(0,255,133,0.08)"
                        : "var(--surface)",
                    }}
                  >
                    {pos.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Ciudad dropdown */}
          <div className="flex flex-col gap-1.5 mt-0.5">
            <label className="text-[12px] font-medium text-[var(--text-secondary)] uppercase tracking-wider">
              Ciudad
            </label>
            <div className="h-[48px] rounded-xl bg-[var(--surface)] border border-[var(--border)] px-4 flex items-center justify-between">
              <span className="text-[15px] text-[var(--text-secondary)]">
                Monterrey, NL
              </span>
              <ChevronDown
                size={18}
                color="var(--text-secondary)"
                strokeWidth={1.8}
              />
            </div>
          </div>
        </div>

        {/* CTA button */}
        <button
          className="w-full h-[52px] rounded-xl font-semibold text-[16px] text-[var(--bg)] mt-6 transition-all active:scale-[0.98]"
          style={{ backgroundColor: "var(--accent)" }}
        >
          Crear cuenta
        </button>

        {/* Divider */}
        <div className="flex items-center gap-3 my-5">
          <div className="flex-1 h-px bg-[var(--border)]" />
          <span className="text-[12px] text-[var(--text-secondary)]">
            o contin&uacute;a con
          </span>
          <div className="flex-1 h-px bg-[var(--border)]" />
        </div>

        {/* Social buttons */}
        <div className="flex items-center gap-3">
          {/* Google */}
          <button className="flex-1 h-[48px] rounded-xl bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center gap-2.5">
            <svg width="18" height="18" viewBox="0 0 24 24">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1Z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23Z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09a7.12 7.12 0 0 1 0-4.17V7.08H2.18a11.97 11.97 0 0 0 0 9.84l3.66-2.84Z"
                fill="#FBBC05"
              />
              <path
                d="M12 4.75c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 1.09 14.97 0 12 0 7.7 0 3.99 2.47 2.18 6.08l3.66 2.84C6.71 6.68 9.14 4.75 12 4.75Z"
                fill="#EA4335"
              />
            </svg>
            <span className="text-[14px] font-medium text-[var(--text-primary)]">
              Google
            </span>
          </button>

          {/* Apple */}
          <button className="flex-1 h-[48px] rounded-xl bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center gap-2.5">
            <svg
              width="17"
              height="20"
              viewBox="0 0 17 20"
              fill="var(--text-primary)"
            >
              <path d="M13.545 10.239c-.022-2.234 1.823-3.306 1.906-3.357-1.037-1.518-2.653-1.726-3.228-1.75-1.375-.139-2.683.81-3.382.81-.696 0-1.775-.789-2.916-.768-1.501.022-2.884.873-3.657 2.216-1.56 2.707-.4 6.716 1.12 8.914.743 1.074 1.629 2.28 2.791 2.237 1.12-.045 1.543-.725 2.897-.725 1.354 0 1.734.725 2.916.702 1.204-.022 1.97-1.094 2.709-2.17.854-1.246 1.205-2.451 1.226-2.514-.027-.012-2.353-.903-2.377-3.583l-.005-.012ZM11.318 3.483c.616-.748 1.033-1.786.919-2.822-.889.036-1.965.592-2.602 1.34-.572.662-1.072 1.718-.937 2.733.991.077 2.003-.504 2.62-1.251Z" />
            </svg>
            <span className="text-[14px] font-medium text-[var(--text-primary)]">
              Apple
            </span>
          </button>
        </div>

        {/* Sign in link */}
        <p className="text-center mt-5 mb-2">
          <span className="text-[13px] text-[var(--text-secondary)]">
            &iquest;Ya tienes cuenta?{" "}
          </span>
          <span className="text-[13px] font-semibold text-[var(--accent)]">
            Inicia sesi&oacute;n
          </span>
        </p>
      </div>
    </div>
  );
}

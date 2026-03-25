export function PhoneFrame({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative w-[375px] h-[812px] bg-[var(--bg)] rounded-[40px] border-[3px] border-[var(--border)] overflow-hidden shadow-2xl">
        {children}
      </div>
      <span className="text-[var(--text-secondary)] text-xs font-medium tracking-wider uppercase">{label}</span>
    </div>
  );
}

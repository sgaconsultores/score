export function StatusBar() {
  return (
    <div className="flex items-center justify-between h-[44px] px-6 pt-3 shrink-0">
      <span className="text-[var(--text-primary)] text-[16px] font-semibold">9:41</span>
      <div className="flex items-center gap-1.5">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[var(--text-primary)]"><path d="M2 20h.01M7 20v-4M12 20v-8M17 20V8M22 20V4"/></svg>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[var(--text-primary)]"><path d="M5 13a10 10 0 0 1 14 0M8.5 16.5a5 5 0 0 1 7 0M2 10a15 15 0 0 1 20 0M12 20h.01"/></svg>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[var(--text-primary)]"><rect x="2" y="7" width="18" height="10" rx="2"/><path d="M22 11v2"/></svg>
      </div>
    </div>
  );
}

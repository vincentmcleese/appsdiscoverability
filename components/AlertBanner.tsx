import Link from "next/link";

export function AlertBanner() {
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-10 bg-brand-gradient">
      <Link 
        href="/guide" 
        className="flex items-center justify-center gap-2 px-4 h-full text-sm font-medium text-white hover:opacity-90 transition-opacity"
      >
        The Complete Guide to ChatGPT App Discoverability
        <span className="text-white/80">→</span>
      </Link>
    </div>
  );
}


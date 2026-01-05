import Link from "next/link";
import { GhostLogo } from "./ui/ghost-logo/GhostLogo";

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function YouTubeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function NewsletterIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

const socialLinks = [
  { name: "X", href: "https://x.com/elliot_garreffa", icon: XIcon },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/elliotgarreffa/", icon: LinkedInIcon },
  { name: "YouTube", href: "https://www.youtube.com/@elliotgarreffa", icon: YouTubeIcon },
  { name: "Newsletter", href: "https://elliotgarreffa.beehiiv.com/", icon: NewsletterIcon },
];

export function Footer() {
  return (
    <footer className="relative md:fixed bottom-0 left-0 right-0 z-0 md:h-[400px] bg-slate-50 text-slate-900 flex flex-col justify-center py-12 md:py-0 overflow-hidden">
      <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="absolute left-[-120px] top-1/2 -translate-y-1/2 h-[500px] w-[500px] opacity-70 pointer-events-none -z-10">
           <GhostLogo 
              particleColor="#374151"
              layer1Color="#1f2937"
              layer2Color="#374151"
              particleSize={2.5}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand Section - Left */}
          <div>
            <h3 className="text-xl font-normal mb-4 flex items-center gap-1.5">
              <span className="font-bold uppercase bg-gradient-to-r from-[rgb(27,200,140)] to-[rgb(20,160,112)] bg-clip-text text-transparent">APPS</span>
              <span className="font-bold uppercase text-slate-900">Discoverability</span>
              <span className="font-bold uppercase bg-gradient-to-r from-[rgb(27,200,140)] to-[rgb(20,160,112)] bg-clip-text text-transparent">.COM</span>
            </h3>
            <p className="text-slate-600 text-sm max-w-sm leading-relaxed">
              850 million weekly users. Apps appearing at the moment of highest intent. We'll show you exactly where you rank—and help you climb to #1.
            </p>
          </div>

          {/* Social Links - Center */}
          <div className="flex flex-col items-center md:items-center">
            <h4 className="text-lg font-normal text-slate-900 mb-4">Connect</h4>
            <div className="flex items-center gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 hover:bg-gradient-to-r hover:from-[rgb(27,200,140)] hover:to-[rgb(20,160,112)] transition-all duration-300"
                  aria-label={link.name}
                >
                  <link.icon className="w-5 h-5 text-slate-600 group-hover:text-white transition-colors duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Legal Section - Right */}
          <div className="md:text-right">
            <h4 className="text-lg font-normal text-slate-900 mb-4">Legal</h4>
             <ul className="space-y-2 text-slate-600 text-sm">
              <li><Link href="/privacy-policy" className="hover:text-slate-900 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="hover:text-slate-900 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-200 text-center text-slate-500 text-xs">
          &copy; 2026 Ghost Team LLC All Rights Reserved
        </div>
      </div>
    </footer>
  );
}

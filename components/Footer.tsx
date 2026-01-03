import Link from "next/link";
import { GhostLogo } from "./ui/ghost-logo/GhostLogo";

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-normal bg-brand-gradient bg-clip-text text-transparent mb-4">Ghost Team</h3>
            <p className="text-slate-600 text-sm max-w-xs">
              We build AI-native apps that drive growth
            </p>
          </div>
          <div>
            <h4 className="text-lg font-normal text-slate-900 mb-4">Legal</h4>
             <ul className="space-y-2 text-slate-600 text-sm">
              <li><Link href="/privacy-policy" className="hover:text-slate-900 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="hover:text-slate-900 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-200 text-center text-slate-500 text-xs">
          &copy; {new Date().getFullYear()} Ghost Team. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

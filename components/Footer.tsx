import Link from "next/link";
import { GhostLogo } from "./ui/ghost-logo/GhostLogo";

export function Footer() {
  return (
    <footer className="relative md:fixed bottom-0 left-0 right-0 z-0 md:h-[400px] bg-ghost-dark text-white flex flex-col justify-center py-12 md:py-0 overflow-hidden">
      <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="absolute left-[-120px] top-1/2 -translate-y-1/2 h-[500px] w-[500px] opacity-40 pointer-events-none -z-10">
           <GhostLogo 
              particleColor="#ffffff"
              layer1Color="#ff0000"
              layer2Color="#0000ff"
              particleSize={2.5}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-normal bg-brand-gradient bg-clip-text text-transparent mb-4">Ghost Team</h3>
            <p className="text-gray-400 text-sm max-w-xs">
              We build AI-native apps that drive growth
            </p>
          </div>
          <div>
            <h4 className="text-lg font-normal mb-4">Legal</h4>
             <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-xs">
          &copy; {new Date().getFullYear()} Ghost Team. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

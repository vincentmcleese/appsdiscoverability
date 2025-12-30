"use client";

import Link from "next/link";
import Image from "next/image";

export function Navbar() {
  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50 h-16 bg-white/80 backdrop-blur-md border-b border-gray-200"
    >
      <div className="mx-auto max-w-7xl h-full flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 font-medium text-2xl text-ghost-dark">
          <div className="relative h-8 w-8">
            <Image 
              src="/ghosts/speedyghost.png" 
              alt="Ghost Team Logo" 
              fill 
              className="object-contain"
            />
          </div>
          Ghost Team
        </Link>
      </div>
    </nav>
  );
}

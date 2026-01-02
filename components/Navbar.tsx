"use client";

import Link from "next/link";
import Image from "next/image";

export function Navbar() {
  return (
    <nav 
      className="fixed top-10 left-0 right-0 z-50 h-16 bg-slate-950 border-b border-slate-800"
    >
      <div className="mx-auto max-w-7xl h-full flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 text-2xl text-slate-100">
          <div className="relative h-8 w-8">
            <Image 
              src="/ghosts/speedyghost.png" 
              alt="Ghost Team Logo" 
              fill 
              className="object-contain"
            />
          </div>
          <span className="font-bold uppercase bg-gradient-to-r from-[rgb(27,200,140)] to-[rgb(20,160,112)] bg-clip-text text-transparent">APPS</span>
          <span className="font-normal uppercase">Discoverability</span>
        </Link>
      </div>
    </nav>
  );
}

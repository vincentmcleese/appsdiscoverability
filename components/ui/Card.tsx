"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <div 
      className={cn(
        "relative bg-white backdrop-blur-md rounded-3xl p-8",
        className
      )}
    >
      {/* Border */}
      <div 
        className="absolute inset-0 rounded-3xl pointer-events-none bg-gray-200"
        style={{
          padding: '6px',
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          maskComposite: 'exclude',
          WebkitMaskComposite: 'xor',
        }}
      />
      {children}
    </div>
  );
}

'use client';

import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export function FlowButton({ text = "Modern Button", variant = "default", respondToParent = false }: { text?: string; variant?: "default" | "white" | "secondary"; respondToParent?: boolean }) {
  const isWhite = variant === "white";
  const isSecondary = variant === "secondary";
  
  return (
    <button className={cn(
      "relative flex items-center gap-1 overflow-hidden rounded-[100px] border-[1.5px] px-8 py-3 text-sm font-semibold cursor-pointer transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:border-transparent hover:rounded-[12px] active:scale-[0.95]",
      !respondToParent && "group",
      respondToParent && "group-hover/card:border-transparent group-hover/card:rounded-[12px]",
      isSecondary
        ? "border-white/60 bg-transparent text-white hover:text-white group-hover/card:text-white"
        : isWhite
          ? "border-white/40 bg-white text-[#111111] hover:text-white group-hover/card:text-white"
          : "border-[#333333]/40 bg-transparent text-[#111111] hover:text-white group-hover/card:text-white"
    )}>
      {/* Left arrow (arr-2) */}
      <ArrowRight 
        className={cn(
          "absolute w-4 h-4 left-[-25%] fill-none z-[9] transition-all duration-[800ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]",
          !respondToParent && "group-hover:left-4",
          respondToParent && "group-hover/card:left-4",
          isSecondary
            ? "stroke-white group-hover:stroke-white group-hover/card:stroke-white"
            : isWhite 
              ? "stroke-[#111111] group-hover:stroke-white group-hover/card:stroke-white" 
              : "stroke-[#111111] group-hover:stroke-white group-hover/card:stroke-white"
        )}
      />
      {/* Text */}
      <span className={cn(
        "relative z-[1] -translate-x-3 transition-all duration-[800ms] ease-out",
        !respondToParent && "group-hover:translate-x-3",
        respondToParent && "group-hover/card:translate-x-3"
      )}>
        {text}
      </span>
      {/* Circle */}
      <span className={cn(
        "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-[50%] opacity-0 transition-all duration-[800ms] ease-[cubic-bezier(0.19,1,0.22,1)]",
        !respondToParent && "group-hover:w-[220px] group-hover:h-[220px] group-hover:opacity-100",
        respondToParent && "group-hover/card:w-[220px] group-hover/card:h-[220px] group-hover/card:opacity-100",
        "bg-brand-gradient"
      )}></span>
      {/* Right arrow (arr-1) */}
      <ArrowRight 
        className={cn(
          "absolute w-4 h-4 right-4 fill-none z-[9] transition-all duration-[800ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]",
          !respondToParent && "group-hover:right-[-25%]",
          respondToParent && "group-hover/card:right-[-25%]",
          isSecondary
            ? "stroke-white group-hover:stroke-white group-hover/card:stroke-white"
            : isWhite 
              ? "stroke-[#111111] group-hover:stroke-white group-hover/card:stroke-white" 
              : "stroke-[#111111] group-hover:stroke-white group-hover/card:stroke-white"
        )}
      />
    </button>
  );
}


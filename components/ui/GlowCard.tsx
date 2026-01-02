"use client";

import { cn } from "@/lib/utils";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import React from "react";

export interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
  variant?: "default" | "green-hilight" | "green-default";
}

export function GlowCard({ children, className, innerClassName, variant = "default" }: GlowCardProps) {
  const isGreenHilight = variant === "green-hilight";
  const isGreenDefault = variant === "green-default";
  const hasCustomBorder = isGreenHilight || isGreenDefault;
  
  return (
    <div className={cn(
      "relative rounded-[1.25rem] border border-border p-2 md:rounded-[1.5rem] md:p-3",
      isGreenHilight && "group transition-transform duration-300 hover:scale-[1.01] hover:border-transparent",
      isGreenDefault && "group transition-transform duration-300 hover:scale-[1.01] border-transparent",
      className
    )}>
      {!hasCustomBorder && (
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={3}
        />
      )}
      
      {hasCustomBorder && (
        <div 
          className={cn(
            "absolute inset-0 -z-10 rounded-[inherit] pointer-events-none",
            isGreenHilight && "opacity-0 transition-opacity duration-300 group-hover:opacity-100",
            isGreenDefault && "opacity-100"
          )}
          style={{
            background: "linear-gradient(to right, rgb(27, 200, 140), rgb(20, 160, 112))",
            mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            maskComposite: "exclude",
            WebkitMaskComposite: "xor",
            padding: "0.75px"
          }}
        />
      )}

      <div className={cn(
        "relative flex h-full w-full flex-col justify-between gap-6 overflow-hidden rounded-xl border bg-background p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-6",
        innerClassName
      )}>
        {children}
      </div>
    </div>
  );
}


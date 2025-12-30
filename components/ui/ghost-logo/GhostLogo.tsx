"use client";

import React, { useEffect, useRef } from "react";
import { GhostLogoEffect, GhostLogoParams } from "./GhostLogoEffect";

interface GhostLogoProps extends GhostLogoParams {
  className?: string;
}

export function GhostLogo({
  className,
  ...params
}: GhostLogoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const effectRef = useRef<GhostLogoEffect | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    effectRef.current = new GhostLogoEffect(containerRef.current, params);

    // Cleanup function
    return () => {
      if (effectRef.current) {
        effectRef.current.dispose();
        effectRef.current = null;
      }
    };
  }, [params]); // Re-initialize if params change (simplified for now)

  return (
    <div 
      ref={containerRef} 
      className={`w-full h-full ${className || ""}`}
      style={{ touchAction: "none" }} // Prevent scrolling interference on mobile if needed
    />
  );
}


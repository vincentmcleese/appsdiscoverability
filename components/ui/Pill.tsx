"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { Sparkles } from "lucide-react";

export type PillVariant = "brand" | "secondary" | "black";

export interface PillProps {
  label: string;
  variant?: PillVariant;
  className?: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

export function Pill({ label, variant = "secondary", className, icon, children }: PillProps) {
  const isBrand = variant === "brand";
  const isBlack = variant === "black";
  
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium border gap-1.5 overflow-hidden",
        isBrand
          ? "border-transparent bg-brand-gradient text-white shadow-sm"
          : isBlack
          ? "border-transparent bg-black text-white shadow-sm"
          : "border-gray-200 bg-white text-gray-500",
        className
      )}
    >
      {isBrand && (icon || <Sparkles className="w-3.5 h-3.5" />)}
      {children || label}
    </div>
  );
}


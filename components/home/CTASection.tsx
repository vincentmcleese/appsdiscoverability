"use client";

import Link from "next/link";
import { FlowButton } from "@/components/ui/flow-button";
import { MeshGradient } from "@/components/ui/MeshGradient";
import { useState, useEffect } from "react";

interface CTASectionProps {
  variant?: "default" | "dark";
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonHref?: string;
}

export function CTASection({ 
  variant = "default",
  title = "The race for ChatGPT App visibility has already begun.",
  subtitle = "The teams that understand discoverability first will own their categories.",
  buttonText = "Start Today",
  buttonHref = "/waitlist"
}: CTASectionProps) {
  const [isMobile, setIsMobile] = useState(false);
  const isDark = variant === "dark";
  
  // Detect mobile screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  
  const gradientColors = isDark
    ? [
        "#1BC88C", // Brand Green
        "#14A070", // Darker Brand Green
        "#1BC88C", // Brand Green (repeat for more green)
        "#14A070", // Darker Brand Green (repeat for more green)
      ]
    : [
        "#1BC88C", // Brand Green
        "#14A070", // Darker Brand Green
      ];

  const maskGradient = "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.3) 15%, rgba(0,0,0,1) 30%, rgba(0,0,0,1) 70%, rgba(0,0,0,0.3) 85%, transparent 100%)";

  return (
    <section className="relative w-full py-24 md:py-32 overflow-hidden">
      {/* Background Mesh Gradient */}
      <div className="absolute inset-x-4 md:inset-x-6 lg:inset-x-8 top-4 md:top-6 lg:top-8 bottom-4 md:bottom-6 lg:bottom-8 z-0 rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden">
        <MeshGradient
          speed={0.5}
          colors={gradientColors}
          distortion={1.2}
          swirl={0.8}
          style={{
            height: "100%",
            width: "120%",
            position: "absolute",
            left: "-10%",
            ...(isMobile ? {} : {
              maskImage: maskGradient,
              WebkitMaskImage: maskGradient,
            }),
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-white mb-4 max-w-4xl">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl">
              {subtitle}
            </p>
          )}
          <Link href={buttonHref}>
            <FlowButton text={buttonText} variant="white" />
          </Link>
        </div>
      </div>
    </section>
  );
}


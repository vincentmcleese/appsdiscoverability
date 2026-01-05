"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { LampContainer } from "@/components/ui/lamp";
import { FlowButton } from "@/components/ui/flow-button";
import { GlowCard } from "@/components/ui/GlowCard";

export function HomeHero() {
  return (
    <LampContainer className="pt-8">
      <motion.div
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="flex flex-col items-center pt-8 md:pt-12 lg:pt-16"
      >
  
        {/* Main Headline */}
        <h1 className="bg-gradient-to-br from-slate-100 to-slate-300 bg-clip-text text-center text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-transparent mb-8 md:mb-16 px-2 md:px-4 w-full max-w-4xl">
          Make Sure Your<br />
          ChatGPT App Ranks{" "}
          <span className="bg-gradient-to-r from-[rgb(27,200,140)] to-[rgb(20,160,112)] bg-clip-text">#1</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-slate-400 mb-16 md:mb-24 max-w-3xl text-center px-4">
          850 million weekly users. Apps appearing at the moment of highest intent. We'll show you exactly where you rank—and help you climb to #1.
        </p>

        {/* Join Waitlist Button */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1.1,
            duration: 0.5,
            ease: "easeOut",
          }}
          className="mb-16 md:mb-24"
        >
          <Link href="/begin">
            <FlowButton text="Join Waitlist" variant="white" />
          </Link>
        </motion.div>
      </motion.div>

      {/* Glow Cards Row - Full Width with Wave Effect */}
      <div className="w-screen flex justify-center gap-0 relative z-50 py-8 overflow-hidden">
        {[
          "adobe.com", "spotify.com", "booking.com", "tripadvisor.com", "canva.com", 
          "target.com", "coursera.org", "notion.so", "shopify.com", "uber.com"
        ].map((domain, index, arr) => {
          // Pre-computed wave values to avoid hydration mismatch from floating point precision
          // These are calculated with: Math.round(Math.sin((index / 9) * Math.PI * 2) * 16) and Math.round(Math.cos((index / 9) * Math.PI * 2) * 6)
          const waveOffsets = [0, 10, 15, 14, 6, -6, -14, -15, -10, 0];
          const waveRotations = [6, 5, 2, -2, -5, -5, -2, 2, 5, 6];
          const fadeOpacities = [0.3, 0.5, 0.75, 0.95, 1, 1, 0.95, 0.75, 0.5, 0.3];
          // Icon opacity - higher in center for more pop
          const iconOpacities = [0.5, 0.7, 0.85, 1, 1, 1, 1, 0.85, 0.7, 0.5];
          
          return (
            <div 
              key={index}
              className={`p-2 isolate ${index >= 10 ? 'hidden xl:flex' : ''} ${index >= 8 ? 'hidden lg:flex' : ''} ${index >= 6 ? 'hidden md:flex' : 'flex'}`}
              style={{ 
                transform: `translate3d(0, ${waveOffsets[index]}px, 0) rotate(${waveRotations[index]}deg)`,
                opacity: fadeOpacities[index],
                backfaceVisibility: 'hidden',
                WebkitFontSmoothing: 'subpixel-antialiased'
              }}
            >
              {/* Mobile - Simple variant without glow */}
              <div className="md:hidden">
                <GlowCard 
                  variant="simple"
                  className="p-0 aspect-square w-[56px]" 
                  innerClassName="!p-0.5 border-0 overflow-hidden gap-0 !bg-slate-900 transform-gpu"
                >
                  <Image 
                    src={`https://img.logo.dev/${domain}?token=pk_F_vYCidPT7-3zDZJ5E1PrQ&size=256&retina=true`} 
                    alt={`${domain} logo`}
                    width={56}
                    height={56}
                    className="w-full h-full object-contain rounded-lg select-none"
                    style={{ opacity: iconOpacities[index] }}
                    quality={95}
                    priority={index >= 2 && index <= 7}
                    unoptimized={false}
                  />
                </GlowCard>
              </div>

              {/* Desktop - Default variant with glow */}
              <div className="hidden md:block">
                <GlowCard 
                  variant="default"
                  className="p-0 aspect-square w-[64px] lg:w-[72px]" 
                  innerClassName="!p-0.5 border-0 overflow-hidden gap-0 !bg-slate-900 transform-gpu"
                >
                  <Image 
                    src={`https://img.logo.dev/${domain}?token=pk_F_vYCidPT7-3zDZJ5E1PrQ&size=256&retina=true`} 
                    alt={`${domain} logo`}
                    width={72}
                    height={72}
                    className="w-full h-full object-contain rounded-lg select-none"
                    style={{ opacity: iconOpacities[index] }}
                    quality={95}
                    priority={index >= 2 && index <= 7}
                    unoptimized={false}
                  />
                </GlowCard>
              </div>
            </div>
          );
        })}
      </div>
    </LampContainer>
  );
}

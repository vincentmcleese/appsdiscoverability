"use client";

import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import { EmailSignup } from "@/components/ui/email-signup";
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
        <h1 className="bg-gradient-to-br from-slate-100 to-slate-300 bg-clip-text text-center text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-transparent mb-8 md:mb-16">
          Make Sure Your<br />
          ChatGPT App Ranks{" "}
          <span className="bg-gradient-to-r from-[rgb(27,200,140)] to-[rgb(20,160,112)] bg-clip-text">#1</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-slate-400 mb-16 md:mb-24 max-w-3xl text-center px-4">
          850 million weekly users. Apps appearing at the moment of highest intent. We'll show you exactly where you rank—and help you climb to #1.
        </p>

        {/* Email Signup */}
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
          <EmailSignup />
        </motion.div>
      </motion.div>

      {/* Glow Cards Row - Full Width with Wave Effect */}
      <div className="w-screen flex justify-center gap-2 md:gap-3 relative z-50 py-8 overflow-hidden">
        {[
          "stripe.com", "notion.so", "figma.com", "linear.app", "github.com", 
          "vercel.com", "slack.com", "openai.com", "spotify.com", "discord.com", 
          "dropbox.com", "airbnb.com", "shopify.com", "twilio.com", "asana.com"
        ].map((domain, index, arr) => {
          // Create wave pattern - sine wave for position
          const wavePosition = (index / (arr.length - 1)) * Math.PI * 2;
          const waveOffset = Math.sin(wavePosition) * 16;
          // Rotation follows the slope (derivative of sine is cosine)
          const waveRotation = Math.cos(wavePosition) * 6; // ±6 degrees
          // Fade effect for first and last few icons (desktop only)
          const distFromEdge = Math.min(index, arr.length - 1 - index);
          const fadeOpacity = distFromEdge <= 2 ? 0.3 + (distFromEdge * 0.35) : 1;
          return (
            <div 
              key={index}
              className={`${index >= 10 ? 'hidden xl:flex' : ''} ${index >= 8 ? 'hidden lg:flex' : ''} ${index >= 6 ? 'hidden md:flex' : 'flex'}`}
              style={{ 
                transform: `translateY(${waveOffset}px) rotate(${waveRotation}deg)`,
                opacity: fadeOpacity
              }}
            >
              <GlowCard 
                className="p-0 aspect-square w-[56px] md:w-[64px] lg:w-[72px]" 
                innerClassName="!p-0.5 border-0 overflow-hidden gap-0 !bg-slate-900"
              >
                <img 
                  src={`https://img.logo.dev/${domain}?token=pk_F_vYCidPT7-3zDZJ5E1PrQ`} 
                  alt={`${domain} logo`}
                  className="w-full h-full object-contain rounded-lg opacity-60"
                />
              </GlowCard>
            </div>
          );
        })}
      </div>
    </LampContainer>
  );
}

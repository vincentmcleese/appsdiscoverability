"use client";

import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import Link from "next/link";
import { FlowButton } from "@/components/ui/flow-button";
import { GlowCard } from "@/components/ui/GlowCard";

export function HomeHero() {
  return (
    <LampContainer className="pt-48 md:pt-64">
      <motion.div
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="flex flex-col items-center mt-48 md:mt-72"
      >
  
        {/* Main Headline */}
        <h1 className="bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-center text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-transparent mb-6">
          Make Sure Your<br />
          ChatGPT App Ranks{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text">#1</span>
        </h1>

        {/* Subheadline */}
        <h2 className="text-xl md:text-2xl text-slate-400 font-normal tracking-tight mb-8">
          App Discoverability for ChatGPT
        </h2>

        {/* Body Text */}
        <p className="text-lg md:text-xl text-slate-400 mb-4 max-w-3xl text-center px-4">
          850 million weekly users. Apps appearing at the moment of highest intent.
        </p>

        {/* Tagline */}
        <p className="text-base md:text-lg text-slate-500 mb-10 max-w-2xl text-center px-4">
          We'll show you exactly where you rank—and help you climb to #1.
        </p>

        {/* CTA Button */}
        <div className="mb-12">
          <Link href="/waitlist">
            <FlowButton text="Join Waitlist" variant="white" />
          </Link>
        </div>
      </motion.div>

      {/* Glow Cards Row - Full Width */}
      <div className="w-full max-w-7xl px-4 grid grid-cols-6 md:grid-cols-12 gap-2 relative z-50 mx-auto">
        {["stripe.com", "notion.so", "figma.com", "linear.app", "github.com", "vercel.com", "slack.com", "openai.com", "spotify.com", "discord.com", "dropbox.com", "airbnb.com"].map((domain, index) => (
          <GlowCard key={index} className="p-0" innerClassName="!p-2 border-0 overflow-hidden gap-0">
            <img 
              src={`https://img.logo.dev/${domain}?token=pk_F_vYCidPT7-3zDZJ5E1PrQ`} 
              alt={`${domain} logo`}
              className="w-full h-full max-w-[100px] mx-auto object-contain rounded-xl"
            />
          </GlowCard>
        ))}
      </div>
    </LampContainer>
  );
}

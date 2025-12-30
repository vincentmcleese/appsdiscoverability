"use client";

import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";
import Link from "next/link";
import { FlowButton } from "@/components/ui/flow-button";

export function HomeHero() {
  return (
    <LampContainer>
      <motion.div
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="flex flex-col items-center"
      >
        {/* Overline */}
        <p className="text-sm md:text-base font-medium text-slate-400 uppercase tracking-wider mb-6">
          PromptRank
        </p>

        {/* Main Headline */}
        <h1 className="bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl mb-4">
          ChatGPT App<br />Discoverability
        </h1>

        {/* Subheadline */}
        <h2 className="bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-center text-2xl md:text-4xl font-medium tracking-tight text-transparent mb-8">
          Make Sure Your ChatGPT App Ranks{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text">#1</span>
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
    </LampContainer>
  );
}

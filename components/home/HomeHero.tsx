"use client";

import Link from "next/link";
import { MeshGradient } from "@/components/ui/MeshGradient";
import { FlowButton } from "@/components/ui/flow-button";
import { ChevronDown } from "lucide-react";

export function HomeHero() {
  return (
    <section className="min-h-[calc(100vh-4rem)] w-full flex flex-col justify-center items-center relative bg-[#ECF4F0] py-16 md:py-24">
      {/* Background Mesh Gradient */}
      <div className="absolute inset-0 z-0">
        <MeshGradient
          speed={0.5}
          colors={[
            "#1BC88C", // Brand Green
            "#14A070", // Darker Brand Green
            "#ECF4F0", // Light App Background
            "#FFFFFF"  // White highlights
          ]}
          distortion={1.2}
          swirl={0.8}
          style={{
            height: "100%",
            width: "100%",
            position: "absolute",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
        {/* Overline */}
        <p className="text-sm md:text-base font-medium text-gray-600 uppercase tracking-wider mb-4">
          PromptRank
        </p>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-ghost-text mb-6 leading-tight">
          ChatGPT App Discoverability
        </h1>

        {/* Subheadline */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight mb-8 leading-tight">
          Make Sure Your ChatGPT App Ranks{" "}
          <span className="bg-brand-gradient bg-clip-text text-transparent">#1</span>.
        </h2>

        {/* Body Text */}
        <p className="text-lg md:text-xl text-gray-700 mb-4 max-w-3xl mx-auto">
          850 million weekly users. Apps appearing at the moment of highest intent.
        </p>

        {/* Tagline */}
        <p className="text-base md:text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
          We'll show you exactly where you rank—and help you climb to #1.
        </p>

        {/* CTA Button */}
        <div className="mb-12">
          <Link href="/waitlist">
            <FlowButton text="Join Waitlist" />
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="flex flex-col items-center text-gray-500 animate-bounce">
          <span className="text-sm mb-2">Scroll to learn more</span>
          <ChevronDown className="w-5 h-5" />
        </div>
      </div>
    </section>
  );
}

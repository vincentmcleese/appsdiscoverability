"use client";

import Link from "next/link";
import { GlowCard } from "@/components/ui/GlowCard";
import { Pill } from "@/components/ui/Pill";
import { ArrowRight } from "lucide-react";

const resources = [
  {
    label: "Guide",
    title: "The Complete Guide to ChatGPT App Discoverability",
    description: "Metadata structure, tool naming, prompt optimization, and the algorithm signals that determine which apps appear in conversations.",
    href: "/guide"
  },
  {
    label: "Thesis",
    title: "Building Apps in ChatGPT: How to Win on the Next Billion-User Platform",
    description: "The four phases of platform distribution. Why you can't opt out. And how to play smart while the window is open.",
    href: "/thesis"
  }
];

export function ResourcesSection() {
  return (
    <section className="relative w-full py-16 md:py-24 overflow-hidden">
      {/* Subtle grid background */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, rgb(148, 163, 184) 1px, transparent 1px),
                           linear-gradient(to bottom, rgb(148, 163, 184) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-normal tracking-tight text-slate-100 mb-4">
            Read More
          </h2>
          <p className="text-lg text-slate-400">
            Read more about ChatGPT app discoverability.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {resources.map((resource) => (
            <Link
              key={resource.href}
              href={resource.href}
              className="group block h-full"
            >
              <GlowCard 
                className="h-full flex flex-col p-6 md:p-8 transition-transform duration-300 hover:scale-[1.02]"
                innerClassName="!bg-slate-950"
              >
                <div className="mb-4">
                  <Pill 
                    label={resource.label}
                    variant="brand"
                  />
                </div>
                
                <h3 className="text-xl md:text-2xl font-normal text-slate-100 mb-3 group-hover:text-[rgb(27,200,140)] transition-colors">
                  {resource.title}
                </h3>
                
                <p className="text-slate-400 leading-relaxed mb-6 flex-grow">
                  {resource.description}
                </p>
                
                <div className="flex items-center text-[rgb(27,200,140)] group-hover:text-[rgb(20,160,112)] transition-colors">
                  <span className="mr-2 font-medium">Learn More</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </GlowCard>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

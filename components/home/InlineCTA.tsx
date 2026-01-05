"use client";

import Link from "next/link";
import { FlowButton } from "@/components/ui/flow-button";
import { MeshGradient } from "@/components/ui/MeshGradient";
import { GlowCard } from "@/components/ui/GlowCard";

export function InlineCTA() {
  // Very dark colors matching background with subtle variation
  const gradientColors = [
    "#020617", // slate-950
    "#0f172a", // slate-900
    "#020617", // slate-950
    "#1e293b", // slate-800 (subtle lighter accent)
  ];

  return (
    <section className="relative py-16 md:py-24 overflow-hidden mx-4 md:mx-8 lg:mx-auto lg:max-w-6xl my-8 md:my-16 rounded-3xl border border-slate-600/40">
      {/* Animated Mesh Gradient Background */}
      <div className="absolute inset-0 z-0 rounded-3xl overflow-hidden">
        <MeshGradient
          speed={0.3}
          colors={gradientColors}
          distortion={1.0}
          swirl={0.6}
          style={{
            height: "100%",
            width: "100%",
            position: "absolute",
          }}
        />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-normal tracking-tight text-slate-100 text-center mb-12 md:mb-16">
          Join the <span className="text-[rgb(27,200,140)]">Waitlist</span>
        </h2>
        
        {/* 3 Feature Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {/* Box 1 */}
          <GlowCard variant="green-default" innerClassName="!bg-slate-900/90 backdrop-blur-sm">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-slate-800">
                <svg className="w-8 h-8 text-[rgb(27,200,140)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-100 mb-2">Join the waiting list</h3>
              <p className="text-slate-400 text-sm">
                Your visitors click on the website's button and enter the waiting list.
              </p>
            </div>
          </GlowCard>
          
          {/* Box 2 */}
          <GlowCard variant="green-default" innerClassName="!bg-slate-900/90 backdrop-blur-sm">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-slate-800">
                <svg className="w-8 h-8 text-[rgb(27,200,140)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-100 mb-2">Refer friends to climb the queue</h3>
              <p className="text-slate-400 text-sm">
                They can move to the top of the waitlist by referring many friends.
              </p>
            </div>
          </GlowCard>
          
          {/* Box 3 */}
          <GlowCard variant="green-default" innerClassName="!bg-slate-900/90 backdrop-blur-sm">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-slate-800">
                <svg className="w-8 h-8 text-[rgb(27,200,140)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-100 mb-2">Get early access</h3>
              <p className="text-slate-400 text-sm">
                People at the top of the waitlist get early access to the platform.
              </p>
            </div>
          </GlowCard>
        </div>
        
        {/* Join Waitlist Button */}
        <div className="flex justify-center">
          <Link href="/begin">
            <FlowButton text="Join Waitlist" variant="white" />
          </Link>
        </div>
      </div>
    </section>
  );
}

"use client";

import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "motion/react";
import React, { useRef } from "react";

const ScrollContent = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const value = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const clipPath = useMotionTemplate`inset(0 0 ${value}% 0)`;

  const progressValue = useTransform(scrollYProgress, [0, 1], [1, 100]);

  const y = useTransform(scrollYProgress, [0, 1], [0, 240]);

  return (
    <div ref={containerRef} className="relative min-h-screen w-full">
      {/* Continuation of hero's radial gradient - fades out as you scroll */}
      <div className="absolute top-0 left-0 right-0 h-[100vh] bg-[radial-gradient(ellipse_1400px_1200px_at_top_left,_var(--tw-gradient-stops))] from-emerald-900/30 via-emerald-950/15 via-50% to-transparent pointer-events-none"></div>
      <div className="absolute top-0 left-0 right-0 h-[100vh] bg-[radial-gradient(ellipse_1400px_1200px_at_top_right,_var(--tw-gradient-stops))] from-emerald-900/30 via-emerald-950/15 via-50% to-transparent pointer-events-none"></div>
      
      {/* Centered container with max-w-3xl */}
      <div className="mx-auto max-w-3xl px-6 flex items-start pt-16 md:pt-24">
        {/* Scroll Indicator */}
        <div className="z-4 bg-slate-800 sticky top-[calc(50%-120px)] flex h-60 w-1.5 flex-col items-center justify-center gap-2 rounded-2xl mr-8 md:mr-12 shrink-0">
          <motion.div
            className="h-full w-full rounded-2xl bg-gradient-to-b from-[rgb(27,200,140)] to-[rgb(20,160,112)]"
            style={{ clipPath }}
          ></motion.div>
          <motion.div
            style={{ y }}
            className="absolute top-0 flex h-px w-4 items-center justify-center bg-[rgb(27,200,140)] text-[10px] md:text-sm font-medium tracking-tight text-[rgb(27,200,140)]"
          >
            <motion.span className="absolute left-4 md:left-6 tabular-nums">
              {useTransform(progressValue, (v) => Math.round(v))}
            </motion.span>
          </motion.div>
        </div>

        <Content />
      </div>
    </div>
  );
};

export { ScrollContent };

function Content() {
  return (
    <article className="flex-1 space-y-[22vh] text-slate-300">
      <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-100 leading-tight text-center">
        <span className="text-[rgb(27,200,140)]">850 million</span> people use ChatGPT every week,
      </h2>

      <p className="text-2xl leading-relaxed max-w-xl mx-auto">
        that's more than 10% of the global population. For context, when Apple launched the App Store in 2009, there were just <span className="font-bold text-[rgb(27,200,140)]">6 million iPhones</span> in distribution. OpenAI just released the Apps SDK - the opportunity to build inside ChatGPT is enormous, and companies are already rushing to do it.
      </p>

      <p className="text-2xl leading-relaxed max-w-xl mx-auto">
        And this is only the beginning. More of our digital activity is moving inside LLMs - searching, creating, planning, working. Building apps inside ChatGPT, or having your brand present there, isn't a nice-to-have anymore. It's where your users are heading - and it's quickly becoming a <span className="font-bold text-[rgb(27,200,140)]">customer expectation</span>. The apps that are present will be the ones that get used, capturing an increasing share of attention over time.
      </p>

      <p className="text-2xl leading-relaxed max-w-xl mx-auto">
        Just like with Apple's Mobile App Store, building great applications will be critical. But a great app is nothing without discoverability. As the ecosystem fills with apps, it will become your <span className="font-bold text-[rgb(27,200,140)]">single biggest bottleneck</span> to growth. The teams that crack it will be the ones that succeed.
      </p>

      <p className="text-2xl leading-relaxed max-w-xl mx-auto">
        In ChatGPT, discoverability starts with the App Store - and it's already live. Just like the Apple App Store, the apps that rank for <span className="font-bold text-[rgb(27,200,140)]">high-volume keywords</span> get the traffic. You need to make sure you're found there. Optimizing your metadata, descriptions, and positioning will matter.
      </p>

      <p className="text-2xl leading-relaxed max-w-xl mx-auto">
        But on top of that, there's a whole new paradigm: <span className="font-bold text-[rgb(27,200,140)]">organic recommendations</span>. When someone is planning a trip and asks ChatGPT to help organize their itinerary, an app can appear right below the response - at the moment of highest intent. No search. No browsing. Users simply continue their journey with that app. This is distribution that's never existed before.
      </p>

      <p className="text-2xl leading-relaxed max-w-xl mx-auto">
        As more apps flood in, the question becomes urgent: when a user asks for help, which app appears below the response? Which one ranks first in the store for the keywords that matter? The teams that understand discoverability - and <span className="font-bold text-[rgb(27,200,140)]">own the high-volume keywords and prompts</span> in their category - will win. The rest will be invisible.
      </p>

      <p className="text-2xl leading-relaxed max-w-xl mx-auto">
        That's why we're building <span className="font-bold text-[rgb(27,200,140)]">Appsdiscoverability.com</span>. We track store search and organic recommendations - for you and your competitors. We show you where you're winning, where you're losing, and what it takes to climb. Then we help you get to #1.
      </p>
    </article>
  );
}


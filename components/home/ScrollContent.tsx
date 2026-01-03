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
        <span className="text-[rgb(27,200,140)]">850 million</span> people use ChatGPT every week
      </h2>

      <div className="max-w-xl mx-auto">
        <span className="text-sm uppercase tracking-widest text-slate-500 font-medium">100X THE IOS APP STORE</span>
        <p className="text-2xl leading-relaxed mt-3">
          In 2007, <span className="font-bold text-[rgb(27,200,140)]">6 million iPhones</span> were sold. 
          Today, <span className="font-bold text-[rgb(27,200,140)]">850 million people</span> use ChatGPT every week. 
          We're witnessing a platform shift that happens once in a generation.
          <svg
            className="inline-block w-6 h-6 ml-2 -mt-1 text-white"
            fill="currentColor"
            viewBox="0 0 384 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
          </svg>
        </p>
      </div>

      <div className="max-w-xl mx-auto">
        <span className="text-sm uppercase tracking-widest text-slate-500 font-medium">THE NEW GOOGLE</span>
        <p className="text-2xl leading-relaxed mt-3">
          LLMs are becoming the <span className="font-bold text-[rgb(27,200,140)]">primary interface</span> for how people 
          interact with software. Instead of searching Google, downloading apps, and learning new UIs—users simply 
          describe what they need, and the AI figures out which tool to use.
          <svg
            className="inline-block w-6 h-6 ml-2 -mt-1 text-white"
            fill="currentColor"
            viewBox="0 0 488 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
          </svg>
        </p>
      </div>

      <div className="max-w-xl mx-auto">
        <span className="text-sm uppercase tracking-widest text-slate-500 font-medium">A NEW PARADIGM</span>
        <p className="text-2xl leading-relaxed mt-3">
          This creates an entirely new <span className="font-bold text-[rgb(27,200,140)]">discoverability bottleneck</span>. 
          Your app might be the best in its category, but if ChatGPT doesn't recommend it at the right moment, 
          users will never know you exist.
        </p>
      </div>

      <div className="max-w-xl mx-auto">
        <span className="text-sm uppercase tracking-widest text-slate-500 font-medium">HOW TO WIN</span>
        <p className="text-2xl leading-relaxed mt-3">
          Traditional SEO and App Store Optimization are becoming less relevant. The new game is 
          <span className="font-bold text-[rgb(27,200,140)]"> LLM optimization</span>—understanding how AI models 
          decide which apps to surface, and positioning your product to win those recommendations.
        </p>
      </div>

      <div className="max-w-xl mx-auto">
        <span className="text-sm uppercase tracking-widest text-slate-500 font-medium">THE OPPORTUNITY IS NOW</span>
        <p className="text-2xl leading-relaxed mt-3">
          The teams that understand this shift first will <span className="font-bold text-[rgb(27,200,140)]">own their categories</span>. 
          The window to establish dominance is open now, but it won't stay open forever.
        </p>
      </div>

      <p className="text-2xl leading-relaxed max-w-xl mx-auto">
        Apps appearing at the <span className="font-bold text-[rgb(27,200,140)]">moment of highest intent</span>—when 
        a user is actively describing their problem—convert at rates traditional marketing can only dream of.
      </p>

      <p className="text-2xl leading-relaxed max-w-xl mx-auto">
        The competition isn't sitting still. Every day you wait, your competitors are learning the new rules 
        and climbing the rankings. <span className="font-bold text-[rgb(27,200,140)]">First-mover advantage</span> in 
        LLM discoverability could define the next decade of your business.
      </p>
    </article>
  );
}


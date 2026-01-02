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
    <div ref={containerRef} className="relative min-h-screen w-full bg-slate-950">
      {/* Continuation of hero's radial gradient - fades out as you scroll */}
      <div className="absolute top-0 left-0 right-0 h-[100vh] bg-[radial-gradient(ellipse_1400px_1200px_at_top_left,_var(--tw-gradient-stops))] from-emerald-900/30 via-emerald-950/15 via-50% to-transparent pointer-events-none"></div>
      <div className="absolute top-0 left-0 right-0 h-[100vh] bg-[radial-gradient(ellipse_1400px_1200px_at_top_right,_var(--tw-gradient-stops))] from-emerald-900/30 via-emerald-950/15 via-50% to-transparent pointer-events-none"></div>
      
      {/* Centered container with max-w-4xl */}
      <div className="mx-auto max-w-4xl px-6 flex items-start pt-[calc(50vh-120px)]">
        {/* Scroll Indicator */}
        <div className="z-4 bg-slate-800 sticky top-[calc(50%-120px)] flex h-60 w-1.5 flex-col items-center justify-center gap-2 rounded-2xl mr-8 md:mr-12 shrink-0">
          <motion.div
            className="h-full w-full rounded-2xl bg-gradient-to-b from-[rgb(27,200,140)] to-[rgb(20,160,112)]"
            style={{ clipPath }}
          ></motion.div>
          <motion.div
            style={{ y }}
            className="absolute top-0 flex h-px w-4 items-center justify-center bg-[rgb(27,200,140)] text-sm font-medium tracking-tight text-[rgb(27,200,140)]"
          >
            <motion.span className="absolute left-6 tabular-nums">
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
    <article className="flex-1 space-y-[30vh] pb-[40vh] text-slate-300">
      <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-100 leading-tight">
        <span className="text-[rgb(27,200,140)]">850 million</span> people use ChatGPT every week
      </h2>
      
      <p className="text-lg leading-relaxed">
        In 2007, <span className="font-bold text-[rgb(27,200,140)]">6 million iPhones</span> were sold. 
        Today, <span className="font-bold text-[rgb(27,200,140)]">850 million people</span> use ChatGPT every week. 
        We're witnessing a platform shift that happens once in a generation.
      </p>

      <p className="text-lg leading-relaxed">
        LLMs are becoming the <span className="font-bold text-[rgb(27,200,140)]">primary interface</span> for how people 
        interact with software. Instead of searching Google, downloading apps, and learning new UIs—users simply 
        describe what they need, and the AI figures out which tool to use.
      </p>

      <p className="text-lg leading-relaxed">
        This creates an entirely new <span className="font-bold text-[rgb(27,200,140)]">discoverability bottleneck</span>. 
        Your app might be the best in its category, but if ChatGPT doesn't recommend it at the right moment, 
        users will never know you exist.
      </p>

      <p className="text-lg leading-relaxed">
        Traditional SEO and App Store Optimization are becoming less relevant. The new game is 
        <span className="font-bold text-[rgb(27,200,140)]"> LLM optimization</span>—understanding how AI models 
        decide which apps to surface, and positioning your product to win those recommendations.
      </p>

      <p className="text-lg leading-relaxed">
        The teams that understand this shift first will <span className="font-bold text-[rgb(27,200,140)]">own their categories</span>. 
        The window to establish dominance is open now, but it won't stay open forever.
      </p>

      <p className="text-lg leading-relaxed">
        Apps appearing at the <span className="font-bold text-[rgb(27,200,140)]">moment of highest intent</span>—when 
        a user is actively describing their problem—convert at rates traditional marketing can only dream of.
      </p>

      <p className="text-lg leading-relaxed">
        The competition isn't sitting still. Every day you wait, your competitors are learning the new rules 
        and climbing the rankings. <span className="font-bold text-[rgb(27,200,140)]">First-mover advantage</span> in 
        LLM discoverability could define the next decade of your business.
      </p>
    </article>
  );
}


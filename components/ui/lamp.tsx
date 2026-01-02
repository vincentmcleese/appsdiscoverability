"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative flex h-screen flex-col items-center justify-start overflow-hidden bg-slate-950 w-full z-0",
        className
      )}
    >
      {/* Lamp bar at top edge */}
      <motion.div
        initial={{ opacity: 0, width: "15rem" }}
        animate={{ opacity: 1, width: "30rem" }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="absolute top-0 left-1/2 -translate-x-1/2 z-50 h-1 w-[30rem] max-w-[80vw] bg-[rgb(27,200,140)]"
      ></motion.div>
      
      {/* Glow effect from the bar */}
      <motion.div
        initial={{ opacity: 0, width: "8rem" }}
        animate={{ opacity: 0.6, width: "20rem" }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="absolute top-0 left-1/2 -translate-x-1/2 z-40 h-32 w-80 max-w-[60vw] bg-[rgb(27,200,140)] blur-3xl"
      ></motion.div>
      
      {/* Radial gradient overlay - subtle green glow at bottom corners */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_1200px_800px_at_bottom_left,_var(--tw-gradient-stops))] from-emerald-900/30 via-emerald-950/20 to-transparent z-10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_1200px_800px_at_bottom_right,_var(--tw-gradient-stops))] from-emerald-900/30 via-emerald-950/20 to-transparent z-10"></div>
      
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0 hidden">
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          animate={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] max-w-[80vw] bg-gradient-conic from-[rgb(27,200,140)] via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute  w-[100%] left-0 bg-white h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute  w-40 h-[100%] left-0 bg-white  bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          animate={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-56 w-[30rem] max-w-[80vw] bg-gradient-conic from-transparent via-transparent to-[rgb(27,200,140)] text-white [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute  w-40 h-[100%] right-0 bg-white  bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute  w-[100%] right-0 bg-white h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>
        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-white blur-2xl"></div>
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
        <div className="absolute inset-auto z-50 h-36 w-[28rem] max-w-[80vw] -translate-y-1/2 rounded-full bg-[rgb(27,200,140)] opacity-50 blur-3xl"></div>
        <motion.div
          initial={{ width: "8rem" }}
          animate={{ width: "16rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-30 h-36 w-64 max-w-[60vw] translate-y-[2rem] rounded-full bg-[rgb(20,160,112)] blur-2xl"
        ></motion.div>
        <motion.div
          initial={{ width: "15rem" }}
          animate={{ width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-50 h-1 w-[30rem] max-w-[80vw] translate-y-[1rem] bg-[rgb(27,200,140)]"
        ></motion.div>
        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[4.5rem] bg-white "></div>
      </div>
      <div className="relative z-50 flex flex-col items-center px-5 w-full">
        {children}
      </div>
      {/* Soft fade to transparency - only below the viewport */}
      <div className="absolute bottom-0 left-0 right-0 h-64 -mb-64 bg-gradient-to-b from-slate-950 to-transparent z-50"></div>
    </div>
  );
};


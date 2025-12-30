"use client";

import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { SendHorizonal } from "lucide-react";
import { useState, forwardRef, useImperativeHandle, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export interface SendIconHandle {
    triggerAnimation: () => Promise<void>;
}

export const SendIcon = forwardRef<SendIconHandle, { className?: string; onClick?: () => void }>(
    ({ className, onClick }, ref) => {
  const controls = useAnimation();
  const [isAnimating, setIsAnimating] = useState(false);
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  const animate = async () => {
    if (isAnimating || !isMounted.current) return;

    setIsAnimating(true);
    if (onClick) onClick();

    try {
        if (isMounted.current) {
            await controls.start({
              scale: 0.8,
              x: 0,
              transition: { duration: 0.18, ease: "easeInOut" },
            });
        }

        await new Promise((res) => setTimeout(res, 200));

        if (isMounted.current) {
            await controls.start({
              scale: 0.8,
              x: 100,
              transition: { duration: 0.28, ease: "easeInOut" },
            });
        }

        if (isMounted.current) {
            await controls.set({ scale: 1, x: -100 });
        }

        if (isMounted.current) {
            await controls.start({
              scale: 1,
              x: 0,
              transition: { duration: 0.28, ease: "easeInOut" },
            });
        }
    } catch (error) {
        // Ignore animation errors on unmount
    }
    
    if (isMounted.current) {
        setIsAnimating(false);
    }
  };

  useImperativeHandle(ref, () => ({
    triggerAnimation: animate
  }));

  return (
    <div
      onClick={animate}
      className={cn(
        "flex size-full cursor-pointer items-center justify-center overflow-hidden",
        className,
      )}
    >
      <motion.span animate={controls} style={{ willChange: "transform" }}>
        <SendHorizonal className="size-5" />
      </motion.span>
    </div>
  );
});

SendIcon.displayName = "SendIcon";

"use client";

import { motion } from "framer-motion";
import React, { useEffect, useRef, useState, useCallback } from "react";
import { cn } from "@/lib/utils";

export type ScrollSection = {
  id: string;
  title: string;
  content: React.ReactNode;
};

type ContentScrollProps = {
  sections: ScrollSection[];
  className?: string;
  theme?: 'light' | 'dark';
};

export const ContentScroll = ({
  sections,
  className,
  theme = 'light',
}: ContentScrollProps) => {
  const [activeSection, setActiveSection] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const isDark = theme === 'dark';

  // Calculate which section should be active based on scroll position
  const updateActiveSection = useCallback(() => {
    const scrollTop = window.scrollY;
    const viewportHeight = window.innerHeight;
    // Detection point: 25% down from top of viewport
    const detectionPoint = scrollTop + viewportHeight * 0.25;

    let newActiveIndex = 0;

    for (let i = 0; i < sectionRefs.current.length; i++) {
      const section = sectionRefs.current[i];
      if (!section) continue;

      const rect = section.getBoundingClientRect();
      const sectionTop = scrollTop + rect.top;
      const sectionBottom = sectionTop + rect.height;

      // If the detection point is within this section, it's active
      if (detectionPoint >= sectionTop && detectionPoint < sectionBottom) {
        newActiveIndex = i;
        break;
      }
      // If we've scrolled past this section, it could be the active one
      // (handles case where detection point is between sections)
      if (detectionPoint >= sectionTop) {
        newActiveIndex = i;
      }
    }

    setActiveSection(newActiveIndex);
  }, []);

  useEffect(() => {
    // Initial check
    updateActiveSection();

    // Listen for scroll
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection, { passive: true });

    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, [updateActiveSection]);

  return (
    <div className={cn("flex flex-col lg:flex-row gap-12", className)}>
      {/* Sidebar Navigation - Sticky on Desktop */}
      <div className="lg:w-1/4">
        <div className="sticky top-32 hidden lg:block">
          <h4 className={cn(
            "text-sm font-semibold uppercase tracking-wider mb-6",
            isDark ? "text-slate-400" : "text-gray-900"
          )}>
            Contents
          </h4>
          <ul className={cn(
            "space-y-4 border-l",
            isDark ? "border-slate-700" : "border-gray-200"
          )}>
            {sections.map((section, index) => (
              <li className="relative cursor-pointer pl-4" key={section.id}>
                <a
                  href={`#${section.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(section.id)?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="block py-1"
                >
                  {activeSection === index && (
                    <motion.span
                      layoutId="active-section"
                      className="absolute -left-[1.5px] top-0 bottom-0 w-[3px] rounded-full bg-brand-gradient"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}

                  <p
                    className={cn(
                      "text-sm font-medium transition-colors duration-200",
                      activeSection === index
                        ? isDark ? "text-slate-100" : "text-gray-900"
                        : isDark ? "text-slate-500 hover:text-slate-300" : "text-gray-500 hover:text-gray-700"
                    )}
                  >
                    {section.title}
                  </p>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 flex flex-col gap-16 md:gap-24 min-w-0">
        {sections.map((section, index) => (
          <div
            key={section.id}
            ref={(el) => { sectionRefs.current[index] = el; }}
            id={section.id}
            className="space-y-4 md:space-y-6 scroll-mt-32"
          >
            <h2 className={cn(
              "text-lg md:text-xl font-normal tracking-wider mb-6 relative inline-block",
              isDark ? "text-slate-100" : "text-gray-900"
            )}>
              {section.title}
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-gradient"></span>
            </h2>
            <div className={cn(
              "text-sm leading-relaxed min-w-0 w-full",
              isDark ? "text-slate-300" : "text-gray-600"
            )}>
              {section.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


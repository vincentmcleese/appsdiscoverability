"use client";

import { motion, useInView } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export type ScrollSection = {
  id: string;
  title: string;
  content: React.ReactNode;
};

type ContentScrollProps = {
  sections: ScrollSection[];
  className?: string;
};

const Section = ({
  section,
  index,
  children,
  setActiveSection,
}: {
  section: ScrollSection;
  index: number;
  children: React.ReactNode;
  setActiveSection: (index: number) => void;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: 0.3,
    margin: "-100px 0px -50% 0px",
  });

  useEffect(() => {
    if (isInView) {
      setActiveSection(index);
    }
  }, [isInView, index, setActiveSection]);

  return (
    <div ref={ref} id={section.id} className="space-y-4 md:space-y-6 scroll-mt-32">
      {children}
    </div>
  );
};

export const ContentScroll = ({
  sections,
  className,
}: ContentScrollProps) => {
  const [activeSection, setActiveSection] = useState(0);

  return (
    <div className={cn("flex flex-col lg:flex-row gap-12", className)}>
      {/* Sidebar Navigation - Sticky on Desktop */}
      <div className="lg:w-1/4">
        <div className="sticky top-32 hidden lg:block">
          <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-6">
            Contents
          </h4>
          <ul className="space-y-4 border-l border-gray-200">
            {sections.map((section, index) => (
              <li className="relative cursor-pointer pl-4" key={section.id}>
                <a
                  href={`#${section.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(section.id)?.scrollIntoView({ behavior: "smooth" });
                    setActiveSection(index);
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
                      activeSection === index ? "text-gray-900" : "text-gray-500 hover:text-gray-700"
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
          <Section
            key={section.id}
            section={section}
            index={index}
            setActiveSection={setActiveSection}
          >
            <h2 className="text-lg md:text-xl font-normal text-gray-900 tracking-wider mb-6 relative inline-block">
              {section.title}
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-gradient"></span>
            </h2>
            <div className="text-sm text-gray-600 leading-relaxed min-w-0 w-full">
              {section.content}
            </div>
          </Section>
        ))}
      </div>
    </div>
  );
};


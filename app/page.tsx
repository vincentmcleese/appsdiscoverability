import { HomeHero } from "../components/home/HomeHero";
import { ScrollContent } from "../components/home/ScrollContent";
import { InlineCTA } from "../components/home/InlineCTA";
import { ResourcesSection } from "../components/home/ResourcesSection";
import { CTASection } from "../components/home/CTASection";

export const metadata = {
  title: "Appsdiscoverability.com - ChatGPT App Discoverability",
  description: "Make Sure Your ChatGPT App Ranks #1. 850 million weekly users. We'll show you exactly where you rank—and help you climb to #1.",
};

export default function Home() {
  return (
    <div className="w-full">
      <HomeHero />
      <ScrollContent />
      <InlineCTA />
      <ResourcesSection />
      <CTASection />
    </div>
  );
}

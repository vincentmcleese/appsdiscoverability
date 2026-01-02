import Link from "next/link";
import { FlowButton } from "@/components/ui/flow-button";

export function InlineCTA() {
  return (
    <section className="w-full bg-gray-50 py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
        <Link href="/waitlist">
          <FlowButton text="Join Waitlist" />
        </Link>
      </div>
    </section>
  );
}



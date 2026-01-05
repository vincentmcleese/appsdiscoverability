import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ContentScroll, ScrollSection } from "@/components/ui/content-scroll";

export const metadata = {
  title: "Terms of Service - Appdiscoverability.com",
  description: "Read our Terms of Service. Last updated: December 30, 2025",
};

const sections: ScrollSection[] = [
  {
    id: "agreement",
    title: "1. Agreement to Terms",
    content: (
      <p className="text-gray-600 leading-relaxed">
        By accessing or using the Ghost Team website, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
      </p>
    )
  },
  {
    id: "license",
    title: "2. Use License",
    content: (
      <>
        <p className="text-gray-600 leading-relaxed mb-4">
          Permission is granted to temporarily access the materials on Ghost Team's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
        </p>
        <ul className="list-disc pl-6 text-gray-600 leading-relaxed space-y-2">
          <li>Modify or copy the materials</li>
          <li>Use the materials for any commercial purpose or for any public display</li>
          <li>Attempt to reverse engineer any software contained on Ghost Team's website</li>
          <li>Remove any copyright or other proprietary notations from the materials</li>
          <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
        </ul>
      </>
    )
  },
  {
    id: "disclaimer",
    title: "3. Disclaimer",
    content: (
      <p className="text-gray-600 leading-relaxed">
        The materials on Ghost Team's website are provided on an 'as is' basis. Ghost Team makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
      </p>
    )
  },
  {
    id: "limitations",
    title: "4. Limitations",
    content: (
      <p className="text-gray-600 leading-relaxed">
        In no event shall Ghost Team or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Ghost Team's website, even if Ghost Team or a Ghost Team authorized representative has been notified orally or in writing of the possibility of such damage.
      </p>
    )
  },
  {
    id: "accuracy",
    title: "5. Accuracy of Materials",
    content: (
      <p className="text-gray-600 leading-relaxed">
        The materials appearing on Ghost Team's website could include technical, typographical, or photographic errors. Ghost Team does not warrant that any of the materials on its website are accurate, complete, or current. Ghost Team may make changes to the materials contained on its website at any time without notice.
      </p>
    )
  },
  {
    id: "links",
    title: "6. Links",
    content: (
      <p className="text-gray-600 leading-relaxed">
        Ghost Team has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Ghost Team of the site. Use of any such linked website is at the user's own risk.
      </p>
    )
  },
  {
    id: "modifications",
    title: "7. Modifications",
    content: (
      <p className="text-gray-600 leading-relaxed">
        Ghost Team may revise these Terms of Service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these Terms of Service.
      </p>
    )
  },
  {
    id: "governing-law",
    title: "8. Governing Law",
    content: (
      <p className="text-gray-600 leading-relaxed">
        These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which Ghost Team operates and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
      </p>
    )
  },
  {
    id: "service-terms",
    title: "9. Service Terms",
    content: (
      <>
        <p className="text-gray-600 leading-relaxed mb-4">
          When you engage Ghost Team for services, additional terms may apply. These may include:
        </p>
        <ul className="list-disc pl-6 text-gray-600 leading-relaxed space-y-2">
          <li>Project-specific agreements and statements of work</li>
          <li>Payment terms and conditions</li>
          <li>Intellectual property rights and ownership</li>
          <li>Confidentiality and non-disclosure obligations</li>
          <li>Service level agreements and support terms</li>
        </ul>
      </>
    )
  },
  {
    id: "contact",
    title: "10. Contact Information",
    content: (
      <>
        <p className="text-gray-600 leading-relaxed mb-6">
          If you have any questions about these Terms of Service, please contact us at:
        </p>
        <p className="text-gray-600 leading-relaxed mb-2">
          Ghost Team
        </p>
        <p className="text-gray-600 leading-relaxed">
          Email: <a href="mailto:legal@ghostteam.com" className="text-ghost-dark hover:underline">legal@ghostteam.com</a>
        </p>
      </>
    )
  }
];

export default function TermsOfServicePage() {
  return (
    <div className="w-full bg-white min-h-screen">
      {/* Header Section */}
      <section className="relative pt-12 pb-12 md:pt-20 md:pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Back Button */}
        <div className="mb-4">
          <Link
            href="/"
            className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-ghost-dark transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Link>
        </div>

        {/* Title and Last Updated Row */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-normal text-gray-900 mb-4">
            Terms of Service
          </h1>
          <p className="text-sm text-gray-500">
            Last updated: <time dateTime="2025-12-30">December 30, 2025</time>
          </p>
        </div>
      </section>

      {/* Content Section with Chapter Navigation */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-24">
        <ContentScroll sections={sections} />
      </section>
    </div>
  );
}

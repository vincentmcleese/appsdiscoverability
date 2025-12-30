import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ContentScroll, ScrollSection } from "@/components/ui/content-scroll";

export const metadata = {
  title: "Privacy Policy - PromptRank",
  description: "Read our Privacy Policy. Last updated: December 30, 2025",
};

const sections: ScrollSection[] = [
  {
    id: "introduction",
    title: "1. Introduction",
    content: (
      <p className="text-gray-600 leading-relaxed">
        Ghost Team ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
      </p>
    )
  },
  {
    id: "information-we-collect",
    title: "2. Information We Collect",
    content: (
      <>
        <p className="text-gray-600 leading-relaxed mb-4">
          We may collect information about you in a variety of ways. The information we may collect on the website includes:
        </p>
        <ul className="list-disc pl-6 text-gray-600 leading-relaxed space-y-2">
          <li>Personal data such as your name, email address, and contact information when you voluntarily provide it to us</li>
          <li>Usage data including your IP address, browser type, operating system, and browsing behavior on our site</li>
          <li>Cookies and tracking technologies to enhance your experience on our website</li>
        </ul>
      </>
    )
  },
  {
    id: "use-of-information",
    title: "3. Use of Your Information",
    content: (
      <>
        <p className="text-gray-600 leading-relaxed mb-4">
          Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the website to:
        </p>
        <ul className="list-disc pl-6 text-gray-600 leading-relaxed space-y-2">
          <li>Respond to your inquiries and provide customer support</li>
          <li>Send you marketing and promotional communications</li>
          <li>Improve our website and services</li>
          <li>Monitor and analyze usage and trends to improve your experience</li>
          <li>Protect against fraudulent or illegal activity</li>
        </ul>
      </>
    )
  },
  {
    id: "disclosure",
    title: "4. Disclosure of Your Information",
    content: (
      <>
        <p className="text-gray-600 leading-relaxed mb-4">
          We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
        </p>
        <ul className="list-disc pl-6 text-gray-600 leading-relaxed space-y-2">
          <li><strong>By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others</li>
          <li><strong>Business Transfers:</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company</li>
          <li><strong>Third-Party Service Providers:</strong> We may share your information with third parties that perform services for us or on our behalf</li>
        </ul>
      </>
    )
  },
  {
    id: "security",
    title: "5. Security of Your Information",
    content: (
      <p className="text-gray-600 leading-relaxed">
        We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable.
      </p>
    )
  },
  {
    id: "cookies",
    title: "6. Cookies and Tracking Technologies",
    content: (
      <p className="text-gray-600 leading-relaxed">
        We may use cookies, web beacons, tracking pixels, and other tracking technologies on the website to help customize the website and improve your experience. When you access the website, your personal information is not collected through the use of tracking technology.
      </p>
    )
  },
  {
    id: "your-rights",
    title: "7. Your Rights",
    content: (
      <>
        <p className="text-gray-600 leading-relaxed mb-4">
          Depending on your location, you may have certain rights regarding your personal information, including:
        </p>
        <ul className="list-disc pl-6 text-gray-600 leading-relaxed space-y-2">
          <li>The right to access and receive a copy of your personal information</li>
          <li>The right to correct or update your personal information</li>
          <li>The right to delete your personal information</li>
          <li>The right to restrict or object to processing of your personal information</li>
          <li>The right to data portability</li>
        </ul>
      </>
    )
  },
  {
    id: "contact",
    title: "8. Contact Us",
    content: (
      <>
        <p className="text-gray-600 leading-relaxed mb-6">
          If you have questions or comments about this Privacy Policy, please contact us at:
        </p>
        <p className="text-gray-600 leading-relaxed mb-2">
          Ghost Team
        </p>
        <p className="text-gray-600 leading-relaxed">
          Email: <a href="mailto:privacy@ghostteam.com" className="text-ghost-dark hover:underline">privacy@ghostteam.com</a>
        </p>
      </>
    )
  }
];

export default function PrivacyPolicyPage() {
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
            Privacy Policy
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

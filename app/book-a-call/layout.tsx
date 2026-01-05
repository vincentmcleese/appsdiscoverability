import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Demo - Appdiscoverability.com",
  description: "Schedule a demo to see how Appdiscoverability.com can help your ChatGPT app rank #1.",
};

export default function BookACallLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}


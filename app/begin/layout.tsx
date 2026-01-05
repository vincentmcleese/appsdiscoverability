import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join the Waitlist - Appdiscoverability.com",
  description: "Be the first to know when Appdiscoverability.com launches. Join our waitlist today.",
};

export default function BeginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}


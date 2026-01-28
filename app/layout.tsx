import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Navbar } from "../components/Navbar";
import { AlertBanner } from "../components/AlertBanner";
import { Footer } from "../components/Footer";
import { MainContent } from "../components/MainContent";
import { neueMontreal } from "./fonts";
import SmoothScroll from "../components/SmoothScroll";

const GA_MEASUREMENT_ID = "G-Y8G5LSKGFR";


export const metadata: Metadata = {
  title: "Appdiscoverability.com - ChatGPT App Discoverability",
  description: "Make Sure Your ChatGPT App Ranks #1. 850 million weekly users. We'll show you exactly where you rank—and help you climb to #1.",
  icons: {
    icon: "/ghosts/speedyghost.png",
    shortcut: "/ghosts/speedyghost.png",
    apple: "/ghosts/speedyghost.png",
  },
  openGraph: {
    title: "Appdiscoverability.com - ChatGPT App Discoverability",
    description: "Make Sure Your ChatGPT App Ranks #1. 850 million weekly users. We'll show you exactly where you rank—and help you climb to #1.",
    images: [
      {
        url: '/images/OGshare.png',
        width: 1200,
        height: 630,
        alt: 'Appdiscoverability.com - ChatGPT App Discoverability',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Appdiscoverability.com - ChatGPT App Discoverability",
    description: "Make Sure Your ChatGPT App Ranks #1. 850 million weekly users. We'll show you exactly where you rank—and help you climb to #1.",
    images: ['/images/OGshare.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${neueMontreal.variable} font-sans antialiased bg-slate-950`}
      >
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        <SmoothScroll>
          <AlertBanner />
          <Navbar />
          <MainContent>
            {children}
          </MainContent>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}

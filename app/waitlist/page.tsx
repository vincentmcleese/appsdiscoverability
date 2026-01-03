import Script from "next/script";

export const metadata = {
  title: "Join the Waitlist - PromptRank",
  description: "Be the first to know when PromptRank launches. Join our waitlist today.",
};

export default function WaitlistPage() {
  return (
    <>
      <Script
        src="https://app.viral-loops.com/widgetsV2/core/loader.js"
        data-campaign-id="J2VN7EaHAOKvgR8SlUhGLE3ZCeE"
        id="viral-loops-loader"
        strategy="afterInteractive"
      />
      
      <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center px-6 py-24">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-100 text-center mb-12">
          Join the <span className="text-[rgb(27,200,140)]">Waitlist</span>
        </h1>
        
        {/* Viral Loops Embed Form */}
        {/* @ts-expect-error - form-widget is a web component from Viral Loops */}
        <form-widget ucid="J2VN7EaHAOKvgR8SlUhGLE3ZCeE"></form-widget>
      </div>
    </>
  );
}

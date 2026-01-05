import Script from "next/script";

export const metadata = {
  title: "Join the Waitlist - Appdiscoverability.com",
  description: "Be the first to know when Appdiscoverability.com launches. Join our waitlist today.",
};

export default function BeginPage() {
  return (
    <>
      <Script
        src="https://tally.so/widgets/embed.js"
        strategy="afterInteractive"
      />
      
      <div className="min-h-screen bg-slate-950 flex flex-col items-center px-6 pt-24 pb-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-100 text-center mb-12">
          A few <span className="text-[rgb(27,200,140)]">questions</span>
        </h1>
        
        {/* Tally Embed Form in Card */}
        <div className="w-full max-w-2xl bg-white rounded-2xl p-8 md:p-12 shadow-xl">
          <iframe 
            data-tally-src="https://tally.so/embed/ja6GbJ?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" 
            loading="lazy" 
            width="100%" 
            height="214" 
            frameBorder="0" 
            marginHeight={0} 
            marginWidth={0} 
            title="appdiscoverability waitlist"
          />
        </div>
      </div>
    </>
  );
}


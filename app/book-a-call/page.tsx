export const metadata = {
  title: "Book a Demo - PromptRank",
  description: "Schedule a demo to see how PromptRank can help your ChatGPT app rank #1.",
};

export default function BookACallPage() {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center px-6 pt-24 pb-8">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-100 text-center mb-12">
        Book a <span className="text-[rgb(27,200,140)]">demo</span>
      </h1>
      
      {/* Empty Card - Embed will be added later */}
      <div className="w-full max-w-2xl bg-white rounded-2xl p-8 md:p-12 shadow-xl">
        {/* Embed placeholder */}
      </div>
    </div>
  );
}


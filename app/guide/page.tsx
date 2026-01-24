import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ContentScroll, ScrollSection } from "@/components/ui/content-scroll";

export const metadata = {
  title: "The Complete Guide to ChatGPT App Discoverability - Appdiscoverability.com",
  description: "A practical playbook for getting your ChatGPT app found—grounded in official documentation and real-world testing.",
};

const proseClasses = `prose prose-invert prose-slate max-w-none
  prose-h3:text-2xl prose-h3:font-semibold prose-h3:text-slate-200 prose-h3:mt-10 prose-h3:mb-4
  prose-h4:text-xl prose-h4:font-medium prose-h4:text-slate-300 prose-h4:mt-8 prose-h4:mb-3
  prose-p:text-slate-300 prose-p:leading-relaxed prose-p:mb-4
  prose-a:text-[rgb(27,200,140)] prose-a:no-underline hover:prose-a:underline hover:prose-a:text-[rgb(20,160,112)]
  prose-strong:text-slate-100 prose-strong:font-semibold
  prose-code:text-[rgb(27,200,140)] prose-code:bg-slate-900 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm
  prose-pre:bg-slate-900 prose-pre:border prose-pre:border-slate-800 prose-pre:text-slate-300
  prose-blockquote:border-l-4 prose-blockquote:border-[rgb(27,200,140)] prose-blockquote:text-slate-300 prose-blockquote:italic
  prose-ul:text-slate-300 prose-ol:text-slate-300 prose-li:text-slate-300 prose-li:leading-relaxed
  prose-table:text-slate-300 prose-th:text-slate-200 prose-th:bg-slate-800 prose-td:bg-slate-900/50
  prose-hr:border-slate-700`;

const sections: ScrollSection[] = [
  {
    id: "discoverability-problem",
    title: "The Discoverability Problem",
    content: (
      <div className={proseClasses}>
        <p>You built a great ChatGPT app. It works perfectly. Users love it when they find it.</p>
        <p>But <strong>discoverability determines success.</strong> It's like making sure you rank on Google - you only get results if users find you first.</p>

        <h3>Why Discoverability is the Bottleneck</h3>
        <p>ChatGPT has +850 million weekly active users. The App Store is live and growing. But unlike the early days of the iPhone App Store - where getting in early meant automatic visibility - ChatGPT apps don't get discovered by accident. There's no "new releases" section (yet) that guarantees eyeballs.</p>
        <p><strong>Discoverability is the bottleneck for growth.</strong> You can build the most useful app in the ecosystem, but if ChatGPT doesn't know when to suggest it - or if users can't find it when they search - your app won't get used.</p>
        <p>The developers who understand this early will dominate the rankings as the ecosystem matures. Just like mobile ASO (App Store Optimization) became a discipline unto itself, ChatGPT app discoverability will become essential knowledge for anyone building in this space.</p>

        <h3>How ChatGPT Discovery is Different</h3>
        <p>Early signs show the ChatGPT App Store will work like traditional app stores - users can browse categories and search for apps. But there's a second discovery channel that's unique to ChatGPT: apps can also appear organically during conversations when the LLM decides they're relevant to what the user is trying to do.</p>
        <p>This presents a new major opportunity for your app to appear after high volume, highly specific prompts when the user is at the exact moment of intent.</p>
        <p>Therefore, this means your metadata does double duty. It helps you rank in search results, AND it tells ChatGPT when to suggest your app mid-conversation.</p>
        <p>This guide covers both channels and what actually matters for each.</p>
      </div>
    )
  },
  {
    id: "two-channel-framework",
    title: "The Two-Channel Framework",
    content: (
      <div className={proseClasses}>
        <p>ChatGPT app discoverability happens in two distinct places:</p>

        <h3>Channel 1: App Store Search (Static)</h3>
        <p>When users search for apps in the ChatGPT App Store, your app needs to rank for relevant keywords. This is traditional ASO—keywords in your name, description, and metadata determine where you appear in search results.</p>

        <h3>Channel 2: Prompt Optimization (Dynamic)</h3>
        <p>When users have conversations in ChatGPT, the LLM decides which apps to suggest based on conversation context. Your tool descriptions tell ChatGPT when to invoke your app.</p>

        <p><strong>Why both matter:</strong> Users discover apps two ways:</p>
        <ol>
          <li><strong>Active discovery:</strong> "I need an app for X" → searches/browses App Store → finds your app</li>
          <li><strong>Passive discovery:</strong> "Help me do X" → ChatGPT suggests your app mid-conversation → user connects</li>
        </ol>
        <p>Optimizing for both here is critical. And particularly passive discovery as this will be higher volume and you'll reach a user in their workflow at the exact moment of intent.</p>

        <h3>Appearance vs. Volume: The Two Questions</h3>
        <p>For each channel, there are two distinct questions to answer:</p>
        
        <div className="overflow-x-auto my-8">
          <table className="min-w-full border-collapse border border-slate-700">
            <thead>
              <tr className="bg-slate-900">
                <th className="border border-slate-700 px-4 py-3 text-left"></th>
                <th className="border border-slate-700 px-4 py-3 text-left">App Store Search</th>
                <th className="border border-slate-700 px-4 py-3 text-left">Prompt Optimization</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-700 px-4 py-3 font-semibold">Do you appear?</td>
                <td className="border border-slate-700 px-4 py-3">Which keywords does your app rank for?</td>
                <td className="border border-slate-700 px-4 py-3">Which prompts trigger your app?</td>
              </tr>
              <tr className="bg-slate-900/50">
                <td className="border border-slate-700 px-4 py-3 font-semibold">Does it matter?</td>
                <td className="border border-slate-700 px-4 py-3">How many people search those keywords?</td>
                <td className="border border-slate-700 px-4 py-3">How many people ask those prompts?</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>But it's not just about chasing the highest volume keywords and prompts. You also want to appear for prompts that are highly specific to your use case - where your app and its tools are genuinely aligned with what the user is requesting. These specific prompts give you the highest likelihood of actual usage, because when your tool is the right fit, users convert.</p>
        <p>But high volume alone isn't the goal. You want prompts that balance volume, specificity to your use case, and relevance to your target audience. The sweet spot is prompts asked frequently by your ideal users for tasks your app handles exceptionally well.</p>
      </div>
    )
  },
  {
    id: "part-1-before-you-optimize",
    title: "PART 1: Before You Optimize",
    content: (
      <div className={proseClasses}>
        <h3>Why Metadata Matters</h3>
        <p>ChatGPT decides when to call your app based on the metadata you provide. Your app name, description, tool names, and parameter docs all feed into how the model determines whether your app is relevant to a user's request.</p>
        <p>Well-crafted metadata increases recall on relevant prompts and reduces accidental activations. Poor metadata means your app either doesn't show up when it should, or shows up when it shouldn't - both hurt user trust and your discoverability.</p>
        <p>Treat metadata like product copy. It needs iteration, testing, and analytics - not a one-time setup.</p>

        <h3>Gather a Golden Prompt Set</h3>
        <p>Before you tune metadata, assemble a labelled dataset. This becomes your testing baseline for every change you make.</p>
        
        <p><strong>Direct prompts</strong> – users explicitly name your product or data source.</p>
        <ul>
          <li>"Use Notion to create a task called X"</li>
          <li>"ChatGig, create a gig for this contract"</li>
        </ul>

        <p><strong>Indirect prompts</strong> – users describe the outcome they want without naming your tool.</p>
        <ul>
          <li>"I need to organize my notes"</li>
          <li>"Help me find a freelancer to finish this contract"</li>
        </ul>

        <p><strong>Negative prompts</strong> – cases where built-in tools or other connectors should handle the request.</p>
        <ul>
          <li>"Tell me about the best project management tools"</li>
          <li>"What's the history of the gig economy"</li>
        </ul>

        <p>Document the expected behaviour for each prompt: should your tool be called, do nothing, or defer to an alternative?</p>
      </div>
    )
  },
  {
    id: "part-2-app-store-search",
    title: "PART 2: App Store Search Optimization",
    content: (
      <div className={proseClasses}>
        <h3>How App Store Search Works</h3>
        <p>The ChatGPT App Store uses traditional search mechanics. Keywords in your metadata determine where you appear when users search.</p>

        <h3>What to Optimize</h3>
        
        <h4>App Name</h4>
        <p>Either your company name or ideally, think about your most important keyword. This is prime real estate.</p>

        <h4>Description</h4>
        <p>Write naturally for users, but include relevant keywords. Your description appears in search results.</p>

        <h4>Screenshots</h4>
        <p>Must be exactly <strong>706 pixels wide</strong> (per submission requirements). Show:</p>
        <ul>
          <li>Your best use cases</li>
          <li>The actual prompts users should try</li>
          <li>Clear visual examples of output</li>
        </ul>

        <blockquote>
          <p><strong>Our observation:</strong> Every screenshot should include the prompt that triggers it. Users see "Create a gradient tweet" → screenshot → understand exactly what your app does.</p>
        </blockquote>

        <h3>Test Cases for Submission</h3>
        <p>OpenAI requires at least <strong>five test cases</strong> for submission, showing:</p>
        <ul>
          <li>Scenario</li>
          <li>Prompt</li>
          <li>Tool that will be triggered</li>
          <li>Expected output</li>
        </ul>
        <p>They also test <strong>negative cases</strong>—prompts where your app should NOT trigger.</p>

        <blockquote>
          <p><strong>Our observation:</strong> Use your golden prompt set as the foundation for test cases. You've already tested these—just format them for submission.</p>
        </blockquote>
      </div>
    )
  },
  {
    id: "part-3-prompt-optimization",
    title: "PART 3: Prompt Optimization",
    content: (
      <div className={proseClasses}>
        <p>This is where the official OpenAI documentation provides the most guidance. Everything in this section is grounded in their <a href="https://developers.openai.com/apps-sdk/guides/optimize-metadata" target="_blank" rel="noopener noreferrer">Optimize Metadata guide</a>.</p>

        <h3>Tool Execution vs Organic Discoverability</h3>
        <p>Right now, what you're optimizing for is <strong>tool execution</strong> - making sure your app responds correctly when it's called. The right tool fires, with the right parameters, producing the right output.</p>
        <p>Soon, the same metadata will likely determine <strong>organic discoverability</strong> too - whether ChatGPT suggests your app to users mid-conversation.</p>
        <p>But since tool execution is what you can test and measure today, that's where this section focuses.</p>

        <h3>How Organic Recommendations Work</h3>
        <p>During a conversation, ChatGPT evaluates whether any connected apps might help with what the user is trying to do. It reads your tool names, descriptions, and parameter docs to decide if your app is a good fit for the current request - and if so, suggests it to the user.</p>
        <p>This is different from App Store search. The model is interpreting intent and matching it against what your tools can do.</p>

        <blockquote>
          <p><strong>Our observation:</strong> Organic discoverability was briefly enabled, then disabled after users thought the suggestions were ads. When it returns, apps with optimized metadata will have a significant advantage.</p>
        </blockquote>

        <h3>What Affects Prompt Discoverability</h3>
        <p>Beyond your metadata, several contextual factors influence when and how consistently your app appears:</p>

        <p><strong>Prior usage creates preference.</strong> If a user has used your app before, ChatGPT is more likely to suggest it again for related prompts. Your first impression matters—get users to try your app once, and you've increased your future discoverability with that user.</p>

        <p><strong>Memory and context matter.</strong> ChatGPT's memory about user preferences and past activities can influence which apps surface. A user who frequently works on presentations may see design apps suggested more often. If a user enables memories, ChatGPT can pass that context to your MCP server during tool calls - you won't get to keep the data, but you can use it in the moment to tailor the experience and increase the likelihood your app gets suggested and improve the experience for the user.</p>

        <p><strong>Conversation depth affects suggestions.</strong> Apps may surface differently at turn 1 of a conversation versus turn 10. The accumulated context changes what ChatGPT considers relevant.</p>

        <p><strong>Consistency matters as much as appearance.</strong> It's not just whether your app appears—it's how reliably. An app that appears 80% of the time for a relevant prompt has more dependable discoverability than one that appears 40% of the time. When testing, track variance across multiple runs, not just single appearances.</p>

        <p>These factors mean discoverability isn't fully within your control—but your metadata is. The sections below focus on what you can directly optimize.</p>

        <h3>Writing Your Tool Metadata</h3>

        <h4>1. Name Structure: domain.action</h4>
        <p><strong>Official guidance:</strong> "Pair the domain with the action."</p>

        <div className="overflow-x-auto my-8">
          <table className="min-w-full border-collapse border border-slate-700">
            <thead>
              <tr className="bg-slate-900">
                <th className="border border-slate-700 px-4 py-3 text-left">✅ Good</th>
                <th className="border border-slate-700 px-4 py-3 text-left">❌ Bad</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-700 px-4 py-3"><code>calendar.create_event</code></td>
                <td className="border border-slate-700 px-4 py-3"><code>myCalendarApp</code></td>
              </tr>
              <tr className="bg-slate-900/50">
                <td className="border border-slate-700 px-4 py-3"><code>airtable.update_records</code></td>
                <td className="border border-slate-700 px-4 py-3"><code>updateRecords</code></td>
              </tr>
              <tr>
                <td className="border border-slate-700 px-4 py-3"><code>salesforce.soql_query</code></td>
                <td className="border border-slate-700 px-4 py-3"><code>SalesforceQueryTool</code></td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>The format tells the LLM semantically what your tool does.</p>

        <h4>2. Description Clarity: "Use when" + "Do not use"</h4>
        <p><strong>Official guidance:</strong> "Start with 'Use this when…' and call out disallowed cases."</p>

        <p><strong>Bad:</strong></p>
        <blockquote>
          <p>"Queries the database"</p>
        </blockquote>

        <p><strong>Good (Airtable-style):</strong></p>
        <blockquote>
          <p>"Use this when the user wants to update existing records in an Airtable table. To get baseId and tableId, you must first use the search_bases and list_tables_for_base tools. Do not use for creating new records—use create_records instead."</p>
        </blockquote>

        <p>The description does two jobs: tell ChatGPT when to call you, and when NOT to call you.</p>

        <h4>3. Parameter Documentation with Examples</h4>
        <p><strong>Official guidance:</strong> "Describe each argument, include examples, and use enums for constrained values."</p>

        <pre className="bg-slate-900 border border-slate-800 rounded-lg p-4 overflow-x-auto"><code>{`{
  "name": "search_query",
  "type": "string",
  "description": "Company identifier to search for. Use ticker symbol (preferred) or company name. Examples: 'AAPL', 'MSFT', 'Tesla Inc', 'Amazon.com'"
}`}</code></pre>

        <p>The more specific you are, the better ChatGPT understands how to fill parameters from natural language.</p>

        <h4>4. Tool Hints</h4>
        <p><strong>Official guidance:</strong> Use these annotations to help ChatGPT handle your tools appropriately:</p>
        <ul>
          <li><code>readOnlyHint: true</code> – For tools that only retrieve or compute information and never create, update, delete, or send data outside of ChatGPT.</li>
          <li><code>destructiveHint: false</code> – For tools that don't delete or overwrite user data</li>
          <li><code>openWorldHint: false</code> – For tools that don't publish content or reach outside the user's account</li>
        </ul>

        <h4>5. Going Beyond Basic Descriptions</h4>
        <p>The best ChatGPT apps treat tool descriptions as runtime instructions, not API documentation. The LLM reads them at execution time, so write them like you're instructing a junior developer who needs to know exactly what to do.</p>

        <p>Here are patterns that significantly improve how ChatGPT handles your tools:</p>

        <p><strong>Enforce prerequisites</strong><br/>
        If your tool needs data from another tool first, say so explicitly:</p>
        <blockquote>
          <p>"Before calling this tool, you MUST first use the query tool to get the record ID."</p>
        </blockquote>

        <p><strong>Show negative examples</strong><br/>
        Telling ChatGPT what NOT to do is surprisingly effective. Most descriptions only show happy paths:</p>
        <blockquote>
          <p>"NOT: discover_companies('Apple Inc.') — use ticker symbol like 'AAPL' instead"</p>
        </blockquote>

        <p><strong>Define fallback strategies</strong><br/>
        Don't assume ChatGPT will retry intelligently. Tell it what to try when the first approach fails:</p>
        <blockquote>
          <p>"1. PRIMARY: Search by ticker symbol. 2. SECONDARY: Search by company name (only if ticker fails). 3. FALLBACK: Try alternative name forms"</p>
        </blockquote>

        <p><strong>Encode pause points for user confirmation</strong><br/>
        When you need user input before proceeding:</p>
        <blockquote>
          <p>"Present the available options to the user and ask which one they want before proceeding."</p>
        </blockquote>

        <p><strong>Real example from Salesforce's Agentforce:</strong></p>
        <p>The <code>summarize_conversation_transcript</code> tool description is ~500 words and includes:</p>
        <blockquote>
          <p>"CRITICAL WORKFLOW: Before calling this tool, you MUST follow these steps: 1) If call ID is not known, use the soql_query tool to query BOTH VoiceCall AND VideoCall entities in SEPARATE queries..."</p>
        </blockquote>
        <p>It goes on to specify output formatting rules, PII guardrails, and instructions for handling edge cases. This isn't documentation—it's a system prompt hiding in a tool description.</p>
      </div>
    )
  },
  {
    id: "part-4-testing-iteration",
    title: "PART 4: Testing & Iteration",
    content: (
      <div className={proseClasses}>
        <h3>Option 1: Do It Yourself</h3>

        <h4>Stage 1: Evaluate in Developer Mode</h4>
        <p>You need ChatGPT Plus ($20/mo) to access Developer Mode. Enable it via Settings → Apps & Connectors → Advanced Settings.</p>
        <ol>
          <li>Link your connector in ChatGPT developer mode</li>
          <li>Run through each prompt in your golden set (from PART 1) and record the outcome - which tool was selected, what arguments were passed, and whether the component rendered correctly</li>
          <li>Track precision (did the right tool run?) and recall (did the tool run when it should?)</li>
        </ol>
        <p>If the model picks the wrong tool - or fails to pick yours - you've identified a metadata problem.</p>

        <h4>Stage 2: Iterate Methodically</h4>
        <p><strong>Change one thing at a time.</strong> If you change multiple metadata fields at once, you won't know which change caused the improvement or regression.</p>
        <p><strong>Keep a log of revisions.</strong> Document each change with timestamps and test results. This becomes your optimization history.</p>
        <p><strong>Rerun your golden prompt set after every change.</strong> Compare results to your previous run. Aim for high precision on negative prompts before chasing marginal recall improvements.</p>

        <h4>Stage 3: Production Monitoring</h4>
        <p>Once your connector is live, the work isn't done.</p>
        <ul>
          <li><strong>Review tool-call analytics weekly.</strong> Spikes in "wrong tool" confirmations usually indicate metadata drift.</li>
          <li><strong>Capture user feedback</strong> and update descriptions to cover common misconceptions.</li>
          <li><strong>Schedule periodic prompt replays</strong> - especially after adding new tools or changing structured fields.</li>
        </ul>

        <h3>Option 2: Automate with AppDiscoverability.com</h3>
        <p>The DIY approach works, but it's manual and time-consuming. Every metadata change requires re-running your golden prompt set, logging results, and iterating again.</p>
        <p>AppDiscoverability.com automates this entire loop. We run your prompts, track precision and recall, and help you refine your metadata - so you can focus on building your app, not running tests.</p>

        <h3>Coming Soon: Organic Discoverability</h3>
        <p>Everything above optimizes how your app performs when it's connected. But there's another question you'll need to answer: <strong>is your app being displayed in the first place?</strong></p>
        <p>Once organic discoverability is live, ChatGPT will suggest apps mid-conversation to users who haven't connected them yet. The same metadata you're optimizing now will determine whether you get surfaced.</p>
        <p>But you won't be able to test this in developer mode - you're only seeing your own connected instance. To understand organic discoverability, you need to know:</p>
        <ul>
          <li>Is your app appearing for the prompts that matter to your target audience?</li>
          <li>How often are you appearing versus competitors?</li>
          <li>Which prompts are you winning, and which are you missing?</li>
        </ul>
        <p>This requires data at scale - and that's what AppDiscoverability.com provides. We test prompts across the ecosystem to show you where you're appearing, where you're not, and what to optimize next.</p>
        <p><a href="/#waitlist">Sign up to the waitlist →</a></p>
      </div>
    )
  },
  {
    id: "part-5-what-works",
    title: "PART 5: What Works & What to Avoid",
    content: (
      <div className={proseClasses}>
        <h3>What Works Well</h3>

        <p><strong>Fixed templates with clear outputs</strong><br/>
        Diagrams, charts, forms. Anything where the format is predictable and the output is clear.</p>

        <p><strong>Workflow handoffs to external services</strong><br/>
        Natural transition points from "working in ChatGPT" to "need an external service." The key is preserving context across that handoff.</p>

        <p><strong>Eliminating context switching</strong><br/>
        Users are already in ChatGPT. Anything that keeps them there instead of forcing them to open another tab is valuable.</p>

        <h3>What to Avoid</h3>

        <p><strong>Long-form or static content</strong><br/>
        If users need to scroll through pages of content, that's not a chat experience.</p>

        <p><strong>Complex multi-step workflows</strong><br/>
        If your workflow requires 10 steps with conditional branching, the chat interface probably isn't optimal.</p>

        <p><strong>Heavy visual browsing</strong><br/>
        Shopping, design exploration, anything where users need to see 50 options at once. The window is too limited.</p>

        <p><strong>Duplicating ChatGPT's system functions</strong><br/>
        Don't rebuild text analysis or summarization. Find the gaps where ChatGPT needs external data or specialized functionality.</p>

        <h3>Our Observations & Testing</h3>
        <p>The following are based on our testing and experience, not official documentation:</p>
        <ul>
          <li>App Store current state observations</li>
          <li>Organic discoverability status observations</li>
          <li>Screenshot dimension requirements (706px wide)</li>
          <li>Specific submission process details</li>
          <li>Use case recommendations (what works/what to avoid)</li>
          <li>Analysis of how major B2B apps structure their tool descriptions</li>
        </ul>
      </div>
    )
  },
  {
    id: "final-thoughts",
    title: "Final Thoughts",
    content: (
      <div className={proseClasses}>
        <p><strong>Success isn't just about building a great product.</strong> It's about understanding the metadata game and how the discovery algorithm works. You can build the best app in the world, but if ChatGPT doesn't know when to suggest it, you'll get zero users.</p>

        <p><strong>Never depend entirely on this platform.</strong> Build your own distribution, capture emails, have an exit plan. Platforms always consolidate control eventually.</p>

        <p><strong>Optimize for both channels.</strong> Most developers focus on App Store search. The winners optimize for both search rankings AND prompt optimization.</p>

        <p><strong>Start tracking now.</strong> Document your metadata changes. Track which prompts trigger your app. Build your own historical baseline before the ecosystem matures.</p>

        <p><strong>Metadata is a living asset.</strong> The more intentional you are with wording and evaluation, the easier discovery and invocation become.</p>

        <hr className="my-8" />

        <p className="text-slate-500 text-sm">
          Last updated: January 2026
        </p>
      </div>
    )
  }
];

export default function GuidePage() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Header Section */}
      <section className="relative pt-12 pb-12 md:pt-20 md:pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Back Button */}
        <div className="mb-4">
          <Link
            href="/"
            className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-[rgb(27,200,140)] transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Link>
        </div>

        {/* Title */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">
            The Complete Guide to ChatGPT App Discoverability
          </h1>
          <p className="text-xl text-slate-400">
            A practical playbook for getting your app found—grounded in official documentation and real-world testing.
          </p>
        </div>
      </section>

      {/* Content Section with Chapter Navigation */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-24">
        <ContentScroll sections={sections} theme="dark" />
      </section>
    </div>
  );
}

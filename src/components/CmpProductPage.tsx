import { Link } from 'react-router-dom';

export default function CmpProductPage() {
  return (
    <section className="bg-slate-900 text-slate-100 min-h-[calc(100vh-80px)] pt-10 pb-14">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 text-xs text-slate-300 mb-4">
          <Link to="/#portfolio" className="text-slate-300 hover:text-white">Portfolio</Link>
          <span>/</span>
          <span className="text-cyan-300 font-semibold">CMP Product</span>
        </div>

        <div className="bg-gradient-to-br from-slate-800 via-indigo-900 to-violet-900 rounded-3xl border border-slate-700 p-6 md:p-8 shadow-2xl">
          <p className="inline-flex rounded-full bg-cyan-200/20 px-3 py-1 text-xs font-semibold text-cyan-200 uppercase tracking-[0.2em]">New Product</p>
          <h1 className="mt-4 text-3xl md:text-5xl font-bold text-white">Grow sales with AI-powered website support</h1>
          <p className="mt-3 text-slate-200 max-w-3xl">
            CMP is the complete AI chat platform for businesses—embed a lightweight chat widget, serve real-time AI responses, and escalate to agents when needed.
          </p>

          <div className="mt-6 inline-flex gap-3 flex-wrap">
            <Link to="/#portfolio" className="rounded-xl bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-cyan-300 transition">Start Free Trial</Link>
            <a href="#prices" className="rounded-xl border border-cyan-300/70 px-4 py-2 text-sm font-semibold text-cyan-200 hover:bg-cyan-300/10 transition">View Pricing</a>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3" id="prices">
          <article className="rounded-2xl border border-indigo-400/30 bg-indigo-900/60 p-4">
            <p className="text-xs uppercase tracking-[0.15em] text-indigo-200">Starter</p>
            <p className="mt-2 text-3xl font-bold text-white">Free</p>
            <p className="text-slate-300 text-sm">Perfect for pilots and small teams.</p>
            <ul className="mt-3 list-disc list-inside text-sm text-slate-200 space-y-1">
              <li>1 widget tenant</li>
              <li>Basic analytics</li>
              <li>5,000 messages / month</li>
            </ul>
            <button className="mt-4 w-full rounded-lg bg-cyan-500 px-3 py-2 text-sm font-semibold text-slate-900 hover:bg-cyan-400">Get Started</button>
          </article>
          <article className="rounded-2xl border border-cyan-400/50 bg-cyan-900/40 p-4">
            <p className="text-xs uppercase tracking-[0.15em] text-cyan-200">Growth</p>
            <p className="mt-2 text-3xl font-bold text-white">$129/mo</p>
            <p className="text-slate-200 text-sm">Best for growing teams with custom flows.</p>
            <ul className="mt-3 list-disc list-inside text-sm text-slate-100 space-y-1">
              <li>Unlimited agents</li>
              <li>Knowledge-base RAG</li>
              <li>API tool integrations</li>
            </ul>
            <button className="mt-4 w-full rounded-lg bg-white px-3 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-200">Choose Growth</button>
          </article>
          <article className="rounded-2xl border border-violet-300/40 bg-violet-900/40 p-4">
            <p className="text-xs uppercase tracking-[0.15em] text-violet-200">Enterprise</p>
            <p className="mt-2 text-3xl font-bold text-white">Custom</p>
            <p className="text-slate-200 text-sm">Enterprise-grade security and full APIs.</p>
            <ul className="mt-3 list-disc list-inside text-sm text-slate-100 space-y-1">
              <li>SLA support</li>
              <li>Tenant isolation</li>
              <li>Advanced analytics + reporting</li>
            </ul>
            <button className="mt-4 w-full rounded-lg border border-white/40 bg-transparent px-3 py-2 text-sm font-semibold text-white hover:bg-white/10">Contact Sales</button>
          </article>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl bg-slate-800/80 border border-slate-700 p-4">
            <h2 className="text-lg font-semibold text-white">How to avail CMP</h2>
            <ol className="mt-3 list-decimal list-inside text-slate-300 space-y-2 text-sm">
              <li>Choose a plan and click the button to sign up.</li>
              <li>Receive your Tenant ID and optional access key.</li>
              <li>Add the widget code to your website’s footer.</li>
              <li>Customize brand colors and knowledge base in the dashboard.</li>
            </ol>
          </div>
          <div className="rounded-2xl bg-slate-800/80 border border-slate-700 p-4">
            <h2 className="text-lg font-semibold text-white">Example availability pitch</h2>
            <p className="mt-2 text-slate-300 text-sm leading-relaxed">
              Want faster support conversion? Add CMP in minutes and let your website answer customers automatically, then escalate to your team only when needed.
            </p>
            <div className="mt-3 inline-flex gap-2">
                <a href="https://agent-hub.asterionsolutions.com" target="_blank" rel="noopener noreferrer" className="inline-block rounded-lg bg-cyan-400 px-3 py-2 text-sm font-semibold text-slate-900 hover:bg-cyan-300">
                  Start Demo
                </a>
              <button className="rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-100 hover:bg-slate-700">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

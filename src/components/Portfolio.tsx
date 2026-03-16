import { BotMessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "../hook/useScrollAnimation";

export default function Portfolio() {
  const RefAnimate = useScrollAnimation();

  return (
    <section
      id="portfolio"
      className="py-20 bg-white flex items-center"
      ref={RefAnimate}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div
          className="opacity-0 text-center mb-16"
          data-animate="animate-fade-up"
          data-delay="0.5s"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Portfolio
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore how Asterion Solutions empowers businesses through
            innovative web development, automation, and digital transformation
            projects.
          </p>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>

        {/* CMP Portfolio Highlight */}
        <div className="grid gap-6 md:grid-cols-2">
          <div
            className="opacity-0 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 rounded-3xl p-6 md:p-8 shadow-2xl border border-indigo-100"
            data-animate="animate-zoom-in-up"
            data-delay="1s"
          >
            <div className="flex items-start gap-3">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-indigo-100 rounded-xl">
                <BotMessageSquare size={28} className="text-indigo-600" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-indigo-600 font-semibold">CMP Integration</p>
                <h3 className="mt-2 text-2xl font-bold text-slate-900">Conversational Support for Business Sites</h3>
                <p className="mt-2 text-slate-600 text-sm md:text-base leading-relaxed">
                  Embed a lightweight AI chat widget with knowledge-base responses, real-time messaging, and agent escalation to improve conversions and reduce support load.
                </p>
              </div>
            </div>

            <div className="mt-5 grid gap-3 md:grid-cols-2">
              <div className="rounded-xl bg-white border border-indigo-100 p-3">
                <p className="text-xs uppercase tracking-[0.15em] text-indigo-600">Features</p>
                <ul className="mt-2 text-slate-700 text-sm list-disc list-inside space-y-1">
                  <li>AI chat widget</li>
                  <li>Custom API tools</li>
                  <li>Quick replies</li>
                </ul>
              </div>
              <div className="rounded-xl bg-white border border-indigo-100 p-3">
                <p className="text-xs uppercase tracking-[0.15em] text-indigo-600">Benefits</p>
                <ul className="mt-2 text-slate-700 text-sm list-disc list-inside space-y-1">
                  <li>Faster support</li>
                  <li>Better accuracy</li>
                  <li>Secure tenant access</li>
                </ul>
              </div>
            </div>

            <div className="mt-5">
              <Link
                to="/cmp"
                className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-indigo-500 transition"
              >
                View Product Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

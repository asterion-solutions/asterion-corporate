import { Users, Zap, Target } from "lucide-react";
import { useScrollAnimation } from "../hook/useScrollAnimation";

export default function About() {
  const RefAnimate = useScrollAnimation();

  return (
    <section
      id="about"
      ref={RefAnimate}
      className="py-20 bg-white flex items-center"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <header
          className="opacity-0 text-center mb-16"
          data-animate="animate-fade-up"
          data-delay="0.5s"
        >
          <h2
            id="about-heading"
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            About Asterion IT Solutions
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Learn more about who we are, what drives us, and how we build
            innovative IT solutions that empower businesses to grow.
          </p>
        </header>

        {/* Content Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <article
            data-animate="animate-fade-right"
            data-delay="0.9s"
            className="opacity-0"
          >
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              <strong>Asterion IT Solutions</strong> is built on one belief:
              every business deserves technology that works for them — not
              against them.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              We’re a passionate team of IT professionals united by the goal of
              crafting reliable, scalable, and efficient digital solutions for
              businesses of all sizes. Whether you’re a startup or a growing
              enterprise, we create tools that make your operations smarter,
              faster, and more connected.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed font-semibold">
              Our approach is simple: <em>we listen first, then build what you
              actually need.</em>
            </p>
          </article>

          {/* Right Content (Highlights) */}
          <aside
            className="relative"
            aria-label="Our core values"
          >
            <div
              className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl p-8 shadow-lg opacity-0"
              data-animate="animate-zoom-in-up"
              data-delay="1s"
            >
              <ul className="space-y-6">
                <li className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                      <Users className="text-white" size={24} aria-hidden="true" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      Team-Driven
                    </h3>
                    <p className="text-gray-600">
                      Built by professionals who care deeply about your success.
                    </p>
                  </div>
                </li>

                <li className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                      <Zap className="text-white" size={24} aria-hidden="true" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      Future-Ready
                    </h3>
                    <p className="text-gray-600">
                      Scalable technology designed to evolve with your business.
                    </p>
                  </div>
                </li>

                <li className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                      <Target className="text-white" size={24} aria-hidden="true" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      Results-Focused
                    </h3>
                    <p className="text-gray-600">
                      Delivering practical, measurable business outcomes.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

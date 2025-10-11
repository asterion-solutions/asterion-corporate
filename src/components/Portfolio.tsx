import { Briefcase, TrendingUp, Clock } from "lucide-react";
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

        {/* Portfolio Highlight */}
        <div
          className="opacity-0 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-12 text-center shadow-lg"
          data-animate="animate-zoom-in-up"
          data-delay="1s"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-6">
            <Briefcase className="text-blue-600" size={40} aria-hidden="true" />
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Building Success Stories
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            We collaborate with small and medium-sized enterprises to design
            digital solutions that simplify workflows, boost efficiency, and
            drive measurable growth. Stay tuned—our full portfolio showcase is
            coming soon!
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div
              className="bg-white rounded-lg p-6 shadow-md"
              data-animate="animate-fade-up"
              data-delay="1.2s"
            >
              <div className="flex items-center justify-center mb-4">
                <TrendingUp className="text-blue-600" size={32} aria-hidden="true" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Growing Together
              </h4>
              <p className="text-gray-600">
                Partnering with businesses to achieve digital transformation and
                sustainable growth through modern web solutions.
              </p>
            </div>

            <div
              className="bg-white rounded-lg p-6 shadow-md"
              data-animate="animate-fade-up"
              data-delay="1.4s"
            >
              <div className="flex items-center justify-center mb-4">
                <Clock className="text-blue-600" size={32} aria-hidden="true" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Coming Soon
              </h4>
              <p className="text-gray-600">
                A collection of success stories and case studies from our
                innovative client projects will be showcased here soon.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

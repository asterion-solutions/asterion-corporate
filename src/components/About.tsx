import { Users, Zap, Target } from 'lucide-react';
import { useScrollAnimation } from "../hook/useScrollAnimation";

export default function About() {
  const RefAnimate = useScrollAnimation();
  return (
    <section id="about" className="py-20 bg-white flex items-center " ref={RefAnimate}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="opacity-0 text-center mb-16" data-animate="animate-fade-up" data-delay="0.5s" >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Us</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div data-animate="animate-fade-right" data-delay="0.9s" className="opacity-0">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              At Asterion, we believe every business deserves technology that works for them.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              We're a team of IT professionals and friends who joined forces to build practical, reliable, and future-ready solutions for companies of all sizes. From startups to growing enterprises, we help businesses thrive by making their operations smarter, faster, and more connected.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed font-semibold text-blue-600">
              Our approach is simple: we listen first, then build what you actually need.
            </p>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl p-8 shadow-lg opacity-0" data-animate="animate-zoom-in-up" data-delay="1s">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                      <Users className="text-white" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Team-Driven</h3>
                    <p className="text-gray-600">Built by professionals who care about your success</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                      <Zap className="text-white" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Future-Ready</h3>
                    <p className="text-gray-600">Technology solutions designed to scale with you</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                      <Target className="text-white" size={24} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Results-Focused</h3>
                    <p className="text-gray-600">Practical solutions that deliver real business value</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

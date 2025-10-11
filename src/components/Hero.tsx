import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "../hook/useScrollAnimation";

export default function Hero() {
  const RefAnimate = useScrollAnimation();

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      ref={RefAnimate}
      className="pt-20 bg-gradient-to-br from-blue-50 via-white to-gray-50 relative overflow-hidden"
    >
      {/* Background gradient circles */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div  className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10 text-center">
        <h1 className="opacity-0 text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight" data-animate="animate-fade-up" data-delay="0.5s">
          Smart, Tailored IT Solutions
          <br />
          for Your Business
        </h1>

        <p
          className="opacity-0 text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
          data-animate="animate-fade-up" data-delay="1s"
        >
          At Asterion, we design and build technology solutions that fit your
          business—whether you need streamlined systems, powerful apps, or
          seamless integrations.
        </p>

        <button
          onClick={scrollToContact}
          data-animate="animate-zoom-in" data-delay="1.5s"
          className="opacity-0 inline-flex items-center space-x-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          <span>Work With Us</span>
          <ArrowRight size={20} />
        </button>
      </div>
    </section>
  );
}

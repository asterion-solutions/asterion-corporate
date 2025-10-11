import { Settings, Database, Smartphone, TrendingUp } from "lucide-react";
import { useScrollAnimation } from "../hook/useScrollAnimation";

export default function Services() {
  const RefAnimate = useScrollAnimation();

  const services = [
    {
      icon: Settings,
      title: "Custom IT Solutions",
      description:
        "Tailored IT systems designed specifically for your business challenges and goals.",
      keywords: "custom software, IT solutions, system development",
    },
    {
      icon: Database,
      title: "Business Systems",
      description:
        "From inventory and sales tracking to multi-platform integrations like Asterion Sync, we create tools that simplify your operations and improve efficiency.",
      keywords: "business systems, automation tools, integration software",
    },
    {
      icon: Smartphone,
      title: "Web & App Development",
      description:
        "Modern, responsive websites and mobile apps built to showcase your brand, enhance user experience, and engage customers effectively.",
      keywords: "web development, mobile apps, responsive design",
    },
    {
      icon: TrendingUp,
      title: "Consulting & Automation",
      description:
        "We analyze your workflows and apply smart automation to streamline operations, reduce manual work, and increase productivity.",
      keywords: "business consulting, workflow automation, process optimization",
    },
  ];

  return (
    <section
      id="services"
      ref={RefAnimate}
      className="py-20 bg-gray-50 flex items-center"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header
          className="opacity-0 text-center mb-16"
          data-animate="animate-fade-up"
          data-delay="0.5s"
        >
          <h2
            id="services-heading"
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Our Services
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Explore the range of IT and digital services Asterion offers to
            empower your business with smarter, more efficient technology.
          </p>
        </header>

        {/* Services Grid */}
        <div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          role="list"
          aria-label="Asterion services list"
        >
          {services.map((service, index) => (
            <article
              key={index}
              className="opacity-0 bg-white p-8 rounded-lg shadow-md transition-all duration-500 transform scale-90 hover:scale-105 hover:shadow-xl"
              data-animate="animate-zoom-in"
              data-delay={`${0.5 * (index + 1)}s`}
              itemScope
              itemType="https://schema.org/Service"
            >
              <meta itemProp="serviceType" content={service.title} />
              <meta itemProp="keywords" content={service.keywords} />
              <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-100 rounded-lg mb-4">
                <service.icon
                  className="text-blue-600"
                  size={28}
                  aria-hidden="true"
                />
              </div>
              <h3
                className="text-xl font-semibold text-gray-900 mb-3"
                itemProp="name"
              >
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed" itemProp="description">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

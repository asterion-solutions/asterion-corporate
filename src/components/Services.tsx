import { Settings, Database, Smartphone, TrendingUp, Bot, Puzzle, Monitor, FolderSync, Gamepad2 } from "lucide-react";
import { useScrollAnimation } from "../hook/useScrollAnimation";

export default function Services() {
  const RefAnimate = useScrollAnimation();

 const services = [
  {
    icon: Settings,
    title: "Custom System Engineering",
    description:
      "Purpose-built IT systems tailored to your workflows, ensuring scalability, reliability, and long-term efficiency.",
    keywords: "custom software, IT systems, system architecture",
  },
  {
    icon: Database,
    title: "Business Process Systems",
    description:
      "Operational tools for inventory, sales, and multi-platform workflows that simplify processes and improve control.",
    keywords: "business systems, automation tools, operations management",
  },
  {
    icon: Smartphone,
    title: "Web & Mobile Experiences",
    description:
      "Modern, responsive web and mobile applications designed to elevate your brand and deliver seamless user experiences.",
    keywords: "web development, mobile apps, UI UX design",
  },
  {
    icon: TrendingUp,
    title: "Automation & Optimization",
    description:
      "Streamline operations with intelligent automation that reduces manual work and boosts overall productivity.",
    keywords: "workflow automation, process optimization, efficiency",
  },
  {
    icon: FolderSync,
    title: "Real-Time Data Sync",
    description:
      "Reliable cross-platform synchronization that keeps your data consistent, accurate, and always up to date.",
    keywords: "data sync, real-time integration, system connectivity",
  },
  {
    icon: Bot,
    title: "AI-Powered Solutions",
    description:
      "Enhance customer interactions and decision-making with AI-driven systems built for automation and insight.",
    keywords: "AI systems, machine learning, intelligent automation",
  },
  {
    icon: Puzzle,
    title: "Advanced Integrations",
    description:
      "Connect complex systems, APIs, and legacy platforms into a unified and efficient digital ecosystem.",
    keywords: "API integration, system integration, enterprise solutions",
  },
  {
    icon: Monitor,
    title: "Interactive Platforms",
    description:
      "Engaging and dynamic platforms, including dashboards and interactive systems, built for performance and usability.",
    keywords: "interactive systems, dashboards, frontend systems",
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

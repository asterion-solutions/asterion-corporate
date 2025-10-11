import { Settings, Database, Smartphone, TrendingUp } from 'lucide-react';
import { useScrollAnimation } from "../hook/useScrollAnimation";

export default function Services() {
  const RefAnimate = useScrollAnimation();

  const services = [
    {
      icon: Settings,
      title: 'Custom IT Solutions',
      description: 'Tailored systems designed specifically for your business challenges and goals.',
    },
    {
      icon: Database,
      title: 'Business Systems',
      description: 'From inventory and sales tracking to multi-platform integrations like Asterion Sync, we create tools that simplify operations.',
    },
    {
      icon: Smartphone,
      title: 'Web & App Development',
      description: 'Modern, responsive websites and mobile apps built to showcase your brand and engage your customers.',
    },
    {
      icon: TrendingUp,
      title: 'Consulting & Automation',
      description: 'We analyze your workflows and apply automation where it matters most, saving you time and resources.',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 flex items-center" ref={RefAnimate}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="opacity-0 text-center mb-16" data-animate="animate-fade-up" data-delay="0.5s" >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Services</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="opacity-0 bg-white p-8 rounded-lg shadow-md transition-all duration-500 transform scale-90 hover:scale-105 hover:shadow-xl"
              data-animate="animate-zoom-in"
              data-delay={`${0.5 * (index + 1)}s`}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-100 rounded-lg mb-4">
                <service.icon className="text-blue-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

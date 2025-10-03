import { Mail, Linkedin, Facebook } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img src="/asterion3.png" alt="Asterion Logo" className="h-20 w-auto" />
              {/* <span className="text-2xl font-bold">Asterion</span> */}
            </div>
            <p className="text-gray-400 leading-relaxed">
              Smart, tailored IT solutions for your business.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <nav className="space-y-2">
              <button onClick={() => scrollToSection('home')} className="block text-gray-400 hover:text-white transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="block text-gray-400 hover:text-white transition-colors">
                About Us
              </button>
              <button onClick={() => scrollToSection('services')} className="block text-gray-400 hover:text-white transition-colors">
                Services
              </button>
              <button onClick={() => scrollToSection('contact')} className="block text-gray-400 hover:text-white transition-colors">
                Contact
              </button>
            </nav>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:info@asterion.com"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Asterion. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

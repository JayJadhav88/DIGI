import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    'Store Setup',
    'Growth Marketing',
    'Store Maintenance',
    'SEO Optimization',
    'Analytics & Reporting',
    'AI Automation'
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-6">
              <img src="https://i.ibb.co/7kL3bJd/logo.png" alt="DigiVantage Logo" className="w-10 h-10" />
              <span className="text-xl font-bold">DigiVantage</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              India's leading E-commerce Growth & Maintenance agency, helping SMEs and D2C brands scale with AI-powered solutions.
            </p>
            <div className="space-y-2">
              <div className="flex items-center">
                <Mail className="text-primary-blue mr-3" size={16} />
                <a href="mailto:sales.digivantage@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                  sales.digivantage@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="text-green-400 mr-3" size={16} />
                <a href="tel:+918999396768" className="text-gray-400 hover:text-white transition-colors">
                  +91 8999396768
                </a>
              </div>
              <div className="flex items-center">
                <MapPin className="text-primary-purple mr-3" size={16} />
                <span className="text-gray-400">India</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-gray-400">
                  {service}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6">Get Started Today</h3>
            <p className="text-gray-400 mb-6">
              Ready to scale your e-commerce business? Contact us for a free consultation.
            </p>
            <motion.button
              onClick={() => scrollToSection('#contact')}
              className="bg-primary-blue text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-purple transition-colors duration-200 w-full"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Contact Us
            </motion.button>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 DigiVantage. All rights reserved.
          </div>
          <motion.button
            onClick={scrollToTop}
            className="bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700 transition-colors duration-200"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp size={20} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShoppingCart, 
  TrendingUp, 
  Settings, 
  BarChart3, 
  Search, 
  Bot,
} from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <ShoppingCart className="text-primary-blue" size={32} />,
      title: 'E-commerce Store Setup',
      description: 'Complete store setup with payment integration, product catalog management, and platform optimization.',
      features: ['Shopify/WooCommerce Setup', 'Payment Gateway Integration', 'Product Catalog Management', 'Mobile Optimization']
    },
    {
      icon: <TrendingUp className="text-accent-green" size={32} />,
      title: 'Growth Marketing',
      description: 'Data-driven marketing strategies to increase traffic, conversions, and revenue for your online store.',
      features: ['Performance Marketing', 'Conversion Optimization', 'Email Marketing', 'Social Media Management']
    },
    {
      icon: <Settings className="text-primary-purple" size={32} />,
      title: 'Store Maintenance',
      description: '24/7 automated maintenance and monitoring to keep your store running smoothly.',
      features: ['Regular Updates', 'Security Monitoring', 'Bug Fixes', 'Performance Optimization']
    },
    {
      icon: <BarChart3 className="text-red-500" size={32} />,
      title: 'Analytics & Reporting',
      description: 'Comprehensive analytics and monthly reports to track your store\'s performance and ROI.',
      features: ['Google Analytics Setup', 'Custom Dashboards', 'Monthly Reports', 'KPI Tracking']
    },
    {
      icon: <Search className="text-yellow-500" size={32} />,
      title: 'SEO Optimization',
      description: 'Complete SEO optimization to improve your store\'s visibility and organic traffic.',
      features: ['On-page SEO', 'Technical SEO', 'Content Optimization', 'Local SEO']
    },
    {
      icon: <Bot className="text-cyan-500" size={32} />,
      title: 'AI Automation',
      description: 'Leverage AI and automation to reduce costs and improve customer experience.',
      features: ['Chatbot Integration', 'Inventory Management', 'Price Optimization', 'Customer Support']
    }
  ];

  return (
    <section id="services" className="py-20 bg-brand-light relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-[0.02] bg-repeat"
        style={{ backgroundImage: "url('https://www.toptal.com/designers/subtlepatterns/uploads/double-bubble-outline.png')" }}
      ></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6">
            Our <span className="bg-gradient-to-r from-primary-blue to-primary-purple bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive e-commerce solutions designed to scale your business and maximize ROI.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl hover:border-primary-purple/50 transform hover:-translate-y-2 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="mb-6 p-3 bg-gray-100 rounded-full inline-block">{service.icon}</div>
              <h3 className="text-xl font-bold text-brand-dark mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 h-24">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                    <div className="w-1.5 h-1.5 bg-primary-blue rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.button
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-gradient-to-r from-primary-blue to-primary-purple text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Custom Quote
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

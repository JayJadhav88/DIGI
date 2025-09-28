import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, ArrowRight } from 'lucide-react';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: 'Starter Maintenance',
      price: '₹3,000',
      period: '/month',
      description: 'Perfect for small businesses getting started',
      features: [
        'Up to 100 products managed',
        'Basic error fixes',
        'Monthly performance reports',
        'Product updates',
        'Email support',
        'Security monitoring'
      ],
      popular: false,
      cta: 'Start Maintenance'
    },
    {
      name: 'Pro Growth',
      price: '₹25,000',
      period: '/project',
      description: 'Complete store setup and optimization',
      features: [
        'Complete store setup',
        'Payment gateway integration',
        'SEO optimization',
        'Analytics setup',
        'Mobile optimization',
        'Performance optimization',
        'Training session included',
        '30-day support'
      ],
      popular: true,
      cta: 'Launch Your Store'
    },
    {
      name: 'Pro Maintenance',
      price: '₹12,000',
      period: '/month',
      description: 'Advanced maintenance with growth focus',
      features: [
        'Unlimited products',
        'Advanced analytics',
        'Conversion optimization',
        'A/B testing',
        'Priority support',
        'Monthly strategy calls',
        'Performance marketing',
        'Custom reporting'
      ],
      popular: false,
      cta: 'Scale Your Business'
    }
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-20 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6">
            Simple, <span className="bg-gradient-to-r from-primary-blue to-primary-purple bg-clip-text text-transparent">Transparent Pricing</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect plan for your business. No hidden fees, no long-term contracts.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`relative bg-white rounded-3xl shadow-lg p-8 transform transition-all duration-300 flex flex-col h-full ${
                plan.popular 
                  ? 'border-2 border-primary-purple shadow-primary-purple/20 scale-105' 
                  : 'border border-gray-200 hover:scale-105'
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-primary-blue to-primary-purple text-white px-6 py-2 rounded-full flex items-center gap-2 text-sm font-semibold shadow-lg">
                    <Star size={16} />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-brand-dark mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4 h-12">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-brand-dark">{plan.price}</span>
                  <span className="text-gray-600 ml-1">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="text-accent-green mr-3 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                onClick={scrollToContact}
                className={`w-full mt-auto py-3 rounded-full font-semibold text-lg flex items-center justify-center gap-2 transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-primary-blue to-primary-purple text-white shadow-md hover:shadow-lg'
                    : 'bg-white text-brand-dark border-2 border-brand-dark hover:bg-brand-dark hover:text-white'
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                {plan.cta} <ArrowRight size={20} />
              </motion.button>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-lg">
            <h3 className="text-2xl font-bold text-brand-dark mb-4">Need a Custom Solution?</h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              We offer performance-based pricing models and custom enterprise solutions. 
              Contact us for a personalized quote based on your specific requirements.
            </p>
            <motion.button
              onClick={scrollToContact}
              className="bg-gradient-to-r from-primary-blue to-primary-purple text-white px-8 py-3 rounded-full font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Custom Quote
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;

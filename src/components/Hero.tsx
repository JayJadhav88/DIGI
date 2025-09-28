import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Shield, Zap } from 'lucide-react';
import InteractiveText from './InteractiveText';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.querySelector('#services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen bg-brand-dark flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop')" }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/90 via-brand-dark/80 to-brand-dark/95 z-10"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center z-20">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-8 text-white">
            <InteractiveText 
              text="SCALE YOUR"
              className="block mb-4"
            />
            <InteractiveText 
              text="E-COMMERCE"
              className="block mb-4 bg-gradient-to-r from-primary-blue to-primary-purple bg-clip-text text-transparent"
            />
            <InteractiveText 
              text="BUSINESS"
              className="block"
            />
          </h1>
        </motion.div>

        <motion.p
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          India's Premier E-commerce Growth & Maintenance Agency. 
          <span className="text-primary-blue font-semibold"> AI-powered solutions to elevate your brand.</span>
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <motion.button
            onClick={scrollToContact}
            className="bg-gradient-to-r from-primary-blue to-primary-purple text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Growing Today <ArrowRight size={20} />
          </motion.button>
          <motion.button
            onClick={scrollToServices}
            className="bg-white/10 text-white px-8 py-4 rounded-full font-semibold text-lg border-2 border-white/20 hover:border-white hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Our Services
          </motion.button>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { 
              opacity: 1,
              transition: { staggerChildren: 0.2, delayChildren: 1 }
            },
            hidden: { opacity: 0 }
          }}
        >
          {[
            { icon: TrendingUp, title: 'ROI-Driven Growth', text: 'Measurable results with performance-based pricing models', color: 'text-accent-green' },
            { icon: Shield, title: '24/7 Maintenance', text: 'AI-powered automated maintenance and monitoring', color: 'text-primary-purple' },
            { icon: Zap, title: 'Rapid Implementation', text: 'Quick setup and immediate impact on your business', color: 'text-yellow-500' }
          ].map((feature, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center p-6 bg-white/5 backdrop-blur-md rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-white/10"
              variants={{ visible: { y: 0, opacity: 1 }, hidden: { y: 20, opacity: 0 } }}
              transition={{ duration: 0.5 }}
            >
              <feature.icon className={`${feature.color} mb-4`} size={32} />
              <h3 className="font-semibold text-lg mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-400 text-center text-sm">{feature.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

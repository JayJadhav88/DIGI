import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, TrendingUp, Globe } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: <Users className="text-primary-blue" size={24} />, number: '500+', label: 'Clients Served' },
    { icon: <TrendingUp className="text-green-600" size={24} />, number: '300%', label: 'Average ROI Increase' },
    { icon: <Award className="text-primary-purple" size={24} />, number: '99.9%', label: 'Uptime Guarantee' },
    { icon: <Globe className="text-orange-600" size={24} />, number: '24/7', label: 'Support Available' }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About <span className="bg-gradient-to-r from-primary-blue to-primary-purple bg-clip-text text-transparent">DigiVantage</span>
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              DigiVantage is India's leading E-commerce Growth & Maintenance agency, specializing in helping SMEs and D2C brands scale their online presence with AI-powered solutions and data-driven strategies.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              With the Indian e-commerce market projected to reach <strong>$327 billion by 2030</strong>, we position your business at the forefront of this digital revolution. Our expert team combines cutting-edge technology with proven marketing strategies to deliver measurable results.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-primary-blue rounded-full mr-4"></div>
                <span className="text-gray-700">Specialized in budget-friendly solutions for MSMEs</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-primary-purple rounded-full mr-4"></div>
                <span className="text-gray-700">AI-powered automation reducing operational costs by 25-40%</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-600 rounded-full mr-4"></div>
                <span className="text-gray-700">Performance-based pricing models ensuring ROI</span>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="rounded-2xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" alt="Team collaborating" className="w-full h-full object-cover" />
          </motion.div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center mb-3">{stat.icon}</div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

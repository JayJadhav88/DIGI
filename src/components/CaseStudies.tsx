import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, ArrowUpRight } from 'lucide-react';

const CaseStudies: React.FC = () => {
  const cases = [
    {
      title: 'Fashion D2C Brand',
      category: 'E-commerce Growth',
      challenge: 'Low conversion rates and high cart abandonment.',
      solution: 'Implemented AI-powered recommendations and optimized checkout flow.',
      results: [
        { metric: 'Conversion Rate', increase: '+285%' },
        { metric: 'Revenue', increase: '+340%' },
        { metric: 'Cart Abandonment', increase: '-60%' }
      ],
      timeframe: '3 months',
      image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop'
    },
    {
      title: 'Electronics MSME',
      category: 'Store Setup & Maintenance',
      challenge: 'No online presence and limited technical knowledge.',
      solution: 'Complete store setup with automated maintenance and training.',
      results: [
        { metric: 'Online Revenue', increase: '+450%' },
        { metric: 'Monthly Orders', increase: '+200%' },
        { metric: 'Customer Base', increase: '+300%' }
      ],
      timeframe: '6 months',
      image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop'
    },
    {
      title: 'Home Decor Startup',
      category: 'Performance Marketing',
      challenge: 'High customer acquisition cost and low ROAS.',
      solution: 'Data-driven marketing campaigns with AI optimization.',
      results: [
        { metric: 'CAC Reduction', increase: '-55%' },
        { metric: 'ROAS', increase: '+380%' },
        { metric: 'Organic Traffic', increase: '+250%' }
      ],
      timeframe: '4 months',
      image: 'https://images.unsplash.com/photo-1530293289358-99a953b6ac34?q=80&w=1200&auto=format&fit=crop'
    }
  ];

  return (
    <section id="case-studies" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Success <span className="bg-gradient-to-r from-primary-blue to-primary-purple bg-clip-text text-transparent">Stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real results from real businesses. See how we've helped our clients achieve extraordinary growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cases.map((caseStudy, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100 flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div 
                className="h-48 bg-cover bg-center text-white relative flex flex-col justify-end p-6"
                style={{ backgroundImage: `url(${caseStudy.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="relative z-10">
                  <div className="text-sm font-medium opacity-90 mb-1">{caseStudy.category}</div>
                  <h3 className="text-xl font-bold">{caseStudy.title}</h3>
                </div>
              </div>

              <div className="p-6 flex-grow flex flex-col">
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Challenge</h4>
                  <p className="text-gray-600 text-sm h-12">{caseStudy.challenge}</p>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Solution</h4>
                  <p className="text-gray-600 text-sm h-12">{caseStudy.solution}</p>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Results</h4>
                  <div className="space-y-3">
                    {caseStudy.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="flex justify-between items-center">
                        <span className="text-gray-600 text-sm">{result.metric}</span>
                        <span className="font-bold text-green-600 text-sm">{result.increase}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-500 border-t border-gray-100 pt-4 mt-auto">
                  <span>Timeframe: {caseStudy.timeframe}</span>
                  <ArrowUpRight size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;

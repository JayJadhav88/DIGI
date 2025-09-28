import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Clock, Award, Loader, CheckCircle, XCircle } from 'lucide-react';
import axios from 'axios';

const formsparkFormId = import.meta.env.VITE_FORMSPARK_FORM_ID;
const formsparkUrl = `https://submit-form.com/${formsparkFormId}`;

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');

    try {
      if (!formsparkFormId || formsparkFormId === 'YOUR_FORM_ID') {
        throw new Error('Formspark Form ID is not configured in the .env file.');
      }
      
      await axios.post(formsparkUrl, {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        service: formData.service,
        message: formData.message,
      });

      setStatus('success');
      setFormData({ name: '', email: '', phone: '', company: '', service: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);

    } catch (error) {
      console.error('Error submitting form:', error);
      setErrorMessage('Submission failed. Please check your Form ID.');
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const getButtonContent = () => {
    switch (status) {
      case 'sending':
        return <><Loader className="animate-spin" size={20} /> Sending...</>;
      case 'success':
        return <><CheckCircle size={20} /> Message Sent!</>;
      case 'error':
        return <><XCircle size={20} /> {errorMessage}</>;
      default:
        return <><Send size={20} /> Send Message</>;
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6">
            Get In <span className="bg-gradient-to-r from-primary-blue to-primary-purple bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to scale your e-commerce business? Let's discuss your requirements and create a custom solution.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-brand-dark mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                  <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-purple focus:border-transparent transition-colors" placeholder="Your full name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                  <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-purple focus:border-transparent transition-colors" placeholder="your@email.com" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-purple focus:border-transparent transition-colors" placeholder="+91 XXXXX XXXXX" />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                  <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-purple focus:border-transparent transition-colors" placeholder="Your company" />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">Service Interested In</label>
                <select id="service" name="service" value={formData.service} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-purple focus:border-transparent transition-colors">
                  <option value="">Select a service</option>
                  <option value="starter-maintenance">Starter Maintenance (₹3,000/month)</option>
                  <option value="pro-growth">Pro Growth (₹25,000/project)</option>
                  <option value="pro-maintenance">Pro Maintenance (₹12,000/month)</option>
                  <option value="custom">Custom Solution</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                <textarea id="message" name="message" required rows={6} value={formData.message} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-purple focus:border-transparent transition-colors resize-none" placeholder="Tell us about your project requirements..."></textarea>
              </div>

              <motion.button
                type="submit"
                disabled={status === 'sending'}
                className={`w-full py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 shadow-md transition-all
                  ${status === 'sending' ? 'bg-gray-400 cursor-not-allowed' : 'bg-gradient-to-r from-primary-blue to-primary-purple text-white hover:shadow-lg'}
                  ${status === 'success' ? '!bg-green-500 text-white' : ''}
                  ${status === 'error' ? '!bg-red-500 text-white' : ''}
                `}
                whileHover={status === 'idle' ? { scale: 1.02, y: -2 } : {}}
                whileTap={status === 'idle' ? { scale: 0.98 } : {}}
              >
                {getButtonContent()}
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8">
              <div className="bg-brand-light p-8 rounded-2xl border border-gray-100">
                <h3 className="text-2xl font-bold text-brand-dark mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="p-3 bg-primary-blue/10 rounded-full mr-4"><Mail className="text-primary-blue" size={24} /></div>
                    <div>
                      <div className="font-semibold text-brand-dark">Email</div>
                      <a href="mailto:sales.digivantage@gmail.com" className="text-primary-blue hover:underline">sales.digivantage@gmail.com</a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="p-3 bg-accent-green/10 rounded-full mr-4"><Phone className="text-accent-green" size={24} /></div>
                    <div>
                      <div className="font-semibold text-brand-dark">Phone</div>
                      <a href="tel:+918999396768" className="text-accent-green hover:underline">+91 8999396768</a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="p-3 bg-primary-purple/10 rounded-full mr-4"><MapPin className="text-primary-purple" size={24} /></div>
                    <div>
                      <div className="font-semibold text-brand-dark">Location</div>
                      <div className="text-gray-700">India</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                  <Clock className="text-primary-blue mr-4" size={24} />
                  <div>
                    <div className="font-semibold text-brand-dark">Response Time</div>
                    <div className="text-gray-600">Within 2 business hours</div>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                  <Award className="text-accent-green mr-4" size={24} />
                  <div>
                    <div className="font-semibold text-brand-dark">Free Consultation</div>
                    <div className="text-gray-600">30-minute strategy call</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

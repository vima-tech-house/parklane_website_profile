'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MailIcon, PhoneIcon, MapPinIcon, GlobeIcon } from '../icons';

const contactInfo = [
  {
    icon: MailIcon,
    label: 'Email',
    value: 'info@plmats.com',
    href: 'mailto:info@plmats.com',
  },
  {
    icon: GlobeIcon,
    label: 'Website',
    value: 'www.plmats.com',
    href: 'https://www.plmats.com',
  },
  {
    icon: MapPinIcon,
    label: 'Location',
    value: 'Kigali, Rwanda',
    href: null,
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: '',
      });
      
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 2000);
  };

  return (
    <section
      id="contact"
      className="section-padding bg-gradient-to-b from-white to-primary-50/30"
    >
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-6">
            Get in Touch
          </span>
          <h2 className="heading-2 text-dark-900 mb-6">
            Ready to <span className="text-primary-600">Streamline</span> Your
            Procurement?
          </h2>
          <p className="body-large text-dark-600">
            Let's discuss how PLM can optimize your supply chain and deliver
            exceptional value to your projects.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gradient-to-br from-dark-900 to-dark-800 rounded-3xl p-10 text-white h-full relative overflow-hidden shadow-2xl">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10 bg-dots" />

              {/* Animated Background Shape */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.3, 0.2],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl"
              />

              <div className="relative z-10">
                <h3 className="heading-3 mb-4">Let's Connect</h3>
                <p className="text-white/80 mb-8 leading-relaxed">
                  Have questions about our services or need a custom quote?
                  Our team is here to help you find the perfect procurement
                  solutions for your project.
                </p>

                {/* Contact Details */}
                <div className="space-y-6 mb-10">
                  {contactInfo.map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start space-x-4"
                    >
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center">
                        <item.icon size={24} className="text-primary-400" />
                      </div>
                      <div>
                        <div className="text-sm text-white/60 mb-1">
                          {item.label}
                        </div>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-white font-medium hover:text-primary-400 transition-colors duration-300"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <div className="text-white font-medium">
                            {item.value}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Additional Info */}
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <h4 className="font-semibold mb-2">Business Hours</h4>
                  <p className="text-white/80 text-sm">
                    Monday - Friday: 8:00 AM - 6:00 PM (EAT)
                  </p>
                  <p className="text-white/80 text-sm">
                    Saturday: 9:00 AM - 1:00 PM (EAT)
                  </p>
                  <p className="text-white/80 text-sm mt-2">
                    24/7 Emergency Support Available
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-dark-900 mb-2"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-dark-200 focus:border-primary-600 focus:outline-none transition-colors duration-300"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-dark-900 mb-2"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-dark-200 focus:border-primary-600 focus:outline-none transition-colors duration-300"
                  placeholder="john@company.com"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-semibold text-dark-900 mb-2"
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-dark-200 focus:border-primary-600 focus:outline-none transition-colors duration-300"
                    placeholder="Company Name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-dark-900 mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-dark-200 focus:border-primary-600 focus:outline-none transition-colors duration-300"
                    placeholder="+1 234 567 8900"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-dark-900 mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border-2 border-dark-200 focus:border-primary-600 focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Tell us about your project requirements..."
                />
              </div>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg"
                >
                  Thank you! Your message has been sent successfully.
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </motion.button>

              <p className="text-sm text-dark-600 text-center">
                By submitting this form, you agree to our privacy policy and
                terms of service.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Icons from '../icons';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const services = [
    {
      icon: Icons.Globe,
      title: 'Global Sourcing Power',
      description: 'With a robust global network, PLM identifies and negotiates the most competitive pricing across continents—ensuring that your project budget is maximized without compromising on quality.',
      features: [
        'Multi-continent supplier network',
        'Competitive price negotiation',
        'Budget optimization',
        'Market intelligence',
      ],
      gradient: 'from-blue-500 to-blue-700',
    },
    {
      icon: Icons.Package,
      title: 'OEM Direct Access',
      description: 'We work directly with Original Equipment Manufacturers (OEMs), eliminating unnecessary layers in the supply chain. This guarantees authenticity, enhances service quality, and reduces costs.',
      features: [
        'Direct manufacturer relationships',
        'Guaranteed authenticity',
        'Enhanced service quality',
        'Reduced intermediary costs',
      ],
      gradient: 'from-primary-500 to-primary-700',
    },
    {
      icon: Icons.Shield,
      title: 'Supplier Vetting & Verification',
      description: 'Every supplier must pass through PLM\'s stringent due diligence process, ensuring only the most credible and reliable partners join our network.',
      features: [
        'Business credibility checks',
        'Track record verification',
        'Quality standards assessment',
        'After-sales service evaluation',
      ],
      gradient: 'from-emerald-500 to-emerald-700',
    },
    {
      icon: Icons.Award,
      title: 'Graded Supplier Network',
      description: 'All suppliers in our ecosystem are continuously graded on performance, reliability, and material quality—ensuring consistent value delivery across all projects.',
      features: [
        'Continuous performance monitoring',
        'Reliability scoring',
        'Quality consistency tracking',
        'Regular supplier audits',
      ],
      gradient: 'from-purple-500 to-purple-700',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="services" ref={ref} className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
              Our Approach
            </span>
            <h2 className="heading-2 mb-6">
              Comprehensive{' '}
              <span className="text-gradient">Sourcing Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide end-to-end procurement services backed by rigorous quality standards and global supplier networks
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden border border-gray-100"
              >
                {/* Card Header */}
                <div className={`bg-gradient-to-br ${service.gradient} p-8 text-white relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-32 h-32 transform translate-x-8 -translate-y-8">
                    <div className="absolute inset-0 bg-white/10 rounded-full" />
                  </div>
                  <div className="relative">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl mb-4">
                      <service.icon size={32} />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                    <p className="text-white/90 leading-relaxed">{service.description}</p>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-8">
                  <h4 className="font-bold text-dark-900 mb-4 flex items-center">
                    <Icons.CheckCircle className="text-primary-600 mr-2" size={20} />
                    Key Benefits
                  </h4>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ x: -20, opacity: 0 }}
                        animate={isInView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
                        transition={{ delay: 0.3 + idx * 0.1 }}
                        className="flex items-start"
                      >
                        <span className="flex-shrink-0 w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 mr-3" />
                        <span className="text-gray-700">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Process Steps */}
          <motion.div variants={itemVariants} className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-dark-900 mb-8 text-center">
              Our Procurement Process
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: '01', title: 'Requirements Analysis', desc: 'Understanding your specific needs' },
                { step: '02', title: 'Global Sourcing', desc: 'Identifying optimal suppliers' },
                { step: '03', title: 'Quality Verification', desc: 'Rigorous vetting process' },
                { step: '04', title: 'Delivery & Support', desc: 'End-to-end logistics' },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="relative"
                >
                  <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                    <div className="text-5xl font-bold text-primary-200 mb-4">{step.step}</div>
                    <h4 className="font-bold text-dark-900 mb-2">{step.title}</h4>
                    <p className="text-sm text-gray-600">{step.desc}</p>
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                      <Icons.ArrowRight className="text-primary-300" size={24} />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
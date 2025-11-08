'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Icons from '../icons';

const Logistics = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const logisticsServices = [
    {
      icon: Icons.Plane,
      title: 'Air Freight',
      description: 'Fast and secure delivery for urgent project needs',
      features: [
        'Express delivery options',
        'Temperature-controlled transport',
        'Real-time flight tracking',
        'Priority customs clearance',
        'Door-to-door service',
      ],
      gradient: 'from-sky-500 to-blue-600',
    },
    {
      icon: Icons.Truck,
      title: 'Land Transport',
      description: 'Reliable trucking and rail services across regions',
      features: [
        'Regional distribution network',
        'Cross-border transport',
        'Specialized heavy equipment hauling',
        'Last-mile delivery',
        'Route optimization',
      ],
      gradient: 'from-orange-500 to-red-600',
    },
    {
      icon: Icons.Ship,
      title: 'Sea Freight',
      description: 'Cost-effective and bulk shipping with end-to-end tracking',
      features: [
        'Full container load (FCL)',
        'Less than container load (LCL)',
        'Roll-on/Roll-off services',
        'Port-to-port delivery',
        'Customs brokerage',
      ],
      gradient: 'from-cyan-500 to-teal-600',
    },
  ];

  const logisticsFeatures = [
    {
      icon: Icons.Globe,
      title: 'Global Network',
      description: 'Strategic partnerships with top-tier logistics providers worldwide',
    },
    {
      icon: Icons.Shield,
      title: 'Cargo Insurance',
      description: 'Comprehensive coverage for all shipments from origin to destination',
    },
    {
      icon: Icons.CheckCircle,
      title: 'Real-Time Tracking',
      description: 'Advanced tracking systems for complete shipment visibility',
    },
    {
      icon: Icons.Users,
      title: 'Dedicated Support',
      description: '24/7 logistics coordination and customer service team',
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
    <section id="logistics" ref={ref} className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
              Logistics Services
            </span>
            <h2 className="heading-2 mb-6">
              Comprehensive{' '}
              <span className="text-gradient">Supply Chain Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              PLM offers integrated logistics solutions via air, land, and sea ensuring efficient and safe delivery to project sites across the globe
            </p>
          </motion.div>

          {/* Main Logistics Services */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {logisticsServices.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                {/* Service Header */}
                <div className={`bg-gradient-to-br ${service.gradient} p-8 text-white relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-32 h-32 transform translate-x-8 -translate-y-8">
                    <div className="absolute inset-0 bg-white/10 rounded-full" />
                  </div>
                  <div className="relative">
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl mb-4"
                    >
                      <service.icon size={32} />
                    </motion.div>
                    <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                    <p className="text-white/90">{service.description}</p>
                  </div>
                </div>

                {/* Service Features */}
                <div className="p-8">
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ x: -20, opacity: 0 }}
                        animate={isInView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
                        transition={{ delay: 0.3 + idx * 0.1 }}
                        className="flex items-start"
                      >
                        <Icons.CheckCircle className="text-primary-600 mr-3 flex-shrink-0 mt-0.5" size={18} />
                        <span className="text-gray-700">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Logistics Features Grid */}
          <motion.div variants={itemVariants} className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-16">
            <h3 className="text-3xl font-bold text-dark-900 mb-10 text-center">
              Why Choose PLM Logistics
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {logisticsFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                    <feature.icon className="text-primary-600" size={28} />
                  </div>
                  <h4 className="font-bold text-dark-900 mb-2">{feature.title}</h4>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Process Timeline */}
          <motion.div variants={itemVariants}>
            <h3 className="text-3xl font-bold text-dark-900 mb-10 text-center">
              Our Logistics Process
            </h3>
            <div className="relative">
              {/* Timeline Line */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary-200 transform -translate-x-1/2" />

              <div className="space-y-12">
                {[
                  {
                    step: 1,
                    title: 'Order Confirmation',
                    description: 'We confirm your order details and prepare shipping documentation',
                    icon: Icons.CheckCircle,
                  },
                  {
                    step: 2,
                    title: 'Route Planning',
                    description: 'Optimal route selection based on urgency, cost, and cargo type',
                    icon: Icons.Target,
                  },
                  {
                    step: 3,
                    title: 'Transit & Tracking',
                    description: 'Real-time monitoring with regular status updates',
                    icon: Icons.Globe,
                  },
                  {
                    step: 4,
                    title: 'Delivery & Support',
                    description: 'Safe delivery to your site with post-delivery assistance',
                    icon: Icons.Package,
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                    animate={isInView ? { x: 0, opacity: 1 } : { x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                    transition={{ delay: 0.6 + index * 0.15 }}
                    className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                      <div className="bg-white rounded-xl p-6 shadow-lg">
                        <div className={`inline-flex items-center justify-center w-12 h-12 bg-primary-100 rounded-lg mb-4 ${index % 2 === 0 ? 'md:ml-auto' : ''}`}>
                          <item.icon className="text-primary-600" size={24} />
                        </div>
                        <h4 className="text-xl font-bold text-dark-900 mb-2">{item.title}</h4>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                    <div className="hidden md:flex items-center justify-center w-16 h-16 bg-primary-600 text-white rounded-full font-bold text-xl z-10 flex-shrink-0">
                      {item.step}
                    </div>
                    <div className="flex-1" />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            variants={itemVariants}
            className="mt-16 bg-gradient-to-br from-dark-900 to-dark-800 rounded-2xl p-12 text-center text-white"
          >
            <h3 className="text-3xl font-bold mb-4">Ready to Streamline Your Supply Chain?</h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Partner with PLM for reliable, efficient, and cost-effective logistics solutions
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="btn-primary inline-flex items-center"
            >
              Get Started
              <Icons.ArrowRight className="ml-2" size={20} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Logistics;
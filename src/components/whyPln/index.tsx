'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Icons from '../icons';

const WhyPLM = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const benefits = [
    {
      icon: Icons.Zap,
      title: 'Cost Efficiency',
      description: 'Transparent and lean sourcing delivers maximum return on investment',
      details: [
        'Direct OEM relationships eliminate markups',
        'Competitive global pricing',
        'Optimized logistics costs',
        'No hidden fees',
      ],
      color: 'blue',
    },
    {
      icon: Icons.Handshake,
      title: 'Reliability',
      description: 'Only trusted suppliers are included in our network, ensuring peace of mind',
      details: [
        'Verified supplier credentials',
        'Proven track records',
        'Consistent delivery timelines',
        'Dependable partnerships',
      ],
      color: 'primary',
    },
    {
      icon: Icons.Award,
      title: 'Quality Assurance',
      description: 'Products are sourced to match international quality standards',
      details: [
        'ISO certified suppliers',
        'Rigorous quality checks',
        'Industry-standard compliance',
        'Material authenticity guarantee',
      ],
      color: 'emerald',
    },
    {
      icon: Icons.Lightbulb,
      title: 'Tailored Solutions',
      description: 'Every client benefits from custom sourcing strategies based on project-specific requirements',
      details: [
        'Project-specific analysis',
        'Flexible procurement options',
        'Customized delivery schedules',
        'Dedicated account management',
      ],
      color: 'purple',
    },
  ];

  const stats = [
    { value: '50+', label: 'Global Partners', icon: Icons.Globe },
    { value: '100%', label: 'Quality Guarantee', icon: Icons.Shield },
    { value: '24/7', label: 'Customer Support', icon: Icons.Users },
    { value: '15+', label: 'Years Experience', icon: Icons.Award },
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
    <section id="why-plm" ref={ref} className="section-padding bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
              Why Choose PLM
            </span>
            <h2 className="heading-2 mb-6">
              The PLM{' '}
              <span className="text-gradient">Advantage</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our core value "Streamline Global Business" drives every decision, integrating global resources to enhance project outcomes
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0, rotate: -10 }}
                animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -10 }}
                transition={{ delay: 0.2 + index * 0.1, type: 'spring' }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-xl p-6 shadow-lg text-center"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary-100 rounded-full mb-4">
                  <stat.icon className="text-primary-600" size={28} />
                </div>
                <div className="text-3xl font-bold text-dark-900 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="p-8">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-${benefit.color}-100 rounded-xl mb-6`}>
                    <benefit.icon className={`text-${benefit.color}-600`} size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-dark-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{benefit.description}</p>
                  <ul className="space-y-3">
                    {benefit.details.map((detail, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ x: -20, opacity: 0 }}
                        animate={isInView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
                        transition={{ delay: 0.4 + idx * 0.1 }}
                        className="flex items-center text-gray-700"
                      >
                        <Icons.CheckCircle className="text-primary-600 mr-3 flex-shrink-0" size={20} />
                        <span>{detail}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Core Value Highlight */}
          <motion.div
            variants={itemVariants}
            className="relative bg-gradient-to-br from-primary-600 to-primary-800 rounded-3xl p-12 md:p-16 text-white overflow-hidden"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }} />
            </div>

            <div className="relative z-10 text-center max-w-4xl mx-auto">
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ delay: 0.5, type: 'spring' }}
                className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-6"
              >
                <Icons.Target className="text-white" size={40} />
              </motion.div>
              <h3 className="text-4xl font-bold mb-6 font-display">Our Core Value</h3>
              <p className="text-3xl font-display italic mb-8 leading-relaxed">
                "Streamline Global Business"
              </p>
              <p className="text-xl text-white/90 leading-relaxed">
                This ethos drives PLM's strategy—integrating global resources, enhancing project outcomes, and delivering smarter procurement experiences to construction professionals worldwide.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyPLM;
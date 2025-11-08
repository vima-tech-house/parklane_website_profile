'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GlobeIcon, TargetIcon, AwardIcon } from '../icons';

const features = [
  {
    icon: GlobeIcon,
    title: 'Global Sourcing Network',
    description:
      'Access to worldwide suppliers and manufacturers, ensuring competitive pricing and diverse product availability.',
  },
  {
    icon: TargetIcon,
    title: 'Strategic Procurement',
    description:
      'Tailored sourcing strategies that align with your project requirements, timeline, and budget constraints.',
  },
  {
    icon: AwardIcon,
    title: 'Quality Excellence',
    description:
      'Rigorous supplier vetting and continuous performance monitoring to maintain the highest quality standards.',
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0, 0, 0.58, 1], // Changed from 'easeOut' to array format
      },
    },
  };

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-white to-primary-50/30">
      <div className="container-custom">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left Column - Text Content */}
          <div>
            <motion.div variants={itemVariants}>
              <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-6">
                Who We Are
              </span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="heading-2 text-dark-900 mb-6"
            >
              Leading the Way in{' '}
              <span className="text-primary-600">Global Procurement</span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="body-normal text-dark-600 mb-6"
            >
              Parklane Materials Ltd (PLM) is the global sourcing subsidiary of
              the prestigious Parklane Group, specializing in the procurement
              and supply of premium construction materials and equipment. With
              an extensive international footprint and unwavering commitment to
              excellence, we connect our clients with the world's most credible
              suppliers.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-r from-primary-600 to-accent-600 p-8 rounded-2xl text-white mb-8 shadow-xl"
            >
              <div className="text-sm font-semibold uppercase tracking-wider mb-3 opacity-90">
                Our Mission
              </div>
              <p className="text-lg leading-relaxed font-light italic">
                "Deliver optimal value by sourcing globally, streamlining
                procurement, and building trust through quality and
                transparency."
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-600 flex items-center justify-center mt-1">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="text-dark-700">
                  <strong className="text-dark-900">
                    Strong International Network:
                  </strong>{' '}
                  Partnerships with top-tier manufacturers across continents
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-600 flex items-center justify-center mt-1">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="text-dark-700">
                  <strong className="text-dark-900">
                    Uncompromising Quality Standards:
                  </strong>{' '}
                  Every product meets international quality benchmarks
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-600 flex items-center justify-center mt-1">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="text-dark-700">
                  <strong className="text-dark-900">Cost-Effective Solutions:</strong>{' '}
                  Competitive pricing without compromising on quality
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Features Grid */}
          <div>
            <motion.div
              variants={containerVariants}
              className="space-y-6"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  variants={itemVariants}
                  whileHover={{ scale: 1.03 }}
                  className="card group cursor-pointer"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-600 to-accent-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <feature.icon size={28} className="text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-dark-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-dark-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Stats Card */}
              <motion.div
                variants={itemVariants}
                className="bg-gradient-to-br from-dark-900 to-dark-800 rounded-2xl p-8 text-white shadow-2xl"
              >
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-4xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400">
                      15+
                    </div>
                    <div className="text-sm text-white/80">
                      Years of Excellence
                    </div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400">
                      500+
                    </div>
                    <div className="text-sm text-white/80">
                      Projects Completed
                    </div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400">
                      200+
                    </div>
                    <div className="text-sm text-white/80">
                      Verified Suppliers
                    </div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400">
                      50+
                    </div>
                    <div className="text-sm text-white/80">
                      Countries Served
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
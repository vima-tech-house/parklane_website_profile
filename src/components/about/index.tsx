'use client';

import React, { useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const cardHoverVariants = {
    hover: {
      y: -8,
      transition: {
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section id="about" className="relative py-20 lg:py-28 bg-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #a68b56 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-0.5 bg-gradient-to-r from-amber-700 to-primary-600"></div>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-900 to-yellow-800 font-semibold tracking-wider uppercase text-sm">
                About Us
              </span>
            </div>
            <div className="grid lg:grid-cols-2 gap-8 items-end">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                Streamlining Global <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-500">Procurement Excellence</span>
              </h2>
              <div className="space-y-4">
                <p className="text-base text-slate-600 leading-relaxed">
                  We are Rwandan registered company dealing in construction materials. We are distributors and approved applicators of Construction materials for the construction industry.                  </p>
                <p className="text-base text-slate-500 leading-relaxed">
                The company was incorporated in the Republic of Rwanda in 2025. The directors of PLM LTD are professionals with broad experience in the construction industry.                </p>
              </div>
            </div>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Left Side - Large Image Card */}
            <motion.div variants={itemVariants} className="relative">
              <div className="relative h-full min-h-[500px]  overflow-hidden group">
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
                  }}
                />
                
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent"></div>
                
                {/* Core Values Badge */}
                <div className="absolute top-8 left-8">
                  <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
                    <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></div>
                    <span className="text-white font-medium text-sm">Core Values</span>
                  </div>
                </div>

                {/* Bottom Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-3xl lg:text-4xl font-bold text-white mb-3 leading-tight">
                    Building Trust Through <br />
                    Procurement Excellence
                  </h3>
                  <p className="text-white/80 text-base leading-relaxed max-w-md">
                    Our mission is to deliver optimal value by sourcing globally, streamlining processes, and building lasting partnerships.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Feature Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Card 1 - Quality & On-Time Delivery */}
              <motion.div
                variants={itemVariants}
                whileHover="hover"
                className="relative"
              >
                <motion.div
                  // variants={cardHoverVariants}
                  className="h-full p-6 bg-slate-50  border border-slate-200 hover:border-slate-300 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-white shadow-md flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">
                    Quality & Timely Delivery
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    We pride ourselves on delivering every project with uncompromised quality and strict adherence to deadlines.
                  </p>
                </motion.div>
              </motion.div>

              {/* Card 2 - High Safety & Performance */}
              <motion.div
                variants={itemVariants}
                whileHover="hover"
                className="relative"
              >
                <motion.div
                  // variants={cardHoverVariants}
                  className="h-full p-6 bg-gradient-to-br from-primary-500 to-primary-700  shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">
                    Safety & Performance
                  </h4>
                  <p className="text-blue-100 text-sm leading-relaxed">
                    We implement industry-leading safety protocols and performance standards in every operation we undertake.
                  </p>
                </motion.div>
              </motion.div>

              {/* Card 3 - Innovative & Efficient */}
              <motion.div
                variants={itemVariants}
                whileHover="hover"
                className="relative"
              >
                <motion.div
                  // variants={cardHoverVariants}
                  className="h-full p-6 bg-gradient-to-br from-primary-500 to-primary-700  shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">
                    Innovative & Efficient
                  </h4>
                  <p className="text-blue-100 text-sm leading-relaxed">
                    We embrace innovation and technology to deliver smart, cost-efficient procurement solutions.
                  </p>
                </motion.div>
              </motion.div>

              {/* Card 4 - Reliable After-Sales */}
              <motion.div
                variants={itemVariants}
                whileHover="hover"
                className="relative"
              >
                <motion.div
                  // variants={cardHoverVariants}
                  className="h-full p-6 bg-slate-50  border border-slate-200 hover:border-slate-300 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-white shadow-md flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">
                    After-Sales Support
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    We provide responsive support to maintain quality and ensure long-term client satisfaction.
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
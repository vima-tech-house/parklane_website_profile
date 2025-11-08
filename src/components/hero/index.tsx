'use client';

import { motion, Variants } from 'framer-motion';
import Icons from '../icons';

const Hero = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, 0.05, 0.01, 0.9],
      },
    },
  };

  const floatingVariants: Variants = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: [0.4, 0, 0.6, 1],
      },
    },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23a68b56' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 to-transparent" />

      <div className="container-custom relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-white"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center px-4 py-2 bg-primary-600/20 border border-primary-600/30 rounded-full mb-6">
              <Icons.Globe className="mr-2 text-primary-400" size={20} />
              <span className="text-sm font-medium text-primary-300">Global Sourcing Excellence</span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="heading-1 text-white mb-6">
              Streamline Your{' '}
              <span className="text-gradient bg-gradient-to-r from-primary-400 to-primary-600">
                Global Business
              </span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-xl text-gray-300 mb-8 leading-relaxed">
              Parklane Materials Ltd is your trusted partner in global construction materials procurement. We source directly from manufacturers worldwide, ensuring quality, authenticity, and cost-efficiency for your projects.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-12">
              <motion.a
                whileHover={{ scale: 1.05, boxShadow: '0 10px 40px rgba(166, 139, 86, 0.4)' }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="btn-primary"
              >
                Request Quote
                <Icons.ArrowRight className="ml-2" size={20} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#services"
                className="btn-secondary border-white text-white hover:bg-white hover:text-dark-900"
              >
                Our Services
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div variants={itemVariants} className="grid grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold text-primary-400 mb-1">50+</div>
                <div className="text-sm text-gray-400">Global Suppliers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-400 mb-1">100%</div>
                <div className="text-sm text-gray-400">Quality Assured</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-400 mb-1">24/7</div>
                <div className="text-sm text-gray-400">Support Available</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Floating Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative hidden lg:block"
          >
            <div className="relative h-[600px]">
              {/* Main Card */}
              <motion.div
                variants={floatingVariants}
                animate="animate"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-96 bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl shadow-2xl p-8 flex flex-col justify-center items-center"
              >
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-6">
                  <Icons.Package className="text-white" size={40} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 text-center">
                  Premium Materials
                </h3>
                <p className="text-white/80 text-center">
                  Direct from OEM manufacturers worldwide
                </p>
              </motion.div>

              {/* Floating Card 1 */}
              <motion.div
                initial={{ y: 100, x: -50, opacity: 0 }}
                animate={{ y: 0, x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="absolute top-20 -left-10 w-48 h-32 bg-white rounded-xl shadow-xl p-6"
              >
                <Icons.Globe className="text-primary-600 mb-3" size={32} />
                <h4 className="font-bold text-dark-900 mb-1">Global Network</h4>
                <p className="text-sm text-gray-600">Worldwide sourcing</p>
              </motion.div>

              {/* Floating Card 2 */}
              <motion.div
                initial={{ y: 100, x: 50, opacity: 0 }}
                animate={{ y: 0, x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                whileHover={{ scale: 1.05, rotate: -2 }}
                className="absolute bottom-20 -right-10 w-48 h-32 bg-white rounded-xl shadow-xl p-6"
              >
                <Icons.Shield className="text-primary-600 mb-3" size={32} />
                <h4 className="font-bold text-dark-900 mb-1">Quality Assured</h4>
                <p className="text-sm text-gray-600">Verified suppliers only</p>
              </motion.div>

              {/* Floating Card 3 */}
              <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.1 }}
                whileHover={{ scale: 1.05 }}
                className="absolute -top-10 right-20 w-40 h-28 bg-gradient-to-br from-dark-800 to-dark-900 rounded-xl shadow-xl p-5 flex flex-col items-center justify-center"
              >
                <Icons.Zap className="text-primary-400 mb-2" size={28} />
                <h4 className="font-bold text-white text-sm text-center">Fast Delivery</h4>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center cursor-pointer"
        >
          <span className="text-white/60 text-sm mb-2">Scroll to explore</span>
          <Icons.ChevronDown className="text-primary-400" size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
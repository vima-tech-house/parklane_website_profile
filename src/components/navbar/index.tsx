'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/src/lib/utils';
import { CloseIcon, Logo, MenuIcon } from '../icons';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Why PLM', href: '#why-plm' },
  { name: 'Logistics', href: '#logistics' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      )}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="#home" className="flex items-center space-x-3 group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
                           <Logo size={45} className="text-primary-400 group-hover:scale-110 transition-transform duration-300" />
             
            </motion.div>
            <div className="hidden sm:block">
              <div
                className={cn(
                  'font-display text-xl font-bold transition-colors duration-300',
                  scrolled ? 'text-dark-900' : 'text-white'
                )}
              >
                Parklane Materials
              </div>
              <div
                className={cn(
                  'text-xs transition-colors duration-300',
                  scrolled ? 'text-dark-600' : 'text-white/80'
                )}
              >
                Global Sourcing Excellence
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={link.href}
                  className={cn(
                    'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 relative group',
                    scrolled
                      ? 'text-dark-700 hover:text-primary-600'
                      : 'text-white/90 hover:text-white'
                  )}
                >
                  {link.name}
                  <span
                    className={cn(
                      'absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full',
                      scrolled ? 'bg-primary-600' : 'bg-white'
                    )}
                  />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="hidden lg:block"
          >
            <Link
              href="#contact"
              className={cn(
                'btn-primary',
                !scrolled && 'bg-white text-primary-600 hover:bg-primary-50'
              )}
            >
              Get Quote
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              'lg:hidden p-2 rounded-lg transition-colors duration-300',
              scrolled
                ? 'text-dark-900 hover:bg-dark-100'
                : 'text-white hover:bg-white/10'
            )}
            aria-label="Toggle menu"
          >
            {isOpen ? <CloseIcon size={28} /> : <MenuIcon size={28} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-dark-200 overflow-hidden"
          >
            <div className="container-custom py-6">
              <div className="flex flex-col space-y-2">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-3 rounded-lg text-dark-700 font-medium hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navLinks.length * 0.05 }}
                  className="pt-4"
                >
                  <Link
                    href="#contact"
                    onClick={() => setIsOpen(false)}
                    className="btn-primary w-full text-center"
                  >
                    Get Quote
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
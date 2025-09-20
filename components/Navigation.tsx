'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Instagram, Mail } from 'lucide-react'
import { cn } from '@/lib/utils'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Experiences', href: '#experiences' },
    { name: 'Featured', href: '#featured' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'glass-effect shadow-lg' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-r from-orange-400 via-pink-500 to-red-500 flex items-center justify-center">
              <span className="text-white font-bold text-lg md:text-xl">E</span>
            </div>
            <div>
              <h1 className="font-display font-bold text-lg md:text-xl gradient-text">
                Eat This
              </h1>
              <p className="text-xs text-gray-600 -mt-1">NYC Eats & Experiences</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ scale: 1.05 }}
                className="text-gray-700 hover:text-orange-500 transition-colors duration-200 font-medium"
              >
                {item.name}
              </motion.a>
            ))}
            <div className="flex items-center space-x-4">
              <motion.a
                href="https://instagram.com/eat_this_"
                whileHover={{ scale: 1.1 }}
                className="text-gray-700 hover:text-pink-500 transition-colors"
              >
                <Instagram size={20} />
              </motion.a>
              <motion.a
                href="mailto:eatthis914@gmail.com"
                whileHover={{ scale: 1.1 }}
                className="text-gray-700 hover:text-orange-500 transition-colors"
              >
                <Mail size={20} />
              </motion.a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200"
            >
              <div className="px-4 py-6 space-y-4">
                {navItems.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    whileHover={{ x: 10 }}
                    onClick={() => setIsOpen(false)}
                    className="block text-gray-700 hover:text-orange-500 transition-colors duration-200 font-medium"
                  >
                    {item.name}
                  </motion.a>
                ))}
                <div className="flex items-center space-x-6 pt-4 border-t border-gray-200">
                  <motion.a
                    href="https://instagram.com/eat_this_"
                    whileHover={{ scale: 1.1 }}
                    className="text-gray-700 hover:text-pink-500 transition-colors flex items-center space-x-2"
                  >
                    <Instagram size={20} />
                    <span>Instagram</span>
                  </motion.a>
                  <motion.a
                    href="mailto:eatthis914@gmail.com"
                    whileHover={{ scale: 1.1 }}
                    className="text-gray-700 hover:text-orange-500 transition-colors flex items-center space-x-2"
                  >
                    <Mail size={20} />
                    <span>Email</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

export default Navigation

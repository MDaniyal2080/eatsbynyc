'use client'

import { motion } from 'framer-motion'
import { ChevronDown, MapPin, Star, Users } from 'lucide-react'
import Image from 'next/image'

const Hero = () => {
  const stats = [
    { icon: Star, value: '8,258', label: 'Posts' },
    { icon: Users, value: '188K', label: 'Followers' },
    { icon: MapPin, value: '1,481', label: 'Places Visited' },
  ]

  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 hero-pattern opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent"></div>
      
      {/* Floating Food Elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 right-20 w-16 h-16 opacity-20"
      >
        🍕
      </motion.div>
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-40 left-20 w-12 h-12 opacity-20"
      >
        🍝
      </motion.div>
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-40 right-40 w-14 h-14 opacity-20"
      >
        🥪
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 md:pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-orange-100 to-pink-100 text-orange-600 font-medium"
              >
                <MapPin size={16} className="mr-2" />
                New York City's Premier Food Guide
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight"
              >
                <span className="gradient-text">Eat This</span>
                <br />
                <span className="text-gray-900">NYC Eats &</span>
                <br />
                <span className="text-gray-600">Experiences</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg"
              >
                Discover NYC's culinary treasures through our curated food experiences. 
                From hidden gems to iconic eateries, we guide you to the city's best flavors.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Explore Experiences
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-medium rounded-full hover:border-orange-500 hover:text-orange-500 transition-all duration-300"
              >
                View Menu
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-orange-100 to-pink-100 rounded-full mx-auto mb-2">
                    <stat.icon className="w-5 h-5 text-orange-500" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4 h-[600px]">
              <div className="space-y-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative h-48 rounded-2xl overflow-hidden shadow-lg"
                >
                  <Image
                    src="https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop"
                    alt="NYC Pizza"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-semibold">Favorite Pasta</p>
                    <p className="text-sm opacity-90">in New York City</p>
                  </div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative h-64 rounded-2xl overflow-hidden shadow-lg"
                >
                  <Image
                    src="https://images.unsplash.com/photo-1551782450-17144efb9c50?w=400&h=400&fit=crop"
                    alt="NYC Sandwich"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-semibold">Best Sandwiches</p>
                    <p className="text-sm opacity-90">in New York City</p>
                  </div>
                </motion.div>
              </div>
              <div className="space-y-4 pt-8">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative h-64 rounded-2xl overflow-hidden shadow-lg"
                >
                  <Image
                    src="https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=400&fit=crop"
                    alt="NYC Fine Dining"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-semibold">Eat This Next</p>
                    <p className="text-sm opacity-90">New Openings & Finds</p>
                  </div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative h-48 rounded-2xl overflow-hidden shadow-lg"
                >
                  <Image
                    src="https://images.unsplash.com/photo-1559054663-e9b1847b7d45?w=400&h=300&fit=crop"
                    alt="NYC Desserts"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-semibold">Sweet Treats</p>
                    <p className="text-sm opacity-90">NYC Desserts</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown className="w-6 h-6 text-gray-400" />
      </motion.div>
    </section>
  )
}

export default Hero

'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Clock, MapPin, Star } from 'lucide-react'
import Image from 'next/image'

const Experiences = () => {
  const experiences = [
    {
      id: 1,
      title: 'Sept NYC',
      subtitle: 'Seasonal September Favorites',
      description: 'Discover the best fall flavors and cozy spots as NYC transitions into autumn.',
      image: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=500&h=400&fit=crop',
      category: 'Seasonal',
      duration: '3-4 hours',
      spots: '8-12 locations',
      rating: '4.9',
      price: 'Premium'
    },
    {
      id: 2,
      title: 'Home 3',
      subtitle: 'Comfort Food Edition',
      description: 'Experience NYC\'s most comforting dishes that feel like home away from home.',
      image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=500&h=400&fit=crop',
      category: 'Comfort Food',
      duration: '2-3 hours',
      spots: '5-8 locations',
      rating: '4.8',
      price: 'Mid-Range'
    },
    {
      id: 3,
      title: 'NEXT',
      subtitle: 'New Openings & Trends',
      description: 'Stay ahead of the curve with NYC\'s newest openings and emerging food trends.',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&h=400&fit=crop',
      category: 'New Openings',
      duration: '4-5 hours',
      spots: '6-10 locations',
      rating: '4.7',
      price: 'Premium'
    },
    {
      id: 4,
      title: 'Out of NYC',
      subtitle: 'Beyond Manhattan',
      description: 'Explore amazing food scenes in Brooklyn, Queens, and other boroughs.',
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=500&h=400&fit=crop',
      category: 'Boroughs',
      duration: '5-6 hours',
      spots: '8-15 locations',
      rating: '4.9',
      price: 'Full Day'
    },
    {
      id: 5,
      title: 'NYC August',
      subtitle: 'Summer Specialties',
      description: 'Beat the heat with refreshing summer dishes and cool indoor dining spots.',
      image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=500&h=400&fit=crop',
      category: 'Seasonal',
      duration: '3-4 hours',
      spots: '6-10 locations',
      rating: '4.8',
      price: 'Mid-Range'
    },
    {
      id: 6,
      title: 'California',
      subtitle: 'West Coast Vibes in NYC',
      description: 'California-inspired cuisines and healthy options in the heart of New York.',
      image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=500&h=400&fit=crop',
      category: 'Healthy',
      duration: '2-3 hours',
      spots: '4-8 locations',
      rating: '4.6',
      price: 'Mid-Range'
    },
  ]

  return (
    <section id="experiences" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Curated <span className="gradient-text">Experiences</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Each experience is carefully crafted to showcase different aspects of NYC's incredible food scene, 
            from hidden gems to must-visit classics.
          </p>
        </motion.div>

        {/* Experiences Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={experience.image}
                  alt={experience.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700">
                    {experience.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4 flex items-center space-x-1 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-medium text-gray-700">{experience.rating}</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{experience.title}</h3>
                  <p className="text-sm font-medium text-orange-500 mb-2">{experience.subtitle}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{experience.description}</p>
                </div>

                {/* Details */}
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-2" />
                    {experience.duration}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="w-4 h-4 mr-2" />
                    {experience.spots}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-900">{experience.price}</span>
                  </div>
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-medium py-3 px-6 rounded-xl hover:shadow-lg transition-all duration-300"
                >
                  <span>Explore Experience</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-orange-500 text-orange-500 font-medium rounded-full hover:bg-orange-500 hover:text-white transition-all duration-300"
          >
            View All Experiences
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Experiences

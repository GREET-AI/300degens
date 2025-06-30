'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, X, Volume2, VolumeX } from 'lucide-react'

const VideoGallery = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)
  const [isMuted, setIsMuted] = useState(true)

  const videos = [
    { name: 'THIS IS MADNESS', src: '/SPARTA/THIS IS MADNESS.mp4', category: 'Epic' },
    { name: 'Sparta Dance', src: '/SPARTA/Sparta_Dance.mp4', category: 'Dance' },
    { name: 'Sparta Breakdance', src: '/SPARTA/Sparta_Breakdance.mp4', category: 'Dance' },
    { name: 'Sparta Blade Dance', src: '/SPARTA/Sparta_Blade_Dance.mp4', category: 'Dance' },
    { name: 'Sparta Duodance', src: '/SPARTA/Sparta_Duodance.mp4', category: 'Dance' },
    { name: 'Sparta Headbang', src: '/SPARTA/Sparta_Headbang.mp4', category: 'Rock' },
    { name: 'Sparta Kick', src: '/SPARTA/Sparta_Kick.mp4', category: 'Action' },
    { name: 'Sparta Slap', src: '/SPARTA/Sparta_Slap.mp4', category: 'Action' },
    { name: 'Sparta Running', src: '/SPARTA/Sparta_running.mp4', category: 'Action' },
    { name: 'Sparta Head', src: '/SPARTA/Sparta_Head.mp4', category: 'Funny' },
    { name: 'Sparta Nerd', src: '/SPARTA/Sparta_Nerd.mp4', category: 'Funny' },
    { name: 'Sparta Panda', src: '/SPARTA/Sparta_Panda.mp4', category: 'Funny' },
    { name: 'Sparta lol', src: '/SPARTA/Sparta_lol.mp4', category: 'Funny' },
    { name: 'Sparta Gocart', src: '/SPARTA/Sparta_Gocart.mp4', category: 'Funny' },
    { name: 'Sparta Godfather', src: '/SPARTA/Sparta_GOdfather.mp4', category: 'Epic' },
    { name: 'Sparta Godfather 2', src: '/SPARTA/Sparta_GOdfather 2.mp4', category: 'Epic' },
    { name: 'Sparta Admin', src: '/SPARTA/Sparta_ADmin.mp4', category: 'Epic' },
  ]

  const categories = ['All', 'Epic', 'Dance', 'Action', 'Funny', 'Rock']

  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredVideos = selectedCategory === 'All' 
    ? videos 
    : videos.filter(video => video.category === selectedCategory)

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Epic': return 'text-sparta-gold'
      case 'Dance': return 'text-sparta-bronze'
      case 'Action': return 'text-fire-orange'
      case 'Funny': return 'text-sparta-red'
      case 'Rock': return 'text-fire-yellow'
      default: return 'text-white'
    }
  }

  return (
    <section className="py-20 bg-sparta-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-sparta font-bold text-sparta-gold mb-6">
            SPARTA MEME GALLERY
          </h2>
          <p className="text-xl font-warrior text-white">
            Witness the legendary memes that inspired our warriors
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-lg font-warrior font-bold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-sparta-gold text-sparta-dark'
                  : 'bg-sparta-dark/50 border border-sparta-bronze text-white hover:border-sparta-gold'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Video Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredVideos.map((video, index) => (
            <motion.div
              key={video.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="group cursor-pointer"
            >
              <div className="relative bg-sparta-dark/30 border border-sparta-bronze/50 rounded-xl overflow-hidden hover:border-sparta-gold transition-all duration-300">
                <video
                  className="w-full h-48 object-cover"
                  muted
                  loop
                  playsInline
                >
                  <source src={video.src} type="video/mp4" />
                </video>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setSelectedVideo(video.src)}
                    className="bg-sparta-gold text-sparta-dark p-4 rounded-full"
                  >
                    <Play className="w-6 h-6" />
                  </motion.button>
                </div>

                {/* Video Info */}
                <div className="p-4">
                  <h3 className="font-sparta font-bold text-white mb-2">
                    {video.name}
                  </h3>
                  <span className={`text-sm font-warrior ${getCategoryColor(video.category)}`}>
                    {video.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Video Modal */}
        <AnimatePresence>
          {selectedVideo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedVideo(null)}
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="relative max-w-4xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="absolute -top-12 right-0 text-white hover:text-sparta-gold transition-colors duration-200"
                >
                  <X className="w-8 h-8" />
                </button>
                
                <div className="relative">
                  <video
                    className="w-full rounded-lg"
                    controls
                    autoPlay
                    muted={isMuted}
                    loop
                  >
                    <source src={selectedVideo} type="video/mp4" />
                  </video>
                  
                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors duration-200"
                  >
                    {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default VideoGallery 
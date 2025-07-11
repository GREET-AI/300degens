'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Shield, Sword, ArrowDown } from 'lucide-react'

const HeroSection = () => {
  const [degenCount, setDegenCount] = useState(47) // Simulated current degens
  const maxDegens = 300
  const targetSolana = 1

  useEffect(() => {
    // Simulate real-time updates (in real app, this would fetch from blockchain)
    const interval = setInterval(() => {
      setDegenCount(prev => {
        // Simulate occasional new degens joining
        if (Math.random() < 0.1 && prev < maxDegens) {
          return prev + 1
        }
        return prev
      })
    }, 5000) // Update every 5 seconds

    return () => clearInterval(interval)
  }, [])

  const scrollToNext = () => {
    const element = document.querySelector('#about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-40"
          >
            <source src="/SPARTA/THIS IS MADNESS.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sparta-dark/50 to-sparta-dark"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            {/* Meme Headline */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="text-6xl md:text-8xl font-dalek font-black text-sparta-gold glow-text glitch text-stroke-white"
                data-text="300 DEGENS"
              >
                300 DEGENS
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="text-3xl md:text-4xl font-dalek font-bold text-white warrior-text floating-shield"
              >
                ONE MEME. ONE MISSION.
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="text-5xl md:text-6xl font-dalek font-black text-sparta-gold glitch"
                data-text="SPARTA ON BINANCE!"
                style={{ letterSpacing: '0.1em' }}
              >
                SPARTA ON BINANCE!
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.7 }}
                className="text-lg md:text-xl font-warrior text-sparta-bronze text-reveal"
              >
                The floor is our shield. The meme is our sword.
              </motion.p>
            </div>

            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="space-y-4"
            >
              <p className="text-2xl md:text-3xl font-sparta font-bold text-white battle-scar">
                300 DEGENS. 1 SOLANA EACH.
              </p>
              <motion.p 
                className="text-3xl md:text-4xl font-sparta font-black text-sparta-gold glow-text"
                animate={{ 
                  textShadow: [
                    "0 0 10px #FFD700, 0 0 20px #FFD700, 0 0 30px #FFD700",
                    "0 0 20px #FFD700, 0 0 30px #FFD700, 0 0 40px #FFD700",
                    "0 0 10px #FFD700, 0 0 20px #FFD700, 0 0 30px #FFD700"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                THIS IS SPARTA!
              </motion.p>
            </motion.div>

            {/* Degen Counter */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-8"
            >
              {/* Degens Counter */}
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                whileHover={{ scale: 1.1 }}
              >
                <div className="bg-sparta-dark/80 backdrop-blur-sm rounded-lg p-4 border border-sparta-bronze sparta-card epic-glow">
                  <div className="text-3xl md:text-4xl font-sparta font-bold text-sparta-gold">
                    {degenCount.toString().padStart(3, '0')} / {maxDegens}
                  </div>
                  <div className="text-sm md:text-base font-warrior text-white">
                    DEGENS
                  </div>
                  <div className="mt-2 w-full bg-sparta-dark/50 rounded-full h-2">
                    <motion.div 
                      className="bg-sparta-gold h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${(degenCount / maxDegens) * 100}%` }}
                      transition={{ duration: 1, delay: 1.5 }}
                    />
                  </div>
                </div>
              </motion.div>

              {/* Solana Counter */}
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.3 }}
                whileHover={{ scale: 1.1 }}
              >
                <div className="bg-sparta-dark/80 backdrop-blur-sm rounded-lg p-4 border border-sparta-bronze sparta-card epic-glow">
                  <div className="text-3xl md:text-4xl font-sparta font-bold text-sparta-gold">
                    {degenCount} / {maxDegens}
                  </div>
                  <div className="text-sm md:text-base font-warrior text-white">
                    SOLANA
                  </div>
                  <div className="mt-2 w-full bg-sparta-dark/50 rounded-full h-2">
                    <motion.div 
                      className="bg-fire-orange h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${(degenCount / maxDegens) * 100}%` }}
                      transition={{ duration: 1, delay: 1.6 }}
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="flex flex-col gap-4 justify-center items-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('https://x.com/i/communities/1939675384091750734', '_blank')}
                className="bg-sparta-gold text-sparta-dark px-8 py-4 rounded-lg font-dalek font-bold text-lg hover:bg-sparta-bronze transition-colors duration-200 flex items-center space-x-2 sparta-button epic-glow"
              >
                <Shield className="w-5 h-5" />
                <span>JOIN THE PHALANX</span>
              </motion.button>
              
              {/* Contract Address Placeholder */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                className="bg-sparta-dark/60 backdrop-blur-sm border border-sparta-bronze rounded-lg p-3 text-center"
              >
                <p className="text-sm font-warrior text-sparta-bronze mb-1">CONTRACT ADDRESS</p>
                <div className="flex items-center justify-center gap-2">
                  <code className="text-xs font-mono text-white bg-sparta-dark/50 px-2 py-1 rounded border border-sparta-bronze/30">
                    4HkCQfK93Bkce1aCFheQEWGMvPyffAhGDE6muRSupump
                  </code>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      navigator.clipboard.writeText('4HkCQfK93Bkce1aCFheQEWGMvPyffAhGDE6muRSupump');
                      // Optional: Show feedback
                    }}
                    className="text-sparta-gold hover:text-white transition-colors duration-200"
                    title="Copy Contract Address"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
              <motion.button
                onClick={scrollToNext}
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-sparta-gold hover:text-white transition-colors duration-200 pulse-glow"
              >
                <ArrowDown className="w-8 h-8" />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Enhanced Particle Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="spear-icon w-2 h-8 absolute top-10 left-10 animate-spear-rain"></div>
          <div className="spear-icon w-2 h-8 absolute top-20 right-20 animate-spear-rain" style={{ animationDelay: '1s' }}></div>
          <div className="spear-icon w-2 h-8 absolute top-40 left-1/4 animate-spear-rain" style={{ animationDelay: '2s' }}></div>
          <div className="spear-icon w-2 h-8 absolute top-60 right-1/3 animate-spear-rain" style={{ animationDelay: '3s' }}></div>
          <div className="spear-icon w-2 h-8 absolute top-80 left-1/2 animate-spear-rain" style={{ animationDelay: '4s' }}></div>
        </div>

        {/* Floating Shields */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-20 left-10 w-8 h-8 bg-sparta-gold/20 rounded-full"
          />
          <motion.div
            animate={{ 
              y: [0, -15, 0],
              rotate: [0, -5, 0]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute top-40 right-20 w-6 h-6 bg-sparta-bronze/20 rounded-full"
          />
          <motion.div
            animate={{ 
              y: [0, -25, 0],
              rotate: [0, 10, 0]
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute bottom-40 left-20 w-10 h-10 bg-sparta-red/20 rounded-full"
          />
        </div>
      </section>
      {/* Sparta Meme Video & Info */}
      <section className="bg-sparta-dark py-12 border-t-4 border-sparta-bronze flex flex-col items-center">
        <div className="w-full max-w-2xl mx-auto flex flex-col items-center">
          <div className="w-full aspect-video rounded-xl overflow-hidden border-4 border-sparta-gold shadow-2xl epic-glow mb-6">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/KDRAhiBtOrQ"
              title="300 This is Sparta Remix!!!"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
          <div className="bg-sparta-dark/80 border border-sparta-bronze rounded-xl p-6 w-full text-center meme-info-card epic-glow">
            <h3 className="text-3xl md:text-4xl font-dalek font-bold text-sparta-gold mb-2 glitch" data-text="SPARTA REMIX MEME VIDEO">SPARTA REMIX MEME VIDEO</h3>
            <p className="text-lg font-warrior text-white mb-4">The legendary 'This is Sparta' remix that started a global meme movement. Iconic for its techno beat and endless remixes.</p>
            <div className="flex flex-wrap justify-center gap-6 text-xl font-dalek">
              <div className="bg-sparta-bronze/20 border border-sparta-bronze rounded-lg px-4 py-2 text-sparta-gold meme-stat">Upload: <span className="text-white">2007</span></div>
              <div className="bg-sparta-bronze/20 border border-sparta-bronze rounded-lg px-4 py-2 text-sparta-gold meme-stat">Views: <span className="text-white">50M+</span></div>
              <div className="bg-sparta-bronze/20 border border-sparta-bronze rounded-lg px-4 py-2 text-sparta-gold meme-stat">MemeScore: <span className="text-white">9000+</span></div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HeroSection 
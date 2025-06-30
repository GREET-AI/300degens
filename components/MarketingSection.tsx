'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Flame, Megaphone, Users, Lock, Unlock, Twitter, Zap } from 'lucide-react'

const MarketingSection = () => {
  // Simulate unlock (in real app, connect to on-chain data)
  const [unlocked, setUnlocked] = useState(false)
  const [countdown, setCountdown] = useState(86400) // 24h in seconds

  useEffect(() => {
    if (!unlocked && countdown > 0) {
      const timer = setInterval(() => setCountdown((c) => c - 1), 1000)
      return () => clearInterval(timer)
    }
    if (countdown <= 0) setUnlocked(true)
  }, [unlocked, countdown])

  const formatTime = (secs: number) => {
    const h = Math.floor(secs / 3600)
    const m = Math.floor((secs % 3600) / 60)
    const s = secs % 60
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`
  }

  return (
    <section id="marketing" className="py-20 bg-gradient-to-b from-sparta-dark/95 to-sparta-dark relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-sparta font-bold text-sparta-gold mb-6">
            THE GATES OF FIRE
          </h2>
          <p className="text-xl md:text-2xl font-warrior text-white max-w-2xl mx-auto">
            When 300 warriors are assembled, 100 SOL is unleashed for marketing. The world will tremble before our memes.
          </p>
        </motion.div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          {/* Unlock Animation */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center"
          >
            <div className="relative mb-4">
              <div className="w-24 h-24 rounded-full bg-sparta-bronze/20 flex items-center justify-center border-4 border-sparta-gold shadow-lg">
                {unlocked ? (
                  <Unlock className="w-16 h-16 text-fire-orange animate-pulse-glow" />
                ) : (
                  <Lock className="w-16 h-16 text-sparta-gold animate-float" />
                )}
              </div>
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                <Flame className="w-8 h-8 text-fire-orange animate-fire-burn" />
              </div>
            </div>
            <div className="text-center">
              {unlocked ? (
                <span className="font-warrior text-xl text-fire-orange">Marketing Unleashed!</span>
              ) : (
                <span className="font-warrior text-xl text-sparta-gold">Unlocks in {formatTime(countdown)}</span>
              )}
            </div>
          </motion.div>
          {/* Marketing Plan */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-sparta-dark/60 border border-sparta-bronze rounded-xl p-8 shadow-lg w-full max-w-md"
          >
            <h3 className="text-2xl font-sparta font-bold text-sparta-gold mb-4">Marketing Campaigns</h3>
            <ul className="space-y-3 text-left">
              <li className="flex items-center gap-2 text-white font-warrior"><Megaphone className="w-5 h-5 text-fire-orange" /> Social media blitz (Twitter, Telegram, Discord)</li>
              <li className="flex items-center gap-2 text-white font-warrior"><Zap className="w-5 h-5 text-sparta-gold" /> Influencer partnerships</li>
              <li className="flex items-center gap-2 text-white font-warrior"><Users className="w-5 h-5 text-sparta-bronze" /> Community meme contests</li>
              <li className="flex items-center gap-2 text-white font-warrior"><Flame className="w-5 h-5 text-fire-orange" /> Viral video campaigns</li>
            </ul>
            <div className="mt-6 text-center">
              <span className="font-warrior text-lg text-sparta-gold">Suggest your meme campaign in our Discord!</span>
            </div>
          </motion.div>
        </div>
        {/* Social Proof */}
        <div className="mt-12 text-center">
          <div className="flex flex-wrap justify-center gap-6 items-center">
            <Twitter className="w-8 h-8 text-sparta-gold" />
            <Megaphone className="w-8 h-8 text-fire-orange" />
            <Users className="w-8 h-8 text-sparta-bronze" />
            <Zap className="w-8 h-8 text-sparta-gold" />
          </div>
          <p className="font-warrior text-lg text-white mt-4">More partners and influencers to be revealed after the gates open...</p>
        </div>
      </div>
    </section>
  )
}

export default MarketingSection 
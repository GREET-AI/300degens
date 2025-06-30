'use client'

import { motion } from 'framer-motion'
import { Map, Flag, Flame, Users, Trophy } from 'lucide-react'

const phases = [
  {
    icon: Users,
    title: 'Assemble the 300',
    description: 'Gather 300 degens, each investing 1 SOL. The phalanx forms, the legend begins.',
  },
  {
    icon: Flag,
    title: 'Launch on PumpFun',
    description: 'The 300 SPARTA coin launches. Only the bravest will join the ranks.',
  },
  {
    icon: Flame,
    title: 'Unlock the Gates of Fire',
    description: 'When 300 warriors are assembled, 100 SOL is unleashed for marketing. The world will know our name.',
  },
  {
    icon: Trophy,
    title: 'Conquer the Crypto World',
    description: 'With an unbreakable floor and legendary memes, 300 SPARTA rises to glory.',
  },
]

const RoadmapSection = () => (
  <section id="roadmap" className="py-20 bg-gradient-to-b from-sparta-dark/95 to-sparta-dark relative overflow-hidden">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl md:text-6xl font-sparta font-bold text-sparta-gold mb-6">
          THE BATTLE PLAN
        </h2>
        <p className="text-xl md:text-2xl font-warrior text-white max-w-2xl mx-auto">
          Our roadmap is a battle map. Each phase is a new gate to conquer. THIS IS SPARTA!
        </p>
      </motion.div>
      <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0">
        {phases.map((phase, idx) => (
          <motion.div
            key={phase.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: idx * 0.1 }}
            className="flex flex-col items-center text-center bg-sparta-dark/60 border border-sparta-bronze rounded-xl p-6 shadow-lg hover:border-sparta-gold transition-all duration-300 w-full md:w-1/4 mx-2"
          >
            <div className="w-16 h-16 flex items-center justify-center bg-sparta-gold/10 rounded-full mb-4">
              <phase.icon className="w-8 h-8 text-sparta-gold" />
            </div>
            <h3 className="text-2xl font-sparta font-bold text-sparta-gold mb-2">{phase.title}</h3>
            <p className="text-lg font-warrior text-white">{phase.description}</p>
          </motion.div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Map className="w-12 h-12 mx-auto text-sparta-bronze animate-float" />
        <p className="font-warrior text-lg text-sparta-gold mt-2">The journey is just beginning...</p>
      </div>
    </div>
  </section>
)

export default RoadmapSection 
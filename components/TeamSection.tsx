'use client'

import { motion } from 'framer-motion'
import { User, Shield, Zap, Smile, Eye } from 'lucide-react'

const team = [
  {
    icon: Shield,
    name: 'The Strategist',
    role: 'Lead Dev & Tactician',
    funFact: 'Can recite the entire "THIS IS SPARTA" speech from memory.',
    quote: 'The best defense is a legendary meme.',
  },
  {
    icon: Zap,
    name: 'The Meme Lord',
    role: 'Head of Memes',
    funFact: 'Once made a meme that got 10k retweets in 1 hour.',
    quote: 'A meme a day keeps the bears away.',
  },
  {
    icon: Smile,
    name: 'The Community Builder',
    role: 'Social & Partnerships',
    funFact: 'Can rally a Discord army in under 5 minutes.',
    quote: 'United we stand, divided we fall.',
  },
  {
    icon: Eye,
    name: 'The Watcher',
    role: 'Security & Transparency',
    funFact: 'Sleeps with one eye open (for bots and FUD).',
    quote: 'Trust, but verify. Then verify again.',
  },
]

const TeamSection = () => (
  <section id="team" className="py-20 bg-gradient-to-b from-sparta-dark to-sparta-dark/95 relative overflow-hidden">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl md:text-6xl font-sparta font-bold text-sparta-gold mb-6">
          THE IMMORTALS
        </h2>
        <p className="text-xl md:text-2xl font-warrior text-white max-w-2xl mx-auto">
          Our team is a band of anonymous Spartans, each with a unique skill. We fight for the meme, the floor, and the community.
        </p>
      </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {team.map((member, idx) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: idx * 0.1 }}
            className="bg-sparta-dark/60 border border-sparta-bronze rounded-xl p-6 shadow-lg hover:border-sparta-gold transition-all duration-300 group text-center"
          >
            <div className="w-16 h-16 mx-auto bg-sparta-gold/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mb-4">
              <member.icon className="w-8 h-8 text-sparta-gold" />
            </div>
            <h3 className="text-xl font-sparta font-bold text-white mb-1">{member.name}</h3>
            <p className="text-sparta-gold font-warrior mb-2">{member.role}</p>
            <div className="bg-sparta-bronze/10 rounded-lg p-2 mb-2">
              <span className="text-sm text-sparta-bronze font-warrior">Fun Fact: {member.funFact}</span>
            </div>
            <div className="italic text-white font-warrior text-sm">"{member.quote}"</div>
          </motion.div>
        ))}
      </div>
      <div className="mt-10 text-center">
        <div className="inline-block bg-sparta-bronze/20 border border-sparta-bronze rounded-lg px-6 py-4">
          <span className="font-warrior text-lg text-sparta-gold">Why anonymous? </span>
          <span className="font-warrior text-white">We let the meme and the mission speak for us. Spartans fight as one.</span>
        </div>
      </div>
    </div>
  </section>
)

export default TeamSection 
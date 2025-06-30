'use client'

import { motion } from 'framer-motion'
import { Shield, Wallet, ArrowRight, Coins, CheckCircle } from 'lucide-react'

const steps = [
  {
    icon: Wallet,
    title: 'Get a Solana Wallet',
    description: 'Download a trusted Solana wallet like Phantom or Solflare. Secure your seed phrase like a true Spartan!',
  },
  {
    icon: Coins,
    title: 'Buy SOL',
    description: 'Purchase Solana (SOL) from a major exchange and transfer it to your wallet. 1 SOL is your shield in this battle.',
  },
  {
    icon: Shield,
    title: 'Wait for PumpFun Launch',
    description: 'Stay alert! The 300 SPARTA coin will launch on PumpFun. Only 300 warriors can join the phalanx.',
  },
  {
    icon: CheckCircle,
    title: 'Invest Exactly 1 SOL',
    description: 'Contribute exactly 1 SOL to become an immortal Spartan. No more, no less. This is the code of the phalanx.',
  },
]

const HowToBuySection = () => (
  <section id="how-to-buy" className="py-20 bg-gradient-to-b from-sparta-dark to-sparta-dark/95 relative overflow-hidden">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl md:text-6xl font-sparta font-bold text-sparta-gold mb-6">
          HOW TO JOIN THE PHALANX
        </h2>
        <p className="text-xl md:text-2xl font-warrior text-white max-w-2xl mx-auto">
          Only 300 warriors will be chosen. Follow these steps to become immortal.
        </p>
      </motion.div>
      <div className="flex flex-col gap-8">
        {steps.map((step, idx) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: idx * 0.1 }}
            className="flex items-center gap-6 bg-sparta-dark/60 border border-sparta-bronze rounded-xl p-6 shadow-lg hover:border-sparta-gold transition-all duration-300"
          >
            <div className="w-16 h-16 flex items-center justify-center bg-sparta-gold/10 rounded-full">
              <step.icon className="w-8 h-8 text-sparta-gold" />
            </div>
            <div>
              <h3 className="text-2xl font-sparta font-bold text-sparta-gold mb-1">{step.title}</h3>
              <p className="text-lg font-warrior text-white">{step.description}</p>
            </div>
            {idx < steps.length - 1 && (
              <ArrowRight className="w-8 h-8 text-sparta-bronze mx-4 hidden md:block" />
            )}
          </motion.div>
        ))}
      </div>
      <div className="mt-10 text-center">
        <div className="inline-block bg-sparta-bronze/20 border border-sparta-bronze rounded-lg px-6 py-4">
          <span className="font-warrior text-lg text-sparta-gold">Why only 1 SOL? </span>
          <span className="font-warrior text-white">To ensure every warrior is equal and the floor is unbreakable. No whales. No weak hands. Only Spartans.</span>
        </div>
      </div>
    </div>
  </section>
)

export default HowToBuySection 
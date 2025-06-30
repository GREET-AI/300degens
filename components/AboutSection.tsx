'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Shield, Sword, Users, Target, Zap } from 'lucide-react'

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const features = [
    {
      icon: Shield,
      title: "300 Warriors",
      description: "Only 300 degens can join. Each must invest 1 Solana to maintain the floor price.",
      color: "text-sparta-gold"
    },
    {
      icon: Target,
      title: "Floor Defense",
      description: "The collective power of 300 warriors creates an unbreakable floor price.",
      color: "text-sparta-bronze"
    },
    {
      icon: Zap,
      title: "Marketing Unlock",
      description: "Once 300 warriors are assembled, 100 Solana is unlocked for epic marketing campaigns.",
      color: "text-fire-orange"
    },
    {
      icon: Users,
      title: "Community Strength",
      description: "United we stand, divided we fall. The strongest community in crypto.",
      color: "text-sparta-red"
    }
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-sparta-dark to-sparta-dark/95 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-0 left-0 w-96 h-96 bg-sparta-red/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-0 right-0 w-96 h-96 bg-sparta-gold/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.1, 0.3]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-5xl md:text-6xl font-sparta font-bold text-sparta-gold mb-6 glitch"
            data-text="THE LEGEND OF 300"
            animate={inView ? {
              textShadow: [
                "0 0 10px #FFD700, 0 0 20px #FFD700, 0 0 30px #FFD700",
                "0 0 20px #FFD700, 0 0 30px #FFD700, 0 0 40px #FFD700",
                "0 0 10px #FFD700, 0 0 20px #FFD700, 0 0 30px #FFD700"
              ]
            } : {}}
            transition={{ duration: 2, repeat: Infinity }}
          >
            THE LEGEND OF 300
          </motion.h2>
          <motion.p 
            className="text-xl md:text-2xl font-warrior text-white max-w-4xl mx-auto text-reveal"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <span style={{ animationDelay: '0.5s' }}>In the ancient lands of PumpFun, a new legend emerges.</span>{' '}
            <span style={{ animationDelay: '0.7s' }}>300 warriors, each with 1 Solana,</span>{' '}
            <span style={{ animationDelay: '0.9s' }}>stand united against the forces of market manipulation.</span>{' '}
            <span style={{ animationDelay: '1.1s' }}>This is not just a memecoin -</span>{' '}
            <span style={{ animationDelay: '1.3s' }}>this is SPARTA!</span>
          </motion.p>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-sparta-dark/50 backdrop-blur-sm border border-sparta-bronze rounded-2xl p-8 md:p-12 mb-16 sparta-card epic-glow hover-lift"
        >
          <div className="text-center space-y-6">
            <motion.h3 
              className="text-3xl md:text-4xl font-sparta font-bold text-sparta-gold"
              animate={inView ? { scale: [1, 1.05, 1] } : {}}
              transition={{ duration: 2, repeat: Infinity }}
            >
              OUR MISSION
            </motion.h3>
            <motion.p 
              className="text-lg md:text-xl font-warrior text-white leading-relaxed"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
            >
              "We are 300 warriors strong. Each of us invests 1 Solana to create an unbreakable floor. 
              When all 300 warriors are assembled, the gates of marketing fire will open, releasing 
              100 Solana for epic campaigns. Together, we will conquer the crypto world!"
            </motion.p>
            <motion.div 
              className="flex justify-center"
              animate={inView ? { rotate: [0, 10, -10, 0] } : {}}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            >
              <Sword className="w-8 h-8 text-sparta-bronze" />
            </motion.div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30, rotateY: -15 }}
              animate={inView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className="bg-sparta-dark/30 backdrop-blur-sm border border-sparta-bronze/50 rounded-xl p-6 hover:border-sparta-gold transition-all duration-300 group sparta-card"
            >
              <div className="text-center space-y-4">
                <motion.div 
                  className={`w-16 h-16 mx-auto bg-sparta-dark/50 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 epic-glow`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                </motion.div>
                <motion.h4 
                  className="text-xl font-sparta font-bold text-white"
                  whileHover={{ color: '#FFD700' }}
                >
                  {feature.title}
                </motion.h4>
                <p className="text-sm font-warrior text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Battle Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            { value: '300', label: 'Warriors Needed', color: 'text-sparta-gold' },
            { value: '1 SOL', label: 'Per Warrior', color: 'text-sparta-bronze' },
            { value: '100 SOL', label: 'Marketing Unlock', color: 'text-fire-orange' }
          ].map((stat, index) => (
            <motion.div 
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.2 }}
              whileHover={{ scale: 1.1 }}
            >
              <motion.div 
                className={`text-4xl md:text-5xl font-sparta font-bold mb-2 ${stat.color} epic-glow`}
                animate={inView ? { 
                  textShadow: [
                    `0 0 10px ${stat.color === 'text-sparta-gold' ? '#FFD700' : stat.color === 'text-sparta-bronze' ? '#CD7F32' : '#FF4500'}`,
                    `0 0 20px ${stat.color === 'text-sparta-gold' ? '#FFD700' : stat.color === 'text-sparta-bronze' ? '#CD7F32' : '#FF4500'}`,
                    `0 0 10px ${stat.color === 'text-sparta-gold' ? '#FFD700' : stat.color === 'text-sparta-bronze' ? '#CD7F32' : '#FF4500'}`
                  ]
                } : {}}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
              >
                {stat.value}
              </motion.div>
              <div className="text-lg font-warrior text-white">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection 
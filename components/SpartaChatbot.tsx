'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Shield, Sword, Users, Target } from 'lucide-react'

interface Message {
  id: string
  text: string
  isUser: boolean
  timestamp: Date
}

const SpartaChatbot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hail, warrior! I am Leonidas, your guide to the 300 SPARTA memecoin. Ask me anything about our legendary mission!",
      isUser: false,
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const spartaResponses = {
    'how to buy': {
      text: "To join our phalanx, you must:\n1. Get a Solana wallet\n2. Buy SOL from an exchange\n3. Wait for our PumpFun launch\n4. Invest exactly 1 SOL\n5. Become immortal!",
      icon: Shield
    },
    'what is 300 sparta': {
      text: "300 SPARTA is a legendary memecoin where 300 warriors each invest 1 Solana to create an unbreakable floor. When all warriors are assembled, 100 SOL is unlocked for epic marketing campaigns!",
      icon: Sword
    },
    'roadmap': {
      text: "Our battle plan:\nPhase 1: Gather 300 warriors\nPhase 2: Launch on PumpFun\nPhase 3: Unlock 100 SOL marketing\nPhase 4: Conquer the crypto world\nPhase 5: THIS IS SPARTA!",
      icon: Target
    },
    'team': {
      text: "Our team consists of legendary warriors, each with their own expertise. We are united by one goal: to make 300 SPARTA the most powerful memecoin in the crypto realm!",
      icon: Users
    },
    'marketing': {
      text: "Once 300 warriors are assembled, we unlock 100 Solana for marketing. This will include:\n- Social media campaigns\n- Influencer partnerships\n- Community events\n- Epic meme contests!",
      icon: Shield
    },
    'floor price': {
      text: "The floor price is protected by the collective power of 300 warriors, each holding 1 SOL. This creates an unbreakable defense against market manipulation!",
      icon: Target
    },
    'pumpfun': {
      text: "PumpFun is our chosen battlefield - the perfect platform for our 300 warriors to launch and conquer the memecoin space!",
      icon: Sword
    }
  }

  const getSpartaResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase()
    
    for (const [key, response] of Object.entries(spartaResponses)) {
      if (lowerMessage.includes(key)) {
        return response.text
      }
    }
    
    return "Ah, a worthy question! But I need more specific information. Ask me about how to buy, what is 300 SPARTA, roadmap, team, marketing, floor price, or PumpFun!"
  }

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isUser: true,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)

    // Simulate typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getSpartaResponse(inputValue),
        isUser: false,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botResponse])
      setIsTyping(false)
    }, 1500)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Chat Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-sparta-gold text-sparta-dark p-4 rounded-full shadow-lg hover:bg-sparta-bronze transition-colors duration-200 z-40"
      >
        <MessageCircle className="w-6 h-6" />
      </motion.button>

      {/* Chat Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-end justify-end p-4"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, y: 100 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 100 }}
              className="bg-sparta-dark border border-sparta-bronze rounded-t-2xl w-full max-w-md h-96 flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="bg-sparta-gold text-sparta-dark p-4 rounded-t-2xl flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5" />
                  <span className="font-sparta font-bold">Leonidas Bot</span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="hover:text-sparta-bronze transition-colors duration-200"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs p-3 rounded-lg ${
                        message.isUser
                          ? 'bg-sparta-gold text-sparta-dark'
                          : 'bg-sparta-dark/50 border border-sparta-bronze text-white'
                      }`}
                    >
                      <p className="text-sm whitespace-pre-line">{message.text}</p>
                      <p className="text-xs opacity-70 mt-1">
                        {message.timestamp.toLocaleTimeString()}
                      </p>
                    </div>
                  </motion.div>
                ))}
                
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex justify-start"
                  >
                    <div className="bg-sparta-dark/50 border border-sparta-bronze text-white p-3 rounded-lg">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-sparta-gold rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-sparta-gold rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-sparta-gold rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </motion.div>
                )}
                
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="p-4 border-t border-sparta-bronze">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask Leonidas anything..."
                    className="flex-1 bg-sparta-dark/50 border border-sparta-bronze rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-sparta-gold"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleSendMessage}
                    disabled={!inputValue.trim()}
                    className="bg-sparta-gold text-sparta-dark p-2 rounded-lg hover:bg-sparta-bronze transition-colors duration-200 disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default SpartaChatbot 
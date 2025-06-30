/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        sparta: {
          gold: '#8B4513',
          bronze: '#A0522D',
          red: '#8B0000',
          dark: '#1a1a1a',
          stone: '#696969',
        },
        fire: {
          orange: '#FF4500',
          yellow: '#D2691E',
          red: '#DC143C',
        }
      },
      fontFamily: {
        sparta: ['Cinzel', 'serif'],
        warrior: ['Alegreya SC', 'serif'],
        dalek: ['Dalek', 'Cinzel', 'serif'],
      },
      animation: {
        'spear-rain': 'spear-rain 3s linear infinite',
        'fire-burn': 'fire-burn 2s ease-in-out infinite',
        'shield-bash': 'shield-bash 0.5s ease-in-out',
      },
      keyframes: {
        'spear-rain': {
          '0%': { transform: 'translateY(-100vh) rotate(0deg)' },
          '100%': { transform: 'translateY(100vh) rotate(360deg)' },
        },
        'fire-burn': {
          '0%, 100%': { opacity: 0.8, transform: 'scale(1)' },
          '50%': { opacity: 1, transform: 'scale(1.05)' },
        },
        'shield-bash': {
          '0%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(-10px)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
} 
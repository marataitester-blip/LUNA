import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        luna: {
          black: '#050505',      // Deepest Black (Void)
          slate: '#1A1A1A',      // Dark Surface
          gold: '#D4AF37',       // Primary Gold
          pale: '#F4E4BC',       // Text/Pale Gold
          accent: '#7B61FF',     // Cosmic Dust (Subtle purple accent for gradients)
        }
      },
      fontFamily: {
        serif: ['var(--font-cinzel)', 'serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'stardust': "url('https://www.transparenttextures.com/patterns/stardust.png')", // Subtle noise texture
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'glow': 'glow 3s ease-in-out infinite alternate',
        'slide-up': 'slideUp 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(212, 175, 55, 0.1)' },
          '100%': { boxShadow: '0 0 20px rgba(212, 175, 55, 0.3), 0 0 10px rgba(212, 175, 55, 0.1)' },
        }
      }
    },
  },
  plugins: [],
};
export default config;
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: {
          950: '#020408',
          900: '#050a14',
          850: '#081021',
          800: '#0c1830',
          700: '#132448',
          600: '#1d3567',
        },
        silk: {
          gold: '#f59e0b',
          amber: '#fbbf24',
          glow: '#fde047',
          dark: '#b45309',
        },
        synth: {
          cyan: '#00f0ff',
          neon: '#38bdf8',
          deep: '#0284c7',
        },
        bio: {
          emerald: '#10b981',
          mint: '#34d399',
          dark: '#047857',
        }
      },
      fontFamily: {
        display: ['Space Grotesk', 'Syne', 'Inter', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace']
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { opacity: '0.4' },
          '100%': { opacity: '0.9' },
        }
      }
    },
  },
  plugins: [],
}

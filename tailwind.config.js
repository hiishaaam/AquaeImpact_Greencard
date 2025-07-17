/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e8f5f2',
          100: '#d1ebe5',
          200: '#a3d7cb',
          300: '#75c3b1',
          400: '#47af97',
          500: '#1e4632',
          600: '#1a3d2b',
          700: '#163424',
          800: '#122b1d',
          900: '#0b453b',
        },
        accent: {
          50: '#97edd2',
          100: '#8ce8c8',
          200: '#77e0b8',
          300: '#62d8a8',
          400: '#4dd098',
          500: '#3a7d5d',
          600: '#2e644a',
          700: '#224b37',
          800: '#163224',
          900: '#0a1911',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(151, 237, 210, 0.5)' },
          '100%': { boxShadow: '0 0 30px rgba(151, 237, 210, 0.8)' },
        }
      }
    },
  },
  plugins: [],
}


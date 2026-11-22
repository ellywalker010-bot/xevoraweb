import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: {
            DEFAULT: '#F97316',
            400: '#FB923C',
            500: '#F97316',
            600: '#EA580C',
          },
          yellow: {
            DEFAULT: '#FACC15',
            300: '#FDE047',
            400: '#FACC15',
          },
        },
        ink: {
          950: '#0A0A0B',
          900: '#111114',
          800: '#1A1A1F',
          700: '#26262C',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-inter-tight)', 'system-ui', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      maxWidth: {
        container: '80rem', // 1280px
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 400ms ease-out both',
      },
    },
  },
  plugins: [],
};

export default config;
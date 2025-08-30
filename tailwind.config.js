/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: 'rgb(var(--brand))',
          muted: 'rgb(var(--muted))',
        },
        bg: 'rgb(var(--bg))',
      },
      animation: {
        'fade-in': 'fade-in 0.6s ease-in-out',
        'marquee': 'marquee 30s linear infinite',
        'pulse-ring': 'pulseRing 1.8s infinite',
      },
      keyframes: {
        'fade-in': {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        'marquee': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-33.333%)' },
        },
        'pulseRing': {
          '0%': { boxShadow: '0 0 0 0 rgba(109, 0, 0, 0.6)' },
          '70%': { boxShadow: '0 0 0 20px rgba(109, 0, 0, 0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(109, 0, 0, 0)' },
        },
      },
    },
  },
  plugins: [],
};

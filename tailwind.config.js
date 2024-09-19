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
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        brandPurple: 'var(--brandPurple)',
        brandOrange: 'var(--brandOrange)',
        darkPurple: 'var(--darkPurple)',
        brandBlack: 'var(--brandBlack)',
      },
      fontFamily: {
        brandFont: ['Bree Serif', 'serif'],
      },
    },
  },
  plugins: [],
};

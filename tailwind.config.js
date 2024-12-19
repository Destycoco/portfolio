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
        brandCream: 'var(--brandCream)',
        brandOrange: 'var(--brandOrange)',
        brandBlue: 'var(--brandBlue)',
        brandBlack: 'var(--brandBlack)',
      },
      fontFamily: {
        brandFont: ['Bree Serif', 'serif'],
        brandFont2: ['Lobster Two', 'serif'],
        brandFont3: ['IM Fell Great Primer', 'serif'],
      },
    },
  },
  plugins: [],
};

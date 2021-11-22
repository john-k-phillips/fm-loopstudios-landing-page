module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        alata: ['Alata', 'sans-serif'],
        josefin: ['Josefin Sans', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern-desktop': "url('/src/images/desktop/image-hero.jpg')",
        'hero-pattern-mobile': "url('/src/images/mobile/image-hero.jpg')",

        'interactive-mobile': "url('/src/images/mobile/image-interactive.jpg')",
        'interactive-desktop':
          "url('/src/images/desktop/image-interactive.jpg')",
      },
      fontSize: {
        '5xl': '2.5rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

module.exports = {
  purge: [],
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

        // Gallary Mobile Images
        'curiosity-mobile': "url('/src/images/mobile/image-curiosity.jpg')",
        'fisheye-mobile': "url('/src/images/mobile/image-fisheye.jpg')",
        'soccer-team-mobile': "url('/src/images/mobile/image-soccer-team.jpg')",
        'deep-earth-mobile': "url('/src/images/mobile/image-deep-earth.jpg')",
        'grid-mobile': "url('/src/images/mobile/image-grid.jpg')",
        'night-arcade-mobile':
          "url('/src/images/mobile/image-night-arcade.jpg')",
        'from-above-mobile': "url('/src/images/mobile/image-from-above.jpg')",
        'pocket-borealis-mobile':
          "url('/src/images/mobile/image-pocket-borealis.jpg')",

        // Gallary Desktop Images
        'curiosity-desktop': "url('/src/images/desktop/image-curiosity.jpg')",
        'fisheye-desktop': "url('/src/images/desktop/image-fisheye.jpg')",
        'soccer-team-desktop':
          "url('/src/images/desktop/image-soccer-team.jpg')",
        'deep-earth-desktop': "url('/src/images/desktop/image-deep-earth.jpg')",
        'grid-desktop': "url('/src/images/desktop/image-grid.jpg')",
        'night-arcade-desktop':
          "url('/src/images/desktop/image-night-arcade.jpg')",
        'from-above-desktop': "url('/src/images/desktop/image-from-above.jpg')",
        'pocket-borealis-desktop':
          "url('/src/images/desktop/image-pocket-borealis.jpg')",
      },
      fontSize: {
        '5xl': '2.8rem',
      },
      height: {
        xxl: '500px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

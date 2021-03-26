module.exports = {
  css: {
    loaderOptions: {
      postcss: {
        plugins: () => [
          require('tailwindcss'),
          require('./tailwind.config.js'),
          require('autoprefixer'),
        ],
      },
    },
  },
  pwa: {
    name: 'Marvin',
    themeColor: '#44337a',
    manifestOptions: {
      background_color: '#44337a',
    },
  },
};

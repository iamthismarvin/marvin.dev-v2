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
      scss: {
        prependData: `@import "@/assets/styles/main.scss";`,
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

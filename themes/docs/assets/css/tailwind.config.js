module.exports = {
  theme: {
    extend: {},
    backgroundColor: theme => ({
      ...theme('colors'),
      'dark': '#212224',
    }),
  },
  variants: {},
  plugins: [
      require('@tailwindcss/ui'),
  ]
};
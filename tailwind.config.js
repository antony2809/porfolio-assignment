const theme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: {
    enabled: true,
    content: ['./src/**/*.{html,ts}'],
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...theme.fontFamily.sans],
      },
      colors: {
        primary: '#05ab53',
      },
    },
  },
};

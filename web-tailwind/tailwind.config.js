module.exports = {
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'body-pattern': "url('../img/pattern.png')",
      }),
      colors: {
        'azul-claro': '#37bcf9',
        'azul-obscuro': '#0370b9',
      },
      animation: {
        'spin-low': 'spin 2s linear infinite',
      },
    },
  },
  variants: {
    animation: ['responsive', 'hover', 'group-hover'],
  },
};

module.exports = {
  content: ['./*.html', './client/**/*.jsx'],
  media: false,
  theme: {
    screens: {
      'xs': '340px',
      // => @media (min-width: 340px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        puce: '#d11d03',
        green: '#8adb55',
        darkGreen: '#17a17b',
        lightGreen: '#b8dfd8',
        orange: '#e5890a',
        red: '#d11d05',
        black: '#363636',
        darkBlue: '#172450',
        blue: '#99ddcc',
      },
      fontFamily: {
        serif: ['"Roboto Slab"', 'serif'],
        sans: ['Quicksand', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

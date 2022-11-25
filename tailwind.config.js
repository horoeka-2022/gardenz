module.exports = {
  content: ['./*.html', './client/**/*.jsx'],
  media: false,
  theme: {
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
      height: {
        '1/7': '14.2857143%',
        '2/7': '28.5714286%',
        '3/7': '42.8571429%',
        '4/7': '57.1428571%',
        '5/7': '71.4285714%',
        '6/7': '85.7142857%',
      },
      width: {
        '1/7': '14.2857143%',
        '2/7': '28.5714286%',
        '3/7': '42.8571429%',
        '4/7': '57.1428571%',
        '5/7': '71.4285714%',
        '6/7': '85.7142857%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

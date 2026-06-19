/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './index2.html',
    './index3.html',
    './**/*.html',
    './js/**/*.js'
  ],
  theme: {
    container: {
      center: true,
      maxWidth: '80rem',
    },
    screens: {
      'media-maxi': {'max': '1172px'},
      'media-huge': {'max': '1006px'},
      'media-large': {'max': '824px'},
      'media-sweep': {'max': '768px'},
      'media-touch': {'max':'605px'},
      'media-little': {'max': '526px'},
      'media-smaller': {'max': '443px'},
    },
    extend: {
      backgroundImage: {
        'body-pattern': 'url("/img/back1.webp")',
        'main-color': 'rgba(100, 94, 93, 0.5)',
        'tablet-img': 'url("/img/back2.webp")',
        'mobile-img': 'url("/img/back3.webp")',
      },
      boxShadow: {
        'popshadow': '0 0 1rem rgb(0, 0, 0)',
        'yellowShadow': '0 0 10px 4px rgba(253, 218, 25, 0.5)',
      }
    },
    colors: {
      trans: 'transparent',
      basic: '#B1A5A2',
      black: '#252221',
      white: '#ffffff',
      fonta: 'rgb(100, 95, 94)',
      light: 'rgba(70, 64, 62, 0.7)',
      dark: 'rgba(25, 16, 6, 0.7)',
      code: 'rgba(249, 160, 66, 1)',
      yellow: 'rgba(253, 239, 147, 0.5)',
      grey: 'rgba(102, 101, 101, 0.5)',
      stray: 'rgba(253, 218, 25, 1)',
      orange: 'rgba(253, 144, 14)',
      lightly: 'rgba(241, 231, 221, 0.7)',
  },
  plugins: [],
  }
}

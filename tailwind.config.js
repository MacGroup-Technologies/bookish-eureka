export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        white: '#fffcfc',
        black: '#1e202c',
        link: '#1847ED',
        primary: '#001E87',
        'primary-10': '#F0F2F6',
        'primary-light': '#1847ED',
        slate: '#F0F2F6',
        grey: '#5B6178',
        red: '#D2092D'
      },
      width: {
        page: '1300px'
      },
      borderRadius: {
        DEFAULT: '24px'
      },
      fontFamily: {
        sans: ['Helvetica Neue Regular', 'sans-serif']
      }
    }
  },
  plugins: [require('tailwind-scrollbar')]
}
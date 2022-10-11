module.exports = {
  content: [
    './public/index.html',
    './src/**/*.{html,js}',
  ],
  purge: ['./src/components/Main.{js,jsx,ts,tsx}', './src/components/Nav.{js,jsx,ts,tsx}', './src/components/Services.{js,jsx,ts,tsx}','./src/components/Footer.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
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
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

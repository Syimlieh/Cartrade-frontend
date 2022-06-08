module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xs': '520px',

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '760px',

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      
      boxShadow: {
        '3xl': '13px 9px 14px -10px rgba(0,0,0,0.1), -13px -9px 14px -10px rgba(0,0,0,0.1)',
        '4xl': "inset 0 0 0 3px #15424a, inset 0 0 0 6px #fff"
      },
      fontFamily: {
        slabo: ["Slabo\\27px", "serif"],
        exo: ["Exo\\2", "sans-serif"],
      },
      
    }
  },
  plugins: [],
}

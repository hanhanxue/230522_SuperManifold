/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'sm': '640px', // => @media (min-width: 640px) { ... }
        'md': '768px', // => @media (min-width: 768px) { ... }
        'lg': '1024px', // => @media (min-width: 1024px) { ... }
        'xl': '1920px', // => @media (min-width: 1280px) { ... }
        '2xl': '2440px', // => @media (min-width: 1280px) { ... }
      },
      // backgroundImage: {
      //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      //   'gradient-conic':
      //     'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      // },

      fontFamily: {
        sans: ['var(--font-nmtl)']
      },


      fontSize: {
        'xl': ['1.375rem', {
          lineHeight: '1.75rem',
          letterSpacing: '0em',
          fontWeight: '400',
        }],
        // '2xl': ['1.5rem', {
        //   lineHeight: '2rem',
        //   letterSpacing: '-0.01em',
        //   fontWeight: '500',
        // }],
        // '3xl': ['1.875rem', {
        //   lineHeight: '2.25rem',
        //   letterSpacing: '-0.02em',
        //   fontWeight: '700',
        // }],
        '4xl': ['2.5rem', {
          lineHeight: '3rem',
          letterSpacing: '0em',
          fontWeight: '400',
        }],
      },

      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'jet-stream': {
          DEFAULT: '#C1D8D3',
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#FFFFFF',
          300: '#F3F8F7',
          400: '#DAE8E5',
          500: '#C1D8D3',
          600: '#9FC2BB',
          700: '#7CADA2',
          800: '#5D9488',
          900: '#477168',
          950: '#3C6058'
        },
        'cinnabar': {
          DEFAULT: '#E84332',
          50: '#FBDAD7',
          100: '#F8CAC5',
          200: '#F4A8A0',
          300: '#F0867B',
          400: '#EC6557',
          500: '#E84332',
          600: '#CB2817',
          700: '#991E11',
          800: '#66140B',
          900: '#340A06',
          950: '#1B0503'
        },

        
      }




    },
  },
  plugins: [],
}

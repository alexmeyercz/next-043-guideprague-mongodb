import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FCFAF8',
          100: '#F5F1EA',
          200: '#EBE3D6',
          300: '#E1D5C1',
          400: '#D5C4AA',
          500: '#C8B28F',
          600: '#BCA176',
          700: '#AD8C57',
          800: '#8C7145',
          900: '#675332',
          950: '#4B3D25',
        },
        success: {
          50: '#F9F9F5',
          100: '#F0F0E5',
          200: '#E2E0CB',
          300: '#D1CFAD',
          400: '#BFBC8D',
          500: '#A9A566',
          600: '#89864D',
          700: '#797644',
          800: '#626037',
          900: '#484628',
          950: '#31301C',
        },
        error: {
          50: '#F9F2F1',
          100: '#F4E8E6',
          200: '#E8CDCA',
          300: '#D9AFAA',
          400: '#C5837C',
          500: '#9C4D45',
          600: '#8A453D',
          700: '#7C3E37',
          800: '#63312C',
          900: '#4A2521',
          950: '#271311',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config

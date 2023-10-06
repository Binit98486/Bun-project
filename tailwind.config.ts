import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        xs: "375px",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        "primary-red": "#DC143C",
        "primary-gray": "rgb(24, 26, 27)",
        "text-blue": "#000033",
        "text-peruvian": "#003333",
        "currency": "#3CCF4E",
        "icon": "#071952"
      },
      fontFamily: {
        poppins: ["Poppins"],
        dyan: ["DynaPuff"],
        allura: ["Allura"],
        libre: ['Libre+Baskerville'],
        calligraphy: ['Calligraffitti', 'cursive'],
        script: ['Rouge Script', 'cursive'],
        lobster: ['Lobster', 'cursive'],
        mouiser: ['Monsieur La Doulaise', 'cursive']
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
export default config

import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'Figtree': ['Figtree', 'sans-serif']
      },
      colors: {
        'myblue': '#1E0066',
        'turquoise': '#9DF1CD',
        'offwhite': '#F0F0E1',
        'purple': '#971CB5',
      },
    },
  },
  plugins: [],
}
export default config

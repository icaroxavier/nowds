import { colors } from '@nowds/tokens'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ...colors,
      },
      fontFamily: {
        body: ['Space Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

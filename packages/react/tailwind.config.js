import { colors, gradients } from '@nowds/tokens'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: colors.primary,
      },
    },
  },
  plugins: [],
}

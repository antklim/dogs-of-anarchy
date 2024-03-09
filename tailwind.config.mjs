/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter Variable"', 'Inter', ...defaultTheme.fontFamily.sans],
        mono: ['"Sometype Mono"', 'monospace'],
        display: ['"Bungee Shade"', 'system-ui'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

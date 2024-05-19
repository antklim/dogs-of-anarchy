/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
    },
    extend: {
      fontFamily: {
        sans: ['"Inter Variable"', 'Inter', ...defaultTheme.fontFamily.sans],
        mono: ['"Sometype Mono"', 'monospace'],
        display: ['"Bungee Shade"', 'system-ui'],
        menu: ['Bungee', 'system-ui'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

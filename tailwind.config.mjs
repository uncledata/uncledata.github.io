/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'bg-light': 'var(--color-bg-light)',
        'bg-dark': 'var(--color-bg-dark)',
        'accent-peach': 'var(--color-accent-peach)',
        'accent-coral': 'var(--color-accent-coral)',
        'accent-coral-deep': 'var(--color-accent-coral-deep)',
        'accent-blue': 'var(--color-accent-blue)',
      },
      fontFamily: {
        heading: 'var(--font-heading)',
        body: 'var(--font-body)',
      },
    },
  },
  plugins: [],
};

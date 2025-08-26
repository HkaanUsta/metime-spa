/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': 'var(--primary-color)',
        'secondary-coral': 'var(--secondary-coral)',
        'secondary-lavender': 'var(--secondary-lavender)',
        'neutral-light': 'var(--neutral-light)',
        'neutral-dark': 'var(--neutral-dark)',
        'accent-yellow': 'var(--accent-yellow)',
      },
      backgroundColor: {
        'primary': 'var(--primary-color)',
        'secondary-coral': 'var(--secondary-coral)',
        'secondary-lavender': 'var(--secondary-lavender)',
        'neutral-light': 'var(--neutral-light)',
        'neutral-dark': 'var(--neutral-dark)',
        'accent-yellow': 'var(--accent-yellow)',
      },
      textColor: {
        'primary': 'var(--primary-color)',
        'secondary-coral': 'var(--secondary-coral)',
        'secondary-lavender': 'var(--secondary-lavender)',
        'neutral-light': 'var(--neutral-light)',
        'neutral-dark': 'var(--neutral-dark)',
        'accent-yellow': 'var(--accent-yellow)',
      },
      borderColor: {
        'primary': 'var(--primary-color)',
        'secondary-coral': 'var(--secondary-coral)',
        'secondary-lavender': 'var(--secondary-lavender)',
        'neutral-light': 'var(--neutral-light)',
        'neutral-dark': 'var(--neutral-dark)',
        'accent-yellow': 'var(--accent-yellow)',
      }
    },
  },
  plugins: [],
}

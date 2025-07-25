/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'ui-sans-serif',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI Variable Display"',
          '"Segoe UI"',
          'Helvetica',
          '"Apple Color Emoji"',
          'Arial',
          'sans-serif',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ],
      },
      colors: {
        'brand-teal': 'rgb(56, 242, 202)',
        'brand-gray': 'rgb(186, 186, 186)',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            '[contenteditable]:empty:before': {
              content: 'attr(data-placeholder)',
              color: theme('colors.gray.400'),
            },
          },
        },
      }),
    },
  },
  plugins: [],
};

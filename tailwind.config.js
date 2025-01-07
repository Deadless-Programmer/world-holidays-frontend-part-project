/** @type {import('tailwindcss').Config} */ 
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        zoomOutLeftToRight: {
          '0%': {
            transform: 'scale(1.2)', // Start zoomed in
            backgroundPosition: '0% 50%', // Start from the left
          },
          '100%': {
            transform: 'scale(1)', // End at normal size
            backgroundPosition: '100% 50%', // End at the right
          },
        },
      },
      animation: {
        zoomOutLeftToRight: 'zoomOutLeftToRight 10s ease-in-out infinite',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
};

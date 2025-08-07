/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
        display: ['"lemon-bird"', 'cursive'],
        lemon: ['"lemon-bird"', 'cursive'],
      },
      colors: {
        'kidslab-naranja': '#ff7f50',
        'kidslab-amarillo': '#ffcf33',
        'kidslab-celeste': '#3ed4e0',
        'kidslab-morado': '#8c5fc2',
      },
      animation: {
        'float-up': 'floatUp 6s ease-in-out infinite',
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        floatUp: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
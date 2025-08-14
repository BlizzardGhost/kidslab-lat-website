/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],          // Body (brandbook)
        display: ['"lemon-bird"', 'cursive'],    // Display
        lemon: ['"lemon-bird"', 'cursive'],      // Alias for convenience
      },
      colors: {
        // Brand palette — do not alter (brandbook)
        'kidslab-naranja': '#f08f15',
        'kidslab-amarillo': '#f5cc18',
        'kidslab-celeste': '#2784c0',
        'kidslab-morado': '#673589',
        'kidslab-rojo': '#c51b2e',
        'kidslab-gris': '#bababa',
      },
      animation: {
        'float-up': 'floatUp 6s ease-in-out infinite',
        marquee: 'marquee 25s linear infinite',
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
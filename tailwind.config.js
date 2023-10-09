/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'heroback': "url('/src/images/Landingimage.webp')"
      },
      width: {
        '350': '350px',
      },
      height: {
        '350': '350px',
      },
      
    }
  },
  plugins: [require('flowbite/plugin')],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        "NFTW": {
          white: "#E9E0FF",
          bg: "#06000F",
        },
        "NFTW-black": {
          50: "#E3D1FF",
          100: "#C39EFF",
          200: "#8B42FF",
          300: "#5600E0",
          400: "#330085",
          500: "#0E0025",
          600: "#0C001F",
          700: "#080014",
          800: "#06000F",
          900: "#020005",
          950: "#020005"
        },
        "NFTW-blue": {
          50: "#E9E0FF",
          100: "#D3C2FF",
          200: "#A480FF",
          300: "#7842FF",
          400: "#4800FF",
          500: "#3500BF",
          600: "#2B0099",
          700: "#210075",
          800: "#16004D",
          900: "#0C0029",
          950: "#060014"
        },
        "NFTW-lila": {
          50: "#F9E0FF",
          100: "#F2BDFF",
          200: "#E580FF",
          300: "#D83DFF",
          400: "#C800FA",
          500: "#9300B9",
          600: "#760094",
          700: "#5A0070",
          800: "#3D004D",
          900: "#1D0024",
          950: "#100014"
        },
        "NFTW-pink": {
          50: "#FFE0F6",
          100: "#FFC7EF",
          200: "#FF8ADE",
          300: "#FF52CE",
          400: "#FF1ABE",
          500: "#DD009F",
          600: "#B30080",
          700: "#85005F",
          800: "#57003E",
          900: "#2E0021",
          950: "#14000F"
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms')/* ({
      // Choose Only One Of The Following Strategies !!!
      strategy: 'base', // only generate global styles
      strategy: 'class', // only generate classes
    }), */
  ],
};
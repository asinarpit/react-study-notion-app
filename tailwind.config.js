/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "--brand-dark": "hsl(var(--brand-hue) calc(var(--brand-saturation) / 2) calc(var(--brand-lightness) / 1.5))",
        "--text1-dark": "hsl(var(--brand-hue) 15% 85%)",
        "--text2-dark": "hsl(var(--brand-hue) 5% 65%)",
        "--surface1-dark": "hsl(var(--brand-hue) 10% 10%)",
        "--surface2-dark": "hsl(var(--brand-hue) 10% 15%)",
        "--surface3-dark": "hsl(var(--brand-hue) 5%  20%)",
        "--surface4-dark": "hsl(var(--brand-hue) 5% 25%)",
      }
    },    
  },
  plugins: [],
}
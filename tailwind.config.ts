import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  daisyui: {
    themes: [
      {
        taskify: {
          "primary": "#c0bcdc",
          "secondary": "#684937",
          "accent": "#85738c",
          "neutral": "#E3DFF6",
          "base-100": "#0D0B14",
          "info": "#7360d2",
          "success": "#60d273",
          "warning": "#d29d60",
          "error": "#d26060",
        }
      }
    ],
  },
  theme: {
    extend: {
      fontSize: {
        sm: '0.750rem',
        base: '1rem',
        xl: '1.333rem',
        '2xl': '1.777rem',
        '3xl': '2.369rem',
        '4xl': '3.158rem',
        '5xl': '4.210rem',
        '6xl': '5.610rem',
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Fira Sans', 'sans-serif'],
      },
      fontWeight: {
        normal: '400',
        bold: '700',
      },   
    },
  },
  plugins: [
    require("daisyui"),
    require('tailwindcss-animated')
  ],
} satisfies Config
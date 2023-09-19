import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "1000px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      white: "#fff",
      pink: "#d966d5",
      blue: "#4A46F7",
    },
     fontFamily: {
      Ubuntu: ["Ubuntu", "sans-serif"],
      Oswald: ["Oswald", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config

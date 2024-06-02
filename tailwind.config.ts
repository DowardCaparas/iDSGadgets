import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary_black: '#292929',
        primary_gray: '#CFCFCF',
        secondary_gray: '#7D7D7D',
        primary_cyan: '#2DEEC2',
        secondary_green: '#AAF8AC',
      },
    },
  },
  plugins: [],
};
export default config;

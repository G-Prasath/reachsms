import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#bf1249',
        secondary: '#4a4a4a',
        hole_body: '#f0f0f0',
        swap: {
          DEFAULT: '#ccc',
          click_clr: '#bf1249',
          hover_clr: '#000',
          click_border: '#3273dc'
        },
        error_box: {
          text_clr: '#721c24',
          border_clr: '#f5c6cb',
          bg_clr: '#f8d7da'
        }
      }
    },
  },
  plugins: [],
};
export default config;

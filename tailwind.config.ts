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
        },
        status_clr: '#FF7273',
        hash_clr: '#A9ABAC',
        card_hover_bg: '#344258',
        card_txt_clr: '#879ab8'
      },
      keyframes: {
        fadeInRight: {
          '0%': { transform: 'translateX(40%)', opacity: '0' },
          '100%': { transform: 'translateX(0px)', opacity: '1' },
        },
        fadeInLeft: {
          '0%': { transform: 'translateX(-40%)', opacity: '0' },
          '100%': { transform: 'translateX(0px)', opacity: '1' },
        },
        
        wave:{
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' }
        },

        peofileFade: {
          '0%': { transform: 'translateX(0px)', opacity: '0-' },
          '100%': { transform: 'translateX(40%)', opacity: '0' },
        }
      },
      boxShadow: {
        cardShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
        navShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
        profileShadow: 'rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;'
      }
    },
  },
  plugins: [],
};
export default config;

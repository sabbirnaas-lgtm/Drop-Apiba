import type { Config } from "tailwindcss";

export default {
    content: ["./app/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#008060', // Shopify Green
                    dark: '#006e52',
                    light: '#339980',
                },
                surface: '#FFFFFF',
                background: '#F1F2F3', // Light Gray Base
                accent: '#111827', // Dark text
            },
            fontFamily: {
                sans: ['Poppins', 'Heebo', 'Cairo', 'sans-serif'],
                poppins: ['Poppins', 'sans-serif'],
                heebo: ['Heebo', 'sans-serif'],
                cairo: ['Cairo', 'sans-serif'],
            },
            borderRadius: {
                'lg': '8px',
                'xl': '12px',
            },
            boxShadow: {
                'card': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)', // subtle
                'card-hover': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)', // elevated
            }
        },
    },
    plugins: [],
} satisfies Config;

/** @type {import('tailwindcss').Config} */
module.exports = {
    theme: {
        extend: {
            colors: {
                primary: '#FF5722',
                secondary: '#1A1A1A'
            },
            borderRadius: {
                'none': '0px',
                'sm': '4px',
                DEFAULT: '8px',
                'md': '12px',
                'lg': '16px',
                'xl': '20px',
                '2xl': '24px',
                '3xl': '32px',
                'full': '9999px',
                'button': '8px'
            },
            animation: {
                'float-slow': 'float-slow 8s ease-in-out infinite',
                'float-slow-reverse': 'float-slow-reverse 8s ease-in-out infinite',
                'pulse-slow': 'pulse-slow 4s ease-in-out infinite',
                'text-glow': 'text-glow 3s ease-in-out infinite'
            }
        }
    }
}
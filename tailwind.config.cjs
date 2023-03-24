/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'very-dark-gray': 'hsl(0,0%,17%)',
                'dark-gray': 'hsl(0, 0%, 59%)'
            }
        }
    },
    plugins: [],
}

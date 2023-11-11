/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            fontFamily: {
                heading: 'Agbalumo',
                body: 'Fragment Mono'
            },
            fontWeight: {
                normal: '400',
                bold: '700'
            },
            colors: {
                'text-light': '#1a0a13',
                'background-light': '#fefbfd',
                'primary-light': '#8e396c',
                'secondary-light': '#ebccde',
                'accent-light': '#a8437f',
                'text-dark': '#f5e5ee',
                'background-dark': '#040103',
                'primary-dark': '#c671a4',
                'secondary-dark': '#331426',
                'accent-dark': '#bc5794'
            }
        }
    },
    darkMode: 'class',
    plugins: []
};

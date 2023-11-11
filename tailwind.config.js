/** @type {import("tailwindcss").Config} */
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
                foreground: {
                    50: '#f7eafa',
                    100: '#efd6f5',
                    200: '#dfadeb',
                    300: '#ce84e1',
                    400: '#be5bd7',
                    500: '#ae32cd',
                    600: '#8b28a4',
                    700: '#681e7b',
                    800: '#461452',
                    900: '#230a29',
                    950: '#110515'
                },
                background: {
                    50: '#f7eafa',
                    100: '#efd6f5',
                    200: '#dfadeb',
                    300: '#ce84e1',
                    400: '#be5bd7',
                    500: '#ae32cd',
                    600: '#8b28a4',
                    700: '#681e7b',
                    800: '#461452',
                    900: '#230a29',
                    950: '#110515'
                },
                primary: {
                    50: '#f7eafa',
                    100: '#efd6f5',
                    200: '#e0adeb',
                    300: '#d084e1',
                    400: '#c05bd7',
                    500: '#b132cd',
                    600: '#8d28a4',
                    700: '#6a1e7b',
                    800: '#471452',
                    900: '#230a29',
                    950: '#120515'
                },
                secondary: {
                    50: '#f6ebfa',
                    100: '#eed6f5',
                    200: '#dcadeb',
                    300: '#cb85e0',
                    400: '#ba5cd6',
                    500: '#a833cc',
                    600: '#8729a3',
                    700: '#651f7a',
                    800: '#431452',
                    900: '#220a29',
                    950: '#110514'
                },
                accent: {
                    50: '#f7ebfa',
                    100: '#efd6f5',
                    200: '#deadeb',
                    300: '#ce85e0',
                    400: '#be5cd6',
                    500: '#ad33cc',
                    600: '#8b29a3',
                    700: '#681f7a',
                    800: '#451452',
                    900: '#230a29',
                    950: '#110514'
                }
            }
        }
    },
    darkMode: 'class',
    plugins: []
};

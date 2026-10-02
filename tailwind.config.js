import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/**/*.blade.php',
        './resources/**/*.js',
        './resources/**/*.jsx',
        './resources/**/*.ts',
        './resources/**/*.tsx',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                // Official Branding SMKN 1 Bantul & Skansaba BLUD-Mart
                brand: {
                    blue: '#0033A0',
                    orange: '#F7941D',
                    text: '#172033',
                    bg: '#FFFFFF',
                },
                primary: {
                    DEFAULT: '#0033A0',
                    50: '#eef5ff',
                    100: '#d9e8ff',
                    200: '#bcd7ff',
                    300: '#8ebcff',
                    400: '#5896ff',
                    500: '#0033A0',
                    600: '#002b85',
                    700: '#00236c',
                    800: '#001b54',
                    900: '#00133c',
                    950: '#000b24',
                },
                accent: {
                    DEFAULT: '#F7941D',
                    50: '#fff9ee',
                    100: '#ffeed5',
                    200: '#ffdca8',
                    300: '#ffc370',
                    400: '#ffa133',
                    500: '#F7941D',
                    600: '#d8770e',
                    700: '#b45a0b',
                    800: '#90450e',
                    900: '#75390f',
                    950: '#421d05',
                },
            },
        },
    },
    plugins: [],
};

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
                // Skansaba BLUD-Mart design system
                // Navy/blue sebagai warna utama, orange sebagai accent
                primary: {
                    50: '#eef5ff',
                    100: '#d9e8ff',
                    200: '#bcd7ff',
                    300: '#8ebcff',
                    400: '#5896ff',
                    500: '#3272fc',
                    600: '#1d53f1',
                    700: '#1740de',
                    800: '#1936b4',
                    900: '#0f2a7a',
                    950: '#0b1c4e',
                },
                accent: {
                    50: '#fff8ed',
                    100: '#ffefd4',
                    200: '#ffdba8',
                    300: '#ffc070',
                    400: '#ff9837',
                    500: '#fd7a11',
                    600: '#ee5d07',
                    700: '#c54509',
                    800: '#9c370e',
                    900: '#7e2f0f',
                    950: '#441505',
                },
            },
        },
    },
    plugins: [],
};

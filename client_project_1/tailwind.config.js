/** @type {import('tailwindcss').Config} */
import withMT from '@material-tailwind/react/utils/withMT';

export default withMT({
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
        'path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}',
        'path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#3CA0F2',
                secondary: '#29759f',
                'primary-light': '#61c6ff',
                'black-dark': '#212529',
                'gray-dark': '#232d30',
                'gray-light': '#474749',
            },
        },
    },
    plugins: [],
});

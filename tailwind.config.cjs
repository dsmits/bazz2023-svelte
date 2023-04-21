const config = {
    content: [
        "./src/**/*.{html,js,svelte,ts}",
    ],

    theme: {
        extend: {},
        container:{
            center: true
        }
    },
    daisyui: {
        themes: [
            {
                bazz: {
                    "primary": "#6f218b",
                    "accent": "#f1af2d",
                    "secondary": "#F34213",
                    "neutral": "#6f218b",
                    "base-100": "#9d0f91",
                    "info": "#89ADEC",
                    "success": "#78DEBC",
                    "warning": "#91650D",
                    "error": "#E6283F",
                },
            },
        ],
    },
    plugins: [
        require("@tailwindcss/typography"),
        require('daisyui')
    ],
};

module.exports = config;

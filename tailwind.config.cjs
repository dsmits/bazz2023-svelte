const config = {
    content: [
        "./src/**/*.{html,js,svelte,ts}",
        ".nojekyll",
        "CNAME"
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
                    "primary": "#9d0f91",
                    "secondary": "#f1af2d",
                    "accent": "#20bf62",
                    "neutral": "#6f218b",
                    "base-100": "#8f794b",
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

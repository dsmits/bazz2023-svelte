const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        bazz: {
          "primary": "#ace285",
          "secondary": "#5ee087",
          "accent": "#20bf62",
          "neutral": "#272537",
          "base-100": "#8f794b",
          "info": "#89ADEC",
          "success": "#78DEBC",
          "warning": "#91650D",
          "error": "#E6283F",
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};

module.exports = config;

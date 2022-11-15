/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {},
    },
    plugins: [require("daisyui")],
    daisyui: {
        styled: true,
        themes: ["cupcake", "night", "cmyk"],
        base: true,
        utils: true,
        logs: true,
        rtl: false,
        prefix: "",
    },
};

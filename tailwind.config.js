/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#252527",
          "200": "#0c0c0c",
        },
        "basic-white": "#fff",
        seashell: "#fff4ed",
        orangered: {
          "100": "#fe4d1b",
          "200": "#ef2a07",
        },
        red: "#ff1900",
        antiquewhite: "#ffe5d4",
        gainsboro: "#e7e7e7",
        blue: "#0000fe",
      },
      spacing: {},
      fontFamily: {
        "proxima-nova": "'Proxima Nova'",
        "cormorant-garamond": "'Cormorant Garamond'",
        "fontspring-demo---proxima-nova-semibold":
          "'FONTSPRING DEMO - Proxima Nova Semibold'",
      },
      borderRadius: {
        sm: "14px",
        "96xl-4": "115.4px",
      },
    },
    fontSize: {
      "2xl": "21px",
      "4xl-3": "23.3px",
      "27xl-6": "46.6px",
      "74xl-2": "93.2px",
      "279xl-4": "298.4px",
      "12xl-5": "31.5px",
      "120xl-9": "139.9px",
      "64xl-9": "83.9px",
      "18xl-3": "37.3px",
      "111xl": "130px",
      "31xl": "50px",
      "5xl": "24px",
      "147xl-7": "166.7px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};

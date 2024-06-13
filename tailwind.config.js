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
      mid: "17px",
      "4xl-3": "23.3px",
      lgi: "19px",
      "27xl-6": "46.6px",
      "9xl": "28px",
      "18xl": "37px",
      "74xl-2": "93.2px",
      "28xl": "47px",
      "279xl-4": "298.4px",
      "56xl": "75px",
      "100xl": "119px",
      "12xl-5": "31.5px",
      "6xl": "25px",
      "120xl-9": "139.9px",
      "16xl": "35px",
      "37xl": "56px",
      "64xl-9": "83.9px",
      "23xl": "42px",
      "18xl-3": "37.3px",
      "3xl": "22px",
      "11xl": "30px",
      "31xl": "50px",
      "21xl": "40px",
      "111xl": "130px",
      "13xl": "32px",
      "33xl": "52px",
      "147xl-7": "166.7px",
      "48xl": "67px",
      "5xl": "24px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};

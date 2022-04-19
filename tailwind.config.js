module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
      ],
    theme: {
    extend: {
        cursor: {
        zoomin: "zoom-in",
        zoomout: "zoom-out",
        },
        zIndex: {
        "-1": "-1",
        },
        spacing: {
        128: "32rem",
        256: "64rem",
        "10/100": "10%",
        "20/100": "20%",
        "30/100": "30%",
        "40/100": "40%",
        "50/100": "50%",
        "60/100": "60%",
        "70/100": "70%",
        "80/100": "80%",
        "90/100": "90%",
        full: "100%",
        },
        // generate all sizing classes for min-width/max-width/min-height/max-height
        minWidth: (theme) => ({
        ...theme("spacing"),
        }),
        maxWidth: (theme) => ({
        ...theme("spacing"),
        }),
        minHeight: (theme) => ({
        ...theme("spacing"),
        }),
        maxHeight: (theme) => ({
        ...theme("spacing"),
        }),
    },
    screens: {
        "4xl": { max: "1920px" },
        "3xl": { max: "1600px" },
        "2xl": { max: "1440px" },
        xl: { max: "1280px" },
        lg: { max: "1024px" },
        md: { max: "768px" },
        sm: { max: "640px" },
        xs: { max: "480px" },
        "2xs": { max: "320px" },
    },
    fontFamily: {
        sans: ["sans-serif"],
        serif: ["serif"],
    },
    fontSize: {
        12: "12px",
        14: "14px",
        16: "16px",
        20: "20px",
        24: "24px",
        32: "32px",
        40: "40px",
    },
    // Name colors by numbers if possible
    colors: {
        transparent: "transparent",
        current: "currentColor",
        black: {
        DEFAULT: "#000000",
        900: "#0d0a06",
        },
        white: {
        DEFAULT: "#ffffff",
        100: "#fffafa",
        },
        gray: {
        DEFAULT: "#c1c1c1",
        },
        yellow: {
        DEFAULT: "#f1ce0d",
        },
        red: {
        DEFAULT: "#f00000",
        },
    },
    },
  plugins: [],
}

module.exports = {
  darkMode: "class",
  content: ["./public/*.html"],
  theme: {
    extend: {
      translate: {
        "50menos": "-50%",
      },
      zIndex: {
        99: "99",
        5: "5",
      },
      maxHeight: {
        "240px": "15rem",
      },
      maxWidth: {
        "240px": "15rem",
        "144px": "9rem",
        "256px": "16rem",
      },
      minWidth: {
        widthmin: "100px",
        "148px": "8rem",
      },
      minHeight: {
        altmin: "60px",
      },
      fontFamily: {
        jetbrains: "JetBrains Mono",
      },
      colors: {
        graydarkbg: "#303236",
        grayprimary: "#242526",
        graybg: "#E1E5F2",
        titlecard: "#383A3F",
        whiteprimary: "#F8F9FA",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

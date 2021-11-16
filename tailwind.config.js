const plugin = require("tailwindcss/plugin");
const kambistaColors = {
  kambista: {
    blue: "#060F26",
    green: "#00E3C2",
    sky : '#2DB4FF',
    'secondary-1' : '#DC182D',
    'secondary-2' : '#FFAA06',
    'secondary-3' : '#A7A7A7',
    'secondary-4' : '#686868',
    'secondary-5' : '#F6F6F9',
    2: "#F1F5F8",
    3: "#2DB4FF",
    4: "#FF3D4A",
    5: "#CCCCCC",
    6: "#F6F6F9",
    7: "#666666",
    8: "#E0E0E0",
    9: "#9B9999",
    10: "#E0E4EB",
    11 : '#E8F3FE',
    12 : '#F1E1E4'
  },
  dark: {
    1: "#293145",
    2: "#232a3b",
    3: "#313a55",
    4: "#1e2533",
    5: "#3f4865",
    6: "#2b3348",
    7: "#181f29",
    8: "#333333",
    9: "#192232"
  }
};

module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: [
      "shared/**/*.vue",
      "modules/**/*.vue",
    ]
  },
  theme: {
    extend: {
      colors: kambistaColors,
      fontFamily: {
        kambista: ["kambista-font"]
      },
      container: {
        center: true
      },
      strokeWidth: {
        "0.5": 0.5,
        "1.5": 1.5,
        "2.5": 2.5
      },
      boxShadow: {
        xs: "0 0 0 1px rgba(0, 0, 0, 0.05)",
        outline: "0 0 0 3px rgba(66, 153, 225, 0.5)"
      },
      backgroundSize: {
        "1/2": "50% 100%"
      },
      backgroundImage: () => ({
        "blue-gradient":
          "linear-gradient(20.06deg, #182233 26.91%, #1D2744 45.75%, #293571 83.1%, #344197 110.93%);"
      }),
      animation: {
        wave: "ping 1.75s cubic-bezier(0, 0, 0.2, 1) infinite",
        "wave-shadow": "ping 1.75s cubic-bezier(0, 0, 0.2, 1) 0.75s infinite"
      }, 
     
    }
  },
  variants: {
    zIndex: ["responsive", "hover"],
    position: ["responsive", "hover"],
    padding: ["responsive", "last"],
    margin: ["responsive", "last"],
    borderWidth: ["responsive", "last"],
    backgroundColor: [
      "last",
      "first",
      "odd",
      "responsive",
      "hover",
      "dark",
      "dark-hover",
      "checked"
    ],
    borderColor: [
      "last",
      "first",
      "odd",
      "responsive",
      "hover",
      "dark",
      "dark-hover",
      "checked"
    ],
    textColor: [
      "last",
      "first",
      "odd",
      "responsive",
      "hover",
      "focus",
      "dark",
      "dark-hover"
    ],
    opacity: ["disabled"],
    cursor: ["disabled"]
  },
  plugins: [
    plugin(function({ addVariant, e }) {
      addVariant("dark", ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.dark .${e(`dark${separator}${className}`)}`;
        });
      });
      addVariant("dark-hover", ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.dark .${e(
            `dark${separator}hover${separator}${className}`
          )}:hover`;
        });
      });
    })
  ]
};

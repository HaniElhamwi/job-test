import type { Config } from "tailwindcss";

import withMT from "@material-tailwind/react/utils/withMT";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#ED2E51",
        secondary: "#FFDA3A",
        "bg-color": "white",
        elevated1: "#1F262B",
        "content-primary": "#FAFAFA",
        "content-secondary": "#C9C9C9",
      },
      container: {
        center: true,
        padding: "1rem",

        screens: {
          sm: "600px",
          md: "728px",
          lg: "984px",
          xl: "1200px",
        },
      },
    },
  },
  plugins: [],
};
export default withMT(config);

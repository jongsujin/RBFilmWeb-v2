import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "375px",
    },
    colors: {
      black: "#222222",
      borderBlack: "#40321F",
      white: "#ffffff",
      gray: "#dbdbdb",
      primary: "#e9d1ad",
      secondary: "#DACCBA",
    },
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        bai: ["Bai Jamjuree", "sans-serif"],
        pre: ["Pretendard", "sans-serif"],
      },
      fontSize: {
        mainContent: "55px",
        imageTitle: "27px",
        headline1: "22px",
        headline2: "20px",
        headline3: "18px",
        body: "16px",
        lg: "14px",
        m: "12px",
        sm: "10px",
        xs: "8px",
      },
    },
  },
  plugins: [],
};
export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      black: "#222222",
      white: "#ffffff",
      gray: "#dbdbdb",
      primary: "#e9d1ad",
    },
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        bai: ["Bai Jamjuree", "sans-serif"],
        pre: ["Pretendard", "sans-serif"],
      },
      fontSize: {
        mainContent: "55px",
        headline1: "22px",
        headline2: "20px",
        headline3: "18px",
        body: "16px",
        lg: "14px",
        m: "12px",
        sm: "10px",
      },
    },
  },
  plugins: [],
};
export default config;

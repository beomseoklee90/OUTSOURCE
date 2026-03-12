import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // src 폴더 내부의 모든 파일을 감시
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // 혹시나 밖에 있을 경우 대비
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "dj-pink": "#FF007A",
        "dj-gold": "#FFD700",
      },
    },
  },
  plugins: [],
};
export default config;
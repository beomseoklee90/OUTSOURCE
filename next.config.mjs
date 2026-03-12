/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // 1. 레포지토리 이름이 'outsource'이므로 정확히 입력
  basePath: "/outsource",

  images: {
    unoptimized: true,
  },
};

export default nextConfig;

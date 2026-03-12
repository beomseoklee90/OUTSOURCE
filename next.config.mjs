/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // 레포지토리 이름을 경로에 추가합니다.
  basePath: "/outsource",
  // CSS, JS, 이미지 등 자산 파일들을 찾을 경로도 지정합니다.
  assetPrefix: "/outsource/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // 1. 레포지토리 이름이 'outsource'이므로 정확히 입력
  basePath: "/outsource",

  // 2. assetPrefix를 basePath와 동일하게 하되 끝에 슬래시를 빼거나,
  // 아예 이 줄을 삭제해 보세요. (basePath가 이미 이 역할을 수행함)
  assetPrefix: "https://beomseoklee90.github.io/outsource",

  images: {
    unoptimized: true,
  },
};

export default nextConfig;

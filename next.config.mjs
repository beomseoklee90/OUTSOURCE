/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // 주소 뒤에 붙는 /outsource를 정확히 인식하게 합니다.
  basePath: "/outsource",
  // CSS, JS 파일들을 가져올 때 앞에 /outsource를 붙여서 가져오게 합니다.
  assetPrefix: "/outsource",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

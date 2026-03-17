import "./globals.css"; // 이 줄이 반드시 있어야 합니다!
import type { Metadata } from "next";

export const metadata: Metadata = {
  // 1. 기본 제목 및 설명
  title: {
    default: "DJ Icebreaking | 독창적인 사운드와 몰입형 공연 포트폴리오",
    template: "%s | DJ Icebreaking",
  },
  description:
    "하우스, 시티팝, K-Pop 등 다양한 장르를 아우르는 DJ Icebreaking의 공식 포트폴리오 사이트입니다. 감각적인 비트와 함께 특별한 무대를 경험하세요.",

  // 2. 검색 엔진 색인 설정
  keywords: [
    "DJ Icebreaking",
    "디제이 아이스브레이킹",
    "공연 섭외",
    "DJ 포트폴리오",
    "하우스 음악",
    "시티팝 디제잉",
    "이벤트 디제이",
  ],
  authors: [{ name: "dj ice breaking", url: "https://djicebreaking.org" }],

  // 3. Open Graph (카톡, 페이스북, 링크드인 공유 시 노출)
  openGraph: {
    title: "DJ Icebreaking - 음악으로 공간을 디자인하다",
    description:
      "지금 가장 트렌디한 사운드를 DJ Icebreaking의 포트폴리오에서 확인하세요.",
    url: "https://djicebreaking.org",
    siteName: "DJ Icebreaking Portfolio",
    images: [
      {
        url: "./images/dj-main.jpg", // 카톡 공유 시 뜰 메인 이미지 (1200x630 권장)
        width: 1200,
        height: 630,
        alt: "DJ Icebreaking 공연 이미지",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  verification: {
    google:
      "google-site-verification=F18MFiZCi_LQ4IGQgqVNWXC7ytse5ie3ysEQ7vk4254",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className="bg-black text-white h-screen overflow-y-auto snap-y snap-mandatory">
        {children}
      </body>
    </html>
  );
}

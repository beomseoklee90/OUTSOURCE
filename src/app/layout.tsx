import "./globals.css"; // 이 줄이 반드시 있어야 합니다!
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DJ ICE BREAKING",
  description: "Music & Tech Portfolio",
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

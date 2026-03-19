"use client";

import { motion } from "framer-motion";
import { siteData } from "../../data/siteData";

export default function HeroDJ() {
  const { hero } = siteData;

  return (
    <section className="relative w-full bg-black flex flex-col items-center">
      {/* 1. 이미지 영역 */}
      <div className="relative w-full">
        <img
          src="https://dj-ice-breaking-images.s3.us-east-1.amazonaws.com/dj-main.jpg"
          alt="DJ Main"
          // 모바일에서 이미지 비율이 깨질 때 위쪽(얼굴)을 우선 보여주도록 object-top 추가
          className="w-full h-auto block object-cover object-top"
        />

        {/* 사진 위에 어두운 그라데이션을 입혀서 글자를 돋보이게 함 */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/40" />

        {/* 2. 텍스트 레이어 */}
        {/* 핵심 변경: 모바일은 justify-end로 바닥으로 내리고 pb-16으로 여백 줌. 데스크탑(md)은 다시 justify-center로 중앙 정렬 */}
        <div className="absolute inset-0 flex flex-col justify-end pb-16 md:justify-center md:pb-0 items-center text-center px-4 md:px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            // 핵심 변경: 모바일 폰트 6xl -> 4xl로 축소. 데스크탑은 9xl 유지
            className="text-4xl sm:text-5xl md:text-9xl font-black text-white italic tracking-tighter drop-shadow-[0_10px_10px_rgba(0,0,0,0.8)]"
          >
            {hero.title}
          </motion.h1>

          {/* 긍정적인 영감 멘트 */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-4 md:mt-6 relative"
          >
            {/* 핵심 변경: 모바일 서브텍스트 크기도 xl -> lg로 살짝 축소 */}
            <span className="relative z-10 text-lg md:text-3xl font-bold text-dj-pink tracking-tight drop-shadow-[0_2px_4px_rgba(0,0,0,1)] px-4 py-2">
              음악과 기술로 일상에 긍정적인 영감을 전합니다.
            </span>
            <div className="absolute inset-0 bg-black/40 blur-md -z-10 rounded-full" />
          </motion.div>

          <motion.button
            whileHover={{
              scale: 1.1,
              backgroundColor: "#FF007A",
              color: "#fff",
            }}
            transition={{ duration: 0.2 }}
            // 모바일에서는 버튼 크기도 살짝 줄이고, 아래쪽 마진(mb-4)을 줘서 너무 바닥에 붙지 않게 함
            className="mt-6 md:mt-12 px-8 py-3 md:px-10 md:py-4 border-2 border-dj-pink text-dj-pink font-black rounded-full shadow-[0_0_20px_rgba(255,0,122,0.3)] bg-black/20 backdrop-blur-sm uppercase tracking-widest text-sm md:text-base mb-4 md:mb-0"
          >
            {hero.actionText}
          </motion.button>
        </div>
      </div>

      {/* 다음 섹션 안내 */}
      <div className="py-12 bg-black w-full text-center border-t border-white/5">
        <p className="text-zinc-600 font-mono text-xs tracking-[0.5em] animate-bounce">
          SCROLL DOWN
        </p>
      </div>
    </section>
  );
}

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
          className="w-full h-auto block object-cover object-top"
        />

        {/* 사진 위에 어두운 그라데이션을 입혀서 글자를 돋보이게 함 */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/40" />

        {/* 2. 텍스트 레이어 (모바일에서 텍스트를 바닥으로 확 내린 버전) */}
        <div className="absolute inset-0 flex flex-col justify-end pb-4 md:justify-center md:pb-0 items-center text-center px-4 md:px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-9xl font-black text-white italic tracking-tighter drop-shadow-[0_10px_10px_rgba(0,0,0,0.8)]"
          >
            {hero.title}
          </motion.h1>

          {/* 긍정적인 영감 멘트 */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-3 md:mt-6 relative"
          >
            <span className="relative z-10 text-base md:text-3xl font-bold text-dj-pink tracking-tight drop-shadow-[0_2px_4px_rgba(0,0,0,1)] px-4 py-2">
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
            className="mt-5 md:mt-12 px-8 py-3 md:px-10 md:py-4 border-2 border-dj-pink text-dj-pink font-black rounded-full shadow-[0_0_20px_rgba(255,0,122,0.3)] bg-black/20 backdrop-blur-sm uppercase tracking-widest text-sm md:text-base mb-6 md:mb-0"
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

"use client";

import { motion } from "framer-motion";
import {
  Music,
  Terminal,
  Zap,
  Briefcase,
  X,
  Square,
  Minus,
} from "lucide-react";

export default function AboutDJ() {
  const stats = [
    {
      label: "Status",
      value: "Yonsei Univ. Graduated / Web Developer",
      icon: <Briefcase size={20} />,
    },
    { label: "Core Mix", value: "House / Pop", icon: <Music size={20} /> },
    {
      label: "Trainning",
      value: "Japanese Speaking",
      icon: <Music size={20} />,
    },
    {
      label: "Philosophy",
      value: "Communication/Creativity/Innovation",
      icon: <Zap size={20} />,
    },
  ];

  return (
    <section className="min-h-screen w-full bg-black py-12 md:py-24 px-4 md:px-10 flex flex-col justify-center items-center snap-start relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none"></div>

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch relative z-10">
        {/* 왼쪽: 자기소개 (전체 내용 수록) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="lg:col-span-7 bg-zinc-900/80 border border-zinc-800 p-5 md:p-8 rounded-xl shadow-2xl backdrop-blur-md flex flex-col"
        >
          {/* 리눅스 스타일 상단바 */}
          <div className="flex justify-between items-center mb-5 border-b border-zinc-800 pb-4">
            <span className="text-zinc-500 font-mono text-[10px] md:text-xs flex items-center gap-2">
              <Terminal size={14} /> main_profile.sh
            </span>
            <div className="flex gap-2">
              <Minus size={14} className="text-zinc-700" />
              <Square size={10} className="text-zinc-700" />
              <X size={14} className="text-zinc-700" />
            </div>
          </div>

          <div className="font-sans space-y-4 flex-grow">
            <div className="text-zinc-300 leading-relaxed space-y-4 text-sm md:text-base border-l-2 border-dj-pink/50 pl-4 md:pl-6">
              <p>
                안녕하세요.{" "}
                <span className="text-white font-bold">
                  연세대학교 컴퓨터과학과를 졸업
                </span>
                하고, 사람들에게 긍정적인 영향과 영감을 드리는 일을 하고
                있습니다. 저는 그동안{" "}
                <span className="text-white font-bold font-sans">
                  공장, 로우코드, 신용카드, 고속도로, 소개팅 앱, 숙박 예약, 건설
                </span>{" "}
                등 다양한 도메인의 프로젝트에 참여하며 폭넓은 개발 경험을
                쌓아왔습니다.
              </p>

              <p>
                단순한 코딩을 넘어{" "}
                <span className="text-white font-bold font-sans">
                  웹 어플리케이션의 상류/하류 공정, 설계, 개발, 테스트, CI/CD,
                  배포, 유지보수
                </span>
                에 이르기까지 전체 과정을 직접 관리해 온 기술력이 저의
                자산입니다. 현재는 이러한 경험을 바탕으로 사장님들의 비즈니스
                문제를 실질적으로 해결해 드리고 있습니다.
              </p>

              <p>
                어렸을 때부터 록, 메탈, 힙합 등 다양한 음악을 즐겨왔고, 최근에는
                EDM의 에너지를 나누고자{" "}
                <span className="text-dj-pink font-bold">
                  인공지능 음악 채널
                </span>
                을 운영하고 있습니다. 또한{" "}
                <span className="text-white font-bold font-sans">
                  일본에서 3년간 거주
                </span>
                한 경험을 살려 일본어 모임도 운영 중입니다. 실력이 완벽하지는
                않지만, 초급 분들께 양질의 컨텐츠를 제공하며 진심으로 소통하려
                노력합니다.
              </p>

              <p className="pt-2">
                <span className="text-dj-gold font-bold font-sans italic text-base md:text-lg">
                  "믿고 맡겨 주세요. 제가 도와드리겠습니다."
                </span>
              </p>
            </div>
          </div>
        </motion.div>

        {/* 오른쪽: 카드 섹션 (균등 배분) */}
        <div className="lg:col-span-5 flex flex-col gap-4 h-full">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="flex-1 flex items-center gap-4 md:gap-6 p-5 bg-zinc-900/50 border border-white/5 rounded-xl hover:border-dj-pink/30 transition-all group"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg bg-zinc-800 flex items-center justify-center text-dj-pink group-hover:bg-dj-pink group-hover:text-white transition-colors">
                {stat.icon}
              </div>
              <div>
                <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-1">
                  {stat.label}
                </p>
                <p className="text-white text-sm md:text-lg font-black">
                  {stat.value}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

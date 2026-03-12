"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { Play, Pause, Music, Heart } from "lucide-react";
import { siteData } from "../../data/siteData";

export default function SpotifyPlaylist() {
  const { playlist } = siteData;
  const [playingId, setPlayingId] = useState<number | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // 1. 우클릭 방지 이벤트 핸들러 추가
  useEffect(() => {
    const preventContextMenu = (e: MouseEvent) => {
      e.preventDefault(); // 우클릭 메뉴 자체를 막음
    };
    document.addEventListener("contextmenu", preventContextMenu);
    return () =>
      document.removeEventListener("contextmenu", preventContextMenu);
  }, []);

  // 2. 오디오 객체 생성 시 경로 노출 최소화
  const playTrack = (id: number, url: string) => {
    if (audioRef.current) {
      audioRef.current.pause();
    }

    const audio = new Audio();
    audio.src = url; // 여기서 url을 동적으로 주입
    // 기본 컨트롤러를 숨기기 위해 DOM에 추가하지 않고 메모리 상에서만 돌림
    audio.play().catch(() => {});

    // 브라우저에서 오디오 소스를 쉽게 못 가져가게 조치
    audio.onplay = () => {
      console.log(
        "%c [SYSTEM] Music is protected by DJ ICE BREAKING ",
        "background: #FF007A; color: white;",
      );
    };

    audio.onended = () => playNextTrack();
    audioRef.current = audio;
    setPlayingId(id);
  };

  // 다음 곡을 재생하는 함수
  const playNextTrack = useCallback(() => {
    if (playingId === null) return;

    const currentIndex = playlist.findIndex((t) => t.id === playingId);
    const nextIndex = (currentIndex + 1) % playlist.length; // 마지막 곡이면 첫 곡으로
    const nextTrack = playlist[nextIndex];

    playTrack(nextTrack.id, nextTrack.url);
  }, [playingId, playlist]);

  const togglePlay = (id: number, url: string) => {
    if (playingId === id) {
      audioRef.current?.pause();
      setPlayingId(null);
    } else {
      playTrack(id, url);
    }
  };

  // 브라우저 첫 클릭 시 자동 재생을 시도하는 효과
  useEffect(() => {
    const handleFirstClick = () => {
      if (playingId === null) {
        // 첫 번째 곡 재생
        playTrack(playlist[0].id, playlist[0].url);
      }
      window.removeEventListener("click", handleFirstClick);
    };

    window.addEventListener("click", handleFirstClick);
    return () => {
      window.removeEventListener("click", handleFirstClick);
      audioRef.current?.pause();
    };
  }, [playlist]);

  return (
    <section className="min-h-screen w-full py-24 bg-black px-4 md:px-10 snap-start flex flex-col justify-center border-t border-zinc-900">
      <div className="max-w-5xl mx-auto w-full">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-dj-pink text-sm font-bold tracking-[0.3em] mb-2 uppercase">
              Now Playing
            </h2>
            <h3 className="text-4xl md:text-5xl font-black text-white italic">
              DJ SELECTION
            </h3>
          </div>
          <div className="hidden md:block text-zinc-500 text-sm font-mono">
            AUTO-PLAY ENABLED
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4 px-6 py-3 border-b border-zinc-800 text-zinc-500 text-xs font-bold uppercase tracking-widest mb-4">
          <div className="col-span-1">#</div>
          <div className="col-span-7 md:col-span-6">Track Title</div>
          <div className="hidden md:block col-span-3">Genre</div>
          <div className="col-span-4 md:col-span-2 text-right">Time</div>
        </div>

        <div className="flex flex-col gap-2">
          {playlist.map((track, index) => (
            <div
              key={track.id}
              onClick={() => togglePlay(track.id, track.url)}
              className={`group grid grid-cols-12 gap-4 px-6 py-4 rounded-xl items-center transition-all duration-300 cursor-pointer 
                ${playingId === track.id ? "bg-white/10 ring-1 ring-dj-pink/30" : "hover:bg-white/5 border border-transparent"}`}
            >
              <div className="col-span-1 flex justify-center">
                {playingId === track.id ? (
                  <div className="flex items-end gap-[2px] h-4">
                    <div
                      className="w-1 bg-dj-pink animate-bounce"
                      style={{ animationDuration: "0.4s" }}
                    />
                    <div
                      className="w-1 bg-dj-pink animate-bounce"
                      style={{ animationDuration: "0.7s" }}
                    />
                    <div
                      className="w-1 bg-dj-pink animate-bounce"
                      style={{ animationDuration: "0.5s" }}
                    />
                  </div>
                ) : (
                  <span className="text-zinc-600 group-hover:hidden font-mono">
                    {index + 1}
                  </span>
                )}
                <Play
                  size={16}
                  className={`hidden group-hover:block ${playingId === track.id ? "hidden" : "text-dj-pink"}`}
                  fill="currentColor"
                />
                {playingId === track.id && (
                  <Pause
                    size={16}
                    className="text-dj-pink"
                    fill="currentColor"
                  />
                )}
              </div>

              <div className="col-span-7 md:col-span-6 flex flex-col">
                <span
                  className={`font-bold text-lg transition-colors ${playingId === track.id ? "text-dj-pink" : "text-white"}`}
                >
                  {track.title}
                </span>
                <span className="text-xs text-zinc-500">{track.desc}</span>
              </div>

              <div className="hidden md:block col-span-3">
                <span className="text-[10px] px-3 py-1 border border-zinc-700 rounded-full text-zinc-400">
                  {track.genre}
                </span>
              </div>

              <div className="col-span-4 md:col-span-2 flex items-center justify-end gap-4 text-zinc-500 font-mono text-sm">
                {track.duration}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

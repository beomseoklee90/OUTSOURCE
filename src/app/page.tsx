import HeroDJ from "../components/sections/HeroDJ";
import AboutDJ from "../components/sections/AboutDJ"; // 추가!
import SpotifyPlaylist from "../components/sections/SpotifyPlaylist";

export default function Home() {
  return (
    <main className="bg-black snap-y snap-mandatory h-screen overflow-y-auto">
      <div className="snap-start">
        <HeroDJ />
      </div>

      <div className="snap-start">
        <SpotifyPlaylist />
      </div>

      {/* 웅장한 사진 뒤에 바로 이어지는 사장님의 스토리 */}
      <div className="snap-start">
        <AboutDJ />
      </div>
    </main>
  );
}

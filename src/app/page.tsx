"use client";
import { useState } from "react";

import { Play } from "lucide-react";
import { Video } from "@/components/video";

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <main
      className={`min-h-screen flex justify-center items-center flex-col w-full bg-[url('../../public/bg.gif')] `}
    >
      <div
        className="w-full h-full"
        style={{
          background:
            "radial-gradient(ellipse at center,transparent 0,rgba(0,0,0,.75) 100%)",
        }}
      ></div>
      {isPlaying ? (
        <Video />
      ) : (
        <div className="text-center font-extrabold text-5xl mb-4 leading-snug text-white">
          <h2>Skip the Scroll,</h2>
          <h2>
            <span className="text-[#f8e66e]">Wonderful Videos</span> on a Tap.
          </h2>
        </div>
      )}

      <button
        onClick={handlePlay}
        className="px-5 py-3 bg-[#f8e66e] text-black text-lg font-medium gap-2 flex justify-center items-center rounded-3xl"
      >
        Start Playing
        <span>
          <Play />
        </span>
      </button>
    </main>
  );
}

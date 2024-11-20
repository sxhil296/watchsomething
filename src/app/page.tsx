"use client";
import { useState } from "react";
import { Play, WandSparkles } from "lucide-react";
import { Video } from "@/components/video";

// Array of YouTube video links
const links = [
  "https://www.youtube.com/embed/7hr60EumwQ4?si=0m8QIRBWxadnJ3dc",
  "https://www.youtube.com/embed/1MgQFcBRLLo?si=FBOphk24qSaR_cZ3",
  "https://www.youtube.com/embed/RacxNskxySo?si=7WtZ2-SJY-XtmeZL",
];

// Array of random button texts
const buttonTexts = [
  "Start Playing",
  "Take me to the next",
  "Skip this",
  "Play something else",
];

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentVideoUrl, setCurrentVideoUrl] = useState<string | null>(null);
  const [buttonText, setButtonText] = useState<string>("Start Playing");

  // Function to pick a random video and button text
  const handlePlay = () => {
    const randomVideo = links[Math.floor(Math.random() * links.length)];
    const randomButtonText =
      buttonTexts[Math.floor(Math.random() * buttonTexts.length)];

    setIsPlaying(true);
    setCurrentVideoUrl(randomVideo);
    setButtonText(randomButtonText);
  };

  const handleSkip = () => {
    const randomVideo = links[Math.floor(Math.random() * links.length)];
    const randomButtonText =
      buttonTexts[Math.floor(Math.random() * buttonTexts.length)];

    setCurrentVideoUrl(randomVideo);
    setButtonText(randomButtonText);
  };

  return (
    <main
      style={{
        background:
          "radial-gradient(circle, rgba(88,88,89,1) 0%, rgba(10,1,1,0.78) 100%)",
      }}
      className="min-h-screen w-full"
    >
      <div
        className="min-h-screen flex justify-center items-center flex-col w-full"
        style={{
          backgroundImage: "url('/bg.gif')",
          backgroundPosition: "center",
        }}
      >
        {isPlaying ? (
          <Video videoUrl={currentVideoUrl} />
        ) : (
          <div className="text-center font-extrabold text-5xl mb-4 leading-snug text-white">
            <h2>Skip the Scroll,</h2>
            <h2>
              <span className="text-[#f8e66e]">Wonderful Videos</span> on a Tap.
            </h2>
          </div>
        )}

        <button
          onClick={isPlaying ? handleSkip : handlePlay}
          className="px-5 py-3 bg-[#f8e66e] text-black text-lg font-medium gap-2 flex justify-center items-center rounded-3xl"
        >
          {buttonText}
          <span>{isPlaying ? <WandSparkles /> : <Play />}</span>
        </button>
      </div>
    </main>
  );
}

"use client";
import { useState } from "react";
import { Play, WandSparkles } from "lucide-react";
import { Video } from "@/components/video";



// Array of YouTube video links
const links = [
  "https://www.youtube.com/embed/7hr60EumwQ4?si=0m8QIRBWxadnJ3dc",
  "https://www.youtube.com/embed/1MgQFcBRLLo?si=FBOphk24qSaR_cZ3",
  "https://www.youtube.com/embed/RacxNskxySo?si=7WtZ2-SJY-XtmeZL",
  "https://www.youtube.com/embed/yzgS61zgPEg?si=t1B1obuhhq226lLA",
  "https://www.youtube.com/embed/xFvjv0YBddw?si=v3JPQwsKK9PQXf2q",
  "https://www.youtube.com/embed/g0kzHjmvuYQ?si=ZdJFvGVgwjutDyXe"
  
];

// Array of random button texts
const buttonTexts = [
  "Show me the magic",
  "Take me to the next",
  "Skip this",
  "Play something else",
];

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentVideoUrl, setCurrentVideoUrl] = useState<string>("");
  const [buttonText, setButtonText] = useState<string>("Start Playing");
  const [currentVideoIndex, setCurrentVideoIndex] = useState<number>(0);

  const handlePlay = () => {
    setIsPlaying(true);
    setCurrentVideoUrl(links[currentVideoIndex]);
    setButtonText(buttonTexts[Math.floor(Math.random() * buttonTexts.length)]);
  };

  const handleSkip = () => {
    const nextIndex = (currentVideoIndex + 1) % links.length;
    setCurrentVideoIndex(nextIndex);
    setCurrentVideoUrl(links[nextIndex]);
    setButtonText(buttonTexts[Math.floor(Math.random() * buttonTexts.length)]);
  };





  return (
    <main
    style={{
      backgroundImage: "url('/bg.gif')",
      backgroundPosition: "center",
    }}
     
      className="min-h-screen w-full"
    >
      <div
        className="min-h-screen flex justify-center items-center flex-col w-full"
        style={{
          background:
            "radial-gradient(circle, rgba(88,88,89,1) 0%, rgba(10,1,1,0.78) 100%)",
        }}
      >
        {isPlaying ? (
          <Video videoUrl={currentVideoUrl} />
        ) : (
          <div className="text-center font-extrabold text-5xl mb-4 leading-snug text-white tracking-wide">
            <h2>Skip the Scroll,</h2>
            <h2>
              <span className="text-[#f8e66e]">Wonderful Videos</span> on a Tap.
            </h2>
          </div>
        )}

        <button
          onClick={isPlaying ? handleSkip : handlePlay}
          className="px-5 py-3 bg-[#f8e66e] text-black text-lg font-normal gap-2 flex justify-center items-center rounded-3xl"
        >
          {buttonText}
          <span>{isPlaying ? <WandSparkles  /> : <Play />}</span>
        </button>
      </div>
 
    </main>
  );
}

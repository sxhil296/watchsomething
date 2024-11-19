"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Video } from "@/components/video";

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoIndex, setVideoIndex] = useState(0);

  // Array of video URLs
  const videoUrls = [
    "https://youtu.be/Zq5fmkH0T78?si=HVlCYY0o0jHYxL2f",
    "https://youtu.be/c1A4rSvQR44?si=ybA0k3NEgMo6SJ6A",
  ];

  const handlePlay = () => {
    setIsPlaying(true);
    setVideoIndex((prevIndex) => (prevIndex + 1) % videoUrls.length);
  };

  return (
    <main
      className={`min-h-screen flex justify-center items-center flex-col w-full ${isPlaying? "bg-[url('../../public/bg.gif')]" : "bg-white"}`}
    >
      {!isPlaying ? (
        <p className="text-white">Click the button to get started</p>
      ) : (
        <Video videoSrc={videoUrls[videoIndex]} />
      )}
      <Button className="max-w-[100px]" onClick={handlePlay}>
        {isPlaying ? "Next Video" : "Play"}
      </Button>
    </main>
  );
}

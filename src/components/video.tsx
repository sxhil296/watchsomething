export function Video({ videoUrl }: { videoUrl: string }) {
  const autoplayUrl = `${videoUrl}&autoplay=1`;

  return (
    <div className="flex justify-center items-center relative shadow-lg rounded-md mb-6 w-[60%] px-2">
      <iframe
        frameBorder="0"
        allowFullScreen
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        title="Video Player"
        // width="780"
        height="400"
        src={autoplayUrl}
        id="widget2"
        data-gtm-yt-inspected-6="true"
        className="rounded-xl shadow-md  aspect-video w-full"
      ></iframe>
    </div>
  );
}

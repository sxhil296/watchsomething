export function Video({ videoUrl }: { videoUrl: string }) {
  return (
    <div className="flex justify-center items-center relative shadow-lg rounded-md mb-6">
      <iframe
        frameBorder="0"
        allowFullScreen
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        title="Video Player"
        width="740"
        height="360"
        src={videoUrl}
        id="widget2"
        data-gtm-yt-inspected-6="true"
        className="rounded-xl shadow-md"
      ></iframe>
    </div>
  );
}

export function Video({ videoSrc }: { videoSrc: string }) {
  return (
    // <video width="320" height="240" controls preload="none">
    //   <source src={videoSrc} type="video/mp4" />
    //   Your browser does not support the video tag.
    // </video>
    <div className="left: 0; width: 100%; height: 0; position: relative; padding-bottom: 56.25%[">
      <iframe
        src={videoSrc}
        className="top-0 left-0  w-full  h-full absolute"
        // allowfullscreen
        scrolling="no"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"
      ></iframe>
    </div>
  );
}

const links = [
  "https://www.youtube.com/embed/83jZQlHiT1Y?si=0tfm_ceDHpGTqvli",
  "https://www.youtube.com/embed/83jZQlHiT1Y?si=0tfm_ceDHpGTqvli",
];

export function Video() {
  return (
    <div className="flex justify-center  items-center  relative shadow-lg rounded-md mb-6">
      <iframe
        frameBorder="0"
        allowFullscreen=""
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        title="You're Not Relatable Anymore"
        width="640"
        height="360"
        src="https://www.youtube.com/embed/3UBBulOCI7I?autoplay=1&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fwww.watchsomethingwonderful.com&amp;widgetid=1"
        id="widget2"
        data-gtm-yt-inspected-6="true"
        className="rounded-xl shadow-md"
      ></iframe>
    </div>
  );
}

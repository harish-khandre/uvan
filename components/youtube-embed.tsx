import React from "react";

const YoutubeEmbed = ({ videoURL }: { videoURL: string }) => (
  <iframe
    className="aspect-video border-2 w-full h-full rounded-t-2xl"
    width="560"
    height="315"
    src={videoURL}
    title="YouTube video player"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen
  ></iframe>
);

export default YoutubeEmbed;

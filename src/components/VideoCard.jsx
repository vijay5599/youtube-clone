import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info ?? {};
  if (!snippet || !statistics) {
    return <div>Loading...</div>;
  }
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="m-2 p-2 w-64 shadow-md">
      <img className="rounded-lg" src={thumbnails?.medium?.url} alt={title} />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics?.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;

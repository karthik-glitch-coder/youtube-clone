import React from "react";

const ResVideoCard = ({ info }) => {
  const { snippet } = info;
  const { thumbnails, title, channelTitle } = snippet;

  return (
    <div className="p-2 m-2 w-56 shadow-lg">
      <img className="rounded-lg" alt="thumbnail" src={thumbnails.medium.url} />
      <ul>
        <li>{title}</li>
        <li className="font-bold py-2">{channelTitle}</li>
      </ul>
    </div>
  );
};

export default ResVideoCard;

import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const list = [
    "All",
    "Live",
    "Gaming",
    "Music",
    "Esports",
    "Cinema",
    "Dramedy",
    "Watched",
    "News",
    "Albums",
    "Music",
    "Esports",
    "Cinema",
    "Watched",
  ];
  return (
    <div className="flex">
      {list.map((name,index) => (
        <Button key={index} name={name} />
      ))}
    </div>
  );
};

export default ButtonList;

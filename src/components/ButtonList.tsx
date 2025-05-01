import React from "react";
import Button from "./Button";

const list = [
  "All",
  "Music",
  "News",
  "Mixes",
  "Live",
  "Gaming",
  "Podcasts",
  "Playlists",
  "Recenty uploaded",
  "Watched",
];

const ButtonList = () => {
  return (
    <div className="flex">
      {list.map((item, index) => (
        <Button key={index} name={item} />
      ))}
    </div>
  );
};

export default ButtonList;

import React from "react";
import { formatCount, getTimeAgo } from "../utils/formatUtils";

interface VideoCardProps {
  info: {
    snippet: {
      title: string;
      channelTitle: string;
      publishedAt: string;
      thumbnails: {
        medium: {
          url: string;
        };
      };
    };
    statistics: {
      commentCount: string;
      favouriteCount: string;
      likeCount: string;
      viewCount: string;
    };
  };
}

const VideoCard: React.FC<VideoCardProps> = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails, publishedAt } = snippet;
  console.log(info);

  return (
    <div className="p-2 m-2 cursor-pointer">
      <img
        className="w-full rounded-xl"
        src={thumbnails.medium.url}
        alt="thumbnail"
      />
      <ul>
        <li className="font-bold py-1">{title}</li>
        <li className="text-gray-500 text-sm">{channelTitle}</li>
        <li className="text-gray-500 text-sm">{`${formatCount(
          Number(statistics.viewCount)
        )} views • ${getTimeAgo(publishedAt)}`}</li>
      </ul>
    </div>
  );
};

export default VideoCard;

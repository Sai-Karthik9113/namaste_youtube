import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";

interface Video {
  id: string;
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
}

const VideoContainer = () => {
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();

    setVideos(json.items);
  };
  return (
    <div className="w-full max-h-[calc(100vh-143px)] overflow-y-auto">
      <div className="grid grid-cols-3 w-full">
        {videos[0] &&
          videos.map((video) => <VideoCard key={video.id} info={video} />)}
      </div>
    </div>
  );
};

export default VideoContainer;

import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className="col-span-10 p-5 h-screen overflow-hidden flex flex-col">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;

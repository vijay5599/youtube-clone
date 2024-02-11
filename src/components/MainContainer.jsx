import React from "react";
import ButtonList from "./ButtonList";
import VideoContaner from "./VideoContaner";

const MainContainer = () => {
  return (
    <div className="col-span-10">
      <ButtonList />
      <VideoContaner />
    </div>
  );
};

export default MainContainer;

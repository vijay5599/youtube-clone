import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { openMenu, toggleMenu } from "../utils/appSlice";

const Body = () => {
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(toggleMenu());
  // });
  return (
    <div className="grid grid-flow-col">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Body;

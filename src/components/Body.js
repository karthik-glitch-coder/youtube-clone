import React from "react";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
import useScrollToTop from "../customHooks.js/useScrollToTop";

const Body = () => {
  useScrollToTop();
  return (
    <div className="flex">
      <SideBar />
      <Outlet />
    </div>
  );
};

export default Body;

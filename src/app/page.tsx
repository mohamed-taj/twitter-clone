import Link from "next/link";
import React from "react";
import LeftSideBar from "./components/LeftSideBar";
import MainSection from "./components/MainSection";
import RightSide from "./components/RightSide";
export default function Home() {
  return (
    <div className="w-[100%] h-full flex  justify-center items-center bg-black text-white  text-xl">
      <div className=" flex max-w-screen-xl w-full h-full relative">
        <LeftSideBar />

        <MainSection />
        <RightSide />
      </div>
    </div>
  );
}

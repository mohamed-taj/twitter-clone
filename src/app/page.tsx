import Link from "next/link";
import React from "react";
import LeftSideBar from "./components/LeftSideBar";
import MainSection from "./components/MainSection";

export default function Home() {
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-black text-white  text-xl">
      <div className=" flex max-w-screen-xl w-full h-full relative">
        <LeftSideBar />

        <MainSection />
        <section></section>
      </div>
    </div>
  );
}

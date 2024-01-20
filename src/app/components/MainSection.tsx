import React from "react";
import { AiOutlineHeart, AiOutlineRetweet } from "react-icons/ai";
import { BsChat, BsThreeDots } from "react-icons/bs";
import { IoShapesOutline, IoShareOutline, IoStatsChart } from "react-icons/io5";

const MainSection = () => {
  return (
    <main className=" ml-[275px] h-full min-h-screen w-full max-w-[600px] flex flex-col border-l border-r border-gray-800 ">
      <h1 className="text-2xl font-bold p-3 backdrop-blur  bg-black/10 sticky top-0">
        Home
      </h1>
      <div className="border-b-[.5px] border-t-[.5px] border-gray-400  relative flex  py-4 space-x-2 w-full ">
        <div className="w-10 h-10 bg-slate-400  rounded-full flex-none ml-3"></div>
        <div className="w-full flex-col flex ">
          <input
            type="text"
            placeholder="What is happening?!"
            className="border-b[0.5px] border-gray-400 w-full h-full bg-transparent p-4 border-none outline-none placeholder:text-gray-600 placeholder:text-2xlS"
          />

          <div className="w-full  justify-between items-center flex pr-4">
            <div className="w-full "></div>
            <div>
              <button className="  rounded-3xl px-4 py-2 bg-twitter  text-lg  hover:bg-opacity-70 transition duration-200">
                post
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className=" ">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className=" flex flex-colspace-x-4 border-t-[.5px] border-b-[0.5pxS] px-4 border-gray-800 mr-2 "
          >
            <div className=" h-full pt-4">
              <div className="w-10 h-10 bg-slate-400  rounded-full  "></div>
            </div>
            <div className="m-2 ">
              <div className="flex items-center space-x-3 mb-6 mt-4">
                <div className="flex space-x-2 w-full items-center justify-between">
                  <div className="flex space-x-2">
                    <div>mohamedtaj</div>
                    <div className=" font-thin  text-gray-300 text-lg">
                      @mohamedtaj
                    </div>
                    <div className=" font-thin text-gray-300 text-lg">
                      1 hr ago
                    </div>
                  </div>

                  <div className=" hover:bg-white/10  transition-200 rounded-full cursor-pointer p-2">
                    <BsThreeDots />
                  </div>
                </div>
              </div>
              <div className="w-full space-y-4 space-x-4">
                <div className=" font-normal text-white text-lg">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Molestiae aliquam atque labore doloremque, dolor quidem velit
                  est. Reprehenderit, recusandae voluptas tempora non mollitia
                  rem, soluta assumenda nisi, architecto doloribus corrupti.
                </div>
                <div className="bg-slate-400 aspect-square h-88 rounded-xl "></div>
                <div className="w-full flex space-x-2 justify-around ">
                  <div className="hover:bg-white/10  transition-200 rounded-full cursor-pointer p-2">
                    <BsChat />
                  </div>
                  <div className="hover:bg-white/10  transition-200 rounded-full cursor-pointer p-2">
                    <AiOutlineRetweet />
                  </div>
                  <div className="hover:bg-white/10  transition-200 rounded-full cursor-pointer p-2">
                    <AiOutlineHeart />
                  </div>
                  <div className="hover:bg-white/10  transition-200 rounded-full cursor-pointer p-2">
                    <IoStatsChart />
                  </div>
                  <div className="hover:bg-white/10  transition-200 rounded-full cursor-pointer p-2">
                    <IoShareOutline />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default MainSection;

import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";

const RightSide = () => {
  return (
    <section className="w-[30%] flex flex-col h-screen items-stretch px-6">
      <div className="sticky top-2">
        <div className="flex w-full my-4 items-center justify-center space-x-4 bg-neutral-800 rounded-3xl pl-4">
          <IoIosSearch className="w-5 h-5 text-gray-400" />
          <input
            type="text"
            name=""
            id=""
            className="bg-transparent h-10 text-gray-600 text-sm focus:border-twitter border-none outline-none"
            placeholder="Search"
          />
        </div>
        <div className="flex flex-col bg-neutral-900 rounded-xl pt-4">
          <h2 className="font-bold px-4">What is happening</h2>
          <div>
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="hover:bg-neutral-800 flex justify-between space-y-2 p-4 rounded-xl"
              >
                <div className="flex flex-col">
                  <div className="text-lg">Trending {i + 1}</div>
                  <div className="text-sm text-neutral-400">35.6k</div>
                </div>
                <div>
                  <BsThreeDots />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col bg-neutral-900 pt-4 my-4 rounded-xl">
          <h2 className="font-bold px-4">Who to follow</h2>
          <div>
            {Array.from({ length: 3 }).map((_, i) => (
              <div className="flex justify-between py-4 px-4">
                <div className="flex space-x-2 items-center">
                  <div className="bg-slate-400 rounded-full w-10 h-10"></div>
                  <div>
                    <div className="text-bold">Ronaldo</div>
                    <div className="text-sm text-gray-400">@cr7-ronaldo</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <button className="bg-white text-black h-8 w-20 rounded-2xl text-sm">
                    Follow
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RightSide;

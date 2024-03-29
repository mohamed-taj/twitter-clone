import React from "react";
import Link from "next/link";

import { BiHomeCircle, BiUser } from "react-icons/bi";
import {
  BsBell,
  BsBookmark,
  BsThreeDots,
  BsTwitter,
  BsTwitterX,
} from "react-icons/bs";
import { CiTwitter } from "react-icons/ci";
import { HiOutlineHashtag } from "react-icons/hi";
import { HiEnvelope, HiMagnifyingGlass } from "react-icons/hi2";

const NavData = [
  {
    title: "Home",
    icon: BiHomeCircle,
  },
  {
    title: "Expolore",
    icon: HiMagnifyingGlass,
  },
  {
    title: "Notification",
    icon: BsBell,
  },
  {
    title: "Message",
    icon: HiEnvelope,
  },
  {
    title: "Profile",
    icon: BiUser,
  },
  {
    title: "Bookmarks",
    icon: BsBookmark,
  },
];

const LeftSideBar = () => {
  return (
    <section className="w-[25%] flex flex-col h-screen items-stretch justify-between space-y-2 py-6 ">
      <div className="flex flex-col space-y-2 mt-6">
        <Link href="/">
          <BsTwitterX className="ml-2 w-9 h-9" />
        </Link>

        {NavData.map((item) => {
          return (
            <Link
              key={item.title}
              href={`/${item.title.toLocaleLowerCase()}`}
              className="hover:bg-white/10  transition-200 rounded-xl p-2 flex items-center justify-start  w-full space-x-2 "
            >
              <div>
                <item.icon />
              </div>
              <div>{item.title}</div>
            </Link>
          );
        })}

        <button className=" w-[200px] h-[50px] rounded-3xl  bg-twitter  text-2xl text-center hover:bg-opacity-70 transition duration-200 ">
          Post
        </button>
      </div>

      <button className=" flex   justify-between items-center mr-5 space-x-2 rounded-3xl  bg-transparent   text-center hover:bg-white/10 transition duration-200 ">
        <div className="flex space-x-2 items-center">
          <div className="bg-slate-500 w-8 h-8 rounded-full"></div>
          <div className=" text-left">
            <div className="text-xl">Mohamed Taj</div>
            <div className=" text-sm font-thin">@mohamedtaj</div>
          </div>
        </div>
        <div className="pr-5">
          <BsThreeDots />
        </div>
      </button>
    </section>
  );
};

export default LeftSideBar;

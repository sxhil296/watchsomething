"use client";

import { Share2 } from "lucide-react";
import Image from "next/image";

const Header = () => {
  return (
    <header className="fixed px-6 py-2 w-full top-6">
      <div className="flex justify-between items-center">
        <div className="flex gap-[10px] justify-center items-center">
          <Image className="text-white" src="/tv.svg" width={48} height={48} alt="tv logo" />
          <div className="text-2xl font-bold text-white flex flex-col justify-center leading-8">
            <p>Watch Something</p>
            <p>Wonderful</p>
          </div>
        </div>
        <button className="px-4 py-2 text-[#f8e66e] border-2 border-[#f8e66e] hover:bg-[#f8e66e] hover:text-black duration-200 font-medium rounded-3xl flex justify-center items-center gap-2">
          <span>Share</span>
          <Share2 />
        </button>
      </div>
    </header>
  );
};

export default Header;

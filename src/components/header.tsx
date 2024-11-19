import React from "react";
import { Share2, Tv } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed px-4 py-2 w-full top-0 ">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 justify-center items-center">
          <Tv className="text-white" size={48}/>
          <div className="text-2xl font-bold text-white flex flex-col leading-6 justify-center">
            <p className="">Watch Something</p>
            <p>Wonderful</p>
          </div>
        </div>
        <button className="px-4 py-2 text-[#f8e66e] border-2 border-[#f8e66e] font-bold rounded-3xl flex justify-center items-center gap-2">
          <span> Share</span>
          <Share2 />
        </button>
      </div>
    </header>
  );
};

export default Header;

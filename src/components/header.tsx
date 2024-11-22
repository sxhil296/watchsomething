"use client";

import { Share2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import ShareModal from "./shareModal";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  // Toggle the modal open/close
  const handleModalToggle = () => {
    setIsModalOpen((prev) => !prev);
  };
  return (
    <header className="fixed px-4 md:px-6 py-2 w-full top-6">
      <div className="flex justify-between items-center">
        <div className="flex gap-[10px] justify-center items-center">
          <Image
            className="text-white"
            src="/tv.svg"
            width={48}
            height={48}
            alt="tv logo"
          />
          <div className="text-xl md:text-2xl font-bold text-white flex flex-col justify-center leading:4 md:leading-8">
            <p>Watch Something</p>
            <p>Wonderful</p>
          </div>
        </div>
        <button
          onClick={handleModalToggle}
          className="px-4 py-2 text-[#f8e66e] border-2 border-[#f8e66e] hover:bg-[#f8e66e] hover:text-black duration-200 font-medium rounded-3xl flex justify-center items-center gap-2"
        >
          <span>Share</span>
          <Share2 />
        </button>
        {isModalOpen && <ShareModal handleModalToggle={handleModalToggle} />}
      </div>
    </header>
  );
};

export default Header;

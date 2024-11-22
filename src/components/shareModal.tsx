// "use client";

import { useState } from "react";
import { FaFacebookSquare, FaRedditSquare, FaTelegram } from "react-icons/fa";
import { FaLinkedin, FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import { IoCheckmarkDoneSharp, IoCopyOutline } from "react-icons/io5";
import {
  FacebookShareButton,
  LinkedinShareButton,
  RedditShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

interface ShareModalProps {
  // isModalOpen: boolean;
  handleModalToggle: () => void;
}

export default function ShareModal({ handleModalToggle }: ShareModalProps) {
  const shareUrl = "https://watchsomething.vercel.app";
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(shareUrl).then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
        handleModalToggle();
      }, 2000);
    });
  };

  return (
    <main className="top-[100px] right-10 w-[300px] h-[130px] fixed bg-white p-4 rounded-md shadow-md ">
      <div className="flex flex-col gap-4 justify-between h-full">
        {/* input and copy btn */}
        <div className="flex gap-2 justify-center place-items-center border  rounded-md w-full">
          <input
            type="text"
            className=" p-2 outline-none w-full rounded-md text-sm font-thin"
            value={shareUrl}
            onChange={() => {
              return;
            }}
          />
          <span
            className="pr-2 cursor-pointer hover:scale-105"
            onClick={handleCopy}
          >
            {copied ? (
              <IoCheckmarkDoneSharp className="text-blue-500" />
            ) : (
              <IoCopyOutline />
            )}
          </span>
        </div>
        {/* social icons */}
        <div className="flex gap-2 justify-between">
          <FacebookShareButton url={shareUrl} className="">
            <FaFacebookSquare
              size={30}
              className="text-blue-600 hover:scale-105"
            />
          </FacebookShareButton>
          <TwitterShareButton url={shareUrl}>
            <FaXTwitter size={30} className="text-black hover:scale-105" />
          </TwitterShareButton>
          <LinkedinShareButton url={shareUrl} className="">
            <FaLinkedin size={30} className="text-blue-600 hover:scale-105" />
          </LinkedinShareButton>
          <RedditShareButton url={shareUrl} className="">
            <FaRedditSquare
              size={30}
              className="text-orange-600 hover:scale-105"
            />
          </RedditShareButton>
          <TelegramShareButton url={shareUrl} className="">
            <FaTelegram size={30} className="text-blue-400 hover:scale-105" />
          </TelegramShareButton>
          <WhatsappShareButton url={shareUrl} className="">
            <FaWhatsapp size={30} className="text-green-500 hover:scale-105" />
          </WhatsappShareButton>
        </div>
      </div>
    </main>
  );
}

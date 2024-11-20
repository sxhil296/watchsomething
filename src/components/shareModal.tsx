import React from "react";
import {  Copy } from "lucide-react";


const ShareModal = ({ isOpen, link, onCopyLink }) => {
  if (!isOpen) return null; 

  return (
    <div className="absolute top-16 right-4 bg-white shadow-lg p-4 rounded-xl w-[250px] z-10">
      <div className="flex flex-col gap-4">
     
       

  
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={link}
            readOnly
            className="border border-gray-300 p-2 rounded-l-xl w-full"
          />
          <button
            onClick={onCopyLink}
            // onClick={onClose}
            className="bg-[#f8e66e] p-2 rounded-r-xl"
          >
            <Copy size={16} color="black" />
          </button>
        </div>

    
     
      </div>
    </div>
  );
};

export default ShareModal;

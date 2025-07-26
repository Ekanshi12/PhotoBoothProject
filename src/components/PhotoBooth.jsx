import React, { useState } from "react";
import Webcam from "react-webcam";
import PhotoStudio from "./PhotoStudio";
import { CircleDollarSign } from 'lucide-react';
import "./PhotoBooth.css";
import { div } from "framer-motion/client";

const PhotoBooth = () => {
  const [coinInserted, setCoinInserted] = useState(false);
  const [curtainOpen, setCurtainOpen] = useState(false);
  const [showStudio, setShowStudio] = useState(false);

  const handleInsertClick = () => setCoinInserted(true);

  const handleCoinClick = () => {
    setCurtainOpen(true);

    setTimeout(() => {
      setShowStudio(true);
    }, 1000);
  };

  if (showStudio) {
    return <PhotoStudio />;
  }

  return (
    <div className="text-[#f5f5dc] min-h-screen flex flex-col items-center justify-center bg-[#4b3429]">
      <div className="font-pacifico text-4xl tracking-[8px] h-30">
        My PhotoBooth
      </div>
      
      <div className="flex border-[4px] border-[#2b1d17] rounded-[10px] overflow-hidden w-[600px] h-[400px]">
        <div className="w-[120px] flex flex-col items-center justify-center font-mono text-[12px] p-[10px]">
          {!coinInserted ? (
            <div>
              <p className="flex items-center justify-center gap-1 text-center text-[#f5f5dc] text-xs font-mono leading-tight " onClick={handleInsertClick}>
                INSERT COIN <CircleDollarSign className="w-3 h-3 text-yellow-400" />
              </p>
              
              <div className="w-19 h-1 bg-black rounded-sm mx-auto mt-2 shadow-md"></div>
            </div>
          ) : (
            <div className="coin" onClick={handleCoinClick}></div>
          )}
        </div>

        <div className="curtain-wrapper">
          <Webcam
            audio={false}
            screenshotFormat="image/jpeg"
            className="webcam-preview"
          />
          <div className={`curtain ${curtainOpen ? "open" : ""}`} />
        </div>
      </div>
    </div>
  );
};

export default PhotoBooth;
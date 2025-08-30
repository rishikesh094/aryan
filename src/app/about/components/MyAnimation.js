"use client";

import Lottie from "lottie-react";
import animationData from "@/animations/AboutPageAnimation.json"

export default function MyAnimation() {
  return (
    <div className="flex justify-center items-center">
      <Lottie 
        animationData={animationData} 
        loop={true} 
        className="w-[400px] h-[400px]" 
      />
    </div>
  );
}

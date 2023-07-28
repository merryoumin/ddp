"use client";

import Link from "next/link";

export default function Detail() {
  return (
    <div className="w-[390px] h-[844px] relative opacity-80 bg-white rounded-3xl">
      <div className="w-[390px] h-[844px] left-0 top-0 absolute bg-neutral-900 bg-opacity-70 rounded-3xl" />
      <div className="w-[54px] h-[0px] left-[99px] top-[-44px] absolute border border-white"></div>
      <div className="w-10 h-10 left-[16px] top-[64px] absolute">
        <div className="w-10 h-10 left-0 top-0 absolute bg-black bg-opacity-60 rounded-full" />
        <div className="w-5 h-5 left-[10px] top-[10px] absolute" />
      </div>
      <div className="w-[264px] h-[0px] left-[63px] top-[793px] absolute border border-stone-300"></div>
      <div className="w-[88px] h-[0px] left-[63px] top-[793px] absolute border border-black"></div>
    </div>
  );
}

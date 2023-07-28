"use client";

import Link from "next/link";

export default function Welcome() {
  return (
    <div className="w-[390px] h-[844px] relative bg-white rounded-3xl border-neutral-800">
      <div className="w-[95px] h-1 left-[148px] top-[665px] absolute">
        <div className="w-[50px] h-1 left-0 top-0 absolute bg-neutral-900 rounded-[10px]" />
        <div className="w-2.5 h-1 left-[55px] top-0 absolute bg-zinc-300 rounded-[10px]" />
        <div className="w-2.5 h-1 left-[70px] top-0 absolute bg-zinc-300 rounded-[10px]" />
        <div className="w-2.5 h-1 left-[85px] top-0 absolute bg-zinc-300 rounded-[10px]" />
      </div>
      <div className="w-[280px] h-[460px] left-[55px] top-[121px] absolute bg-stone-300 rounded" />
      <div className="left-[111px] top-[351px] absolute text-black text-xl font-bold tracking-tight">
        Pamphlet images
      </div>
      <div className="w-[342px] h-[123px] left-[24px] top-[695px] absolute">
        <div className="w-[342px] h-[54px] py-[18px] left-0 top-[69px] absolute bg-white rounded-[30px] border border-black justify-center items-center inline-flex">
          <div className="text-center text-black text-sm font-semibold leading-[18.20px] tracking-wider">
            Skip
          </div>
        </div>
        <div className="w-[342px] h-[54px] left-0 top-0 absolute bg-neutral-900 rounded-[30px]" />
        <div className="w-[42px] h-4 left-[150px] top-[19px] absolute text-center text-white text-sm font-semibold leading-[18.20px] tracking-wider">
          Next
        </div>
      </div>
    </div>
  );
}

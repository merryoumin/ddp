"use client";

import Link from "next/link";

export default function List() {
  return (
    <div className="relative bg-white rounded-3xl">
      <div className="left-[172px] top-[194px] absolute text-black text-sm font-semibold leading-snug">
        List
      </div>
      <div className="w-[390px] h-[110px] left-0 top-0 absolute shadow">
        <div className="w-[390px] h-[110px] left-0 top-0 absolute bg-white" />
        <div className="w-[390px] h-11 left-0 top-0 absolute">
          <div className="w-[219px] h-[30px] left-[85px] top-[-2px] absolute"></div>

          <div className="w-[54px] h-[21px] left-[21px] top-[12px] absolute rounded-[32px] flex-col justify-start items-start flex" />
        </div>
        <div className="left-[132px] top-[66px] absolute text-black text-2xl font-semibold leading-snug">
          Catagories
        </div>
      </div>
      <div className="w-[390px] h-[0px] left-0 top-[164px] absolute border border-stone-300"></div>
      <div className="w-[99px] h-[0px] left-0 top-[164px] absolute border border-neutral-800"></div>
      <div className="w-[337px] h-[165px] left-[26px] top-[235px] absolute">
        <div className="w-[337px] h-[165px] left-0 top-0 absolute bg-neutral-200 rounded" />
        <div className="w-[67px] h-[38px] left-[244px] top-[102px] absolute justify-center items-center gap-1.5 inline-flex">
          <div className="flex-col justify-start items-end gap-0.5 inline-flex">
            <div className="text-center text-black text-base font-semibold capitalize leading-none">
              Title
            </div>
            <div className="text-center text-black text-[10px] font-normal leading-[10px]">
              lodcation
            </div>
          </div>
          <div className="w-6 h-6 relative origin-top-left -rotate-90" />
        </div>
      </div>
      <div className="w-[389px] left-[26px] top-[128px] absolute justify-start items-start gap-[26px] inline-flex">
        <div className="text-black text-sm font-semibold leading-[18px]">
          Palace (5)
        </div>
        <div className="text-neutral-400 text-sm font-semibold leading-[18px]">
          subtitle
        </div>
      </div>
      <div className="w-8 h-8 left-[46px] top-[255px] absolute">
        <div className="w-8 h-8 left-0 top-0 absolute bg-neutral-600 rounded-full" />
        <div className="w-4 h-4 left-[8px] top-[8px] absolute" />
      </div>
    </div>
  );
}

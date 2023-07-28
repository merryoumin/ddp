"use client";

import Link from "next/link";

export default function Information() {
  return (
    <div className="w-[390px] h-[844px] relative opacity-80 bg-neutral-50 rounded-3xl">
      <div className="w-[390px] h-[403px] left-0 top-0 absolute bg-zinc-300" />
      <div className="w-[390px] h-11 left-0 top-[-1px] absolute">
        <div className="w-[54px] h-[21px] left-[21px] top-[12px] absolute rounded-[32px] flex-col justify-start items-start flex" />
      </div>
      <div className="w-10 h-10 left-[16px] top-[64px] absolute">
        <div className="w-10 h-10 left-0 top-0 absolute bg-black bg-opacity-60 rounded-full" />
        <div className="w-5 h-5 left-[10px] top-[10px] absolute" />
      </div>
      <div className="w-[54px] h-[0px] left-[99px] top-[-44px] absolute border border-white"></div>
      <div className="w-[391px] h-[470px] left-[-1px] top-[374px] absolute">
        <div className="w-[390px] h-[470px] left-0 top-0 absolute bg-white rounded-tl-3xl rounded-tr-3xl shadow" />
        <div className="w-[391px] h-[470px] left-0 top-0 absolute">
          <div className="w-[390px] h-[470px] left-0 top-0 absolute bg-white rounded-tl-3xl rounded-tr-3xl shadow" />
          <div className="w-[390px] h-[413px] left-[1px] top-[21px] absolute">
            <div className="w-[390px] h-[0px] left-0 top-[156px] absolute border border-black"></div>
            <div className="w-[327px] h-[100px] left-[23px] top-[31px] absolute">
              <div className="w-[327px] h-[39.60px] left-0 top-0 absolute text-black text-xl font-semibold capitalize leading-tight">
                □ To The Future
                <br />
                [2023 DDP 45133 Collaboration]
              </div>
              <div className="w-[220.69px] h-[35.64px] left-0 top-[64.36px] absolute flex-col justify-start items-start gap-1.5 inline-flex">
                <div>
                  <span className="text-black text-sm font-light uppercase leading-normal">
                    D
                  </span>
                  <span className="text-black text-sm font-light capitalize leading-normal">
                    DP design Lab 3rd Floor
                  </span>
                </div>
                <div className="justify-center items-center gap-1.5 inline-flex">
                  <div className="text-black text-xs font-light leading-3">
                    2023-07-31 ~ 2023-09-03
                  </div>
                  <div className="w-4 h-4 relative" />
                </div>
              </div>
            </div>
            <div className="w-[100px] h-9 px-[3px] py-3 left-[260px] top-[95px] absolute bg-black rounded-[20px] justify-center items-center gap-2 inline-flex">
              <div className="text-white text-sm font-semibold leading-[18px]">
                View
              </div>
            </div>
            <div className="w-6 h-6 left-[326px] top-0 absolute justify-start items-start gap-6 inline-flex">
              <div className="w-6 h-6 relative" />
            </div>
            <div className="w-6 h-6 left-[350px] top-0 absolute" />
            <div className="w-[346px] h-[235px] left-[22px] top-[178px] absolute">
              <div className="w-[346px] h-[156px] left-0 top-0 absolute justify-start items-start gap-[19px] inline-flex">
                <div className="w-[123px] h-[156px] text-black text-base font-medium leading-snug">
                  Location <br />
                  Operation time <br />
                  Holiday
                  <br />
                  Number
                  <br />
                  Admission Fee
                </div>
                <div className="w-[204px] h-[156px] text-neutral-600 text-sm font-medium leading-snug">
                  281, Eulji-ro, Jung-gu, 04566
                  <br />
                  10:00 ~ 20:00
                  <br />
                  No Holidays
                  <br />
                  +82-2-2153-0000
                  <br />
                  Free
                </div>
              </div>
              <div className="w-[346px] h-12 px-[3px] py-3 left-0 top-[187px] absolute bg-white rounded-2xl border border-black justify-center items-center gap-2 inline-flex">
                <div className="text-black text-center text-sm font-semibold ">
                  Share
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

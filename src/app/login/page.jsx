"use client";

import Link from "next/link";

export default function Login() {
  const onClickLogin = () => {
    console.log("로그인 가즈아~~~");
  };

  return (
    <div className="w-[390px] h-[844px] relative bg-white rounded-3xl border-neutral-800 border-4">
      <button
        onClick={onClickLogin}
        className="w-[342px] h-[54px] left-[24px] top-[731px] absolute"
      >
        <div className="w-[342px] h-[54px] left-0 top-0 absolute bg-white rounded-[30px] border border-black">
          <div className="w-[58.39px] h-[16.20px] left-[240.86px] top-[19px] absolute text-neutral-900 text-sm font-semibold">
            Sign in
          </div>
        </div>
      </button>
      <Link href="/register">
        <button className="w-[197px] h-[54px] left-[24px] top-[731px] absolute">
          <div className="w-[197px] h-[54px] left-0 top-0 absolute bg-neutral-900 rounded-[30px]" />
          <div className="w-[71.54px] h-[16.20px] left-[63px] top-[19px] absolute text-white text-sm font-semibold tracking-tight">
            Register
          </div>
        </button>
      </Link>
      <div className="w-[276px] left-[48px] top-[50px] absolute text-black text-4xl font-bold tracking-wide">
        쏼라쏼라쏼라쏼라쏼라쏼라쏼라쏼라쏼라쏼라쏼라쏼라쏼라쏼라쏼라쏼라쏼라쏼라쏼라쏼라쏼라쏼라쏼라쏼라쏼라쏼라쏼라쏼라쏼라쏼라쏼라쏼라쏼라쏼라쏼라
      </div>
    </div>
  );
}

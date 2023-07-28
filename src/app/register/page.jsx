"use client";

import Link from "next/link";

export default function Register() {
  const onClickRegister = () => {
    console.log("db저장 및 회원가입완료");
  };

  return (
    <div className="w-[390px] h-[844px] relative bg-white rounded-3xl border-neutral-800 border-4">
      <div className="left-[137px] top-[154px] absolute text-black text-3xl font-bold tracking-wide">
        Sign Up
      </div>
      {/* <Link href="/login"> */}
      <button
        onClick={onClickRegister}
        className="w-[342px] h-[54px] left-[24px] top-[513px] absolute"
      >
        <div className="w-[342px] h-[54px] left-0 top-0 absolute bg-neutral-900 rounded-[30px] hover:bg-neutral-700" />
        <div className="w-[116px] h-4 left-[116px] top-[19px] absolute text-white text-sm font-semibold tracking-tight">
          Create account
        </div>
      </button>
      {/* </Link> */}
      <div className="left-[70px] top-[603px] absolute">
        <span className="text-black text-opacity-50 text-sm font-normal tracking-wide">
          Already have an account?
        </span>
        <span className="text-black text-sm font-normal tracking-wide"> </span>
        <Link href="/login">
          <button className="text-black text-sm font-normal underline tracking-wide">
            Login in
          </button>
        </Link>
      </div>

      <form className="w-[328px] h-[50px] left-[31px] top-[223px] absolute">
        <div className="w-[328px] h-[50px] left-0 top-0 absolute rounded-[10px] border border-zinc-300" />
        <input
          type="text"
          placeholder="Enter username"
          className="left-[15px] top-[18px] absolute opacity-50 text-black text-xs font-light tracking-tight"
        />
      </form>
      <form className="w-[328px] h-[50px] left-[31px] top-[353px] absolute">
        <div className="w-[328px] h-[50px] left-0 top-0 absolute rounded-[10px] border border-zinc-300" />
        <input
          type="text"
          placeholder="Password"
          className="left-[15px] top-[18px] absolute opacity-50 text-black text-xs font-light tracking-tight"
        />
        <div className="w-[15px] h-[15px] left-[298px] top-[18px] absolute justify-center items-center inline-flex">
          <div className="w-[15px] h-[15px] relative"></div>
        </div>
      </form>
      <form className="w-[328px] h-[50px] left-[31px] top-[288px] absolute">
        <div className="w-[328px] h-[50px] left-0 top-0 absolute rounded-[10px] border border-zinc-300" />
        <input
          type="text"
          placeholder="Enter email"
          className="left-[15px] top-[18px] absolute opacity-50 text-black text-xs font-light tracking-tight"
        />
      </form>
    </div>
  );
}

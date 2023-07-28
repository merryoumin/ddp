"use client";

import Link from "next/link";

export default function Home() {
  const onClickNext = () => {
    console.log("다음 슬라이드");
  };

  return (
    <div className="h-full flex justify-center items-center bg-red-300  rounded-3xl">
      Start Screen
    </div>
  );
}

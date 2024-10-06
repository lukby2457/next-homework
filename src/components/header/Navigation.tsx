import Link from "next/link";
import React from "react";

const Navigation = () => {
  return (
    <nav className="mx-auto flex justify-around w-[1200px]">
      <Link href={"/"}>홈</Link>
      <Link href={"/champions"}>챔피언</Link>
      <Link href={"/items"}>아이템</Link>
      <Link href={"/rotation"}>로테이션</Link>
    </nav>
  );
};

export default Navigation;

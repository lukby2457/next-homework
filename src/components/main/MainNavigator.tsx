import Image from "next/image";
import Link from "next/link";
import React from "react";
import ItemImage from "@/public/images/itemImage.webp"

const MainNavigator = () => {
  return (
    <div className="flex flex-col gap-3">
      <Link className="mx-auto text-center" href={"/champions"}>
        <Image
          src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Garen_0.jpg`}
          alt="championImage"
          width={550}
          height={310}
        />
        <h4 className="text-lg text-[#c8aa6e] mt-4">
          챔피언 목록 페이지로 이동
        </h4>
      </Link>
      <Link className="mx-auto text-center" href={"/items"}>
        <Image src={ItemImage} alt="ItemImage" width={550} height={310} />
        <h4 className="text-lg text-[#c8aa6e] mt-4">
          아이템 목록 페이지로 이동
        </h4>
      </Link>
      <Link className="mx-auto text-center" href={"/rotation"}>
        <Image
          src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ashe_0.jpg`}
          alt="championImage"
          width={550}
          height={310}
        />
        <h4 className="text-lg text-[#c8aa6e] mt-4">
          이번주 로테이션 목록 페이지로 이동
        </h4>
      </Link>
    </div>
  );
};

export default MainNavigator;

import { addImgChampion } from "@/types/Champion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ChampionCard = ({ champion }: { champion: addImgChampion }) => {
  return (
    <Link
      className="w-[180px] h-[235px] border-white border-[1px]"
      href={`/champions/${champion.id}`}
    >
      <div>
        <Image
          src={champion.imgPath}
          alt={champion.name}
          width={100}
          height={100}
          className="mx-auto mt-[19px]"
        />
        <h4 className="cardTitle">{champion.name}</h4>
        <p className="cardContent mb-[19px]">{champion.title}</p>
      </div>
    </Link>
  );
};

export default ChampionCard;

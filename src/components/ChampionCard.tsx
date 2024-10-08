import { addImgChampion } from "@/types/Champion";
import Link from "next/link";
import React from "react";

const ChampionCard = ({ champion }: { champion: addImgChampion }) => {
  return (
    <Link
      className="w-[180px] h-[235px] border-white border-[1px]"
      href={`/champions/${champion.id}`}
    >
      <div>
        <img
          src={champion.imgPath}
          alt={champion.name}
          className="mx-auto mt-[19px] w-[100px]"
        />
        <h4 className="cardTitle">{champion.name}</h4>
        <p className="cardContent mb-[19px]">{champion.title}</p>
      </div>
    </Link>
  );
};

export default ChampionCard;

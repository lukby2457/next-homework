import { Champion } from "@/types/Champion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type ChampionCardProps = {
  champion: Champion;
};

const ChampionCard: React.FC<ChampionCardProps> = ({ champion }) => {
  return (
    <Link
      className="w-[180px] h-[150px] border-white border-[1px]"
      href={`/champions/${champion.id}`}
    >
      <div>
        <Image
          src={`https://ddragon.leagueoflegends.com/cdn/14.19.1/img/champion/${champion.id}.png`}
          alt={champion.name}
          width={100}
          height={100}
          className="mx-auto"
        />
        <h4>{champion.name}</h4>
        <p>{champion.title}</p>
      </div>
    </Link>
  );
};

export default ChampionCard;

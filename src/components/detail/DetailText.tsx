import { ChampionDetail } from "@/types/Champion";
import React from "react";

const DetailText = ({ data }: { data: ChampionDetail }) => {
  return (
    <>
      <div className="flex justify-between w-[880px]">
        <h1 className="font-bold text-5xl mb-0">{data.name}</h1>
        <p className="flex items-end text-2xl text-[#c8aa6e]">{data.title}</p>
      </div>
      <div className="w-[880px] cardContent m-0">{data.lore}</div>
    </>
  );
};

export default DetailText;

import ChampionCard from "@/components/ChampionCard";
import { Champion } from "@/types/Champion";
import { fetchChampionList } from "@/utils/serverApi";
import React from "react";

const ChampionsPage = async () => {
  const data: Champion[] = await fetchChampionList();

  return (
    <>
      <div>ChampionsPage</div>
      <div className="grid grid-cols-6 gap-6 max-w-[1200px] mx-auto justify-items-center mb-10">
        {data.map((champion: Champion) => {
          return <ChampionCard key={champion.id} champion={champion} />;
        })}
      </div>
    </>
  );
};

export default ChampionsPage;

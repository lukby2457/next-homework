import ChampionCard from "@/components/ChampionCard";
import { addImgChampion } from "@/types/Champion";
import { fetchChampionList } from "@/utils/serverApi";
import React from "react";

const ChampionsPage = async () => {
  const data: addImgChampion[] = await fetchChampionList();

  return (
    <main className="main">
      <div>ChampionsPage</div>
      <div className="grid grid-cols-6 gap-6 max-w-[1200px] mx-auto justify-items-center mb-10">
        {data.map((champion: addImgChampion) => {
          return <ChampionCard key={champion.id} champion={champion} />;
        })}
      </div>
    </main>
  );
};

export default ChampionsPage;

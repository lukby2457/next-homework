import ChampionCard from "@/components/ChampionCard";
import { addImgChampion } from "@/types/Champion";
import { fetchChampionList } from "@/utils/serverApi";
import React from "react";

const ChampionsPage = async () => {
  const data: addImgChampion[] = await fetchChampionList();

  return (
    <main className="main">
      <div className="pageTitle">챔피언 목록</div>
      <div className="cardContainer grid-cols-6 gap-6">
        {data.map((champion: addImgChampion) => {
          return <ChampionCard key={champion.id} champion={champion} />;
        })}
      </div>
    </main>
  );
};

export default ChampionsPage;

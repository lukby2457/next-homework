"use client";

import ChampionCard from "@/components/ChampionCard";
import { addImgChampion } from "@/types/Champion";
import { getChampionRotation } from "@/utils/riotApi";
import React, { useEffect, useState } from "react";

const fetchRotation = async () => {
  const url = window.location.origin;
  const res = await getChampionRotation(url);
  console.log(res);
  // if(!res.ok) {
  //   console.log(res);
  // }
  return res;
};

const RotationPage = () => {
  const [champions, setChampions] = useState<addImgChampion[]>([]);

  useEffect(() => {
    fetchRotation().then(setChampions);
  }, []);

  if (champions.length === 0) return <main className="main">Loading...</main>;

  return (
    <main className="main">
      <h1 className="pageTitle">챔피언 로테이션</h1>
      <div className="cardContainer grid-cols-5 gap-16">
        {champions.map((champion: addImgChampion) => {
          return <ChampionCard key={champion.id} champion={champion} />;
        })}
      </div>
    </main>
  );
};

export default RotationPage;

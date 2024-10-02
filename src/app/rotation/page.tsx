"use client";

import ChampionCard from "@/components/ChampionCard";
import { addImgChampion } from "@/types/Champion";
import { getChampionRotation } from "@/utils/riotApi";
import React, { useEffect, useState } from "react";

const fetchRotation = async () => {
  const url = window.location.origin;
  const data = await getChampionRotation(url);
  return data;
};

const RotationPage = () => {
  const [champions, setChampions] = useState<addImgChampion[]>([]);

  useEffect(() => {
    fetchRotation().then(setChampions);
  }, []);

  if (champions.length === 0) return <main className="main">Loading...</main>;

  return (
    <main className="main">
      <div>RotationPage</div>
      <div className="grid grid-cols-5 gap-16 max-w-[1200px] mx-auto justify-items-center">
        {champions.map((champion: addImgChampion) => {
          return <ChampionCard key={champion.id} champion={champion} />;
        })}
      </div>
    </main>
  );
};

export default RotationPage;

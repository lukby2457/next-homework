"use client";

import ChampionCard from "@/components/ChampionCard";
import { Champion } from "@/types/Champion";
import { getChampionRotation } from "@/utils/riotApi";
import React, { useEffect, useState } from "react";

const fetchRotation = async () => {
  const url = window.location.origin;
  const data = await getChampionRotation(url);
  return data;
};

const RotationPage = () => {
  const [champions, setChampions] = useState<Champion[]>([]);

  useEffect(() => {
    fetchRotation().then(setChampions);
  }, []);

  if (champions.length === 0) return <>Loading...</>;

  return (
    <>
      <div>RotationPage</div>
      <div className="grid grid-cols-5 gap-16 max-w-[1200px] mx-auto justify-items-center">
        {champions.map((champion: Champion) => {
          return <ChampionCard key={champion.id} champion={champion} />;
        })}
      </div>
    </>
  );
};

export default RotationPage;

"use server";

import { RotationChampionList } from "@/types/ChampionRotation";
import { fetchChampionList } from "./serverApi";

export async function getChampionRotation(baseUrl: string) {
  const championData = await fetchChampionList();
  console.log(championData);

  const res = await fetch(`${baseUrl}/api/rotation`);
  console.log(`${baseUrl}/api/rotation`);

  // if (!res.ok) {
  //   return { message: "please refresh this page" }
  // }

  const rotationData: RotationChampionList = await res.json();

  const rotationChampions = championData.filter((champion) =>
    rotationData.data.includes(Number(champion.key))
  );

  return rotationChampions;
}

"use server";

import { RotationChampionList } from "@/types/ChampionRotation";
import { fetchChampionList } from "./serverApi";

export async function getChampionRotation(baseUrl: string) {
  const championData = await fetchChampionList();

  const res = await fetch(`${baseUrl}/api/rotation`);

  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }

  const rotationData: RotationChampionList = await res.json();

  const rotationChampions = championData.filter((champion) =>
    rotationData.data.includes(Number(champion.key))
  );

  return rotationChampions;
}

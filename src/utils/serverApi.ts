"use server";

import { GetChampion, GetChampionDetail } from "@/types/Champion";
import { GetItem, Item } from "@/types/Items";

const version = "14.19.1"; 

export async function fetchChampionList() {
  const res = await fetch(`https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/champion.json`, {
    next: {
      revalidate: 24 * 60 * 60,
    }
  });
  const data: GetChampion = await res.json();

  return Object.values(data.data);
};

export async function fetchChampionDetail(id: string) {
  const res = await fetch(`https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/champion/${id}.json`, {
    cache: "no-store",
  });
  const data: GetChampionDetail = await res.json();

  return data.data[id];
}

export async function fetchItemList() {
  const res = await fetch(`https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/item.json`, {
    cache: "force-cache",
  });
  const data: GetItem = await res.json();
  const processData: Item[] = Object.values(data.data);
  const purchasableItems: Item[] = processData.filter((item) => item.gold.purchasable);

  return purchasableItems;
}
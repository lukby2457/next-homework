"use server";

import { Champion, GetChampion, GetChampionDetail } from "@/types/Champion";
import { GetItem, Item } from "@/types/Items";

const version = "14.19.1";

export async function fetchChampionList() {
  const res = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/champion.json`,
    {
      next: {
        revalidate: 24 * 60 * 60,
      },
    }
  );
  const data: GetChampion = await res.json();
  const championData: Champion[] = Object.values(data.data).sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return championData;
}

export async function fetchChampionDetail(id: string) {
  const res = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/champion/${id}.json`,
    {
      cache: "no-store",
    }
  );
  const data: GetChampionDetail = await res.json();

  return data.data[id];
}

export async function fetchItemList() {
  const res = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/item.json`,
    {
      cache: "force-cache",
    }
  );
  const data: GetItem = await res.json();
  const processData: Item[] = Object.values(data.data);
  const purchasableItems: Item[] = processData.filter(
    (item) => item.gold.purchasable
  );
  const uniqueItems: Item[] = purchasableItems
    .filter((item) => item.maps["11"])
    .reduce((acc: Item[], current) => {
      const x = acc.find((item) => item.name === current.name);
      if (!x) acc.push(current);
      return acc;
    }, [])
    .sort((a, b) => a.name.localeCompare(b.name));

  return uniqueItems;
}

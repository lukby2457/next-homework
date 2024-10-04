"use server";

import { BASE_URL } from "@/public/static";
import {
  addImgChampion,
  GetChampion,
  GetChampionDetail,
} from "@/types/Champion";
import { GetItem, Item } from "@/types/Items";

export async function getVersion() {
  const res = await fetch(
    `https://ddragon.leagueoflegends.com/api/versions.json`,
    {
      cache: "force-cache",
    }
  );
  const data: string[] = await res.json();
  return data[0];
}

export async function fetchChampionList() {
  const version = await getVersion();
  const res = await fetch(`${BASE_URL}/${version}/data/ko_KR/champion.json`, {
    next: {
      revalidate: 24 * 60 * 60,
    },
  });
  const data: GetChampion = await res.json();
  const championData: addImgChampion[] = Object.values(data.data)
    .sort((a, b) => a.name.localeCompare(b.name))
    .map((champion) => ({
      ...champion,
      imgPath: `${BASE_URL}/${version}/img/champion/${champion.id}.png`,
    }));

  return championData;
}

export async function fetchChampionDetail(id: string) {
  const version = await getVersion();
  const res = await fetch(
    `${BASE_URL}/${version}/data/ko_KR/champion/${id}.json`,
    {
      cache: "no-store",
    }
  );
  const data: GetChampionDetail = await res.json();

  return data.data[id];
}

export async function fetchItemList() {
  const version = await getVersion();
  const res = await fetch(`${BASE_URL}/${version}/data/ko_KR/item.json`, {
    cache: "force-cache",
  });
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

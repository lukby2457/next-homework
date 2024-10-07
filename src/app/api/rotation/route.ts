import { ChampionRotation } from "@/types/ChampionRotation";

const RIOT_API_KEY: string | undefined = process.env.NEXT_PUBLIC_RIOT_API_KEY;

export async function GET() {
  const res = await fetch(
    "https://kr.api.riotgames.com/lol/platform/v3/champion-rotations",
    {
      headers: {
        "X-Riot-Token": `${RIOT_API_KEY}`,
      },
    }
  );

  // if (!res.ok) {
  //   throw new Error(`Error: ${res.status} ${res.statusText}`);
  // }

  const data: ChampionRotation = await res.json();
  const newData = data.freeChampionIds;

  return Response.json({ data: newData });
}

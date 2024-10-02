import { ChampionRotation } from "@/types/ChampionRotation";

const RIOT_API_KEY: string | undefined = process.env.RIOT_API_KEY;

export async function GET() {
  const res = await fetch(
    "https://kr.api.riotgames.com/lol/platform/v3/champion-rotations",
    {
      cache: "no-store",
      headers: {
        "X-Riot-Token": `${RIOT_API_KEY}`,
      },
    }
  );

  const data: ChampionRotation = await res.json();
  const newData = data.freeChampionIds;

  return Response.json({ data: newData });
}

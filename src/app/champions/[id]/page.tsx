import { BASE_URL } from "@/public/static";
import { ChampionDetail } from "@/types/Champion";
import { fetchChampionDetail } from "@/utils/serverApi";
import Image from "next/image";
import React from "react";

type Props = {
  params: {
    id: string;
  };
};

const Detailpage = async ({ params }: Props) => {
  const data: ChampionDetail = await fetchChampionDetail(params.id);

  return (
    <main className="main">
      <div>{data.name}</div>
      <div>{data.title}</div>
      <Image
        src={`${BASE_URL}/img/champion/loading/${data.id}_0.jpg`}
        alt={data.name}
        width={308}
        height={560}
      />
      <div>{data.lore}</div>
      <div>
        <h4>Info</h4>
        <ul>
          <li>attack: {data.info.attack}</li>
          <li>defense: {data.info.defense}</li>
          <li>magic: {data.info.magic}</li>
          <li>difficulty: {data.info.difficulty}</li>
        </ul>
      </div>
    </main>
  );
};

export default Detailpage;

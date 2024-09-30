import { ChampionDetail } from '@/types/Champion';
import { fetchChampionDetail } from '@/utils/serverApi';
import Image from 'next/image';
import React from 'react'

type Props = {
  params: {
    id: string;
  }
}

const page = async ({ params }: Props) => {
  const data: ChampionDetail = await fetchChampionDetail(params.id);

  return (
    <>
      <div>{data.name}</div>
      <div>{data.title}</div>
      <Image 
        src={`https://ddragon.leagueoflegends.com/cdn/14.19.1/img/champion/${data.image.full}`}
        alt={data.name}
        width={200} 
        height={200} 
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
    </>
  )
}

export default page
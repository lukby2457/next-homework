"use client"

import { Champion } from '@/types/Champion';
import { getChampionRotation } from '@/utils/riotApi';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const fetchRotation = async () => {
  const data = await getChampionRotation();
  return data;
}

const RotationPage = () => {
  const [champions, setChampions] = useState<Champion[]>([]);

  useEffect(() => {
    fetchRotation().then(setChampions);
  }, []);

  if(champions.length === 0) return <>Loading...</>;

  return (
    <>
      <div>RotationPage</div>
      <div className='grid grid-cols-6 gap-5 max-w-[1200px] mx-auto'>
        {champions.map((champion: Champion) => {
          return (
            <Link className='w-[130px] h-[150px] border-white border-[1px]' key={champion.id} href={`/champions/${champion.id}`}>
              <div>
                <Image 
                  src={`https://ddragon.leagueoflegends.com/cdn/14.19.1/img/champion/${champion.id}.png`} 
                  alt={champion.name}
                  width={100} 
                  height={100} 
                />
                {champion.name}
              </div> 
            </Link> 
          )
        })}
      </div> 
    </>
  )
}

export default RotationPage
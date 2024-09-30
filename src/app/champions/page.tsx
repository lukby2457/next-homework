import { Champion } from '@/types/Champion';
import { fetchChampionList } from '@/utils/serverApi'
import Image from 'next/image';
import Link from 'next/link'
import React from 'react'

const ChampionsPage = async () => {
  const data: Champion[] = await fetchChampionList();

  return (
    <>
      <div>ChampionsPage</div>
      <div className='grid grid-cols-6 gap-5 max-w-[1200px] mx-auto'>
        {data.map((champion: Champion) => {
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

export default ChampionsPage
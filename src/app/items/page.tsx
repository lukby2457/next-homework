import { Item } from '@/types/Items';
import { fetchItemList } from '@/utils/serverApi'
import Image from 'next/image';
import React from 'react'

const ItemsPage = async () => {
  const data: Item[] = await fetchItemList();

  return (
    <>
      <div>ItemsPage</div>
      <div className='grid grid-cols-6 gap-1 max-w-[1200px] mx-auto'>
        {data.map((item: Item) => {
          return (
            <div key={item.image.full} className='w-[190px] min-h-[150px] max-h-[500px]'>
              <Image 
                src={`https://ddragon.leagueoflegends.com/cdn/14.19.1/img/item/${item.image.full}`}
                alt={item.image.full}
                width={100} 
                height={100} 
              />
              <h4>{item.name}</h4>
              <p>{item.plaintext}</p>
              <p>{item.gold.base}</p>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default ItemsPage
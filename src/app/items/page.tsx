import { BASE_URL } from "@/public/static";
import { Item } from "@/types/Items";
import { fetchItemList, getVersion } from "@/utils/serverApi";
import Image from "next/image";
import React from "react";

const ItemsPage = async () => {
  const version = await getVersion();
  const data: Item[] = await fetchItemList();

  return (
    <main className="main">
      <div>ItemsPage</div>
      <div className="grid grid-cols-6 gap-1  mx-auto justify-items-center">
        {data.map((item: Item) => {
          return (
            <div
              key={item.name}
              className="w-[160px] min-h-[150px] max-h-[500px] border-white border-[1px] mb-2"
            >
              <Image
                src={`${BASE_URL}/${version}/img/item/${item.image.full}`}
                alt={item.image.full}
                width={100}
                height={100}
                className="mx-auto"
              />
              <div className="min-h-[150px] max-h-[400px] flex flex-col justify-between">
                <h4>{item.name}</h4>
                <p>{item.plaintext}</p>
                <p>가격: {item.gold.base}</p>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default ItemsPage;

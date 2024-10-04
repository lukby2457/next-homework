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
      <div className="pageTitle">아이템 목록</div>
      <div className="cardContainer grid-cols-6 gap-8">
        {data.map((item: Item) => {
          return (
            <div
              key={item.name}
              className="w-[170px] min-h-[150px] max-h-[500px] border-white border-[1px]"
            >
              <Image
                src={`${BASE_URL}/${version}/img/item/${item.image.full}`}
                alt={item.image.full}
                width={100}
                height={100}
                className="mx-auto mt-5"
              />
              <div className="min-h-[150px] max-h-[400px] flex flex-col justify-between">
                <h4 className="cardTitle text-xl">{item.name}</h4>
                <p className="cardContent">{item.plaintext}</p>
                <div className="ml-2 flex gap-1 mt-2 pb-2">
                  <p>가격: </p><p className="text-yellow-400">{item.gold.base}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default ItemsPage;

import { BASE_URL } from "@/public/static";
import { Item } from "@/types/Items";
import React from "react";

const ItemCard = ({ item, version }: { item: Item, version: string }) => {
  return (
    <div
      className="w-[170px] min-h-[150px] max-h-[500px] border-white border-[1px]"
    >
      <img
        src={`${BASE_URL}/${version}/img/item/${item.image.full}`}
        alt={item.image.full}
        className="mx-auto mt-5 w-[100px]"
      />
      <div className="flex flex-col justify-between">
        <h4 className="cardTitle text-xl">{item.name}</h4>
        <p className="cardContent">{item.plaintext}</p>
        <div className="ml-2 flex gap-1 mt-2 pb-2">
          <p>가격: </p>
          <p className="text-yellow-400">{item.gold.base}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;

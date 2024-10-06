import ItemCard from "@/components/item/ItemCard";
import { Item } from "@/types/Items";
import { fetchItemList, getVersion } from "@/utils/serverApi";
import React from "react";

const ItemsPage = async () => {
  const version = await getVersion();
  const data: Item[] = await fetchItemList();

  return (
    <main className="main">
      <h1 className="pageTitle">아이템 목록</h1>
      <div className="cardContainer grid-cols-6 gap-8">
        {data.map((item: Item) => {
          return (
            <ItemCard key={item.name} item={item} version={version} />
          );
        })}
      </div>
    </main>
  );
};

export default ItemsPage;

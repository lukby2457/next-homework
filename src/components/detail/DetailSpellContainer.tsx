import { BASE_URL } from "@/public/static";
import { Passive, Spell } from "@/types/Champion";
import React from "react";

const DetailSpellContainer = ({
  spellData,
  passiveData,
  version,
}: {
  spellData: Spell[];
  passiveData: Passive;
  version: string;
}) => {
  return (
    <>
      {spellData.map((spell: Spell) => {
        return (
          <div key={spell.id} className="w-[240px] border-white border-[1px]">
            <img
              src={`${BASE_URL}/${version}/img/spell/${spell.image.full}`}
              alt={spell.id}
              className="mx-auto mt-7"
              fetchPriority="high"
            />
            <h4 className="cardTitle text-center">{spell.name}</h4>
            <p className="cardContent mb-2">
              {spell.description.replace(/<[^>]+>/g, " ")}
            </p>
          </div>
        );
      })}
      <div className="w-[240px] border-white border-[1px]">
        <img
          src={`${BASE_URL}/${version}/img/passive/${passiveData.image.full}`}
          alt={passiveData.name}
          className="mx-auto mt-7"
          fetchPriority="high"
        />
        <h4 className="cardTitle text-center">{passiveData.name}</h4>
        <p className="cardContent mb-2">
          {passiveData.description.replace(/<[^>]+>/g, "")}
        </p>
      </div>
    </>
  );
};

export default DetailSpellContainer;

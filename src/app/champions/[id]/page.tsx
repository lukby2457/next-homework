import DetailBarGraph from "@/components/detail/DetailBarGraph";
import DetailSpellContainer from "@/components/detail/DetailSpellContainer";
import DetailText from "@/components/detail/DetailText";
import { BASE_URL } from "@/public/static";
import { ChampionDetail, Passive, Spell } from "@/types/Champion";
import { fetchChampionDetail, getVersion } from "@/utils/serverApi";
import Image from "next/image";
import React from "react";

const Detailpage = async ({ params }: { params: { id: string } }) => {
  const version = await getVersion();
  const data: ChampionDetail = await fetchChampionDetail(params.id);
  const spellData: Spell[] = data.spells;
  const passiveData: Passive = data.passive;

  return (
    <main className="main">
      <section className="flex justify-between">
        <Image
          src={`${BASE_URL}/img/champion/loading/${data.id}_0.jpg`}
          alt={data.name}
          width={308}
          height={560}
          priority
        />
        <div className="flex flex-col justify-around">
          <DetailText data={data} />
          <DetailBarGraph data={data} />
        </div>
      </section>
      <section className="cardContainer grid-cols-5 mt-[12px]">
        <DetailSpellContainer
          spellData={spellData}
          passiveData={passiveData}
          version={version}
        />
      </section>
    </main>
  );
};

export default Detailpage;

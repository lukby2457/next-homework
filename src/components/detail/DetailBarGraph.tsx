import { ChampionDetail } from "@/types/Champion";
import React from "react";

const DetailBarGraph = ({ data }: { data: ChampionDetail }) => {
  return (
    <div>
      <h4 className="text-3xl font-bold mb-2">캐릭터 정보</h4>
      <ul>
        <li className="flex justify-between mb-2">
          <p className="flex items-center">공격력</p>
          <div className="barContainer">
            <div
              className="bar"
              style={{ width: `${(data.info.attack / 10) * 810}px` }}
            >
              <span
                className="barValue"
                style={{
                  right: data.info.attack === 0 ? "-20px" : "10px",
                }}
              >
                {data.info.attack}
              </span>
            </div>
          </div>
        </li>
        <li className="flex justify-between mb-2">
          <p className="flex items-center">방어력</p>
          <div className="barContainer">
            <div
              className="bar"
              style={{ width: `${(data.info.defense / 10) * 810}px` }}
            >
              <span
                className="barValue"
                style={{
                  right: data.info.defense === 0 ? "-20px" : "10px",
                }}
              >
                {data.info.defense}
              </span>
            </div>
          </div>
        </li>
        <li className="flex justify-between mb-2">
          <p className="flex items-center">주문력</p>
          <div className="barContainer">
            <div
              className="bar"
              style={{ width: `${(data.info.magic / 10) * 810}px` }}
            >
              <span
                className="barValue"
                style={{
                  right: data.info.magic === 0 ? "-20px" : "10px",
                }}
              >
                {data.info.magic}
              </span>
            </div>
          </div>
        </li>
        <li className="flex justify-between mb-2">
          <p className="flex items-center">난이도</p>
          <div className="barContainer">
            <div
              className="bar"
              style={{ width: `${(data.info.difficulty / 10) * 810}px` }}
            >
              <span
                className="barValue"
                style={{
                  right: data.info.difficulty === 0 ? "-20px" : "10px",
                }}
              >
                {data.info.difficulty}
              </span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default DetailBarGraph;

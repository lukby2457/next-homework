"use server"

import { fetchChampionList } from "./serverApi"

export async function getChampionRotation() {
  const championData = await fetchChampionList();

  // API 요청
  const res = await fetch("http://localhost:3000/api/rotation");

  // 응답이 성공적인지 확인
  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }

  // 응답 데이터를 JSON 형식으로 파싱
  const rotationData = await res.json();
  
  // 원하는 추가 처리 수행
  // 예: 로테이션 챔피언 리스트와 전체 챔피언 데이터를 매칭하는 로직
  const rotationChampions = championData.filter(champion =>
    rotationData.data.includes(Number(champion.key))
  );

  return rotationChampions;

}
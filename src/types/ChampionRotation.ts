export type ChampionRotation = {
  freeChampionIds: RotationChampionList;
  freeChampionIdsForNewPlayers: number[];
  maxNewPlayerLevel: number;
};

export type RotationChampionList = {
  [key: string]: number[];
};

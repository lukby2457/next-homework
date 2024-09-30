export interface GetChampion {
  type: string;
  format: string;
  version: string;
  data: {
    [key: string]: Champion;
  }
}

export interface Champion {
  version: string;
  id: string;
  key: string;
  name: string;
  title: string;
  blurb: string;
  info: {
    attack: number;
    defense: number;
    magic: number;
    difficulty: number;
  };
  image: {
    full: string;
    sprite: string;
    group: string;
    x: number;
    y: number;
    w: number;
    h: number;
  };
  tags: string[];
  partype: string;
  stats: object;
}

export interface GetChampionDetail {
  type: string;
  format: string;
  version: string;
  data: {
    [key: string]: ChampionDetail;
  }
}

export interface ChampionDetail {
  id: string;
  key: string;
  name: string;
  title: string;
  image: {
    full: string;
    sprite: string;
    group: string;
    x: number;
    y: number;
    w: number;
    h: number;
  };
  skins: object[];
  lore: string;
  blurb: string;
  allytype: string[];
  enemytip: string[];
  tags: string[];
  partype: string;
  info: {
    attack: number;
    defense: number;
    magic: number;
    difficulty: number;
  };
  stats: object;
  spells: object[];
  passive: object;
  recommend: [];
}
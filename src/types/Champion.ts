export interface GetChampion {
  type: string;
  format: string;
  version: string;
  data: {
    [key: string]: Champion;
  };
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
  image: Image;
  tags: string[];
  partype: string;
  stats: object;
}

export interface Image {
  full: string;
  sprite: string;
  group: string;
  x: number;
  y: number;
  w: number;
  h: number;
}

export interface addImgChampion extends Champion {
  imgPath: string;
}

export interface GetChampionDetail {
  type: string;
  format: string;
  version: string;
  data: {
    [key: string]: ChampionDetail;
  };
}

export interface ChampionDetail {
  id: string;
  key: string;
  name: string;
  title: string;
  image: Image;
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
  spells: Spell[];
  passive: Passive;
  recommend: [];
}

export interface Spell {
  id: string;
  name: string;
  description: string;
  image: Image;
  resource: string;
}

export interface Passive {
  name: string;
  description: string;
  image: Image;
}

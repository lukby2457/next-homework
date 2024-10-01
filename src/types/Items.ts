export type GetItem = {
  type: string;
  version: string;
  basic: object;
  data: {
    [key: string]: Item;
  }
}

export type Item = {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  into: string[];
  image: {
    full: string;
    sprite: string;
    group: string;
    x: number;
    y: number;
    w: number;
    h: number;
  };
  gold: {
    base: number;
    purchasable: boolean;
    total: number;
    sell: number;
  };
  tags: string[];
  maps: {
    [key: string]: string;
  };
  stats: object;
}
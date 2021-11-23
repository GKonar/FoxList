export interface IProduct {
  name: string;
  category: string;
  id: string;
  quantity: number;
  emoji: string;
}
export interface IVegsArrays {
  A: IProduct[];
  B: IProduct[];
  C: IProduct[];
  D: IProduct[];
  E: IProduct[];
  F: IProduct[];
  G: IProduct[];
  H: IProduct[];
  I: IProduct[];
  J: IProduct[];
  K: IProduct[];
  L: IProduct[];
  M: IProduct[];
  N: IProduct[];
  O: IProduct[];
  P: IProduct[];
  Q: IProduct[];
  R: IProduct[];
  S: IProduct[];
  T: IProduct[];
  U: IProduct[];
  V: IProduct[];
  W: IProduct[];
  X: IProduct[];
  Y: IProduct[];
  Z: IProduct[];
};

export interface IProductsObject {
  english: IVegsArrays;
  // polish: IVegsArrays;
};

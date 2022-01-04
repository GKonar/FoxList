import { Dispatch } from "react";
import { IProduct } from "../interfaces/products/products.interfaces";

export type Action = 
  | {type: "ADD_PRODUCT", product: IProduct}
  | {type: "REMOVE_PRODUCT", product: IProduct}
  | {type: "CLEAR_LIST"};

export interface ICurrentList {
  listId: string,
  list: IProduct[]
}
export interface IState  {
  productsList: IProduct[],
  currentLists: ICurrentList[], 
  dispatch: Dispatch<Action>
}
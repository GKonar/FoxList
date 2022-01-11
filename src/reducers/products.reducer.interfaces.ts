import { Dispatch } from "react";
import { IProduct } from "../interfaces/products/products.interfaces";
import { Action } from "./products.reducer";
export interface ICurrentList {
  listName: string,
  listId: string,
  list: IProduct[]
}
export interface IState  {
  productsList: IProduct[],
  currentLists: ICurrentList[], 
  dispatch?: Dispatch<Action>
}
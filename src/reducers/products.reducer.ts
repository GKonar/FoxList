import { Dispatch, Reducer } from "react";
import { IProduct } from "../interfaces/products/products.interfaces";

export type Action = 
  | {type: "ADD_PRODUCT", product: IProduct}
  | {type: "REMOVE_PRODUCT", product: IProduct};

export interface IState  {
  productsList: IProduct[],
  dispatch?: Dispatch<Action>
}

export const productsReducer: Reducer<IState, Action> = (state: IState, action: Action ): IState => {
  const existingProduct = state.productsList.find(p => p.id === action.product.id);
  let updatedProductsList: IProduct[];
  
  switch (action.type) {
    case "ADD_PRODUCT": 
      if (existingProduct) {
        updatedProductsList = state.productsList.map(p => (
          p.id === action.product.id
            ? { ...p, quantity: p.quantity += 1 }
            : p
        ));
        return { productsList: updatedProductsList };
      } else {
        const newProduct = {
          ...action.product,
          quantity: 1,
        }
        return { productsList: [...state.productsList, newProduct] };
    }

    case "REMOVE_PRODUCT":
      if (existingProduct && existingProduct.quantity > 1) {
        updatedProductsList = state.productsList.map(p => (
          p.id === action.product.id
            ? { ...p, quantity: p.quantity === 0 ? p.quantity = 0 : p.quantity -= 1 }
            : p
        ))
        return { productsList: updatedProductsList }
      } else {
        updatedProductsList = state.productsList.filter(p => p.id !== action.product.id);
        return { productsList: updatedProductsList }
      }
    default:
      return { productsList: state.productsList };
  }
}
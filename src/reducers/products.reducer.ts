import { Reducer } from "react";
import { findExistingProduct } from "../helper";
import { IProduct } from "../interfaces/products/products.interfaces";
import { Action, IState } from "./products.reducer.interfaces";

export const productsReducer: Reducer<IState, Action> = (state: IState, action: Action ): IState => {
  let updatedProductsList: IProduct[];
  let existingProduct;
  const {productsList} = state;
  
  switch (action.type) {
    case "ADD_PRODUCT": 
      existingProduct = findExistingProduct(productsList, action.product); 
      if (existingProduct) {
        updatedProductsList = productsList.map(p => (
          p.id === action.product.id
            ? { ...p, quantity: p.quantity + 1 }
            : p
        ));
        return { ...state, productsList: updatedProductsList };
      } else {
        const newProduct = {
          ...action.product,
          quantity: 1,
        }
        return { ...state, productsList: [...productsList, newProduct] };
    }

    case "REMOVE_PRODUCT":
      existingProduct = findExistingProduct(productsList, action.product); 
      if (existingProduct && existingProduct.quantity > 1) {
        updatedProductsList = productsList.map(p => (
          p.id === action.product.id
            ? { ...p, quantity: p.quantity - 1 }
            : p
        ))
        return { ...state, productsList: updatedProductsList }
      } else {
        updatedProductsList = productsList.filter(p => p.id !== action.product.id);
        return { ...state, productsList: updatedProductsList }
      }
    
    case "CLEAR_LIST":
      return {...state, productsList: []}
    
    default:
      return { ...state, productsList: productsList };
  }
}
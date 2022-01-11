import { Reducer } from "react";
import { findExistingProduct } from "../helper";
import { IProduct } from "../interfaces/products/products.interfaces";
import {  ICurrentList, IState } from "./products.reducer.interfaces";
import { v4 as uuidv4 } from 'uuid'; 

export type Action = 
  | {type: "ADD_PRODUCT", product: IProduct}
  | {type: "REMOVE_PRODUCT", product: IProduct}
  | {type: "CLEAR_LIST"}
  | {type: "ADD_LIST", listName: string}

export const productsReducer: Reducer<IState, Action> = (state: IState, action: Action ): IState => {
  const { currentLists } = state;
  let updatedProductsList: IProduct[];
  let existingProduct;
  let productsList: IProduct[] = [];

  // let currentList: IProduct[] = [];
  
  switch (action.type) {
    case "ADD_PRODUCT": 
      console.log("action.product: ", action.product);

      const newProduct = {
        ...action.product,
        quantity: 1,
      }

      const updatedCurrentLists = [
        {
          ...currentLists[0], 
          list: [...currentLists[0].list, newProduct]
        }
      ];

      return {...state, currentLists: updatedCurrentLists};

      // existingProduct = findExistingProduct(productsList, action.product); 
      // if (existingProduct) {
        
      //   updatedProductsList = productsList.map(p => (
      //     p.id === action.product.id
      //       ? { ...p, quantity: p.quantity + 1 }
      //       : p
      //   ));
      //   return { ...state, productsList: updatedProductsList };
      // } else {
      //   console.log("HERE");

        // const newProduct = {
        //   ...action.product,
        //   quantity: 1,
        // }
        
        // return { ...state, productsList: [...productsList, newProduct] };  PREVIOUS
      // }

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
    
    case "ADD_LIST":
      const newProductsList: ICurrentList = {
        listName: action.listName,
        listId: uuidv4(),
        list: [] 
      }

      return {...state, currentLists: [...currentLists, newProductsList]}
    
    default:
      return { ...state, productsList, currentLists };
  }
}
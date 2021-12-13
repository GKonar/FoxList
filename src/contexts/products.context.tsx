import React, { createContext, FC } from 'react'
import { useProductState } from '../hooks/useProductState';
import { IProduct } from '../interfaces/products/products.interfaces';

interface IProductsContext {
  productsList: IProduct[];
  addProduct?: (product: IProduct) => void;
  removeProduct?: (product: IProduct) => void;
}

const defaultState = {
  productsList: []
}

export const ProductsContext = createContext<IProductsContext>(defaultState);

export const ProductsProvider: FC = ({ children }) => {
  const productStuff = useProductState()
  return (
    <ProductsContext.Provider value={productStuff}>
      {children}
    </ProductsContext.Provider>
  )
}

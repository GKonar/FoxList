import { createContext, FC, useReducer } from 'react'
import { IState } from '../reducers/products.reducer.interfaces';
import { productsReducer } from '../reducers/products.reducer';

const defaultState: IState = {
  productsList: [],
  currentLists: []
}

export const ProductsContext = createContext<IState>(defaultState);

export const ProductsProvider: FC = ({ children }) => {
  const [{ productsList, currentLists }, dispatch] = useReducer(productsReducer, defaultState)
  return (
    <ProductsContext.Provider value={{ productsList, currentLists, dispatch }}>
      {children}
    </ProductsContext.Provider>
  )
}

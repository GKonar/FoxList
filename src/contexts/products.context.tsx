import { createContext, FC, useReducer } from 'react'
import { productsReducer, State } from '../reducers/products.reducer';

const defaultState: State = {
  productsList: [],
}

export const ProductsContext = createContext<State>(defaultState);

export const ProductsProvider: FC = ({ children }) => {
  const [{ productsList }, dispatch] = useReducer(productsReducer, defaultState)
  return (
    <ProductsContext.Provider value={{ productsList, dispatch }}>
      {children}
    </ProductsContext.Provider>
  )
}

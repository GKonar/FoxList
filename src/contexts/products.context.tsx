import { createContext, FC, useReducer } from 'react'
import { productsReducer, IState } from '../reducers/products.reducer';

const defaultState: IState = {
  productsList: [],
}

export const ProductsContext = createContext<IState>(defaultState);

export const ProductsProvider: FC = ({ children }) => {
  const [{ productsList }, dispatch] = useReducer(productsReducer, defaultState)
  return (
    <ProductsContext.Provider value={{ productsList, dispatch }}>
      {children}
    </ProductsContext.Provider>
  )
}

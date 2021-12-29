import {useState} from "react";
import { IProduct } from "../interfaces/products/products.interfaces";
// #### NOT USED ANYMORE
const useProductState = () => {
  const [productsList, setProductsList] = useState<IProduct[]>([]);

  const addProduct = (product: IProduct): void => {
    const existingProduct = productsList.find(p => p.id === product.id);
  
    if (existingProduct) {
      const updatedProductsList = productsList.map(p => (
        p.id === product.id
          ? { ...p, quantity: p.quantity += 1 }
          : p
      ));
      setProductsList(updatedProductsList);
    } else {
      const newProduct = {
        ...product,
        quantity: 1,
      }
      setProductsList([...productsList, newProduct]);
    }
  }

  const removeProduct = (product: IProduct): void => {
    const existingProduct = productsList.find(p => p.id === product.id);
    let updatedProductsList: IProduct[];
  
    if (existingProduct && existingProduct.quantity > 1) {
      updatedProductsList = productsList.map(p => (
        p.id === product.id
          ? { ...p, quantity: p.quantity === 0 ? p.quantity = 0 : p.quantity -= 1 }
          : p
      ))
    } else {
      updatedProductsList = productsList.filter(p => p.id !== product.id);
    }
  
    setProductsList(updatedProductsList);
  };
  
  return {
    productsList,
    addProduct,
    removeProduct
  }
}

export {useProductState};
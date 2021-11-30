import { makeStyles } from "@material-ui/core";
import { useState } from "react";
import { IProduct } from "../interfaces/products/products.interfaces";
import ProductsListItem from "./ProductsListItem";

interface IProductsListProps {
  products: IProduct[];
}

const useStyles = makeStyles({
  List: {
    listStyle: "none",
    padding: 0,
  },
});

const ProductsList = ({ products }: IProductsListProps) => {
  const classes = useStyles();
  const [productsList, setProductsList] = useState<IProduct[]>([]);

  const addProduct = (product: IProduct): void => {
    const existingItem = productsList.find(i => i.id === product.id);
    let newProduct = {
      ...product,
    }

    if (existingItem) {
      updateProduct(product.id)
    } else {
      setProductsList([...productsList, newProduct]);
    }
  };

  const updateProduct = (productId: string) => {
    const updatedProductsList = productsList.map(product =>
      product.id === productId
        ? { ...product, quantity: product.quantity + 1 }
        : product
    )
    setProductsList(updatedProductsList);
  }

  const removeProduct = (productId: string): void | number => {
    // if (product.quantity === 0) return 0;
    console.log(productsList);
    const updatedProductsList = productsList.filter(product => product.id !== productId);
    setProductsList(updatedProductsList);
  };

  return (
    <ul className={classes.List}>
      {
        products.map((p) => (
          <ProductsListItem
            key={p.id}
            product={p}
            addProduct={addProduct}
            removeProduct={removeProduct}
          />))
      }
    </ul>
  )
}

export default ProductsList



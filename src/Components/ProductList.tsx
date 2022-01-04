import { makeStyles } from "@material-ui/core";
import { useContext } from "react";
import { ProductsContext } from "../contexts/products.context";
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
  const { productsList } = useContext(ProductsContext);
  // const { productsList, dispatch } = useContext(ProductsContext);

  // const handleClearList = () => dispatch?.({ type: "CLEAR_LIST" });

  return (
    <div>
      <ul className={classes.List}>
        {
          products.map((p) => (
            <ProductsListItem
              key={p.id}
              product={p}
            />))
        }
      </ul>
      {
        console.log("AVAILABLE PRODUCTS: ", products, "SAVED PRODUCTS: ", productsList)
      }
      {/* <button onClick={handleClearList}>Clear List</button> */}
    </div>

  )
}

export default ProductsList;



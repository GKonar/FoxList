import { makeStyles } from "@material-ui/core";
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
  return (
    <ul className={classes.List}>
      {
        products.map((p) => (
          <ProductsListItem
            key={p.id}
            product={p}
          />))
      }
    </ul>
  )
}

export default ProductsList



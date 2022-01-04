import { Fragment, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ProductsList from "./ProductList";
import { IProduct } from "../interfaces/products/products.interfaces";
import { ProductsContext } from "../contexts/products.context";

const useStyles = makeStyles({
  EmptyListMessage: {
    color: "#1c5f7e",
    display: "flex",
    cursor: "pointer"
  }
});
interface IDynamicProductsListProps {
  products: IProduct[];
  isInputFocused?: boolean;
  handleFocus?: () => void;
}

const DynamicProductsList = ({ products = [], handleFocus }: IDynamicProductsListProps) => {
  const classes = useStyles();
  const { productsList = [] } = useContext(ProductsContext);
  const hasNoItems: boolean = products.length === 0 && productsList.length === 0;

  return (
    <Fragment>
      {
        <ProductsList products={products.length > 0 ? products : productsList} />
      }
      {hasNoItems && <h3 className={classes.EmptyListMessage} onClick={handleFocus}>No items, add some... 😉</h3>}
    </Fragment >
  );
};

export default DynamicProductsList;
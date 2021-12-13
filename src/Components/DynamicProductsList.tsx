import { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ProductsList from "./ProductList";
import { IProduct } from "../interfaces/products/products.interfaces";

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

const DynamicProductsList = ({ products, handleFocus }: IDynamicProductsListProps) => {
  const classes = useStyles();

  return (
    <Fragment>
      {
        products?.length > 0 ? (
          <ProductsList products={products} />
        ) : <h3 className={classes.EmptyListMessage} onClick={handleFocus}>No items, add some... 😉</h3>
      }
    </Fragment >
  );
};

export default DynamicProductsList;

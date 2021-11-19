import { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ProductsListItem from "./ProductsListItem";

const useStyles = makeStyles({
  List: {
    listStyle: "none",
    padding: 0,
  },
  EmptyListMessage: {
    color: "#1c5f7e",
    display: "flex",
    cursor: "pointer"
  }
});

interface IProductsListProps {
  products: string[];
  handleFocus: () => void;
}

const ProductsList = ({ products, handleFocus }: IProductsListProps) => {
  const classes = useStyles();

  return (
    <Fragment>
      {
        products?.length > 0 ? (
          <ul className={classes.List}>
            {
              products.map((p, i) => <ProductsListItem key={i} product={p} />)
            }
          </ul>
        ) : <h3 className={classes.EmptyListMessage} onClick={handleFocus}>Create new list... 😉</h3>
      }
    </Fragment>
  );
};

export default ProductsList;

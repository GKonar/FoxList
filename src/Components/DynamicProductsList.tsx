import { Fragment, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ProductsListItem from "./ProductsListItem";
import { IProduct } from "../interfaces/products/products.interfaces";

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

interface IDynamicProductsListProps {
  products: IProduct[];
  isInputFocused?: boolean;
  handleFocus?: () => void;
}

const DynamicProductsList = ({ products, handleFocus }: IDynamicProductsListProps) => {
  const classes = useStyles();
  // const [productsList, setProductsList] = useState<IProduct[]>([]);

  return (
    <Fragment>
      {
        products?.length > 0 ? (
          <ul className={classes.List}>
            {
              products.map((p, i) => (
                <ProductsListItem
                  key={p.id}
                  product={p}
                // setProductsList={setProductsList}
                // productsList={productsList}
                />))
            }
          </ul>
        ) : <h3 className={classes.EmptyListMessage} onClick={handleFocus}>No items, add some... 😉</h3>
      }
    </Fragment>
  );
};

export default DynamicProductsList;

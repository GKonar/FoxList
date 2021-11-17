import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ProductsListItem from "./ProductsListItem";

const useStyles = makeStyles({
  List: {
    listStyle: "none",
    padding: 0,
  },
});

interface IProductsListProps {
  products: string[];
}

const ProductsList = ({ products }: IProductsListProps) => {
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
        ) : null
      }
    </Fragment>
  );
};

export default ProductsList;

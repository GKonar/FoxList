import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ProductsListItem from "./ProductsListItem";

const useStyles = makeStyles({
  List: {
    listStyle: "none",
    padding: 0,
  },
});

// default products for testing purposes
const ProductsList = ({ products = ["cabbage", "salat"] }) => {
  const classes = useStyles();

  return (
    <ul className={classes.List}>
      {products.map((p, i) => (
        <ProductsListItem key={i} product={p} />
      ))}
    </ul>
  );
};

export default ProductsList;

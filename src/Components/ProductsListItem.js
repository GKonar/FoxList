import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  ListItem: {},
});

const ProductsListItem = ({ product }) => {
  const classes = useStyles();

  return <li>{product}</li>;
};

export default ProductsListItem;

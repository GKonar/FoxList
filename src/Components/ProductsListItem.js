import React from "react";
import { makeStyles } from "@material-ui/core/styles";

// import "./ProductListItem.scss";

const useStyles = makeStyles({
  ListItem: {
    color: "#1c5f7e",
    padding: ".5rem 0",
    display: "flex",
    justifyContent: "space-between",
  },
  AddButton: {
    border: "none",
    borderRadius: "50%",
    display: "flex",
    alignItems: "flex-end",
  },
});

const ProductsListItem = ({ product }) => {
  const classes = useStyles();

  return (
    <li className={classes.ListItem}>
      {product}
      <button className={classes.AddButton} type="submit">
        +
      </button>
    </li>
  );
};

export default ProductsListItem;

import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

// import PlusIcon from "../assets/icons/plus.png";
import { ReactComponent as PlusIcon } from "../assets/icons/plus-round.svg";
import { ReactComponent as MinusIcon } from "../assets/icons/minus-round.svg";

const useStyles = makeStyles({
  ListItem: {
    color: "#1c5f7e",
    display: "flex",
    padding: ".2rem",
    justifyContent: "space-between",
    alignItems: "center",
    height: "40px",

    "&:hover": {
      cursor: "default",
    },

    // "&:last-child": {
    //   borderBottom: "1px solid #227093",
    // },
  },
  Button: {
    border: "none",
    borderRadius: "50%",
    display: "flex",
    alignItems: "flex-end",
    background: "#f1c40f",
    boxShadow: "0px 0px 4px 1px #227093",
    transition: "all .2s",
    margin: "0 .2rem 0 .2rem",

    "&:hover": {
      boxShadow: "0px 0px 8px 1px #227093",
    },

    "&:active": {
      boxShadow: "0px 0px 2px 1px #227093",
    },
  },

  DecrementButton: {
    transition: ".2s",
    visibility: "hidden",
  },
  Icon: {
    fill: "#1c5f7e",
    width: "25px",
    height: "25px",
    cursor: "pointer",

    "&:hover": {},

    "&:not(:hover)": {},
  },
  Count: {
    marginRight: ".5rem",
  },
  CountWrap: {
    display: "flex",
    alignItems: "center",
  },
});

const ProductsListItem = ({ product }) => {
  const classes = useStyles();
  const [count, setCount] = useState(0);

  return (
    <li className={classes.ListItem}>
      {product}
      <div className={classes.CountWrap}>
        <span className={classes.Count}>{count}</span>
        <span
          onClick={() => setCount(count + 1)}
          className={classes.Button}
          type="submit">
          <PlusIcon className={classes.Icon} />
        </span>
        <span
          onClick={() => setCount(count - 1)}
          className={`${classes.Button} ${
            count === 0 && classes.DecrementButton
          }`}
          type="submit">
          <MinusIcon className={classes.Icon} />
        </span>
      </div>
    </li>
  );
};

export default ProductsListItem;

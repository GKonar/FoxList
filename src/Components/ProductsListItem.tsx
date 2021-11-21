import { useEffect, useState } from "react";
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
      height: "40px",
    },
  },
  Button: {
    border: "none",
    borderRadius: "50%",
    display: "flex",
    width: "25px",
    height: "25px",
    alignItems: "flex-end",
    background: "#f1c40f",
    boxShadow: "0px 0px 4px 1px #227093",
    transition: "all .2s",
    margin: "0 .2rem 0 .2rem",
    marginRight: "5px",

    "&:hover": {
      boxShadow: "0px 0px 8px 1px #227093",
    },

    "&:active": {
      boxShadow: "0px 0px 2px 1px #227093",
    },
  },

  Button_disabled: {
    width: "25px",
    height: "25px",
    borderRadius: "50%",
    margin: "0 .2rem 0 .2rem",
    opacity: ".8",
    boxShadow: "0px 0px 4px 1px #227093",
    marginRight: "5px",
  },

  Icon: {
    fill: "#1c5f7e",
    width: "25px",
    height: "25px",
    cursor: "pointer",
  },
  Icon_disabled: {
    opacity: ".8",
    fill: "#1c5f7e",
    width: "25px",
    height: "25px",
  },
  Count: {
    marginRight: ".5rem",
  },
  CountWrap: {
    display: "flex",
    alignItems: "center",
  },
});

interface IProductsListItemProps {
  product: string;
}

const ProductsListItem = ({ product }: IProductsListItemProps) => {
  const classes = useStyles();
  const [count, setCount] = useState<number>(0);
  const [isDisabled, setIsDisabled] = useState<boolean>(true)

  const { ListItem, CountWrap, Count, Button, Button_disabled, Icon, Icon_disabled } = classes;

  useEffect((): void => {
    if (count === 0) setIsDisabled(true)
  }, [count])

  const increment = (count: number) => {
    setCount(count + 1);
    setIsDisabled(false);
  };

  const decrement = (count: number) => {
    if (count === 0) return 0;
    setCount(count - 1);
  };

  return (
    <li className={ListItem}>
      {product}
      <div className={CountWrap}>
        <span className={Count}>{count}</span>
        <span
          onClick={() => increment(count)}
          className={Button}
        >
          <PlusIcon className={Icon} />
        </span>
        <span
          onClick={() => decrement(count)}
          className={isDisabled ? Button_disabled : Button}
        >
          <MinusIcon className={isDisabled ? Icon_disabled : Icon} />
        </span>
      </div>
    </li>
  );
};

export default ProductsListItem;
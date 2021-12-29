// import { Dispatch, SetStateAction, useEffect, useState, useCallback, useMemo } from "react";
import { useContext, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import useToggle from '../hooks/useToggle';
import ButtonRound from "./ButtonRound";
import { ReactComponent as PlusIcon } from "../assets/icons/plus-round.svg";
import { ReactComponent as MinusIcon } from "../assets/icons/minus-round.svg";
import { IProduct } from "../interfaces/products/products.interfaces";
import { ProductsContext } from "../contexts/products.context";

const useStyles = makeStyles({
  ListItem: {
    color: "#1c5f7e",
    display: "flex",
    padding: ".2rem",
    justifyContent: "space-between",
    alignItems: "center",
    height: "40px",
    position: "relative",

    "&:hover": {
      cursor: "default",
      height: "40px",
    },
  },

  Item: {
    display: "flex",
    alignItems: "center"
  },
  ButtonStyles: {
    border: "none",
    borderRadius: "50%",
    display: "flex",
    width: "25px",
    height: "25px",
    alignItems: "flex-end",
    background: "#1c5f7e",
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
    opacity: ".5",
    boxShadow: "0px 0px 0px 0px #227093",
    backgroundColor: "#1c5f7e",

    "&:hover": {
      boxShadow: "0px 0px 0px 0px #227093",
    },

    "&:active": {
      boxShadow: "0px 0px 0px 0px #227093",
    },
  },
  IconNoItems: {
    fill: "#dff9fb",
    width: "25px",
    height: "25px",
    cursor: "pointer"
  },
  IconWithItems: {
    fill: "#1c5f7e",
    width: "25px",
    height: "25px",
    cursor: "pointer"
  },
  Count: {
    marginRight: ".5rem",
  },
  CountWrap: {
    display: "flex",
    alignItems: "center",
  },
  Snackbar: {
    position: "absolute",
    transition: ".3s",
    right: "-95px",
  },
  Add: {
    right: "-80px",
  },
  SnackbarHidden: {
    visibility: "hidden",
    opacity: 0
  },
  SnackbarVisible: {
    visibility: "visible",
    right: "-85px",
  },
  SnackbarVisibleAdd: {
    right: "-75px"
  }
});

interface IProductsListItemProps {
  product: IProduct;
}

const ProductsListItem = ( // useMemo or useCallback
  props: IProductsListItemProps
) => {
  const { productsList, dispatch } = useContext(ProductsContext);
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);
  const [isItemAdded, setIsItemAdded] = useState<boolean>(false);
  const [isItemRemoved, setIsItemRemoved] = useState<boolean>(false);
  const { product } = props;
  const { name } = product;

  const classes = useStyles();
  const { ListItem, Item, CountWrap, Count, ButtonStyles, Button_disabled, IconNoItems, IconWithItems, Snackbar, Add, SnackbarHidden, SnackbarVisible, SnackbarVisibleAdd } = classes;

  // using data from productsList to display quantity in dynamic list
  const currentProduct: IProduct | undefined = productsList?.find(p => p.name === product.name)

  useEffect((): void => {
    !currentProduct?.quantity ? setIsButtonDisabled(true) : setIsButtonDisabled(false);
  }, [currentProduct?.quantity])

  const handleAddProduct = (): void => {
    dispatch?.({ type: "ADD_PRODUCT", product });
    if (!currentProduct?.quantity) {
      setIsItemAdded(true);
      setTimeout(() => setIsItemAdded(false), 500);
    }
  }

  const handleRemoveProduct = (): void => {
    dispatch?.({ type: "REMOVE_PRODUCT", product });
    if (currentProduct?.quantity === 1) {
      setIsItemRemoved(true);
      setTimeout(() => setIsItemRemoved(false), 500);
    }
  }

  return (
    <li className={ListItem}>
      <div className={Item}>
        <ButtonRound
          handleClick={handleAddProduct}
          className={!!currentProduct?.quantity ? "" : ButtonStyles}
        >
          <PlusIcon className={!!currentProduct?.quantity ? IconWithItems : IconNoItems} />
        </ButtonRound>
        {name}
      </div>
      <div className={CountWrap}>
        <span className={Count}>{currentProduct?.quantity ?? 0}</span>
        <ButtonRound
          handleClick={handleRemoveProduct}
          className={
            isButtonDisabled
              ? Button_disabled
              : ""}>
          <MinusIcon className={!!currentProduct?.quantity ? IconWithItems : IconNoItems} />
        </ButtonRound>
      </div>
      <div className={`${Snackbar} ${Add} ${isItemAdded ? SnackbarVisibleAdd : SnackbarHidden}`}>Added 🤟</div>
      <div className={`${Snackbar} ${isItemRemoved ? SnackbarVisible : SnackbarHidden} `}>Removed 👌</div>
    </li >
  );
};

export default ProductsListItem;
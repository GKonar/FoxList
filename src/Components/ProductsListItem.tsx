import { Dispatch, SetStateAction, useEffect, useState, useCallback, useMemo } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ButtonRound from "./ButtonRound";
import { ReactComponent as PlusIcon } from "../assets/icons/plus-round.svg";
import { ReactComponent as MinusIcon } from "../assets/icons/minus-round.svg";
import { IProduct } from "../interfaces/products/products.interfaces";

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
    opacity: ".7",
    boxShadow: "0px 0px 4px 1px #227093",
    marginRight: "5px",

    "&:hover": {
      boxShadow: "0px 0px 4px 1px #227093",
    },

    "&:active": {
      boxShadow: "0px 0px 4px 1px #227093",
    },
  },
  Icon: {
    fill: "#1c5f7e",
    width: "25px",
    height: "25px",
    cursor: "pointer"
  },

  Icon_disabled: {
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
  product: IProduct;
  staticProductsList?: IProduct[];
  addProduct: ((product: IProduct) => void);
  removeProduct: ((product: IProduct) => void);

  // setProductsList?: Dispatch<SetStateAction<IProduct[]>>;
  // productsList?: IProduct[];
}

const ProductsListItem = ( // useMemo or useCallback
  {
    product,
    staticProductsList,
    addProduct,
    removeProduct,
  }
    : IProductsListItemProps
) => {
  const classes = useStyles();
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true)

  const { name } = product;
  const { ListItem, Item, CountWrap, Count, ButtonStyles, Button_disabled, Icon, Icon_disabled } = classes;

  // using data from static list to display quantity in dynamic list
  const currentProduct: IProduct | undefined = staticProductsList?.find(p => p.name === product.name)

  useEffect((): void => {
    !currentProduct?.quantity ? setIsButtonDisabled(true) : setIsButtonDisabled(false);
  }, [currentProduct?.quantity])

  return (
    <li className={ListItem}>
      <div className={Item}>
        <ButtonRound
          handleClick={() => addProduct(product)}
          className={ButtonStyles}>
          <PlusIcon className={Icon} />
        </ButtonRound>
        {name}
      </div>
      <div className={CountWrap}>
        <span className={Count}>{currentProduct?.quantity ?? 0}</span>
        <ButtonRound
          handleClick={() => removeProduct(product)}
          className={isButtonDisabled ? Button_disabled : ButtonStyles}>
          <MinusIcon className={isButtonDisabled ? Icon_disabled : Icon} />
        </ButtonRound>
      </div>
    </li >
  );
};

export default ProductsListItem;
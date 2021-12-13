import React, { useState, useRef, Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "../Components/TextField";
import { IProduct, IProductsObject, IVegsArrays } from '../interfaces/products/products.interfaces';
import DynamicProductsList from "../Components/DynamicProductsList";
import ButtonRound from "../Components/ButtonRound";
import { getArrayByInputValue } from "../helper";
import { ReactComponent as PlusIcon } from "../assets/icons/plus-round.svg";

interface IFoxListProps {
  productsObject: IProductsObject;
}

const useStyles = makeStyles({
  WelcomeHeader: {
    color: "#1c5f7e",
    padding: "1rem 0 "
  },

  WelcomeText: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "inherit",
  },

  Icon: {
    fill: "#1c5f7e",
    width: "70px",
    height: "70px",
    cursor: "pointer",
  },
});

const FoxListStartupPage = (foxListProps: IFoxListProps): JSX.Element => {
  // oryginally products gonna be fetched from DB
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isFocused, setIsFocused] = useState<boolean>(false)
  const [welcomePage, setWelcomePage] = useState<boolean>(true);
  const { productsObject } = foxListProps;
  const inputRef = useRef<HTMLInputElement>(null);

  const classes = useStyles();
  const { Icon, WelcomeText, WelcomeHeader } = classes;

  const filterProducts = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void => {
    let language: string = "english"; // will be taken form app settings
    const inputValue: string = e.target.value;
    const filteredArray = getArrayByInputValue(inputValue, productsObject, language);

    setProducts(inputValue.length >= 0 ? filteredArray : []);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("go");
  };

  const handleInputFocus = () => {
    inputRef.current?.focus();
    setIsFocused(true);
  }

  const createList = () => {
    setWelcomePage(false);
  }

  return (
    <Fragment>
      {
        welcomePage ? (
          <div className={WelcomeText}>
            <h1 className={WelcomeHeader}>Welcome to FoxList 😉</h1>
            <ButtonRound
              handleClick={createList}
              sizeBig={true}>
              <PlusIcon className={Icon} />
            </ButtonRound>
            <h2 className={WelcomeHeader}>Hit the button to start.</h2>
          </div>
        ) : (
          <form className="form" onSubmit={(e) => handleSubmit(e)}>
            <TextField
              onChange={e => filterProducts(e)}
              reference={inputRef}
            />
            <DynamicProductsList
              products={products}
              handleFocus={handleInputFocus}
            />
          </form>
        )
      }
    </Fragment>
  );
};

export default FoxListStartupPage;
import React, { useState, useRef, Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "../Components/TextField";
import { IProduct, IProductsObject, IVegsArrays } from '../interfaces/products/products.interfaces';
import DynamicProductsList from "../Components/DynamicProductsList";
import ButtonRound from "../Components/ButtonRound";
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
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isFocused, setIsFocused] = useState<boolean>(false)
  const [welcomePage, setWelcomePage] = useState<boolean>(true);
  const { productsObject } = foxListProps;
  const inputRef = useRef<HTMLInputElement>(null);

  const classes = useStyles();
  const { Icon, WelcomeText, WelcomeHeader } = classes;


  const filterProducts = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void => {
    let language: string = "english";
    const searchValue: string = e.target.value;
    const firstInputLetter: string = searchValue.charAt(0).toUpperCase();
    const firstLetterArray: IProduct[] = productsObject[language as keyof IProductsObject][firstInputLetter as keyof IVegsArrays];
    const filteredArray = firstLetterArray?.filter(
      (p: IProduct) =>
        p.name.toLowerCase().includes(searchValue.toLowerCase()) &&
        p.name[0] === searchValue[0]?.toLowerCase(),
    );

    setProducts(searchValue.length >= 0 ? filteredArray : []);
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
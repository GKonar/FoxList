import React, { useState, useRef } from "react";
// import TextField from "@material-ui/core/TextField";
import TextField from "./TextField";
import { IProductsObject, IVegsArrays } from '../interfaces/products/products.interfaces';
import { StylesProvider } from "@material-ui/core/styles";
import "./SearchInput.scss";
import ProductsList from "./ProductsList";

interface ISearchInputProps {
  productsObject: IProductsObject;
}

const SearchInput = (searchInputProps: ISearchInputProps): JSX.Element => {
  const [products, setProducts] = useState<string[]>([]);
  const { productsObject } = searchInputProps;
  const inputRef = useRef<HTMLInputElement>(null);

  const filterVegArray = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void => {
    let language: string = "english";
    const searchValue: string = e.target.value;
    const firstLetter: string = searchValue.charAt(0).toUpperCase();
    const firstLetterArray: string[] = productsObject[language as keyof IProductsObject][firstLetter as keyof IVegsArrays];
    const filteredArray = firstLetterArray?.filter(
      (p: string) =>
        p.toLowerCase().includes(searchValue.toLowerCase()) &&
        p[0] === searchValue[0]?.toLowerCase(),
    );

    setProducts(searchValue.length >= 0 ? filteredArray : []);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("go");
  };

  const handleClick = () => {
    inputRef.current?.focus();
  }

  return (
    <StylesProvider injectFirst>
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        <TextField
          onChange={e => filterVegArray(e)}
          reference={inputRef}
        />
        <ProductsList products={products} handleFocus={handleClick} />
        {
          // <Button type="submit">add</Button>
        }
      </form>
    </StylesProvider>
  );
};

export default SearchInput;
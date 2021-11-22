import React, { useState, useRef } from "react";
import TextField from "../Components/TextField";
import { IProductsObject, IVegsArrays } from '../interfaces/products/products.interfaces';
import ProductsList from "../Components/ProductsList";

interface IFoxListProps {
  productsObject: IProductsObject;
}

const FoxListStartupPage = (foxListProps: IFoxListProps): JSX.Element => {
  const [products, setProducts] = useState<string[]>([]);
  const [isFocused, setIsFocused] = useState<boolean>(false)
  const { productsObject } = foxListProps;
  const inputRef = useRef<HTMLInputElement>(null);

  const filterVegArray = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void => {
    let language: string = "english";
    const searchValue: string = e.target.value;
    const firstInputLetter: string = searchValue.charAt(0).toUpperCase();
    const firstLetterArray: string[] = productsObject[language as keyof IProductsObject][firstInputLetter as keyof IVegsArrays];
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
    setIsFocused(true);
  }

  return (
    <form className="form" onSubmit={(e) => handleSubmit(e)}>
      <TextField
        onChange={e => filterVegArray(e)}
        reference={inputRef}
      />
      <ProductsList
        products={products}
        handleFocus={handleClick}
      />
    </form>
  );
};

export default FoxListStartupPage;
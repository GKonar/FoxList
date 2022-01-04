import React, { useState, useRef } from "react";
import TextField from "../Components/TextField";
import { IProduct, IProductsObject } from '../interfaces/products/products.interfaces';
import DynamicProductsList from "../Components/DynamicProductsList";
import { getArrayByInputValue } from "../helper";
interface IAddItemPageProps {
  productsObject: IProductsObject;
}

const AddItemPage = (foxListProps: IAddItemPageProps): JSX.Element => {
  // oryginally products gonna be fetched from DB
  const [products, setProducts] = useState<IProduct[]>([]);
  const { productsObject } = foxListProps;
  const inputRef = useRef<HTMLInputElement>(null);

  const filterProducts = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void => {
    let language: string = "english"; // will be taken from app settings
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
  }

  return (
    <form className="form" onSubmit={(e) => handleSubmit(e)}>
      <TextField
        onChange={e => filterProducts(e)}
        reference={inputRef}
        placeholder="Add Item"
      />
      <DynamicProductsList
        products={products}
        handleFocus={handleInputFocus}
      />
    </form>
  );
};

export default AddItemPage;
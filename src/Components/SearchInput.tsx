import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
// import { Button } from "@material-ui/core";
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


  const filterVegArray = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>): void => {
    // get language - gonna be dynamically drag from object
    let language: string = "english";

    // get input value
    const searchValue: string = e.target.value;

    // get first letter
    const firstLetter: string = searchValue.charAt(0).toUpperCase();

    // select array with right letter key in object
    const firstLetterArray: string[] = productsObject[language as keyof IProductsObject][firstLetter as keyof IVegsArrays];

    // filter array
    const filterdArray = firstLetterArray?.filter(
      // think of other filter function (performance reason);
      (p: string) =>
        p.toLowerCase().includes(searchValue.toLowerCase()) &&
        p[0] === searchValue[0]?.toLowerCase(),
    );

    setProducts(searchValue.length >= 0 ? filterdArray : []);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("go");
  };

  return (
    <StylesProvider injectFirst>
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        <TextField
          style={{ width: 500 }}
          onChange={e => filterVegArray(e)}
          variant="outlined"
          label="Fox tail"
        />
        <ProductsList products={products} />
        {
          // <Button type="submit">add</Button>
        }
      </form>
    </StylesProvider>
  );
};

export default SearchInput;

// ** Not sure which i like more
// return (
// 	<StylesProvider injectFirst>
// 		<form className="form" onSubmit={handleSubmit}>
// 			<Autocomplete
// 				style={{ width: 500 }}
// 				freeSolo
// 				autoComplete
// 				autoHighlight
// 				options={products}
// 				renderInput={params => (
// 					<TextField
// 						{...params}
// 						onChange={e => filterVegArray(e)}
// 						variant="outlined"
// 						label="Fox tail"
// 					/>
// 				)}
// 			/>
// 			<Button type="submit">add</Button>
// 		</form>
// 	</StylesProvider>
// );

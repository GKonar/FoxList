import { useState } from "react";

import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { StylesProvider } from "@material-ui/core/styles";

import "./SearchInput.scss";

const SearchInput = ({ productsObj }) => {
  const [products, setProducts] = useState([]);

  const filterVegArray = e => {
    // get language - gonna be dynamically drag from object
    let language = "english";

    // get input value
    const searchValue = e.target.value;

    // get first letter
    const firstLetter = searchValue.charAt(0).toUpperCase();

    // select right array in object
    let firstLetterArray = productsObj[language][firstLetter];

    // filter array
    const filterdArray = firstLetterArray?.filter(
      p =>
        p.toLowerCase().includes(searchValue.toLowerCase()) &&
        p[0] === searchValue[0]?.toLowerCase(),
    );

    setProducts(searchValue.length > 0 ? filterdArray : []);
  };

  return (
    <StylesProvider injectFirst>
      <Autocomplete
        style={{ width: 500 }}
        freeSolo
        autoComplete
        autoHighlight
        options={products}
        renderInput={params => (
          <TextField
            {...params}
            onChange={e => filterVegArray(e)}
            variant="outlined"
            label="Fox tail"
          />
        )}
      />
    </StylesProvider>
  );
};

export default SearchInput;

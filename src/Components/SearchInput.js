import { useState } from "react";

import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

const SearchInput = ({ allProducts, productsObj }) => {
  const [products, setProducts] = useState([]);

  console.log(productsObj);

  const filterVegArray = e => {
    const searchValue = e.target.value;
    const filterdArray = allProducts.filter(
      p =>
        p.toLowerCase().includes(searchValue.toLowerCase()) &&
        p[0] === searchValue[0]?.toLowerCase(),
    );

    setProducts(searchValue.length > 0 ? filterdArray : []);
  };

  return (
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
  );
};

export default SearchInput;

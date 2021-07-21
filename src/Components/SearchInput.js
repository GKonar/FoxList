import { useState } from "react";

import TextField from "@material-ui/core/TextField";
// import { Button } from "@material-ui/core";
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

    // select array with right letter key in object
    let firstLetterArray = productsObj[language][firstLetter];

    // filter array
    const filterdArray = firstLetterArray?.filter(
      p =>
        p.toLowerCase().includes(searchValue.toLowerCase()) &&
        p[0] === searchValue[0]?.toLowerCase(),
    );

    console.log(filterdArray);

    setProducts(searchValue.length > 0 ? filterdArray : []);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log("go");
  };

  return (
    <StylesProvider injectFirst>
      <form className="form" onSubmit={handleSubmit}>
        <TextField
          style={{ width: 500 }}
          onChange={e => filterVegArray(e)}
          variant="outlined"
          label="Fox tail"
        />
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

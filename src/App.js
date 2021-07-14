import { makeStyles } from "@material-ui/core/styles";
import { productsObj } from "./assets/products";

import SearchInput from "./Components/SearchInput";

const useStyles = makeStyles({
  App: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    alignItems: "center",
    backgroundColor: "#fad390",
  },
});

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.App}>
      <h3>FoxList</h3>
      <SearchInput productsObj={productsObj} />
    </div>
  );
};

export default App;

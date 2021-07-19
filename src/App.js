import { makeStyles } from "@material-ui/core/styles";
import { productsObj } from "./assets/products";

import SearchInput from "./Components/SearchInput";

//  This pattern is downloaded from www.subtlepatterns.com
import AppBcg from "./assets/images/app_bcg.png";
import ListBcg from "./assets/images/list_bcg.png";

const useStyles = makeStyles({
  App: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    alignItems: "center",
    backgroundImage: `url(${AppBcg})`,
  },

  Header: {
    color: "#f1c40f",
    textShadow: "2px 2px 0px rgba(0,0,0,0.2)",
  },

  List: {
    backgroundColor: "pink",
    height: "100vh",
    padding: "0 4rem",
    backgroundImage: `url(${ListBcg})`,
    borderLeft: ".5rem solid #227093",
    borderRight: ".5rem solid #227093",
  },
});

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.App}>
      <div className={classes.List}>
        <h1 className={classes.Header}>FoxList</h1>
        <SearchInput productsObj={productsObj} />
      </div>
    </div>
  );
};

export default App;

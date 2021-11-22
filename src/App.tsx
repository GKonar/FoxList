import { makeStyles } from "@material-ui/core/styles";
import { productsObject } from "./assets/products";

import FoxListStartupPage from "./Pages/FoxListStartupPage";

//  This pattern is downloaded from www.subtlepatterns.com
// import AppBcg from "./assets/images/app_bcg.png";
import ListBcg from "./assets/images/list_bcg.png";

const useStyles = makeStyles({
  App: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // backgroundImage: `url(${AppBcg})`,
    backgroundColor: "#f6e58d",
    overflow: "hidden",
  },

  Header: {
    color: "#f1c40f",
    textShadow: "2px 2px 0px rgba(0,0,0,0.2)",
  },

  List: {
    height: "100vh",
    padding: "0 6rem",
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
        <FoxListStartupPage productsObject={productsObject} />
        {/* <ProductsList /> */}
      </div>
    </div>
  );
};

export default App;

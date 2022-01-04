import { makeStyles } from "@material-ui/core/styles";
import { productsObject } from "./assets/products";

//  This pattern is downloaded from www.subtlepatterns.com
import AppBcg from "./assets/images/app_bcg.png";
import ListBcg from "./assets/images/list_bcg.png";

import { ProductsProvider } from "./contexts/products.context";
import RoutesMain from "./RoutesMain";

const useStyles = makeStyles({
  App: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundImage: `url(${AppBcg})`,
    backgroundColor: "#f6e58d",
    overflow: "hidden",
    height: "100vh",
  },

  Header: {
    color: "#f1c40f",
    textAlign: "center",
    textShadow: "2px 2px 0px rgba(0,0,0,0.2)",
    fontSize: "2.5rem"
  },

  List: {
    height: "100%",
    minWidth: "550px",
    maxWidth: "550px",
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
        <ProductsProvider>
          <RoutesMain productsObject={productsObject} />
        </ProductsProvider>
      </div>
    </div>
  );
};

export default App;

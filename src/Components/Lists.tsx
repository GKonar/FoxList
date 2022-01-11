import { useContext } from "react";
import { ProductsContext } from "../contexts/products.context";
import { makeStyles } from "@material-ui/core/styles";
import { ICurrentList } from "../reducers/products.reducer.interfaces";

const useStyles = makeStyles({
  ListContainer: {
    position: "absolute",
    top: 0
  },
  ListItem: {
    position: "relative",
    left: "560px",

    margin: "1rem 0 1rem 0",
    padding: "1rem",
    background: "#227093",
    color: "#86C9C7",
    width: "100px",
    borderTopRightRadius: "5%",
    borderBottomRightRadius: "5%",
    border: "1px solid #86C9C7",
    borderLeft: "none",
    zIndex: -1,
    transition: "all .3s ease-out",
    display: "flex",
    justifyContent: "space-between",

    "&:hover": {
      left: "650px"
    }
  },
});

const Lists = () => {
  const classes = useStyles();
  const { currentLists } = useContext(ProductsContext);

  // const item: ICurrentList = {
  //   listName: "test2",
  //   listId: "d285c1fe-ac63-4ca9-9d79-4f5bsddssd47ad611d",
  //   list: []
  // }

  // const item2: ICurrentList = {
  //   listName: "test4",
  //   listId: "d285c1fe-ac63-4ca9-9vcvccvsd79-4f5b47ad611d",
  //   list: []
  // }

  // const testLists = [
  //   ...currentLists, item, item2
  // ]

  const handleListClick = (list: ICurrentList) => {
    console.log(list.listId)
  }

  return (
    <div className={classes.ListContainer}>
      {
        currentLists.map(
          (list, i) =>
          (
            <div className={classes.ListItem} key={i} onClick={() => handleListClick(list)}>
              {list.listName}
              <div>{"→"}</div>
            </div>
          )
        )
      }
    </div>
  )
}

export default Lists;
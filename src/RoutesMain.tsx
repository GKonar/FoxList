// import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
// import { ProductsContext } from "./contexts/products.context";
import { IProductsObject } from "./interfaces/products/products.interfaces";

import AddItemPage from "./Pages/AddItemPage";
import CreateNewListPage from "./Pages/CreateNewListPage";
import WelcomePage from "./Pages/WelcomePage";

interface IFoxListProps {
  productsObject: IProductsObject;
}

const RoutesMain = ({ productsObject }: IFoxListProps): JSX.Element => {
  // const { productsList, dispatch } = useContext(ProductsContext);

  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/createlist" element={<CreateNewListPage />} />
      <Route path="/additem" element={<AddItemPage productsObject={productsObject} />} />
    </Routes>
  )
}

export default RoutesMain;
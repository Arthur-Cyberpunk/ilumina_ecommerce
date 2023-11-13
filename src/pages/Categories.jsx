import { Outlet } from "react-router";
import CategoriesHeader from "../components/CategoriesHeader";
import "../components/ProudProducts/styles";

const Categories = () => {
  return (
    <>
      <CategoriesHeader />
      <Outlet />
    </>
  );
}

export default Categories;

import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Newsletter from "./components/Newsletter";
import Categories from "./pages/Categories";
import All from "./pages/Categories-Pages/All";
import Chairs from "./pages/Categories-Pages/CategoriesItemChairs";
import Electronics from "./pages/Categories-Pages/CategoriesItemElectronics";
import Furnitures from "./pages/Categories-Pages/CategoriesItemFurniture";
import Kitchen from "./pages/Categories-Pages/CategoriesItemKitchen";
import Lamps from "./pages/Categories-Pages/CategoriesItemLamps";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="categories" element={<Categories />}>
          <Route path="all" element={<All />} />
          <Route path="furnitures" element={<Furnitures />} />
          <Route path="electronics" element={<Electronics />} />
          <Route path="lamps" element={<Lamps />} />
          <Route path="kitchen" element={<Kitchen />} />
          <Route path="chairs" element={<Chairs />} />
        </Route>
        <Route path="categories/product/:id" element={<ProductPage />} />
      </Routes>
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;

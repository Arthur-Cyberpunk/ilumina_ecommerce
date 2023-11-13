import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Newsletter from "./components/Newsletter";
import Categories from "./pages/Categories";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="about" element={<Categories />} />
        {/* <Route path="testimonials" element={<Testimonials />} />
        <Route path="contact" element={<Contact />} /> */}
      </Routes>

      <Newsletter></Newsletter>
      <Footer></Footer>
    </>
  );
}

export default App;

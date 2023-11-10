import Banner from "./components/Banner";
import BannerInverted from "./components/BannerInverted";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Newsletter from "./components/Newsletter";
import ProudProducts from "./components/ProudProducts";
import TrendingSlider from "./components/TrendingSlider";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Header></Header>
      <ProudProducts></ProudProducts>
      <Banner></Banner>
      <TrendingSlider></TrendingSlider>
      <BannerInverted></BannerInverted>
      <Newsletter></Newsletter>
      <Footer></Footer>
    </>
  );
}

export default App;

import Banner from "../components/Banner";
import BannerInverted from "../components/BannerInverted";
import Header from "../components/Header";
import ProudProducts from "../components/ProudProducts";
import TrendingSlider from "../components/TrendingSlider";

const Home = () => {
    return (
      <>
        <Header />
        <ProudProducts />
        <Banner />
        <TrendingSlider />
        <BannerInverted />
      </>
    );
  }
  
  export default Home;

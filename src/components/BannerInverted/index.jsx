import { Link } from "react-router-dom";
import Banner2 from '../../assets/banner/banner2.jpg';
import * as S from "./styles";

const Banner = () => {

  return (
    <S.Banner>
      <div className="container">
        <S.BannerContainer>
          <S.TextSide>
              <h2>Comfortable & Elegante Living</h2>
              <p>RAOUF Products are all made to standard sizes so that you can mix and match them freely.</p>
              <Link onClick={() => window.scrollTo(0, 0)}>
                <button>Shop now</button>
              </Link>
          </S.TextSide>
          <S.ImageSide>
            <img src={Banner2} alt="banner" />
          </S.ImageSide>
        </S.BannerContainer>
      </div>
    </S.Banner>
  );
}

export default Banner;

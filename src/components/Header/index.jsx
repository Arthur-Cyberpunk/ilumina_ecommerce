import { Link } from "react-router-dom";
import Main1 from "../../assets/Main1.jpg";
import Main2 from "../../assets/Main2.jpeg";
import Main3 from "../../assets/Main3.jpg";
import * as S from "./styles";

const Header = () => {
  return (
    <S.Section>
      <div className="container">
        <S.GridContainer>
          <S.Featured className="featured grid-one">
            <Link to="categories/furnitures">
              <S.Overlay id="img1"></S.Overlay>
              <S.Image src={Main1} alt="img1" />
              <S.Description>Live Comfortably</S.Description>
            </Link>
          </S.Featured>

          <S.Featured className="grid-four">
            <Link to="categories/furnitures">
              <S.Overlay id="img2"></S.Overlay>
              <S.Image src={Main2} alt="img2" />
              <S.Description>Kitchen</S.Description>
            </Link>
          </S.Featured>

          <S.Featured className="grid-for-low">
            <Link to="categories/furnitures">
              <S.Overlay id="img3"></S.Overlay>
              <S.Image src={Main3} alt="img3" />
              <S.Description>Electronics</S.Description>
            </Link>
          </S.Featured>
        </S.GridContainer>
      </div>
    </S.Section>
  );
};

export default Header;

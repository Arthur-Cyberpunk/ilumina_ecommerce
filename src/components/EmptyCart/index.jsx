import EmptyCartImg from "../../assets/cart/empty-cart.png";
import * as S from "./styles";

function EmptyCart({ openCart }) {
  return (
    <S.EmptyCartDiv>
      <img src={EmptyCartImg} alt="empty-cart" />
      <p>Your cart is empty</p>
      <button onClick={openCart}>Keep Browsing</button>
    </S.EmptyCartDiv>
  );
}

export default EmptyCart;

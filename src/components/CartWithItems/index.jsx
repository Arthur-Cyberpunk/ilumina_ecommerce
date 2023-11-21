import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectProductsTotalPrice } from "../../redux/cart/cart.selectors";
import CartItem from '../CartItem';
import * as S from "./styles";

function CartWithItems() {
  const {products} = useSelector(rootReducer => rootReducer.cartReducer)

  const productsTotalPrice = useSelector(selectProductsTotalPrice)

  return (
    <>
      <S.FullCartDiv>
        <S.FullCart>
          {products.map((product, id) =>
            products.length !== 0 ? (
              <CartItem product={product} id={id}/>
            ) : (
              <></>
            ),
          )}
        </S.FullCart>
      </S.FullCartDiv>
      <S.Subtotal>
        <S.SubRight>
          <p>Subtotal</p>
          <p>{productsTotalPrice + ".00$"}</p>
        </S.SubRight>
        <S.SubLeft>
          <Link>Go to Checkout</Link>
        </S.SubLeft>
      </S.Subtotal>
    </>
  );
}

export default CartWithItems;

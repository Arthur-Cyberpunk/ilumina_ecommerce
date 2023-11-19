import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from '../CartItem';
import * as S from "./styles";

function CartWithItems() {
  const {products} = useSelector(rootReducer => rootReducer.cartReducer)

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const newTotalPrice = products.reduce((acc, item) => acc + item.price, 0);
    setTotalPrice(newTotalPrice);
  }, [products]);

  return (
    <>
      <S.FullCartDiv>
        <S.FullCart className="full-cart">
          {products.map(() =>
            products.length !== 0 ? (
              <CartItem />
            ) : (
              <></>
            ),
          )}
        </S.FullCart>
      </S.FullCartDiv>
      <S.Subtotal>
        <S.SubRight>
          <p>Subtotal</p>
          <p className="total-price">{totalPrice + ".00$"}</p>
        </S.SubRight>
        <S.SubLeft>
          <Link>Go to Checkout</Link>
        </S.SubLeft>
      </S.Subtotal>
    </>
  );
}

export default CartWithItems;

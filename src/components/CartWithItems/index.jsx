import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../pages/ProductPage";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";
import * as S from "./styles";

function CartWithItems() {
  const { cartItem, setCartItem } = useContext(CartContext);

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const newTotalPrice = cartItem.reduce((acc, item) => acc + item.price, 0);
    setTotalPrice(newTotalPrice);
  }, [cartItem]);

  return (
    <>
      <S.FullCartDiv>
        <S.FullCart className="full-cart">
          {cartItem.map((item, id) =>
            cartItem.length !== 0 ? (
              <CartItem key={id} item={item} setCartItem={setCartItem} />
            ) : (
              <EmptyCart key={id} />
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

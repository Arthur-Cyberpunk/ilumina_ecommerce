import { useState } from "react";
import { BsXLg } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { removeProductToCart } from '../../redux/cart/action';
import * as S from "./styles";

const CartItem = ({product, id, setTotalPrice}) => {
    const dispatch = useDispatch()
  const [quantity, setQuantity] = useState(1);

  const increase = () => {
    if (quantity >= 1) {
      setQuantity(quantity + 1);
    }
  };

  const decrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const calcPrice = (quantity, item) => {
    setTotalPrice(quantity * item)
    return quantity * item;
  };

  const removeFromCart = (id) => {
    dispatch(removeProductToCart(id))
  };


  return (
    <>
        <S.CartItem key={id}>
          <S.CartImg>
            <img src={product[0].img[0]} alt="product" />
          </S.CartImg>
          <S.CartMiddle>
            <S.CartName>{product[0].name}</S.CartName>
            <S.CartBtns className="cart-btns">
              <button onClick={decrease}>-</button>
              <p className="quantity">{product.quantity}</p>
              <button onClick={increase}>+</button>
            </S.CartBtns>
          </S.CartMiddle>
          <S.CartRight className="cart-right">
            <p className="cart-price">{calcPrice(product.quantity, product[0].price)}.00$</p>
            <BsXLg onClick={() => removeFromCart(product._id)} />
          </S.CartRight>
        </S.CartItem>
    </>
  );
}

export default CartItem;

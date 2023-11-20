import { useState } from "react";
import { BsXLg } from "react-icons/bs";
import * as S from "./styles";

const CartItem = ({product, id, setTotalPrice}) => {
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

  const [deleteItem, setDeleteItem] = useState(product);

  const removeFromCart = (id) => {
    const updateCart = product.filter((item) => item.id !== id);
    setDeleteItem(updateCart);
    const json = JSON.stringify(product.id);
    localStorage.removeItem("cartItem", json);
  };

//   useEffect(() => {
//     setCartItem(deleteItem);
//   }, [deleteItem, setCartItem]);

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
            <BsXLg onClick={() => removeFromCart(product.id)} />
          </S.CartRight>
        </S.CartItem>
    </>
  );
}

export default CartItem;

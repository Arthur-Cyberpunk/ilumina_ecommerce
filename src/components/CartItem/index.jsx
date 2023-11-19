import { useState } from "react";
import { BsXLg } from "react-icons/bs";
import { useSelector } from "react-redux";
import * as S from "./styles";

const CartItem = () => {
    const {products} = useSelector(rootReducer => rootReducer.cartReducer)
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

  const calcPrice = (quantity) => {
    return quantity * products.price;
  };

  const [deleteItem, setDeleteItem] = useState(products);

  const removeFromCart = (id) => {
    const updateCart = products.filter((item) => item.id !== id);
    setDeleteItem(updateCart);
    const json = JSON.stringify(products.id);
    localStorage.removeItem("cartItem", json);
  };

//   useEffect(() => {
//     setCartItem(deleteItem);
//   }, [deleteItem, setCartItem]);
console.log(products)

  return (
    <>
      {products.map((item, id) => (
        <S.CartItem key={id}>
          <S.CartImg>
            <img src={item[0].img[0]} alt="product" />
          </S.CartImg>
          <S.CartMiddle>
            <S.CartName>{item[0].name}</S.CartName>
            <S.CartBtns className="cart-btns">
              <button onClick={decrease}>-</button>
              <p className="quantity">{item.quantity}</p>
              <button onClick={increase}>+</button>
            </S.CartBtns>
          </S.CartMiddle>
          <S.CartRight className="cart-right">
            <p className="cart-price"> {item[0].price}.00$</p>
            <BsXLg onClick={() => removeFromCart(item.id)} />
          </S.CartRight>
        </S.CartItem>
      ))}
    </>
  );
}

export default CartItem;

import { useDispatch } from "react-redux";
import {
    decreaseProductQuantity,
    increaseProductQuantity,
    removeProductToCart,
} from "../../redux/cart/action";
import * as S from "./styles";

const CartItem = ({ product, id, setTotalPrice }) => {
  const dispatch = useDispatch();

  const removeFromCart = (id) => {
    dispatch(removeProductToCart(id));
  };

  const increaseProduct = (id) => {
    dispatch(increaseProductQuantity(id));
  };

  const decreaseProduct = (id) => {
    dispatch(decreaseProductQuantity(id));
  };

  const calcPrice = (quantity, item) => {
    return quantity * item;
  };

  return (
    <>
      <S.CartItem key={id}>
        <S.CartImg>
          <img src={product.img[0]} alt="product" />
        </S.CartImg>
        <S.CartMiddle>
          <S.CartName>{product.name}</S.CartName>
          <S.CartBtns>
            <button onClick={() => decreaseProduct(product._id)}>-</button>
            <p>{product.quantity}</p>
            <button onClick={() => increaseProduct(product._id)}>+</button>
          </S.CartBtns>
        </S.CartMiddle>
        <S.CartRight>
          <p>
            {calcPrice(product.quantity, product.price)}.00$
          </p>
          <S.IconX onClick={() => removeFromCart(product._id)} />
        </S.CartRight>
      </S.CartItem>
    </>
  );
};

export default CartItem;

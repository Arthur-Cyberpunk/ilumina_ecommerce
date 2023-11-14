import React, { useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router";
import * as S from "./styles";

const mapStateToProps = (state) => ({
  products: state.products.products,
});

const InfoProduct = ({ products }) => {
  const [notify, setNotify] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const { id } = useParams();

  const item = products.filter((item) => item._id === id);

  const [image, setImage] = useState(item[0]?.img[0]);

  // const { addToCart } = useContext(CartContext);

  const changeImage = (newImage) => {
    setImage(newImage);
  };

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
    return quantity * item[0].price;
  };

  const showNotify = () => {
    setNotify(!notify);
  };

  return (
    <>
      <S.Notify onAnimationEnd={() => setNotify(false)} notify={notify}>
        <p>Item has been added to the cart &nbsp; ✅</p>
      </S.Notify>

      <S.ProductPage>
        {item.map((itens) => (
          <div className="container">
            <S.ProductDiv>
              <S.BigName>{itens.name}</S.BigName>
              <S.ProductLeft className="product-left">
                <S.BigImg>
                  <img src={image || itens.img[0]} alt="product" />
                </S.BigImg>
                <S.SmallImgs>
                  <img
                    onClick={() => changeImage(itens.img[0])}
                    src={itens.img[0]}
                    alt="product"
                  />
                  <img
                      onClick={() => changeImage(itens.img[1])}
                    src={itens.img[1]}
                    alt="product"
                  />
                  <img
                    onClick={() => changeImage(itens.img[2])}
                    src={itens.img[2]}
                    alt="product"
                  />
                </S.SmallImgs>
              </S.ProductLeft>
              <S.ProductRight>
                <S.ProductSpec>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </S.ProductSpec>
                <S.ProductQuant>
                  <p>Quantity</p>
                  <S.ProductBtns>
                    <button onClick={decrease}>-</button>
                    <p className="quantity">{quantity}</p>
                    <button onClick={increase}>+</button>
                  </S.ProductBtns>
                  <p className="product-price">{calcPrice(quantity)}.00$</p>
                </S.ProductQuant>
                <S.AtcBuy>
                  <S.AtcBtn
                  // onClick={() => {
                  //   addToCart(item[0]);
                  //   showNotify();
                  // }}
                  >
                    add to cart
                  </S.AtcBtn>
                  <S.BuyBtn>buy now</S.BuyBtn>
                </S.AtcBuy>
              </S.ProductRight>
            </S.ProductDiv>

            <S.Specifications>
              <S.Spec>
                <S.SpecTitle className="spec-title">Texture:</S.SpecTitle>
                <S.TitleName className="title-desc">
                  {itens.texture}
                </S.TitleName>
              </S.Spec>
              <S.Spec>
                <S.SpecTitle className="spec-title">Weight:</S.SpecTitle>
                <S.TitleName className="title-desc">{itens.weight}</S.TitleName>
              </S.Spec>
              <S.Spec>
                <S.SpecTitle className="spec-title">Size:</S.SpecTitle>
                <S.TitleName className="title-desc">{itens.size}</S.TitleName>
              </S.Spec>
            </S.Specifications>
          </div>
        ))}
      </S.ProductPage>
    </>
  );
};

export default connect(mapStateToProps)(InfoProduct);

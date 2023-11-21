import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router";
import { addProductToCart } from "../../redux/cart/action";
import useFetchData from '../../utils/useFetchData';
import * as S from "./styles";

const InfoProduct = () => {
  const data = useSelector(rootReducer => rootReducer.productsReducer);
  const dispatch = useDispatch()
  const [notify, setNotify] = useState(false);
  const [image, setImage] = useState('');

  useFetchData()

  const { id } = useParams();

  const item = data.filter((item) => item._id === id);

  const changeImage = (newImage) => {
    setImage(newImage);
  };

  useEffect(() => {
    setImage(item[0]?.img[0]);
  }, [item]);

  const showNotify = () => {
    setNotify(!notify);
  };

  const handleProductClick = () => {
    dispatch(addProductToCart(item))
  }

  return (
    <>
      <S.Notify className={notify ? 'slide-in' : ''} onAnimationEnd={() => setNotify(false)}>
        <p>Item has been added to the cart &nbsp; ✅</p>
      </S.Notify>
      <S.ProductPage>
          <div className="container">
            <S.ProductDiv>
              <S.BigName>{item[0]?.name}</S.BigName>
              <S.ProductLeft>
                <S.BigImg>
                  <img src={image} alt="product" />
                </S.BigImg>
                <S.SmallImgs>
                  <img
                    onClick={() => changeImage(item[0]?.img[0])}
                    src={item[0]?.img[0]}
                    alt="product"
                  />
                  <img
                    onClick={() => changeImage(item[0]?.img[1])}
                    src={item[0]?.img[1]}
                    alt="product"
                  />
                  <img
                    onClick={() => changeImage(item[0]?.img[2])}
                    src={item[0]?.img[2]}
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
                  <p>Price: &nbsp;</p>
                  <p>{item[0]?.price}.00$</p>
                </S.ProductQuant>
                <S.AtcBuy>
                  <S.AtcBtn
                  onClick={() => {
                    handleProductClick(item);
                    showNotify();
                  }}
                  >
                    add to cart
                  </S.AtcBtn>
                  <S.BuyBtn>buy now</S.BuyBtn>
                </S.AtcBuy>
              </S.ProductRight>
            </S.ProductDiv>

            <S.Specifications>
              <S.Spec>
                <S.SpecTitle >Texture:</S.SpecTitle>
                <S.TitleName >
                  {item[0]?.texture}
                </S.TitleName>
              </S.Spec>
              <S.Spec>
                <S.SpecTitle>Weight:</S.SpecTitle>
                <S.TitleName>{item[0]?.weight}</S.TitleName>
              </S.Spec>
              <S.Spec>
                <S.SpecTitle>Size:</S.SpecTitle>
                <S.TitleName>{item[0]?.size}</S.TitleName>
              </S.Spec>
            </S.Specifications>
          </div>
      </S.ProductPage>
    </>
  );
};

export default InfoProduct;

import React from "react";
import { useSelector } from 'react-redux';
import * as S from "./styles";

const TrendingItem = () => {
  const data = useSelector(rootReducer => rootReducer.productsReducer);

  const filteredItems = data?.slice(8, 16);

  return (
    <>
      {filteredItems?.map((item) => (
        <S.RowItem key={item._id}>
          <S.LinkProduct onClick={() => window.top(0, 0)} to={`/categories/product/${item._id}`}>
            <S.InfoProduct>
              {item.img.length > 0 && <img src={item.img[0]} alt="product1" />}
              <p>{item.name}</p>
              <S.ItemPrice>{item.price}$</S.ItemPrice>
            </S.InfoProduct>
          </S.LinkProduct>
        </S.RowItem>
      ))}
    </>
  );
};

export default TrendingItem;

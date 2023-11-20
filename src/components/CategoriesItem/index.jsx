import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import usePath from '../../utils/usePath';
import * as S from "./styles";

const CategoriesItem = () => {
  const data = useSelector(rootReducer => rootReducer.productsReducer);
  const [filteredItems, setFilteredItems] = useState([]);
  const lastPath = usePath();

  useEffect(() => {
    if (lastPath === 'all') {
      setFilteredItems(data)
    } else {
      setFilteredItems(data.filter(
        (item) => item.categories === lastPath,
      ));
    }
  }, [data, lastPath]);

  return (
    <>
      <S.ProudContainer>
        <div className="container">
          <S.ProductsGrid>
            {filteredItems?.map((item) => (
              <S.RowItem key={item._id}>
                <S.LinkProduct onClick={() => window.scrollTo(0, 0)} to={`/categories/product/${item._id}`}>
                  <S.InfoProduct>
                    {item.img.length > 0 && (
                      <img src={item.img[0]} alt="product1" />
                    )}
                    <p>{item.name}</p>
                    <S.ItemPrice>{item.price}$</S.ItemPrice>
                  </S.InfoProduct>
                </S.LinkProduct>
              </S.RowItem>
            ))}
          </S.ProductsGrid>
        </div>
      </S.ProudContainer>
    </>
  );
};

export default CategoriesItem;

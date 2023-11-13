import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../../redux/actions/product";
import * as S from "./styles";

const mapStateToProps = (state) => ({
  products: state.products.products,
});

const TrendingItem = ({ products, fetchProducts }) => {
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const filteredItems = products.slice(8, 16);

  return (
    <>
      {filteredItems.map((item) => (
        <S.RowItem key={item._id}>
          <S.LinkProduct onClick={() => window.top(0, 0)} to={"/categories"}>
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

export default connect(mapStateToProps, { fetchProducts })(TrendingItem);

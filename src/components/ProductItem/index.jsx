import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../../redux/actions/product';
import * as S from "./styles";

const mapStateToProps = (state) => ({
  products: state.products.products,
});

const ProductItem = ({ products, fetchProducts }) => {

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const filteredItems = products.slice(0, 8);

  return (
    <>
      {filteredItems.map((item) => (
        <S.Product key={item._id}>
          <S.LinkProduct onClick={() => window.top(0, 0)} to={`/categories/product/${item.categorie}`}>
            <S.InfoProduct>
                {item.img.length > 0 && (
                  <img src={item.img[0]} alt="product1" />
                )}
                <p>{item.name}</p>
                <S.ItemPrice>{item.price}$</S.ItemPrice>
            </S.InfoProduct>
          </S.LinkProduct>
        </S.Product>
      ))}
    </>
  );
};

export default connect(mapStateToProps, { fetchProducts })(ProductItem);

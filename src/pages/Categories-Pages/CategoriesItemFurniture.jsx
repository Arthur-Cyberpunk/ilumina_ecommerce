import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as S from "../../components/CategoriesItem/styles";
import { fetchProducts } from '../../redux/actions/product';

const mapStateToProps = (state) => ({
  products: state.products.products,
});

const CategoriesItem = ({ products, fetchProducts }) => {

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const filteredItems = products.filter(
    (item) => item.categories === "furniture",
  );

  return (
    <>
      <S.ProudContainer>
        <div className="container">
          <S.ProductsGrid>
            {filteredItems.map((item) => (
              <S.RowItem key={item._id}>
                <S.LinkProduct
                  onClick={() => window.top(0, 0)}
                  to={`/categories/product/${item._id}`}
                >
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

export default connect(mapStateToProps, { fetchProducts })(CategoriesItem);

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../../redux/actions/product';
import ProductItem from '../ProductItem';
import * as S from "./styles";

const mapStateToProps = (state) => ({
    products: state.products.products,
  });

const ProudProducts = ({ products, fetchProducts }) => {

    useEffect(() => {
        fetchProducts();
      }, [fetchProducts]);

    return (

        <S.Section>
            <div className="container">
            <S.H2>Products we are proud of</S.H2>
                <S.ProductsGrid>
                <ProductItem  products={products}/>
                </S.ProductsGrid>
            </div>
        </S.Section>
    )

}

export default connect(mapStateToProps, { fetchProducts })(ProudProducts);

import React, { useEffect, useState } from "react";
import Loading from "../Loading";
import ProductItem from "../ProductItem";
import * as S from "./styles";

const ProudProducts = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <S.Section>
      <div className="container">
        <S.H2>Products we are proud of</S.H2>
        {isLoading ? (
          <Loading />
        ) : (
          <S.ProductsGrid>
            <ProductItem />
          </S.ProductsGrid>
        )}
      </div>
    </S.Section>
  );
};

export default ProudProducts;

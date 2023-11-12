import * as S from "./styles";

const ProductItem = (props) => {
  const filteredItems = props.products.slice(0, 8);

  return (
    <>
      {filteredItems.map((item) => (
        <S.Product key={item._id}>
          <S.LinkProduct onClick={() => window.top(0, 0)} to={"/"}>
            <S.InfoProduct>
                {item.img.length > 0 && (
                  <img src={item.img[0]} alt="product1" />
                )}
                <p>{item.name}</p>
                <S.ItemPrice>{item.price}R$</S.ItemPrice>
            </S.InfoProduct>
          </S.LinkProduct>
        </S.Product>
      ))}
    </>
  );
};

export default ProductItem;

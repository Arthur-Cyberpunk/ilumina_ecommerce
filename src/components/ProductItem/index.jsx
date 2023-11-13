import * as S from "./styles";

const ProductItem = (props) => {
  const filteredItems = props.products.slice(0, 8);

  console.log(filteredItems)

  return (
    <>
      {filteredItems.map((item) => (
        <S.Product key={item._id}>
          <S.LinkProduct onClick={() => window.top(0, 0)} to={"/categories"}>
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

export default ProductItem;

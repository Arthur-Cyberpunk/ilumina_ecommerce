import { Link } from "react-router-dom";
import * as S from "./styles";

const ProductItem = (props) => {
    const filteredItems = props.products.slice(0, 17);

    //console.log(filteredItems[0].img[0])

    return (
        <>
        {filteredItems.map((item) => (
          <S.Product key={item._id} >
            <Link
              onClick={() => window.top(0, 0)}
              to={'/'}
            >
              <S.ProductHeader>
                <img src={item.img[0]} alt="product1" />
              </S.ProductHeader>
              <S.ProductDetails>
                <p>{item.name}</p>
                <S.ItemPrice>{item.price}$</S.ItemPrice>
              </S.ProductDetails>
            </Link>
          </S.Product>
        ))}
      </>

    )

}

export default ProductItem;

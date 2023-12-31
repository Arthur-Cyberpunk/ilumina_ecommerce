import { useState } from "react";
import { BsXLg } from "react-icons/bs";
import { TbList, TbShoppingCart } from "react-icons/tb";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import { selectProductsCount } from "../../redux/cart/cart.selectors";
import CartWithItems from "../CartWithItems";
import EmptyCart from "../EmptyCart";
import * as S from "./styles";

const NavBar = () => {
  const { products } = useSelector((rootReducer) => rootReducer.cartReducer);
  const productsCount = useSelector(selectProductsCount);
  const [sticky, setSticky] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [cart, setCart] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const openCart = () => {
    setCart(!cart);
  };

  return (
    <>
      <S.Navbar>
        <div className="container">
          <S.NavContainer sticky={sticky? true : undefined}>
            <Link to="/">
              <S.LogoImg onClick={scrollToTop} src={Logo} alt="logo" />
            </Link>
            <S.NavLinks>
              <Link onClick={() => window.scrollTo(0, 0)} to="/categories/all">
                categories
              </Link>
              <Link
                onClick={() => window.scrollTo(0, 0)}
                to="/categories/product/6552a19d28b8c5edc2260688"
              >
                product page
              </Link>
              <S.IconCart
                data-array-length={productsCount}
                onClick={openCart}
                withItems={productsCount? true : undefined}
              >
                <TbShoppingCart />
              </S.IconCart>
            </S.NavLinks>

            <S.HamburguerMenu>
              <S.IconCart
                data-array-length={productsCount}
                onClick={openCart}
                withItems={productsCount? true : undefined}
              >
                <TbShoppingCart />
              </S.IconCart>
              <i onClick={() => setMobile(!mobile)}>
                <TbList />
              </i>
            </S.HamburguerMenu>
          </S.NavContainer>
        </div>
      </S.Navbar>

      <S.PageOverlay onClick={openCart} cart={cart? true : undefined}></S.PageOverlay>

      <S.CartDiv cart={cart? true : undefined}>
        <S.CartTitleBtn>
          <h2>Your Shopping Cart ({productsCount})</h2>
          <BsXLg onClick={openCart} />
        </S.CartTitleBtn>

        <S.CartBody>
          {products.length < 1 ? (
            <EmptyCart openCart={openCart} />
          ) : (
            <CartWithItems />
          )}
        </S.CartBody>
      </S.CartDiv>

      <S.NavMobile mobile={mobile ? true : undefined}>
        <S.IconX onClick={() => setMobile(!mobile)} />
        <S.MobileLinks>
          <Link onClick={() => setMobile(!mobile)} to="/categories/all">
            categories
          </Link>
          <Link
            onClick={() => setMobile(!mobile)}
            to="/categories/product/6552a19d28b8c5edc2260688"
          >
            product page
          </Link>
        </S.MobileLinks>
      </S.NavMobile>
    </>
  );
};

export default NavBar;

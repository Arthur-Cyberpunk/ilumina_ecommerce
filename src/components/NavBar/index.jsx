import { useState } from "react";
import { TbShoppingCart } from "react-icons/tb";
import { Link } from "react-router-dom";
import * as S from "./styles";

const NavBar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);
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
    <S.NavMobile mobileNav={mobileNav}>
        <S.IconX onClick={() => setMobileNav(!mobileNav)} className="x-mobile" />
        <S.MobileLinks>
          <Link onClick={() => setMobileNav(!mobileNav)} to="/categories/all">
            categories
          </Link>
          <Link onClick={() => setMobileNav(!mobileNav)} to="/categories/lamps">
            lamps
          </Link>
          <Link
            onClick={() => setMobileNav(!mobileNav)}
            to="/categories/product/19"
          >
            product page
          </Link>
        </S.MobileLinks>
    </S.NavMobile>

    <S.Navbar>
      <div className="container">
        <S.NavContainer sticky={sticky}>
          <Link>
            <S.LogoImg
              onClick={scrollToTop}
              // src={}
              alt="logo"
            />
          </Link>
          <S.NavLinks>
            <Link onClick={() => window.scrollTo(0, 0)} to="/">
              categories
            </Link>
            <Link onClick={() => window.scrollTo(0, 0)} to="/">
              product page
            </Link>
            <i onClick={openCart}>
              <TbShoppingCart />
            </i>
          </S.NavLinks>
        </S.NavContainer>
      </div>
    </S.Navbar>
    </>
  );
};

export default NavBar;

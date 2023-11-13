import { useState } from "react";
import { TbChevronLeft } from "react-icons/tb";
import { Link } from "react-router-dom";
import * as S from "./styles";

const CategoriesHeader = () => {
  const [btnName, setBtnName] = useState("All");

  const handleBtnName = (e) => {
    setBtnName(e);
  };

  return (
      <div className="container">
        <S.CategoHeader>
          <S.TitleHome>
            <Link onClick={() => window.scrollTo(0, 0)} to="/">
              <TbChevronLeft /> Home
            </Link>
            <h3>{btnName}</h3>
          </S.TitleHome>
          <S.FilterBtns>
            <Link to="all" onClick={() => handleBtnName("all")}>
              <button>All</button>
            </Link>
            <Link to="furnitures">
              <button onClick={() => handleBtnName("furnitures")}>
                Furnitures
              </button>
            </Link>
            <Link to="electronics">
              <button onClick={() => handleBtnName("electronics")}>
                Electronics
              </button>
            </Link>
            <Link to="lamps">
              <button onClick={() => handleBtnName("lamps")}>Lamps</button>
            </Link>
            <Link to="kitchen">
              <button onClick={() => handleBtnName("kitchen")}>Kitchen</button>
            </Link>
            <Link to="chairs">
              <button onClick={() => handleBtnName("chairs")}>Chairs</button>
            </Link>
          </S.FilterBtns>
        </S.CategoHeader>
      </div>
  );
}

export default CategoriesHeader;

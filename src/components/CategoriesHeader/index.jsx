import React, { useEffect, useState } from "react";
import { TbChevronLeft } from "react-icons/tb";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useFetchData from "../../utils/useFetchData";
import usePath from '../../utils/usePath';
import * as S from "./styles";

const CategoriesHeader = () => {
  const data = useSelector((state) => state.data);
  const [path, setPath] = useState("");
  const lastPath = usePath();

  useEffect(() => {
    setPath(lastPath);
  }, [data, lastPath]);

  useFetchData();

  return (
    <div className="container">
      <S.CategoHeader>
        <S.TitleHome>
          <Link onClick={() => window.scrollTo(0, 0)} to="/">
            <TbChevronLeft /> Home
          </Link>
          <h3>{path}</h3>
        </S.TitleHome>
        <S.FilterBtns>
          <Link to="all">
            <button>All</button>
          </Link>
          <Link to="furnitures">
            <button>Furnitures</button>
          </Link>
          <Link to="electronics">
            <button>Electronics</button>
          </Link>
          <Link to="lamps">
            <button>Lamps</button>
          </Link>
          <Link to="kitchen">
            <button>Kitchen</button>
          </Link>
          <Link to="chairs">
            <button>Chairs</button>
          </Link>
        </S.FilterBtns>
      </S.CategoHeader>
    </div>
  );
};

export default CategoriesHeader;

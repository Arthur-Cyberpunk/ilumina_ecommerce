import React, { useEffect, useState } from "react";
import { TbChevronLeft, TbChevronRight } from "react-icons/tb";
import Loading from "../Loading";
import TrendingItem from "../TrendingItem";
import * as S from "./styles";

const TrendingSlider = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 400);

    return () => clearTimeout(timeoutId);
  }, []);

  const slideLeft = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 235;
  };

  const slideRight = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 235;
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <S.Trending>
          <div className="container">
            <S.Title className="title-btns">
              <h3>Trending Now</h3>
              <S.ButtonsBox>
                <button title="scroll left" onClick={slideLeft}>
                  <TbChevronLeft />
                </button>
                <button title="scroll right" onClick={slideRight}>
                  <TbChevronRight />
                </button>
              </S.ButtonsBox>
            </S.Title>
            <S.RowContainer id="slider">
              <TrendingItem />
            </S.RowContainer>
          </div>
        </S.Trending>
      )}
    </>
  );
};

export default TrendingSlider;

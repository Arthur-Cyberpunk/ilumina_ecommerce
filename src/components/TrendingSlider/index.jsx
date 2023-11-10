import * as S from "./styles";

const TrendingSlider = () => {
  const slideLeft = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 235;
  };

  const slideRight = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 235;
  };

  return (
    <S.Trending>
      <div className="container">
        <S.Title className="title-btns">
          <h3>Trending Now</h3>
          <S.ButtonsBox>
            <button title="scroll left" onClick={slideLeft}>
              {/* <IconArrowLeft /> */}
            </button>
            <button title="scroll right" onClick={slideRight}>
              {/* <IconArrowRight /> */}
            </button>
          </S.ButtonsBox>
        </S.Title>
        <div className="row-container" id="slider">
          {/* <TrendingItem /> */}
        </div>
      </div>
    </S.Trending>
  );
}

export default TrendingSlider;

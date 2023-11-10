import * as S from "./styles";

const Newsletter = () => {
  return (
    <>
      <S.News>
        <S.NewsText>
          <h2>Newsletter</h2>
          <S.Form>
            <input type="email" placeholder="your@email.com" />
            <button type="submit">Subscribe</button>
          </S.Form>
        </S.NewsText>
      </S.News>
    </>
  );
}

export default Newsletter;

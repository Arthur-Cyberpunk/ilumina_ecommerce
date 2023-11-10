import * as S from "./styles";

const Footer = () => {
  return (
    <>
      <S.Footer>
        <S.FooterLinks className="footer-links">
          <a href="#">About</a>
          <a href="#">Store locator</a>
          <a href="#">FAQs</a>
          <a href="#">News</a>
          <a href="#">Careers</a>
          <a href="#">Contact Us</a>
        </S.FooterLinks>
        <S.Love>
          Design &nbsp; by{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Abderraouf-Rahmani"
          >
            &nbsp; Abderraouf
          </a>
        </S.Love>
      </S.Footer>
    </>
  );
}

export default Footer;

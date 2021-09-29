import styled from "styled-components";

const Footer = () => {
  return (
    <StyledFooter>
      <div className="footer-wrapper">
        <h5>Viagem Perfeita &copy;</h5>
      </div>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.footer`
  color: white;
  background: rgba(19, 28, 39, 1);

  .footer-wrapper {
    display: flex;
    padding: 2rem;
    width: 90%;
    margin: auto;
    align-items: center;
    min-height: 10vh;
    flex-wrap: wrap;
  }

  h5 {
    flex: 1 1 40rem;
  }

  @media screen and (max-width: 599px) {
    text-align: center;
    h5 {
      padding-bottom: 2rem;
    }
  }
`;

import styled from "styled-components";
import landingPage from "../img/landing-page.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <HeroSection className="hero">
      <h2> Sem limites para explorar o mundo</h2>
      <h3>
      Comece sua viagem com as melhores condições! <br />
        Contate-nos abaixo.
      </h3>

      <Link to="/Form">
      <StyledButton>Quero conhecer agora!</StyledButton>
      </Link>

    </HeroSection>
  );
};

export default Hero;

const HeroSection = styled.section`
  min-height: 90vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5), transparent),
    url(${landingPage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  h3 {
    padding: 5rem;
  }
`;

const StyledButton = styled.button`
  padding: 2rem 6rem;
  background: #4c6e97;
  border: none;
  color: white;
  font-size: 1.8rem;
  cursor: pointer;
  transition: background 0.5s ease-in-out 0.25s;

  :hover {
    background: #27394e;
  }
`;

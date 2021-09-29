import styled from "styled-components";
import newYorkPage from "../img/new-york-page.png";

const Locations = () => {
  return (
    <LocationsSection id="locations">
      <LocationsHeader className="locations-head">
        <h2>A experiência de viagem perfeita</h2>
        <h3>
          Preparamos o hotel, voo e destino com a melhor <br />
          hospedagem para você.
        </h3>
      </LocationsHeader>
    </LocationsSection>
  );
};

export default Locations;

const LocationsSection = styled.section`
  min-height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.0), transparent),
    url(${newYorkPage});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  position: relative;
  overflow: hidden;
`;

const LocationsHeader = styled.header`
  width: 95%;
  margin: auto;
  min-height: 90vh;

  h2 {
    padding: 1.5rem 0rem;
    text-decoration: underline;
    -webkit-text-fill-color: white;
    
  }
  h3 {
    padding: 2rem 0rem;
    -webkit-text-fill-color: white;
  }

  @media screen and (max-width: 599px) {
    h3 {
      background: rgba(19, 28, 39, 0.8);
      -webkit-text-fill-color: white;
    }
  }
`;

import styled from "styled-components";
import route from "../icons/route-solid.svg";
import bed from "../icons/bed-solid.svg";
import plane from "../icons/plane-departure-solid.svg";

const Benefits = () => {
  return (
    <section className="benefits">
      <StyledBenefitsHeader className="benefits-head">
        <h2>Viaje tranquilamente:</h2>
        <h3>
        Oferecemos assistência gratuita para ajudá-lo a escolher e planejar sua viagem <br />
        Você só se preocupa com as malas.
        </h3>
      </StyledBenefitsHeader>
      <StyledCards className="cards">
        <StyledCard className="card">
          <StyledIcon>
            <img src={route} alt="route" />
          </StyledIcon>
          <h4>Destino</h4>
          <p>Viaje por mais de 250 países sem preocupação.</p>
        </StyledCard>
        <StyledCard className="card">
          <StyledIcon>
            <img src={bed} alt="bed" />
          </StyledIcon>
          <h4>Hotel</h4>
          <p>Os melhores hotéis localizados em áreas populares.</p>
        </StyledCard>
        <StyledCard className="card">
          <StyledIcon>
            <img src={plane} alt="plane" />
          </StyledIcon>
          <h4>Voo</h4>
          <p>Voo incluso em todas as viagens compradas.</p>
        </StyledCard>
      </StyledCards>
    </section>
  );
};

export default Benefits;

const StyledBenefitsHeader = styled.header`
  background: #343c44;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;

  h3 {
    padding: 2rem;
  }
`;

const StyledCards = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  min-height: 70vh;
  align-items: center;
  flex-wrap: wrap;
`;

const StyledCard = styled.div`
  text-align: center;
  flex: 1 1 25rem;
  min-height: 40vh;
  margin: 2rem 5rem;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1), 0px 20px 20px rgba(0, 0, 0, 0.1);

  img {
    max-width: 15%;
    margin: 2rem;
  }

  h4,
  p {
    padding: 3rem;
  }
`;

const StyledIcon = styled.div`
  background: rosybrown;
`;

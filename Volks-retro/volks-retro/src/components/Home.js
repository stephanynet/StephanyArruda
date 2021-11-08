import lateralFusca1 from "../img/lateralFusca1.jpg";
import lateralFusca2 from "../img/lateralFusca2.jpg";
import fuscaAntigo1 from "../img/fuscaAntigo1.png";
import fuscaAntigo2 from "../img/fuscaAntigo2.png";
import fusca1 from "../img/fusca1.png";
import fusca2 from "../img/fusca2.png";
import fuscaNaEstrada1 from "../img/fuscaNaEstrada1.jpg";
import fuscaNaEstrada2 from "../img/fuscaNaEstrada2.jpg";

import 'bootstrap/dist/css/bootstrap.min.css';
import {Carousel, Image, Row, Container, Col} from 'react-bootstrap'

const Home = () => {
    return (
      <div className="container">
        <h2> 
        <cite title="font-family: 'Cormorant Garamond', serif">Fusca 1935 </cite>  
        </h2>
      <Carousel>
  <Carousel.Item>
    <img
      className="col-lg-2"
      src={fusca2}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="col-lg-2"
      src={fuscaNaEstrada2}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="col-lg-2"
      src={fuscaAntigo2}
      alt="First slide"
    />
 </Carousel.Item>
</Carousel>

<Carousel>
<Carousel.Item>
    <img
      className="col-lg-2"
      src={fusca1}
      alt="First slide"
    />
 </Carousel.Item>
 <Carousel.Item>
    <img
      className="col-lg-2"
      src={fuscaNaEstrada1}
      alt="First slide"
    />
 </Carousel.Item>
 <Carousel.Item>
    <img
      className="col-lg-2"
      src={fuscaAntigo1}
      alt="First slide"
    />
 </Carousel.Item>
</Carousel>

<Container >
   <Row>
    <Col >
     <Image src={lateralFusca1} rounded />
     <p>
 Foi lançado em 1935, com todas <br></br>
 as exigências cumpridas. Podia ser <br></br>
 comprado por quase todos, ao <br></br>
 preço de 990 marcos.
 </p>
    </Col>

    <Col>
    <p>
 Equipado com motor refrigerado a ar, <br></br>
 sistema elétrico de seis volts, câmbio seco <br></br>
 de quatro marchas, que até então só se <br></br>
 fabricavam carros com caixa de câmbio <br></br>
 de até 3 marchas.
 </p>
     <Image src={lateralFusca2} rounded />
    </Col>
  </Row>
</Container>
</div>
    );
};

export default Home;
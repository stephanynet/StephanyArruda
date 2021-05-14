import React from 'react'
import styled from 'styled-components'
import PerguntaAberta from './PerguntaAberta'
import PerguntaFechada from './PerguntaFechada'

const DivCentral = styled.div`
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
`
class Etapa1 extends React.Component {
  render() {
    return (<DivCentral>

      <h2>ETAPA 1 - DADOS GERAIS</h2>
      <PerguntaAberta pergunta={"1. Qual o seu nome?"} /> 
      <PerguntaAberta pergunta={"2. Qual sua idade?"} />
      <PerguntaAberta pergunta={"3. Qual seu email?"} />
      
      <Botao onClick={this.props.clica}>Próxima Etapa</Botao>
    </DivCentral>
    );
  }

}

export default Etapa1;
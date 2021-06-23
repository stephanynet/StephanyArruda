import React from 'react'
import styled from 'styled-components'

const DivCentral = styled.div`
margin: 0 auto;
display: flex;
justify-content: center;
align-items: center;
`

class Final extends React.Component {
    render() {
      return (<DivCentral>
        <h2>O FORMULÁRIO ACABOU</h2>
  
      </DivCentral>
      );
    }
  
  }
  
  export default Final;

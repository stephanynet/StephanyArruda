import React from "react"
import styled from "styled-components"
import PaginaCadastro from "./components/PaginaCadastro"
import PaginaUsuarios from "./components/PaginaUsuarios"

const FormContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  font-family: sans-serif;
  font-size: 1.8rem;
  background: #2c345c;
`

export default class App extends React.Component {
  state = {
    telaAtual: "cadastro"
  }

  escolheTela = () => {
    switch (this.state.telaAtual){
      case "cadastro":
        return <PaginaCadastro irParaLista={this.irParaLista}/>
      case "lista":
        return <PaginaUsuarios irParaCadastro={this.irParaCadastro}/>
      default:
        return <div>Erro! Página não encontrada :(</div>
    }
  }

  irParaCadastro = () => {
    this.setState({telaAtual: "cadastro"})
  }

  irParaLista = () => {
    this.setState({telaAtual: "lista"})
  }

  render(){
    return (
      <FormContainer>
       {this.escolheTela()}
       </FormContainer>
    )
  }
}

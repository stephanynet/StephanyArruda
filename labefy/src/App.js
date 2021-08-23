import React from "react"
import CriarPlayList from "./components/CriarPlayList"
import VerPlayList from "./components/VerPlayList"

import styled from "styled-components";

export default class App extends React.Component {
  state = {
    telaAtual: "Criar Play List"
  }

  trocaTelas = () => {
    switch (this.state.telaAtual){
      case "Criar Play List":
        return <CriarPlayList irParaLista={this.irParaLista}/>
      case "lista":
        return <VerPlayList playList={this.playList}/>
      default:
        return <div>Erro! Página não encontrada :(</div>
    }
  }

  playList = () => {
    this.setState({telaAtual: "Criar Play List"})
  }

  irParaLista = () => {
    this.setState({telaAtual: "lista"})
  }

  render(){
    return (
      <div>
        {this.trocaTelas()}
      </div>
    )
  }
}

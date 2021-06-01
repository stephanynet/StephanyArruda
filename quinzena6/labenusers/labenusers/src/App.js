import React from "react";
import "./styles.css";
import {PrimeiraPagina} from "../paginas/PrimeiraPagina";
import {SegundaPagina} from "../paginas/SegundaPagina";

export default class App extends React.Component {
  state = {
    page: true
  };

  changePage = () => {
    this.setState({ page: !this.state.page });
  };

  render() {
    return (
      <div className="App">
        <h1>Labenusers</h1>
        {this.state.page ? <PrimeiraPagina /> : <SegundaPagina />}
        <button onClick={this.changePage}>Troca de página</button>
      </div>
    );
  }
}

import React from "react"
import axios from "axios"
import styled from "styled-components";

const ContainerPlayList = styled.div`
    justify-content: center;
     align-items: center;
     background: #634461;
     width: 30rem;
     border-radius: 0.5rem;
     margin: 0 auto;
     overflow: hidden;
    }

button {
    display: flex;
    margin: 2rem auto;
    color: #0ff;
    padding: 1rem;
    background-color: rgba(229, 238, 255, 0.2);
    border-radius: 0.8rem;
    border: none;
    font-size: 1rem;
    :hover {
      background: rgba(229, 238, 255, 0.1);
}

h2 {
  
}
  
`;


export default class CriarPlayList extends React.Component {
    state = {
        nome: ""
    }

    handleNome = (event) => {
        this.setState({nome: event.target.value})
    }

    criarPlaylist = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        const body = {
            name: this.state.nome
        }

        axios.post(url, body, {
            headers: {
                Authorization: "stephany-franca-munoz"
            }
        })
        .then((res) => {
            alert("Play List cadastrada com sucesso!")
            this.setState({nome: ""})
        })
        .catch((err) => {
            alert(err.response.data.message)
        })
    }

    render(){
        return(
            <div>
                <ContainerPlayList>
                <h2> Crie sua Playlist aqui </h2>
                <input
                   placeholder={"Nome da playlist"}
                   value={this.state.nome}
                   onChange={this.handleNome}
                />
                <button onClick={this.criarPlaylist}>Criar</button>
                <button onClick={this.props.irParaLista}> VER PLAYLISTS </button>
            </ContainerPlayList>
            </div>
        )
    }
}
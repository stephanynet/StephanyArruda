import React from "react"
import axios from "axios"

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
                <button onClick={this.props.irParaLista}> VER PLAYLISTS</button>
                <h2> Crie sua Playlist aqui </h2>
                <input
                   placeholder={"Nome"}
                   value={this.state.nome}
                   onChange={this.handleNome}
                />
                <button onClick={this.criarPlaylist}>Criar</button>
            </div>
        )
    }
}
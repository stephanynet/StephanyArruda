import React from "react"
import axios from "axios"

import styled from "styled-components";

const CardUsuario = styled.div`
  justify-content: center;
  align-items: center;
  background: blue;
  width: 30rem;
  border-radius: 0.5rem;
  margin: 0 auto;
  `

export default class VerPlayList extends React.Component {
    state = {
        playlists: []
    }

    componentDidMount() {
        this.pegarPlaylists()
    }

    pegarPlaylists = async() => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        
        try {
            const res = await axios.get(url, {
                headers: {
                    Authorization: "stephany-franca-munoz"
                }
            })

            this.setState({ playlists: res.data })
        } catch (err) {
            alert("Erro! Tente novamente.")
        }
    }

    deletarPlaylist = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlist
        /${id}`
        axios.delete(url, {
            headers: {
                Authorization: "stephany-franca-munoz"
            }
        })
            .then((res) => {
                alert("Play List deletada com sucesso!")
                this.pegarPlaylists()
            })
            .catch((err) => {
                alert("Erro! Tente novamente")
            })
    }

    render() {
        const listaPlaylist = this.state.playlists.map((user) => {
            return (
                <CardUsuario key={user.id}>
                {user.name}<button onClick={() => this.deletarPlaylist(user.id)}>X</button>
                </CardUsuario>
                )
        })

        return (
            <div>
                <button onClick={this.props.playList}> CRIAR UMA PLAYLIST</button>
                <h2>Ver PlayLists</h2>
                {listaPlaylist}
            </div>
        )
    }
}
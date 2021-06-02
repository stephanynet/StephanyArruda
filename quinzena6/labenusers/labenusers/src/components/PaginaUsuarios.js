import React from "react"
import axios from "axios"

export default class PaginaUsuarios extends React.Component {
    state = {
        usuarios: []
    }

    componentDidMount() {
        this.pegarUsuarios()
    }

    pegarUsuarios = async() => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

        try {
            const res = await axios.get(url, {
                headers: {
                    Authorization: "stephany-franca-munoz"
                }
            })

            this.setState({ usuarios: res.data })
        } catch (err) {
            alert("Ocorreu um erro, tente novamente!")
        }
    }

    deletarUsuario = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
        axios.delete(url, {
            headers: {
                Authorization: "stephany-franca-munoz"
            }
        })
            .then((res) => {
                alert("Usuário deletado com sucesso!")
                this.pegarUsuarios()
            })
            .catch((err) => {
                alert("Ocorreu um erro, tente novamente")
            })
    }

    render() {
        console.log=(this.state.usuarios)
        
        return (
            <div>
                <button onClick={this.props.irParaCadastro}>Ir para Cadastro</button>
                <h2>Lista de Usuários</h2>
                 </div>
        )
    }
}
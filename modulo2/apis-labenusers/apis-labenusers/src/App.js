import React from "react";
import axios from "axios";




  


const headers = {
  headers: {
    Authorization: "yasmin-silva-shaw",
  },
};

const baseUrl =
  "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

export default class App extends React.Component {
  state = {
    email: "",
    nome: "",
    userList: [],
    renderizaPagina: true,
  };

  componentDidMount() {
    this.getAllUsers();
  }

  getAllUsers = () => {
    axios
      .get(baseUrl, headers)
      .then((res) => {
        this.setState({ userList: res.data });
        console.log(res.data.result.list);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  postcreateUser = () => {
    const body = {
      name: this.state.nome,
      email: this.state.email,
    };

    axios
      .post(`${baseUrl}`, body, headers)
      .then((res) => {
        this.getAllUsers();
        alert("usuario cadastrado com sucesso");
        console.log(res.data);
      })
      .catch((err) => {
        alert("não foi possivel criar o usuario");
        console.log(err.reponse.data);
      });
  };

  delUser = (userId) => {
    axios
      .delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userId}`,
        headers
      )
      .then((res) => {
        this.getAllUsers();
        alert("deletado com sucesso");
      })
      .catch((err) => {
        alert("erro em deletar");
      });
  };

  onChangeName = (ev) => {
    this.setState({ nome: ev.target.value });
  };
  onChangeEmail = (ev) => {
    this.setState({ email: ev.target.value });
  };

  voltarParaPaginaInicial = () =>{
    this.setState({renderizaPagina: ! this.state.renderizaPagina})
  }

  render() {
    const componentsUsers = this.state.userList.map((user) => {
      return (
        <div>
          <li key={user.id}>{user.name}</li>
          <button onClick={() => this.delUser(user.id)}>x</button>
        </div>
      );
    });

    return (
      <div>
        {
          this.state.renderizaPagina ?
          <div>
            <button onClick={this.voltarParaPaginaInicial}>Ver lista</button>
          <label>
            Nome:
            <input value={this.state.nome} onChange={this.onChangeName} />
          </label>

          <label>
            Email:
            <input value={this.state.email} onChange={this.onChangeEmail} />
          </label>
          <button onClick={this.postcreateUser}>enviar</button>
        </div>
        :
        
        <div>
          <button onClick={this.voltarParaPaginaInicial}>pagina inicial</button>
          <ul>{componentsUsers}</ul>
        </div>
        }
        
      </div>
    );
  }
}

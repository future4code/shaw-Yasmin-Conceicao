import React from "react";
import axios from "axios";



export  default class CriaPlayList extends React.Component{
    state ={
        criaplaylist: []
    }

    CreatePlayList = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        const body = {
            name: this.state.criaplaylist
        }

        axios.post(url, body, {
            headers:{
                Authorization: "yasmin-silva-shaw"
            }
        })
        .then((res) =>{
            alert("PlayList criada com sucesso!")
            this.setState({criaplaylist:""})
        })
        .catch((err) =>{
            alert(err.response.data.message)
        })
    }

    onChangePlayList = (e) =>{
        this.setState({criaplaylist: e.target.value})
    }

    render(){
      return (
        <div>
            <button onClick={this.props.irParaAcessaPlayList}>Acessar PlayList</button>
            <h4>Criar playlist:</h4>
            <input value={this.state.criaplaylist} onChange={this.onChangePlayList} ></input>
            <button onClick={this.CreatePlayList}>Criar</button>
           
        </div>
      )
    }
  }
import axios from "axios";
import React from "react";


const headers ={
    headers:{
        Authorization: "yasmin-silva-shaw"
    }
}

export  default class AcessaPlayList extends React.Component{

    state = {
     seeTheList : [],
     nome:"",
     artista:"",
     url: ""

    }


    componentDidMount(){
        this.getAllPlayList()
    }

    getAllPlayList = () =>{
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        axios
        .get(url, headers)
        .then((res)=>{
            this.setState({seeTheList: res.data.result.list})
        })
        .catch((err) => {
            // alert("Não foi possivel acessar a playList")
            console.log(err.reponse)
        })
    }

    deletePlayList = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`
        axios
        .delete(url,headers)
        .then((res) =>{
            alert("Usuário deletado com sucesso")
            this.getAllPlayList()
        })
        .catch((err)=>{
            alert("Ocorreu um erro, tente novamente")
        })
    }

    addTrackToPlaylist = (id) =>{
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`
        const body ={
            name:this.state.nome,
            artist:this.state.artista,
            url:this.state.url
        }
        axios
        .post(url,headers,body)
        .then((res)=>{
            this.setState({nome: "", artist:"", url:""})
        })
        .catch((err)=>{
            alert(err.response.data.message)
        })
    }

    render(){
        const mapeiaList = this.state.seeTheList.map((lista) =>{
            return(  
            <div>
            <p key={lista.id}>{lista.name}</p>
            <button onClick={() => this.deletePlayList(lista.id)}>x</button>
            </div>
            
            )
        })

      return (
        <div>
            <button>Ver detalhes da playlist</button>
            {mapeiaList}
        </div>
      )
    }
  }
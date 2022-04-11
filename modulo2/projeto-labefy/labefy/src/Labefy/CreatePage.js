import React from "react";
import axios from "axios";
import styled from "styled-components";


const Container = styled.div`
background-color:#001827;
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
background-image:url("https://i.pinimg.com/originals/e0/47/de/e047de4368c79562152e3c3f76875f89.jpg")
`

const Card = styled.div`

height: 50%;
width: 30%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
color: black;
background-color:#f3f3f3;
border-radius: 10px;



input{
    text-align: center;
    border-radius: 6.7px;
    /* outline: none;
    border: none; */
    height: 35px;
    margin-bottom: 20px;
    margin-top: 30px;
    
}

button{
margin: 5px;
height: 25px;
width: auto;
font-family: Arial, Helvetica, sans-serif;
border-radius: 4px;
/* outline: none;
border: none; */


}

div{
    display: flex;
    justify-content: space-between;
  
}



`

const axiosConfig = {
    headers: {
        Authorization: "yasmin-silva-shaw"
    }
}

const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"


export default class CreatePage extends React.Component {

    state = {
        playlist: [],
        screen: "create",
        playlistName: "",
    }

    createPlaylist = () => {
        const body = {
            name: this.state.playlistName
        }

        axios.post (url, body, axiosConfig)
        .then ((res) => {
            alert("Playlist criada")
            console.log(res.data)
        })
        .catch ((error) => {
            alert("Error")
            console.log(error.res)
        })
    }

    onClickCreate = () => {
        this.createPlaylist()
    }

    onChangePlaylistname = (event) => {
        this.setState({playlistName: event.target.value})
    }

    render () {
        return(
            <Container>
                <Card>
                    <div>
                        <h2>Criar Playlist</h2>
                    </div>
                  
                  <div>
                        <input placeholder="Nome da playlist" onChange={this.onChangePlaylistname}></input>
                  </div>
               
               
               <div>
                   
                <button onClick={this.onClickCreate}>Criar</button>

                <button onClick={this.props.goToListPage}>Playlists</button>
                   
               </div>
               
                </Card>
                
            </Container>
        )
    }
}
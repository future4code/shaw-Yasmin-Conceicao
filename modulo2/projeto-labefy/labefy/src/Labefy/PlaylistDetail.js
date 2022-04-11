import React from "react";
import axios from "axios";
import styled from "styled-components";

const Container = styled.div`


display: flex;
justify-content: center;
align-items: center;
height: 100vh;
background-image:url("https://i.pinimg.com/originals/e0/47/de/e047de4368c79562152e3c3f76875f89.jpg")
`

const NovoCard = styled.div`
height: 90%;
width: 30%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
color: black;
background-color:#f3f3f3;
border-radius: 10px;
overflow: scroll;

div{
    display: flex;
    
    
    input{
        width: 80px;
        margin-right: 8px;
        border-radius: 8px;
        text-align: center;
        outline: none;
        border: none;
    }

    button{
        outline: none;
        border: none;

    }
}
`

const Card = styled.div `
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    width: auto;
    height: auto;
    text-align:center;
    margin: 10px;
    border-radius: 5px;
    

`

const axiosConfig = {
    headers: {
        Authorization: "yasmin-silva-shaw"
    }
}

export default class PlaylistDetail extends React.Component {

    state = {
        tracks: [],

        musicName: "",
        artistName: "",
        musicUrl: "",
    }

    getAllTracks = () => {
        axios.get (`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.id}/tracks`, axiosConfig)
        .then((res) => {
            this.setState({tracks: res.data.result.tracks})
        .catch((error) => {
            alert ("Error")
            console.log(error.res.data)
        })
        })
    }

    addTrackToPlaylist = () => {
        const body = {
            name: this.state.musicName,
            artist: this.state.artistName,
            url: this.state.musicUrl
        }

        axios.post (`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.id}/tracks`, body, axiosConfig)
        .then ((res) => {
            alert("Musica adicionada!")
            this.setState({musicName: "", musicUrl: "", artistName: ""})
        })
        .catch ((error) => {
            alert("Erro ao adicionar a musica")
            console.log(error.res)
        })
    }

    deleteTrack = (id) => {
        axios.delete (`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.id}/tracks/${id}`, axiosConfig)
        .then((res) =>{
            alert("Musica deletada")
        })
        .catch((error) => {
            alert ("Error")
            console.log(error.res.data)
        })
    }

    componentDidMount () {
        this.getAllTracks()
    }

    componentDidUpdate() {
        this.getAllTracks()
    }
      

    

    onChangeName = (event) => {
        this.setState({musicName: event.target.value})
    }

    onChangeArtist = (event) => {
        this.setState({artistName: event.target.value})
    }

    onChangeUrl = (event) => {
        this.setState({musicUrl: event.target.value})
    }

    render() {

    const mapTrackList =  this.state.tracks.map ((track) => {
        return(
            <Card key={track.id}>
                <p><strong>{track.name}</strong></p>
                <p>{track.artist}</p>
                <audio controls><source src={track.url} type="audio/mp3"/></audio>
                <button onClick={() => this.deleteTrack(track.id)}>X</button>
            </Card>
        )
    })
        return( 
            <Container>
            <NovoCard>
                <div>
                <input value={this.state.musicName} onChange={this.onChangeName} placeholder="Name"></input>
                <input value={this.state.artistName} onChange={this.onChangeArtist} placeholder="Artist"></input>
                <input value={this.state.musicUrl} onChange={this.onChangeUrl} placeholder="Url"></input>
                <button onClick={this.addTrackToPlaylist}>Add Music</button>    
                </div>
            
                <br></br>
                <button onClick={this.props.goToListPage}>Back</button>

                {mapTrackList}
            </NovoCard>
                
            </Container>
        )
    }
}
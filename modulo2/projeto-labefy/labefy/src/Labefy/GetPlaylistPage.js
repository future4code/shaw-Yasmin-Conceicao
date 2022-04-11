import React from "react"
import axios from "axios"
import styled from "styled-components"
import PlaylistDetail from "./PlaylistDetail"

const CardList = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
   
`

const Card = styled.div `
    display: flex;
    border: 1px solid black;
    height: 70%;
    width: 200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
    margin-bottom: 5px;
    cursor: pointer;
    border-radius: 5px
    
`

const CardCenter = styled.div`

height: 70%;
width: 30%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
color: black;
background-color:#f3f3f3;
border-radius: 10px;
overflow: scroll;
flex-direction: column;


h2{
    margin-top: 55px;
}





button{
margin: 5px;
height: 20px;
width: auto;
font-family: Arial, Helvetica, sans-serif;
border-radius: 4px;
align-items: center;
justify-content: center;
}
`

const Container = styled.div`
background-image: url("https://i.pinimg.com/originals/e0/47/de/e047de4368c79562152e3c3f76875f89.jpg");
height: 100vh;
justify-content: center;
align-items:center;
display: flex;
`


const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"

const axiosConfig = {
    headers: {
        Authorization: "yasmin-silva-shaw"
    }
}

export default class GetPlaylist extends React.Component {
    state = {
        playlist: [],
        tracks: [],

        screen: "get"
    }

    getAllPlaylist = () => { 
        axios.get (url, axiosConfig)
        .then ((res) => {
            console.log(res.data)
            this.setState({playlist: res.data.result.list})
        })
        .catch ((error) => {
            console.log(error.res)
        })
    }

    deletePlaylist = (id) => {
        axios.delete (`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`, axiosConfig)
        .then ((res) => {
            this.getAllPlaylist()
        })
        .catch((error) => {
            alert("Error")
            console.log(error.res.data)
        })
    }

    componentDidMount () {
        this.getAllPlaylist()
        this.getAllTracks()
    }

    getAllTracks = (id) => {
        axios.get (`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`, axiosConfig)
        .then((res) => {
            this.setState({tracks: res.data.result.tracks})
        .catch((error) => {
            alert ("Error")
            console.log(error.res.data)
        })
        })
    }

    render() {

        const mapList = this.state.playlist.map ((list) => {
            return(
                <CardList>
                    <Card>
                        <p onClick={() => this.props.goToDetailPage(list.id)} key={list.id} changePage>{list.name}</p>
                        <button onClick={() => this.deletePlaylist(list.id)}>x</button>
                    </Card>    
                </CardList>
            )
        })

        return(
            
            <Container>
                <CardCenter>
                   <div>
                     <h2>Playlists</h2>  
                    </div> 
                     <button onClick={this.props.goToCreatePage}>Voltar</button>
                {mapList} 
               
                </CardCenter>
            </Container>
        )
    }
}
import React from "react";
import CreatePage from "./CreatePage";
import GetPlaylist from "./GetPlaylistPage";
import PlaylistDetail from "./PlaylistDetail";

export default class AppLabefy extends React.Component {

    state = {
        screen: "create",
        playlistId: ""
    }

    goToDetailPage = (id) => {
        this.setState ({screen: "detail", playlistId: id})
    }

    goToListPage = () => {
        this.setState ({screen: "get", playlistId: ""})
    }

    goToCreatePage = () => {
        this.setState({screen: "create", playlistId: ""})
    }

    screenRender = () => {
        switch (this.state.screen) {
            case "create":
                return <CreatePage goToDetailPage = {this.goToDetailPage} goToListPage = {this.goToListPage}/>
            case "get":
                return <GetPlaylist goToDetailPage = {this.goToDetailPage} goToCreatePage = {this.goToCreatePage}/>
            case "detail":
                return <PlaylistDetail goToListPage = {this.goToListPage} id = {this.state.playlistId}/>
            default:
                return <GetPlaylist goToDetailPage = {this.goToDetailPage}/>

        }
    }
    render() {
        return(
            <div>
                {this.screenRender()}
            </div>     
        )
    }
}
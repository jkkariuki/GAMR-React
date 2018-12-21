import React from "react";
import { Games, IndividualGames } from "../../components/Games";
import { Col, Row, Container } from "../../components/Grid";
import "./SavedGames.css"
import Nav from "../../components/Nav";
import API from "../../utils/API";
import HomeSearch from "../HomeSearch";
import ReactPlayer from 'react-player'

class Saved extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            saved: [],
            video_ids: []
        };
    }

    componentDidMount() {
        this.loadGames();
    }

    loadGames = () => {
        console.log("load games hit");
        API.getSaved()
        .then(res => {
            console.log(res.data)
            console.log("hello")
            let savedArray = []
            for (let x = 0; x < res.data.length; x++) {
                savedArray.push(res.data[x])
            }
            this.setState({ saved: savedArray });
            this.searchYoutube(this.state.saved)
        })
        .catch(err => console.log(err));
    }

    searchYoutube = (array) => {
        console.log("searching youtube")
        console.log(array)
        let titleArray = [];

        let video_ids = []

        for (var i = 0; i < array.length; i++) {
            console.log(array[i].gameTitle)
            titleArray.push(array[i].gameTitle)

        }
        console.log(titleArray)
        for (var x = 0; x < titleArray.length; x++) {
            API.searchTrailer(titleArray[x])
                .then(res => {
                    console.log(res)
                    video_ids.push(res);
                    console.log("vid ids: " + video_ids)
                    this.setState({ video_ids: video_ids })
                })

                .catch(err => console.log("Save error: " + err));
        }

    }
    deleteGame = id => {
        // console.log("game id " + id );
        API.delete(id)
            .then(res => this.loadGames())
            .catch(err => console.log(err));

    }
    render() {

        return (

            <div>
                <Row>
                    <Col size="md-12  sm-12">
                        <Games>
                            {this.state.saved.map((game, i) => {
                                return (
                                    <Row>
                                        <IndividualGames style={{ height: "100%", borderBottom:"none" }}>
                                            <Col style={{textAlign:"center"}} size="md-5 sm-5">
                                                <div className="gameTitleColumn">
                                                    <div>{"Title: " + game.gameTitle}</div>
                                                    <br />
                                                    <img className="gameImages" src={game.image_url} />
                                                    <br />
                                                    <div>{"About this Game: " + game.description}</div>
                                                    <br />
                                                </div>
                                            </Col> 
                                            <Col style={{margin:"0 auto"}} size="md-5 sm-5">
                                                <div className="trailerColumn">                                      
                                                    <ReactPlayer url={'https://www.youtube.com/watch?v=' + this.state.video_ids[i]} width={"100%"} height={"270px"} display={"block"} style={{ display:"block", height: "100%", width: "100%" }} controls={true} />
                                                </div>
                                            </Col>
                                            <Col style={{marginTop:"10%", marginBottom:"10%"}} size="md-2 sm-2">
                                            <button style={{margin:"0 auto"}} onClick={() => this.deleteGame(game._id)}>Delete</button>
                                            </Col>
                                        </IndividualGames>
                                    </Row>
                                );
                            })}
                        </Games>
                    </Col>
                </Row>
            </div>
        )
    }
};
export default Saved;



import React from "react";
import { Games, IndividualGames } from "../../components/Games";
import { Col, Row, Container } from "../../components/Grid";

import Nav from "../../components/Nav";
import API from "../../utils/API";
import HomeSearch from "../HomeSearch";

class Saved extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            saved: [],
            video_ids: []

        };
    }

    componentDidMount(){
        this.loadGames();

    }
    
    loadGames = () => {
        console.log("load games hit");
    
        API.getSaved()
            .then(res => {
                console.log(res.data)
                console.log("hello")
                let savedArray = []
                for(let x = 0; x < res.data.length; x++){
                    savedArray.push(res.data[x])
                }
                this.setState({saved: savedArray})

            })
            .catch(err => console.log(err));

    }
    

    searchYoutube = (array) =>{
        console.log("searching youtube")
        console.log(array)
        let titleArray = [];
        
        let video_ids = []

        // titleArray = this.state.results.map(game  => {
        //     return game[i].name
        //     console.log(tiartleArray)
        // })
        
        for (var i = 0; i< array.length; i++){
            console.log(array[i].gameTitle)
           titleArray.push(array[i].gameTitle)
         
        }
        console.log(titleArray)
        for(var x = 0; x < titleArray.length; x++){
            API.searchTrailer(titleArray[x])
            .then(res => {
                console.log(res) 
                video_ids.push(res);
                console.log("vid ids: " + video_ids)
                this.setState({video_ids: video_ids})
            })
            .catch(err => console.log("Save error: " + err));
        }
        
       
            
        
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
                                <IndividualGames  style={{height:"250px"}}>
                                    <Col size="md-6  sm-6"><div>{"Title: " + game.gameTitle}</div>
                                    
                                        <br />
                                    <img className="gameImages" src={game.image_url}/>
                                        <br />
                                    <div>{"About this Game: " + game.description}</div>
                                        <br />
                                     </Col>
                                     <Col size="md-6  sm-6">
                                     <div className="iframe">
                                            <iframe   allowfullscreen='allowFullScreen'  width='350' height='200'src={"https://www.youtube.com/embed/" + this.state.video_ids[i]}></iframe>
                                        </div>
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
        this.searchYoutube(this.state.saved)

    }
};
export default Saved;



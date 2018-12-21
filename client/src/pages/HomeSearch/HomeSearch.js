import React from "react";
import { Results, ResultItem } from "../../components/Results";
import API from "../../utils/API";
import Nav from "../../components/Nav";
import { Col, Row, Container } from "../../components/Grid";
import "./HomeSearch.css";
import { FormBtn, Input } from "../../components/Form/"
import { release } from "os";

class HomeSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gameTitle: "",
            results: [],
            video_ids: [],
            saved: [],
            ignLinks : []
        };
    }

    componentDidMount(){
        this.ignNewsSearch();
    }

    handleInputChange = (event) => {
        const target = event.target;

        const value = target.value

        const name = target.name;


        this.setState({
            [name]: value
        });
    }

    saveGame = (savedTitle, savedImage, savedDeck, releaseDate)=>{
        API.saveGame({
            gameTitle: savedTitle,
            image_url: savedImage,
            description: savedDeck,
            release_date: releaseDate
        })
            .then(res => console.log(res))
            .catch(err => console.log("Save error: " + err));
    }

    ignNewsSearch = () => {
        API.getNews()
        .then(res => {
            console.log("news: " + res.data)
            let newsLinks = []
            for (let x = 0; x< res.data.length; x++){
                newsLinks.push(res.data[x])
            }
            this.setState({ignLinks: newsLinks});
        })
        .catch(err => console.log(err));

    }
   

    handleSubmit = (event) => {
        event.preventDefault();
        API.getGame({
            gameTitle: (this.state.gameTitle + " ")
        })
            .then(res => {
                let resultArray = []
                for (let x = 0; x < res.data.results.length; x++) {
                    resultArray.push(res.data.results[x])
                }
                this.setState({
                    results: resultArray
                });
                this.searchYoutube(this.state.results)
            })
            .catch(err => console.log("There is an error" + err));
    }

    render() {
       
        return (

            <div>
                <Container id="homeSearchContainer">
                    <Row id="searchRow">
                        <Col size="md-12  sm-12">
                            <h1 id="titleHeader">GAMR.</h1>
                                                    
                        </Col>
                    </Row>
                    <Row>
                        <Col size="md-12  sm-12">
                            <form size="col-md-12" id="searchRow" onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <input name="gameTitle" type="text" value={this.state.gameTitle} onChange={this.handleInputChange} />
                                    <input type="submit" value="Submit" />
                                </div>
                            </form>
                        </Col>
                    </Row>
                    <Row>
                        <Col size="md-12  sm-12">
                        <h1 style={{textAlign:"center"}}>Search Results</h1>

                            <Results>

                                {this.state.results.map(game => {
                                    return(
                                        <ResultItem>
                                            <Row>
                                                <Col style={{ textAlign: "center" }} size="lg-4 md-4 sm-4">
                                                    <strong style={{ margin: "auto" }} className="resultName">          {game.name}                                                </strong>
                                                </Col>
                                                <Col style={{ textAlign: "center" }} size="lg-4 md-4 sm-4"> 
                                                    <img className="gameImages" src={game.image.medium_url}></img>
                                                </Col>
                                                
                                                <Col style={{ textAlign: "center" }} size="lg-4 md-4 sm-4">
                                                    <p>{game.deck}</p>
                                                    <strong>Released:</strong>{game.original_release_date}
                                                    <button onClick={() => this.saveGame(game.name, game.image.medium_url, game.deck, game.original_release_date)}>Save to your games list</button><button>Watch the Youtube Trailor</button>
                                                </Col>
                                            </Row>

                                        </ResultItem>
                                    );
                                })}
                            </Results>
                        </Col>
                    </Row>
                    <Row>
                        <Results>
                            {this.state.saved.map(game => {
                            return(
                                <ResultItem >
                                    <p>{"Title: " + game.gameTitle}</p>
                                        <br />
                                    <img className="gameImages" src={game.image_url}/>
                                        <br />
                                    <p>{"Title: " + game.gameTitle}{"About this Game: " + game.description}</p>
                                        <br />
                                </ResultItem>
                            )
                                
                            })}
                        </Results>
                    
                        </Row>

                </Container>


            </div>
        );
    }

}

export default HomeSearch;

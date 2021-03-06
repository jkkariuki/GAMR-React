import React from "react";
import { Results, ResultItem } from "../../components/Results";
import API from "../../utils/API";
import Nav from "../../components/Nav";
import { Col, Row, Container } from "../../components/Grid";
import "./HomeSearch.css";
import { FormBtn, Input } from "../../components/Form/"
import { release } from "os";
import img2 from '../../images/img2.jpg';
import img3 from '../../images/img3.jpg';
import { $, jQuery } from 'jquery';


class HomeSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gameTitle: "",
            results: [],
            video_ids: [],
            saved: [],
            ignNews: []
        };
    }

    componentDidMount() {
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

    saveGame = (savedTitle, savedImage, savedDeck, releaseDate) => {
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
                console.log("news: " + res[0].url)
                let newsArray = [];

                for (let x = 0; x < res.length; x++) {
                    newsArray.push(res[x]);
                }
                this.setState({ ignNews: newsArray })
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
                // this.searchYoutube(this.state.results)
            })
            .catch(err => console.log("There is an error" + err));
    }

    render() {

        return (

            <Container id="homeSearchContainer">
                <ul class="cb-slideshow">
                    <li><span>Image 01</span></li>
                    <li><span>Image 02</span></li>
                    <li><span>Image 03</span></li>
                    <li><span>Image 04</span></li>
                    <li><span>Image 05</span></li>
                    <li><span>Image 06</span></li>
                </ul>
                <Row>
                    <Col size="md-12  sm-12">
                        <h1 id="titleHeader">GAMR.</h1>
                    </Col>
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
                        <Results>
                            {this.state.results.map(game => {
                                return (
                                    <ResultItem>
                                        <Row>
                                            <Col style={{ textAlign: "center" }} size="lg-4 md-4 sm-4">
                                                <strong style={{ margin: "auto" }} className="resultName">{game.name}                                                </strong>
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

                    <div className="ticker-wrap">

                        <div className="ticker">

                            {this.state.ignNews.map((story) => {

                                return (

                                    <a className="ticker__item" href={story.url}>{story.title}</a>


                                )

                            })}


                        </div>
                    </div>
                </Row>
            </Container>
        );
    }

}

export default HomeSearch;

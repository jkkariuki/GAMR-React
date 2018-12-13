import React from "react";
import { Results, ResultItem } from "../../components/Results";
import API from "../../utils/API";
import Nav from "../../components/Nav";
import { Col, Row, Container } from "../../components/Grid";
import "./HomeSearch.css";
import { FormBtn, Input } from "../../components/Form/"

class HomeSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gameTitle: "",
            results: []
        };
    }

    handleInputChange = (event) => {
        const target = event.target;

        const value = target.value

        const name = target.name;


        this.setState({
            [name]: value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        API.getGame({
            gameTitle: (this.state.gameTitle + " ")
        })
            .then(res => {
                console.log(res.data.results)
                let resultArray = []
                for (let x = 0; x < res.data.results.length; x++) {
                    resultArray.push(res.data.results[x])
                }
                this.setState({
                    results: resultArray
                });
                console.log("Results: " + resultArray)
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
                        <h1>Search Results</h1>
                        <Col size="md-12  sm-12">
                            <Results>
                                {this.state.results.map(game => {
                                    return (
                                        <ResultItem>
                                            <Row>
                                            <Col size="md-4"><strong>
                                                {game.name}
                                            </strong></Col>
                                            <Col size="md-8"> <img className="gameImages" src={game.image.medium_url}></img>
                                            <p>{game.deck}</p></Col>                                           
                                            </Row>
                                            
                                        </ResultItem>
                                    );
                                })}
                            </Results>
                        </Col>
                    </Row>
                </Container>
                
                    
            </div>
        )
    }

}

export default HomeSearch;
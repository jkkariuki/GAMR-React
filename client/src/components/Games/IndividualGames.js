import React from "react";
import PropTypes from 'prop-types';

class IndividualGames extends React.Component {
    render() {
        const {style} = this.props

        return (
            <li style={style} className="list-group-item">
                {this.props.children}
            </li>
        )
    }
}

export default IndividualGames;

IndividualGames.props = {
    style: PropTypes.string,
  
  }
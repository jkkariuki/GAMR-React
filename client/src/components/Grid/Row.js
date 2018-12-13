import React from "react";
import PropTypes from 'prop-types';

class Row extends React.Component {

  render () {
    const { id, fluid, children } = this.props

    return (
      <div id={id} className={`row${fluid ? "-fluid" : ""}`}>
      {children}
      </div>
    );
  }

}

Row.props = {
  fluid: PropTypes.string,
  children: PropTypes.node,
  id: PropTypes.node
}

export default Row;

import React from "react";
import PropTypes from 'prop-types';

class Container extends React.Component {

  render () {
    const {id, fluid, children } = this.props

    return (
      <div id={id} className={`container${fluid ? "-fluid" : ""}`} >
        {children}
      </div>
    );
  }

}

Container.props = {
  fluid: PropTypes.string,
  children: PropTypes.node
}

export default Container;

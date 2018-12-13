import React from "react";
import "./DeleteBtn.css";
import PropTypes from "prop-types"


class DeleteBtn extends React.Component {

  render() {
    const {onClick} = this.props;
    return(
      <span onClick={onClick}   className="delete-btn">
        ✗
      </span>
    )
  }
}



DeleteBtn.props = {
  onClick : PropTypes.func
}

export default DeleteBtn;

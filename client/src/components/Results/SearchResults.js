import React from "react";

class Results extends React.Component {

    render() {
        return (
            <div className="list-overflow-container">
              <ul className="list-group">
                {this.props.children}
              </ul>
            </div>
          );
    }
}

export default Results;



import React from "react";

class Results extends React.Component {

    render() {
        return (
            <div className="list-overflow-container" style={{opacity: 0.7, zIndex: 1000}}>
              <ul className="list-group">
                {this.props.children}
              </ul>
            </div>
          );
    }
}

export default Results;



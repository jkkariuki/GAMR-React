import React from "react";
class Games extends React.Component {

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




export default Games;
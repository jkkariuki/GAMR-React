import React from "react";
class Games extends React.Component {

    render() {
        return (
            <div className="list-overflow-container">
              <div className="list-group">
                {this.props.children}
              </div>
            </div>
          );
    }
}




export default Games;
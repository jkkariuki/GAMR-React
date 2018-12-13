import React from "react";
import { Link } from "react-router-dom";
import $ from "jquery";


class Nav extends React.Component {

  componentDidMount = () => {
    $("#dropdownMenuLink").click(function () {
      $(".dropdown-menu").slideToggle();
    });
  }
  render() {
    const { id, style } = this.props
    return (
      <nav className="navbar  navbar-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <button style={{ backgroundColor: "grey" }} type="button" className="collapsed navbar-toggle">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" /> <span className="icon-bar" />
              <span className="icon-bar" />
              <div><a href={"www.google.com"}/> </div>
            </button>
            <a href="/" className="navbar-brand">
              GAMR
            </a>            
          </div> 

          
                   
         
        </div>

      </nav>
    )
  }
}


export default Nav;

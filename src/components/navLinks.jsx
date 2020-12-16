import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class NavLinks extends Component {
  render() {
    return (
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <NavLink className="nav-link " to="/symptoms">
            Symptoms
          </NavLink>
        </li>
      </ul>
    );
  }
}

export default NavLinks;

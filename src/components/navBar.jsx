import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class NavBar extends Component {
  state = {};
  render() {
    const { country, flag } = this.props;
    return (
      <nav
        id="navradius"
        className="navbar navbar-dark  my-2 rounded-pill row justify-content-center my-2"
      >
        <NavLink className="navbar-brand" to="/">
          Country - {country}
          <img
            src={flag}
            width="50"
            height="30"
            className="d-inline-block align-top text-center mx-3"
            alt=""
            loading="lazy"
          />
        </NavLink>
      </nav>
    );
  }
}

export default NavBar;

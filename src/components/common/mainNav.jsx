import React, { Component } from "react";
import { Link } from "react-router-dom";

class MainNav extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand " to="/">
          <img
            src={
              "https://www.statnews.com/wp-content/uploads/2020/02/Coronavirus-CDC-645x645.jpg"
            }
            width="30"
            height="30"
            className="d-inline-block align-top text-center mx-3"
            alt=""
            loading="lazy"
          />
          Covid-19 Tracker
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="/covid">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
          </ul>
        </div>
        <span className="navbar-text">Created By: Bhavik Mukesh Panchal</span>
      </nav>
    );
  }
}

export default MainNav;

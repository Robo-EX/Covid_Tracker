import React, { Component } from "react";

class Dashboard extends Component {
  state = {};
  render() {
    const { posts } = this.props;
    return (
      <div>
        <h1 className="text-center ">Coronavirus Cases</h1>
        <span
          className="row justify-content-center h1 font-weight-bold "
          style={{ color: "#aaa" }}
        >
          {posts.cases}
        </span>
        <h1 className="text-center">Deaths</h1>
        <span
          className="row justify-content-center h1 font-weight-bold"
          style={{ color: "#ef4430" }}
        >
          {posts.deaths}
        </span>
        <h1 className="text-center ">
          Recovered <i className="fa fa-ambulance" aria-hidden="true"></i>
        </h1>
        <span
          className="row justify-content-center h1 font-weight-bold"
          style={{ color: "#8ACA2B" }}
        >
          {posts.recovered}
        </span>
      </div>
    );
  }
}

export default Dashboard;

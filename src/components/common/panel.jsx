import React, { Component } from "react";

class Panel extends Component {
  state = {};
  render() {
    const { recovered, active, critical, todayCase, todayDeath } = this.props;
    return (
      <div className="row justify-content-center">
        <div className="card bg-light mb-3 " style={{ maxWidth: "18rem" }}>
          <div className="card-header text-center">CLOSED CASES</div>
          <div className="card-body">
            <h5 className="card-title font-weight-bold">
              Today Recovered: {recovered}
            </h5>
            <p className="card-text">Cases involved in 24 hours</p>
          </div>
        </div>
        <div className="card bg-light mb-3 mx-5" style={{ maxWidth: "18rem" }}>
          <div className="card-header text-center">TODAY CASES {todayCase}</div>
          <div className="card-body">
            <h5
              className="card-title font-weight-bold"
              style={{ color: "#07b7e8" }}
            >
              Active Cases: {active}
            </h5>
            <h5
              className="card-title font-weight-bold"
              style={{ color: "#ef4430" }}
            >
              Critical Cases: {critical} <br />
              Today Death's: {todayDeath}
            </h5>
          </div>
        </div>
      </div>
    );
  }
}

export default Panel;

import React, { Component } from "react";

class Listing extends Component {
  state = {};
  render() {
    const { items } = this.props;
    return (
      <div className="container-fluid p-3 my-3 bg-dark text-whit">
        <div className="row text-center justify-content-center h5 ">
          {items.map((item) => (
            <div
              key={items && items.country ? items.country : null}
              className="col-sm-3 mx-3 my-2 align-self-center"
              style={{ backgroundColor: "lavender" }}
            >
              {item.join(": ")}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Listing;

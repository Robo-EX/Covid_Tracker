import React, { Component } from "react";
import http from "../services/httpService";
import Panel from "./common/panel";
import NavLinks from "./navLinks";
import NavBar from "./navBar";
import { CountryDropdown } from "react-country-region-selector";
import Listing from "./common/listing";
import Dashboard from "./dashboard";

class Covid extends Component {
  state = {
    posts: [],
    country: "India",
  };

  axiosFunc = async () => {
    const id = this.state.country;
    let { data: posts } = await http.get(
      "https://disease.sh/v3/covid-19/countries/" + id + "?strict=true"
    );
    this.setState({ posts });
    //console.log(posts);
  };
  componentDidMount() {
    // // pending > resolved (success) OR rejected (failure)
    // let { data: posts } = await http.get(
    //   "https://disease.sh/v3/covid-19/countries/356?strict=true"
    // );
    // this.setState({ posts });
    // console.log(posts);
    this.axiosFunc();
    this.interval = setInterval(this.axiosFunc, 10000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  selectCountry(val) {
    this.setState({ country: val });
  }

  render() {
    const { posts } = this.state;
    let items = Object.entries(posts);
    let deleted = items.splice(1, 10);
    items.splice(6, 1);
    const { country } = this.state;
    //items.splice(items.indexOf("recovered"), 1);
    const countryIso =
      posts && posts.countryInfo ? posts.countryInfo.iso3 : null;
    const flag = posts && posts.countryInfo ? posts.countryInfo.flag : null;
    console.log(deleted);

    return (
      <div>
        Select Country:{" "}
        <CountryDropdown
          value={country}
          onChange={(val) => this.selectCountry(val)}
        />
        <NavBar country={countryIso} flag={flag} />
        <NavLinks />
        <Dashboard posts={posts} />
        <Panel
          deaths={posts.deaths}
          recovered={posts.todayRecovered}
          active={posts.active}
          critical={posts.critical}
          todayCase={posts.todayCases}
          todayDeath={posts.todayDeaths}
        />
        <Listing items={items} posts={posts} />
        {/* <div className="container-fluid p-3 my-3 bg-dark text-whit">
          <div className="row text-center justify-content-center h5 ">
            {items.map((item) => (
              <div
                key={posts && posts.country ? posts.country : null}
                className="col-sm-3 mx-3 my-2 align-self-center"
                style={{ backgroundColor: "lavender" }}
              >
                {item.join(": ")}
              </div>
            ))}
          </div>
        </div> */}
      </div>
    );
  }
}

export default Covid;

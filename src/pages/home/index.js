import React, { Component } from "react";
import "./home.css";
import Header from "../../components/header";

class Home extends Component {
  render() {
    return (
      <div className="P-home">
        <Header></Header>
        <h1>home page</h1>
      </div>
    );
  }
}

export default Home;

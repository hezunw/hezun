import React, { Component } from "react";
import "./login.css";

class Login extends Component {
  render() {
    return (
      <div className="P-login">
        <h1>Login page</h1>
        <button onClick={this.gotoHome.bind(this)}>1跳转Home页</button>
        <button
          onClick={() => {
            this.gotoHome();
          }}
        >
          2跳转Home页
        </button>
      </div>
    );
  }
  gotoHome() {
    this.props.history.push("/home");
  }
}

export default Login;

import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
class Login extends Component {
  constructor() {
    super();
    this.state = {
      useremail: "",
      password: "",
      data: {
        useremail: "",
        password: "",
      },
      error: false,
    };
  }

  Logins(e) {
    var data = {
      useremail: this.state.useremail,
      password: this.state.password,
    };

    axios
      .post("http://localhost:8000/auth", data)
      .then((result) => {
        console.log(result.data);
        if (result.data === true) {
          this.props.history.push("/profile");
          localStorage.setItem("login", true);
        } else if (result.data === false) {
          this.setState({ error: true });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="UserEmail"
          onChange={(e) => {
            this.setState({ useremail: e.target.value });
          }}
        />
        <br />
        <br />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          onChange={(e) => {
            this.setState({ password: e.target.value });
          }}
        />
        <br />
        <br />

        <button
          onClick={() => {
            this.Logins();
          }}
        >
          Login
        </button>
        {this.state.error ? (
          <h1
            style={{ color: "red", fontWeight: "bold", letterSpacing: "2px" }}
          >
            Please Check Your Credentials
          </h1>
        ) : (
          ""
        )}

      </div>
    );
  }
}
export default withRouter(Login);

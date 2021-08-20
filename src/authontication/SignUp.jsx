import axios from "axios";
import React, { Component } from "react";

export default class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      username: "null",
      useremail: "null",
      password: "null",
    };
  }
  savedata() {
    console.log(this.state);
    fetch("http://localhost:8000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    }).then((res) => {
      res.json().then((result) => {
        console.log("result", result);
      });
    });
  }
  render() {
    return (
      <div className="center">
        <input
          type="text"
          name="username"
          id="username"
          placeholder="UserName"
          onChange={(e) => {
            this.setState({ username: e.target.value });
          }}
        />
        <br />
        <br />
        <input
          type="email"
          name="useremail"
          id="useremail"
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
            this.savedata();
          }}
        >
          Submite
        </button>
      </div>
    );
  }
}

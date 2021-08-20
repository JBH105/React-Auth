import React, { Component } from "react";

export default class Create extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      address: "",
      number: "",
    };
  }

  CreateUser() {
    // console.log(this.state);
    fetch("http://localhost:8000/", {
      method: "Post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(this.state),
    }).then((result) => {
      console.warn(result);
    });
  }
  render() {
    return (
      <div className="center">
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => {
            this.setState({ name: e.target.value });
          }}
        />
        <br />
        <br />
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => {
            this.setState({ email: e.target.value });
          }}
        />
        <br />
        <br />

        <input
          type="address"
          placeholder="Address"
          onChange={(e) => {
            this.setState({ address: e.target.value });
          }}
        />
        <br />
        <br />
        <input
          type="number"
          maxLength="10"
          placeholder="Number"
          onChange={(e) => {
            this.setState({ number: e.target.value });
          }}
        />
        <br />
        <br />
        <button
          onClick={() => {
            this.CreateUser();
          }}
        >
          Save
        </button>
      </div>
    );
  }
}

import { faUser, faUserMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";

export default class Updete extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      address: "",
      number: "",
    };
  }
  componentDidMount() {
    fetch(`http://localhost:8000/${this.props.id}`, {
      method: "GET",
    }).then((result) => {
      // console.log(result);
      result.json().then((res) => {
        this.setState({ name: res.name });
        this.setState({ email: res.email });
        this.setState({ address: res.address });
        this.setState({ number: res.number });

        // this.setState({ list: res });
        console.log(this.state.list);
      });
    });
  }

  //Updete User
  UpdeteUser() {
    fetch(`http://localhost:8000/${this.props.id}`,{
        method:"PUT",
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify(this.state) 
    }).then((result)=>{
    console.warn(result);

    // fetch('http://localhost:8000/').then((result)=>{
    //     result.json().then((res)=>{
    //         this.setState({name:res.name})
    //         this.setState({email:res.email})
    //         this.setState({address:res.address})
    //         this.setState({number:res.number})
    //     })
    // })

    })
  }
  render() {
    return (
      <div className="center">
        <input
          type="text"
          placeholder="Name"
          value={this.state.name}
          onChange={(e) => {
            this.setState({ name: e.target.value });
          }}
        />
        
        <br />
        <br />
        <input
          type="email"
          placeholder="Email"
          value={this.state.email}
          onChange={(e) => {
            this.setState({ email: e.target.value });
          }}
        />
        <br />
        <br />

        <input
          type="address"
          placeholder="Address"
          value={this.state.address}
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
          value={this.state.number}
          onChange={(e) => {
            this.setState({ number: e.target.value });
          }}
        />
        <br />
        <br />
        <button
          onClick={() => {
            this.UpdeteUser();
          }}
        >
          Save
        </button>
      </div>
    );
  }
}

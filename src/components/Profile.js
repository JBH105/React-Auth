import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Updete from "./Updete";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faUserMinus } from "@fortawesome/free-solid-svg-icons";

export default class Profile extends Component {
  constructor() {
    super();
    this.state = {
      list: "",
      reload: false,
      popup: false,
      id: "",
    };
  }
  componentDidMount() {
    fetch("http://localhost:8000/").then((res) => {
      res.json().then((result) => {
        // console.log(result);
        this.setState({ list: result });
        // console.log(this.state.list);
      });
    });
  }
  //Delete User
  deleteUser(id) {
    alert("Are you sure delete data");
    fetch(`http://localhost:8000/${id}`, {
      method: "DELETE",
    }).then((result) => {
      result.json().then((res) => {
        console.warn(res);

        fetch("http://localhost:8000/").then((res) => {
          res.json().then((result) => {
            this.setState({ list: result });
          });
        });
      });
    });
  }
  logout() {
    // localStorage.clear();
    localStorage.clear();
    Location.href = "localhost:8000/auth";
  }
  reRender() {}
  popup() {
    this.setState({ popup: !this.state.popup });
    console.log(this.state.popup);
  }

  render() {
    console.log(this.state.id);
    return (
      <div>
        {this.state.list ? (
          <div>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Address</th>
                  <th>Number</th>
                  <th>Operations</th>
                </tr>
              </thead>
              <tbody>
                {this.state.list.map((item, i) => (
                  <tr>
                    <td>{i}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.address}</td>
                    <td>{item.number}</td>
                    <td
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-around",
                      }}
                    >
                      <FontAwesomeIcon
                        onClick={() => {
                          this.deleteUser(item._id);
                        }}
                        style={{ fontSize: 25, margin: 5 }}
                        icon={faUserMinus}
                      />

                      <FontAwesomeIcon
                        style={{ fontSize: 25, margin: 5 }}
                        onClick={() => {
                          this.setState({ popup: !this.state.popup });
                          this.setState({ id: item._id });
                          alert("Are you sure Edit data");
                        }}
                        icon={faEdit}
                      />
                    </td>
                  </tr>
                ))}
                {this.state.popup ? <Updete id={this.state.id} /> : null}
              </tbody>
            </Table>
          </div>
        ) : null}

        <a href="/" onClick={this.logout()}>
          LOGOUT
        </a>
      </div>
    );
  }
}

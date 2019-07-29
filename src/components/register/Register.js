import React, { Component } from "react";
import "./Register.css";
import { register } from "../../redux/adminReducer";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      first_name: "",
      last_name: "",
      email: ""
    };
  }

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  registerAdmin = () => {
    let { username, password, first_name, last_name, email } = this.state;
    this.props.register(username, password, first_name, last_name, email);
  };

  render() {
    const { username, password, first_name, last_name, email } = this.state;
    if (this.props.admin.admin.loggedIn) return <Redirect to="/" />;
    return (
      <div>
        <div>
          <div>
            Username:{" "}
            <input
              value={username}
              onChange={this.handleChange}
              name="username"
            />
          </div>
          Password:{" "}
          <input
            value={password}
            onChange={this.handleChange}
            name="password"
          />
        </div>
        <div>
          First name:{" "}
          <input
            value={first_name}
            onChange={this.handleChange}
            name="first_name"
          />
          Last name:{" "}
          <input
            value={last_name}
            onChange={this.handleChange}
            name="last_name"
          />
          email:{" "}
          <input value={email} onChange={this.handleChange} name="email" />
          <button onClick={() => this.registerAdmin(this.state.username)}>
            <Link to="/">register</Link>
          </button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { admin: state.admin };
}

export default connect(
  mapStateToProps,
  { register }
)(Register);

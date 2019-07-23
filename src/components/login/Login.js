import React, { Component } from "react";
import "./Login.css";
import { login } from "../../redux/adminReducer";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
    // console.log(value);
  };

  loginAdmin = () => {
    console.log("hit login");

    let { username, password } = this.state;
    this.props.login(username, password);
    console.log(this.props);
  };

  render() {
    console.log(this.props);
    const { username, password } = this.state;
    // const { admin } = this.props;
    console.log(this.props.admin.admin.loggedIn);
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
              type="text"
            />
          </div>
          <div>
            Password:{" "}
            <input
              value={password}
              onChange={this.handleChange}
              name="password"
              type="password"
            />
          </div>
          <button onClick={this.loginAdmin}>Login</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state)
  return( 
   {admin :state.admin}
  );
  
}

export default connect(
  mapStateToProps,
  { login }
)(Login);

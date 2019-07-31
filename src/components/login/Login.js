import React, { Component } from "react";
import "./Login.css";
import { login } from "../../redux/adminReducer";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";

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
  };

  render() {
    let { username, password } = this.state;
    if (this.props.admin.admin.loggedIn) return <Redirect to="/" />;
    return (
      <div className="login-page">
        <h1 className='title'>RentalOps</h1>
        <div className="login-box">
        <h1 className='login-title'>Login</h1>
          <div className="username-password-input-container">
            
            <div className="username">
             <h1>Username:</h1>
              <input
                className="input"
                value={username}
                onChange={this.handleChange}
                name="username"
              />
            </div>
            <div className="password">
             <h1>Password:{" "}</h1> 
              <input
                className="input"
                value={password}
                onChange={this.handleChange}
                name="password"
              />
            </div>
          </div>
          <div className='button-container'>
            <button
              className="button"
              onClick={() => this.props.login(username, password)}
            >
              <Link 
              style={{ color: 'black', textDecoration: 'none'}}
              to="/">Login</Link>
            </button>
            <button className="button">
              <Link 
              style={{ color: 'black', textDecoration: 'none'}}
              to="/register">Register</Link>
            </button>
          </div>
        </div>
        <div/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { admin: state.admin };
}

export default connect(
  mapStateToProps,
  { login }
)(Login);

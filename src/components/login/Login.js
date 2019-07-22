import React, { Component } from "react";
import "./Login.css";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }

  handleChange = (e) => {
    const {value, name} = e.target
    this.setState({[name]: value})
    // console.log(value);
  }

  render() {
    const {username, password} = this.state
    return (
      <div>
        <div>
          Username:{' '}
          <input value = {username} 
          onChange= {this.handleChange} 
          name = 'username' 
          type = 'text'/>
        </div>
        <div>
          Password:{' '}
          <input 
          value = {password} 
          onChange= {this.handleChange} 
          name= 'password'
          type = 'password'/>
        </div>
        <button>Login</button>
      </div>
    );
  }
}

export default Login;

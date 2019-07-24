import React, { Component } from "react";
import "./Login.css";
import { login } from "../../redux/adminReducer";
import { connect } from "react-redux";
import { Redirect,Link } from "react-router-dom";

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

  loginAdmin = () => {
    let { username, password } = this.state;
    this.props.login(username, password);
  };

  render() {
    const { username, password } = this.state;
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
          <button onClick={() =>this.loginAdmin()}><Link to='/' >Login</Link></button>
          <button>
            <Link to= '/register'>register</Link>
            
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
  { login }
)(Login);

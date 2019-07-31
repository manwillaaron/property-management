import React, { Component } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signout } from "../../redux/adminReducer";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div/>
        <div className='header-title-container'>
        <h1 className='header-title'>RentalOps</h1>
        </div>
        
        <div className="header-button-container">
          <Link className="header-buttons" to="/add/propertyinput">
            Add Property
          </Link>
          <Link
            onClick={e => this.props.signout(this.props.admin.admin_id)}
            className="header-buttons"
            to="/"
          >
            Log Out
          </Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state.admin;
}

export default connect(
  mapStateToProps,
  { signout }
)(Header);

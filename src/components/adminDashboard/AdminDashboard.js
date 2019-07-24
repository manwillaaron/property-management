import React, { Component } from "react";
import "./AdminDashboard.css";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { getAdmin } from "../../redux/adminReducer";
import PropertiesPreview from "../properties/PropertiesPreview";
import Header from '../header/Header'

class AdminDashboard extends Component {
  componentDidMount() {
    if (!this.props.admin.admin.loggedIn) {
      this.props.getAdmin(this.props.admin.admin.id);
      console.log(this.props.admin.admin);
    }
  }

  render() {
    console.log(this.props);
    if (!this.props.admin.admin.loggedIn) return <Redirect to='/login' />;

    return (
    
      <div className= 'property-container'>
        <Header />
        <PropertiesPreview />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { admin: state.admin };
}

export default connect(
  mapStateToProps,
  { getAdmin }
)(AdminDashboard);

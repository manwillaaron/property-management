import React, { Component } from "react";
import "./AdminDashboard.css";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { getAdmin } from "../../redux/adminReducer";
import { getProperties } from "../../redux/propertiesReducer";
import PropertiesPreview from "../properties/PropertiesPreview";
import Header from "../header/Header";

class AdminDashboard extends Component {
  componentDidMount() {
    if (!this.props.admin.admin.loggedIn) {
      this.props.getAdmin();
      if (!this.props.properties) return this.props.getProperties();
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.adminId !== this.props.adminId) {
      this.props.getProperties(this.props.adminId);
    }
    return;
  }

  render() {
    if (!this.props.admin.admin.loggedIn) return <Redirect to="/login" />;
    return (
      <div>
        <Header />
        <PropertiesPreview />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    admin: state.admin,
    properties: state.properties
  };
}

export default connect(
  mapStateToProps,
  { getAdmin, getProperties }
)(AdminDashboard);

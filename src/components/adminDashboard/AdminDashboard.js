import React, { Component } from "react";
import "./AdminDashboard.css";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { getAdmin } from "../../redux/adminReducer";
import { getProperties } from "../../redux/propertiesReducer";

import {
  getChatroomMessages,
  getAllChatrooms
} from "../../redux/socketReducer";
import PropertiesPreview from "../properties/PropertiesPreview";
import Header from "../header/Header";
import SMSForm from "../../SMS/SMSForm";
import Admin from './Admin'

class AdminDashboard extends Component {
  async componentDidMount() {
    console.log(this.props);
    // console.log(
    //   "!%^R!^%R^!%$^%!$",
    //   JSON.parse(this.props.admin.admin.renterCheck)
    // );
    // if (JSON.parse(this.props.admin.admin.renterCheck) === true)
    //   return <Redirect to="/renter" />;

    if (!this.props.admin.admin.loggedIn) {
      this.props.getAdmin();

      if (!this.props.properties) this.props.getProperties();
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.adminId !== this.props.adminId) {
      this.props.getProperties(this.props.adminId);
    }
    return;
  }

  render() {
    let { loggedIn, renterCheck } = this.props.admin.admin;
    console.log(this.props);
    if (!loggedIn) return <Redirect to="/login" />;
    if (JSON.parse(this.props.admin.admin.renterCheck) === true)
      return <Redirect to="/renter" />;

    return (
      <div className="admindash-containter">
      <Admin/>
        {/* // <Header />
        // <PropertiesPreview />
        // <SMSForm /> */}
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

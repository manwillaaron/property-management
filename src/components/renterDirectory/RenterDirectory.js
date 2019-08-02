import React, { Component } from "react";
import "./RenterDirectory.css";
import { connect } from "react-redux";
import {
  addRenter,
  editRenter,
  deleteRenter,
  getAllRenters
} from "../../redux/renterReducer";
import { getProperties } from "../../redux/propertiesReducer";

import { getAdmin } from "../../redux/adminReducer";
import Header from "../header/Header";

class RenterDirectory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      first_name: "",
      last_name: "",
      phone_number: "+1",
      email: ""
    };
  }

  componentDidUpdate(pp) {
    if (pp.admin.admin.id !== this.props.admin.admin.id) {
      this.props.getAdmin();
    }
  }

  componentDidMount() {
    this.props.getAdmin();
    // this.props.getProperties();
    // this.props.getAllRenters();
    console.log(this.props);
  }

  handleChange = e => {
    let { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { renters } = this.props.renters;
    return (
      <div>
        <Header />
        {renters.map(renter => (
          <div className="" key={renter.admin_id}>
            <h1> Name</h1>
            <h1>
              {renter.first_name} {renter.last_name}
            </h1>
            <h1>Phone Number</h1>
            <h1>{renter.phone_number}</h1>
            <h1>Email</h1>
            <h1>{renter.email}</h1>
            <h1>Property</h1>
            <h1>{this.props.properties.address}</h1>
          </div>
        ))}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    admin: state.admin,
    properties: state.properties,
    renters: state.renters
  };
}

export default connect(
  mapStateToProps,
  {
    getAllRenters,
    addRenter,
    editRenter,
    deleteRenter,
    getAdmin,
    getProperties
  }
)(RenterDirectory);

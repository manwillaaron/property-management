import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Renter.css";
import { connect } from "react-redux";
import {
  addRenter,
  editRenter,
  deleteRenter,
  getRenters
} from "../../redux/renterReducer";

import {getAdmin} from '../../redux/adminReducer'
import Header from "../header/Header";

class Renter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      first_name: "",
      last_name: "",
      phone_number: "+1",
      email: "",
      prop_id: "",
      admin: []
    };
  }
  async componentDidMount() {
   await this.props.getAdmin();
   console.log(this.props);

    this.setPropId();
  }

  setPropId = () => {
    this.setState({ prop_id: this.props.match.params.prop_id });
    console.log(this.props.match.params.prop_id );
  };

  handleChange = e => {
    let { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
      const {username, first_name, last_name, phone_number, email } = this.state;
      return (
        <div>
          <Header />
          <div>
            <h3>Temp Username</h3>
            <input
              onChange={this.handleChange}
              name="username"
              value={username}
            />
            <h3>First Name</h3>
            <input
              onChange={this.handleChange}
              name="first_name"
              value={first_name}
            />
            <h3>Last Name</h3>
            <input
              onChange={this.handleChange}
              name="last_name"
              value={last_name}
            />
            <h3>Phone Number</h3>
            <input
              onChange={this.handleChange}
              name="phone_number"
              value={phone_number}
            />
            <h3>Email</h3>
            <input onChange={this.handleChange} name="email" value={email} />
            <button
              onClick={() => 
                this.props.addRenter(
                  username,
                  first_name,
                  last_name,
                  phone_number,
                  email,
                  this.state.prop_id
                )
              }
            >
              <Link to={`/moreinfo/${this.state.prop_id}`}>Add</Link>
            </button>
          </div>
        </div>
      );   
    }
  }


function mapStateToProps(state) {
  return { admin: state.admin, properties: state.properties };
}

export default connect(
  mapStateToProps,
  { getRenters, addRenter, editRenter, deleteRenter, getAdmin }
)(Renter);

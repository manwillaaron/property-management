import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  addRenter,
  editRenter,
  deleteRenter,
  getRenters
} from "../../redux/renterReducer";
import Header from "../header/Header";

class Renter extends Component {
  constructor() {
    super();
    this.state = {
      first_name: "",
      last_name: "",
      phone_number: "",
      email: "",
      prop_id: ""
    };
  }
  componentDidMount() {
    getRenters(this.props.match.params.prop_id);
  }

  handleChange = (e) => {
    let { value, name } = e.target;
    this.setState({ [name]: value });
    console.log(value);
  }
  render() {
    console.log(this.props);

    const { first_name, last_name, phone_number, email } = this.state;

    return (
      <div>
        <Header />
        <div>
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
          <button onClick={()=>this.props.addRenter(
            first_name, 
            last_name, 
            phone_number, 
            email, 
            
          this.props.match.params.prop_id
          )}>
            <Link to="/renters">Add</Link>
          </button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state.renters, state.properties;
}

export default connect(
  mapStateToProps,
  { getRenters, addRenter, editRenter, deleteRenter }
)(Renter);

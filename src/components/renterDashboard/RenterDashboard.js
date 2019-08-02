import React, { Component } from "react";
import "./RenterDashboard.css";
import { getAdmin } from "../../redux/adminReducer";
import { getProperties } from "../../redux/propertiesReducer";
import { connect } from "react-redux";
import RenterHeader from "../renterHeader/RenterHeader";
import { Redirect, Link } from "react-router-dom";

class RenterDashboard extends Component {
  constructor() {
    super();
    this.state = {
      admin_id: ""
    };
  }

  async componentDidMount() {
    console.log(this.props);
    this.props.getAdmin();
    await this.props.getProperties(this.props.admin.admin.id);
  }

  render() {
    console.log(this.props);
    let { loggedIn } = this.props.admin.admin;
    if (!loggedIn) return <Redirect to="/login" />;
    if (JSON.parse(this.props.admin.admin.renterCheck) === false)
      return <Redirect to="/" />;
    return (
      <div className='renter-dash-container'>
        <RenterHeader />
        <div className='picture-button-container'>
        <Link
        className='picture-buttons'
          to= {`/renter/moreinfo/${this.props.property.properties[0].prop_id}`}
         onClick= {() => console.log('clicked')}
          style={{
            // width: "200px",
            // height:"150px",
            backgroundImage:
              "url(" +
              `${this.props.property.properties[0].img_url}` +
              ")",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
          }}
        />
        <button
        className='picture-buttons'
         onClick= {() => console.log('clicked')}
          style={{
            // width: "200px",
            // height:"150px",
            backgroundImage:
              "url(" +
              `https://images.unsplash.com/photo-1494887205043-c5f291293cf6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60` +
              ")",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
          }}
        />
        <button
        className='picture-buttons'
         onClick= {() => console.log('clicked')}
          style={{
            // width: "200px",
            // height:"150px",
            backgroundImage:
              "url(" +
              `https://images.unsplash.com/photo-1516822669470-73d1771e95a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60` +
              ")",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
          }}
        />
      </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    admin: state.admin,
    property: state.properties
  };
}

export default connect(
  mapStateToProps,
  { getAdmin, getProperties }
)(RenterDashboard);

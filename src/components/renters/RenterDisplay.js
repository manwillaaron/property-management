import React, { Component } from "react";
// import "./RenterDisplay.css";
import {
  editProperties,
  addProperty,
  getProperties
} from "../../redux/propertiesReducer";
import { getRenters, deleteRenter } from "../../redux/renterReducer";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import Header from "../header/Header";
import { getAdmin } from "../../redux/adminReducer";

class RenterDisplay extends Component {
  

  
  componentDidUpdate(prevProps) {
   
  }

  componentDidMount() {
    console.log(this.props);
    this.props.getRenters(+this.props.prop_id);
  }


   

  deleteRenter = rid => {
    this.props.deleteRenter(rid);
    this.props.getRenters(this.props.prop_id);
  };

  render() {
    console.log(this.props);
    if (!this.props.admin_id) return <Redirect to="/login" />;

    return (
      
        <div className="renters-container">
          {this.props.renters.map((renter, a) => (
            <div className="renter-container" key={renter.renter_id}>
              <div className="renter-count-container">
                <h2 className="renter-count">renter {a + 1}</h2>
              </div>
              <div>
                <h4>Name</h4>
                <h5>
                  {renter.first_name} {renter.last_name}
                </h5>
              </div>
              <div>
                <h4>Phone Number</h4>
                <h5>{renter.phone_number}</h5>
              </div>
              <div>
                <h4>Email</h4>
                <h5>{renter.email}</h5>
              </div>
              <div>
                {console.log(renter.prop_id)}
                <button onClick={() => this.deleteRenter(renter.renter_id)}>
                  delete
                </button>
              </div>
            </div>
        ))}
        

            <div>
            <button>
                <Link to={`/add/renter/${this.props.prop_id}`}>
                add renter
                </Link>
            </button>
            </div>
        </div>
     
    )
  }
}

function mapStateToProps(state) {
  return {
    admin_id: state.admin.admin.id,
    ...state.renters,
    ...state.properties
  };
}

export default connect(
  mapStateToProps,
  {
    editProperties,
    addProperty,
    getProperties,
    getRenters,
    deleteRenter,
    getAdmin
  }
)(RenterDisplay);

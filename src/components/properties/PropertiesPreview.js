import React, { Component } from "react";
import "./PropertiesPreview.css";
import { connect } from "react-redux";
import { getProperties } from "../../redux/propertiesReducer";
import { getAllRenters } from "../../redux/renterReducer";
import PropertyPreview from "../propertyInputs/PropertyPreview";
import SMSForm from "../../SMS/SMSForm";

class PropertiesPreview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      adminId: this.props.adminId
    };
  }
  componentDidMount() {
    let { adminId } = this.props;
    this.props.getAllRenters(this.state.adminId);

    if (adminId) {
      this.props.getProperties();
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.adminId !== this.props.adminId) {
      this.props.getProperties();
    }
    return;
  }

  render() {
    const { properties} = this.props;
    return (

        <div className='map-container'>
        {properties.map(property => {
          return (
            <div className="prop-container" key={property.prop_id}>
              <PropertyPreview {...property} />
            </div>
          );
        })}
      </div>
      

      
    );
  }
}

function mapStateToProps(state) {
  return {
    adminId: state.admin.admin.id,
    ...state.properties,
    renters: state.renters
  };
}

export default connect(
  mapStateToProps,
  { getProperties, getAllRenters }
)(PropertiesPreview);

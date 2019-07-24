import React, { Component } from "react";
import "./Properties.css";
import { connect } from "react-redux";
import { getProperties } from "../../redux/propertiesReducer";
import PropertyPreview from "../propertyInputs/PropertyPreview";
import PropertyInputs from "../propertyInputs/PropertyInputs";

class PropertiesPreview extends Component {
  componentDidMount() {
    console.log(this.props);
    let { adminId } = this.props;
    if (adminId) {
      this.props.getProperties(adminId);
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.adminId !== this.props.adminId) {
      this.props.getProperties(this.props.adminId);
    }
    return;
  }

  render() {
    const { properties } = this.props;

    console.log(properties);
    return (
      <div className='prop-container'>
        {properties.map(property => {
          return (
            <div className='prop-container' key={property.prop_id}>
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
    ...state.properties
  };
}

export default connect(
  mapStateToProps,
  { getProperties }
)(PropertiesPreview);

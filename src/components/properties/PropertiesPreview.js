import React, { Component } from "react";
import "./Properties.css";
import { connect } from "react-redux";
import { getProperties } from "../../redux/propertiesReducer";
import PropertyPreview from "../propertyInputs/PropertyPreview";

class PropertiesPreview extends Component {
  componentDidMount() {
    let { adminId } = this.props;
    if (adminId) {
      console.log('hit');
      this.props.getProperties();
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.adminId !== this.props.adminId) {
      console.log('hit2');
      this.props.getProperties();
    }
    return;
  }

  render() {
    const { properties } = this.props;

    console.log(properties);
    return (
      <div className="prop-container">
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
    ...state.properties
  };
}

export default connect(
  mapStateToProps,
  { getProperties }
)(PropertiesPreview);

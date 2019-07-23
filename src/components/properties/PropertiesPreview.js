import React, { Component } from "react";
import "./Properties.css";
import { connect } from "react-redux";
import { getProperties } from "../../redux/propertiesReducer";
import PropertyInputs from "../propertyInputs/PropertyInputs";
import PropertyPreview from "../propertyInputs/PropertyPreview";

class PropertiesPreview extends Component {
  componentDidMount() {
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
    const { properties, prop_id } = this.props;
    console.log(this.props);
    return (
      <div>
        {properties.map(property => {
          return (
            <div key={property.prop_id}>
              <PropertyPreview  {...property} />
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

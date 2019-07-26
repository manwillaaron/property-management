import React, { Component } from "react";
import "./Properties.css";
import { connect } from "react-redux";
import { getProperties } from "../../redux/propertiesReducer";
import PropertyInputs from "../propertyInputs/PropertyInputs";


class Properties extends Component {
  componentDidMount() {
    let { adminId } = this.props;
    if (adminId) {
      this.props.getProperties(adminId);
    }
  }

  

  render() {
    const { properties } = this.props;
    console.log(this.props);
    return (
      <div>
        {properties.map(property => {
          console.log(property);
          // if (property.prop_id === +this.props.match.params.prop_id)
            return (
              <div key={property.prop_id}>
                <PropertyInputs {...property} />
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
)(Properties);

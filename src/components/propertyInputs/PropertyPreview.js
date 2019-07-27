import React, { Component } from "react";
import "./PropertyPreview.css";
import { editProperties, getProperties, deleteProperty } from "../../redux/propertiesReducer";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class PropertyPreview extends Component {



  render() {
    let { property_name, img_url, prop_id } = this.props;
    console.log(this.props.prop_id);
    return (
      <div className= 'main-prop-container'>
        
        <div className='prop-container' key={prop_id}>
          <div className='prop'>
          <h3>{property_name}</h3>
            <img src={img_url} alt="none" />
            <button>
              <Link to={`/propertyinput/${prop_id}`}>More Info</Link>
            </button>
            <button>
              <Link to={`/moreinfo/${prop_id}`}>More Info2</Link>
            </button>
            <button onClick={()=>this.props.deleteProperty(prop_id)}>
              <Link  to={`/`}>remove</Link>
            </button>
            
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { editProperties, deleteProperty }
)(PropertyPreview, getProperties);

import React, {Component} from 'react';
import './PropertyInputs.css';
import {editProperties} from '../../redux/propertiesReducer'
import {connect } from 'react-redux'
import {Link} from 'react-router-dom'

 class PropertyPreview extends Component {
  constructor(props) {
    super();
    this.state = {
      editing: false,
      newTitle: "",
      newContent: ""
    }
  }

  handleChange = (e) => {
    const {value,name} = e.target
    this.setState({[name]: value})
  }

  filpEditing = () => {
    this.setState({editing: !this.state.editing})
  }
  
  
  render() {

    let {property_name, img_url, prop_id} = this.props
      console.log(this.props);
        return (
          <div>
            <div key= {prop_id}>
            <h3>{property_name}</h3>
              <div>
              <img src={img_url} alt='none'/>
              <button><Link to={`/properties/${prop_id}`}>More Info</Link></button>
              <button>Remove</button>
              </div>
            
            
          </div>
          </div>
        )
  }
     
  }



export default connect(null,{editProperties})(PropertyPreview);
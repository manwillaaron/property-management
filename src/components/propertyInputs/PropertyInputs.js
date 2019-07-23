import React, {Component} from 'react';
import './PropertyInputs.css';
import {editProperties} from '../../redux/propertiesReducer'
import {connect } from 'react-redux'

 class PropertyInputs extends Component {
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

    let {property_name,
      address,
      num_beds,
      num_baths,
      square_footage,
      acreage,
      rent,
      gas_company,
      electric_company,
      has_renter,
      fridge_included,
      dishwasher_included,
      washer_dryer_included,
      mortgage,
      taxes,
      img_url,
      img_url2,
      img_url3,
      img_url4,
      img_url5} = this.props
      console.log(this.props);
        return (
          <div>
            <div key= {this.props.prop_id}>
            <img src={img_url} alt='none'/>
            <img src={img_url2} alt='none'/>
            <img src={img_url3} alt='none'/>
            <img src={img_url4} alt='none'/>
            <img src={img_url5} alt='none'/>
            <h3>{property_name}</h3>
            <h3>{address}</h3>
            <h3>{num_beds}</h3>
            <h3>{num_baths}</h3>
            <h3>{square_footage}</h3>
            <h3>{acreage}</h3>
            <h3>{rent}</h3>
            <h3>{gas_company}</h3>
            <h3>{electric_company}</h3>
            <h3>{has_renter}</h3>
            <h3>{fridge_included}</h3>
            <h3>{dishwasher_included}</h3>
            <h3>{washer_dryer_included}</h3>
            <h3>{mortgage}</h3>
            <h3>{taxes}</h3>
            </div>
          </div>
        )
  }
     
  }



export default connect(null,{editProperties})(PropertyInputs);
import React, { Component } from "react";
import "./PropertyInputs.css"
import { editProperties, addProperty, getProperties } from "../../redux/propertiesReducer";
import { connect } from "react-redux";
import {Link} from 'react-router-dom'
import Header from '../header/Header'


class PropertyInputs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false,
      address: "",
      num_beds: null,
      num_baths: null,
      square_footage: null,
      acreage: null,
      rent: null,
      gas_company: "",
      electric_company: "",
      has_renter: null,
      fridge_included: null,
      dishwasher_included: null,
      washer_dryer_included: null,
      mortgage: null,
      tax_yearly: null,
      img_url: "",
      img_url2: "",
      img_url3: "",
      img_url4: "",
      img_url5: "",
      property_name: ""
    };
  }

  switchEdit = ()=> {
    const {editing} = this.state
    this.setState({editing: !editing})
    console.log(this.state.editing);
  }

  componentDidUpdate(prevProps) {
    console.log(prevProps.admin_id, this.props.admin_id );
    if (prevProps.admin_id !== this.props.admin_id || prevProps.properties !== this.props.properties) {
      this.props.getProperties(this.props.admin_id)
    }
    
    return;
  }

  componentDidMount() {
    if(this.props.match.params.prop_id){
      let foundProp = this.props.properties.find(property => {
        console.log(this.props.match.params.prop_id);
          return property.prop_id === +this.props.match.params.prop_id;
        })
        let {
          property_name,
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
          tax_yearly,
          img_url,
          img_url2,
          img_url3,
          img_url4,
          img_url5
        } = foundProp;

    this.setState({
      property_name,
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
      tax_yearly,
      img_url,
      img_url2,
      img_url3,
      img_url4,
      img_url5
    })

  
  }
}

  addProperty = () => {
    let {
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
      tax_yearly,
      img_url,
      img_url2,
      img_url3,
      img_url4,
      img_url5,
      property_name
    } = this.state;
    this.props.addProperty(
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
      +mortgage,
      +tax_yearly,
      img_url,
      img_url2,
      img_url3,
      img_url4,
      img_url5,
      property_name
      )
      this.switchEdit()
      console.log(this.props);
  }

  handleChange= e=>{
    const {name,value} = e.target
    this.setState({[name]: value})
    console.log(value);
  }

  editProperty = () => {
    const {prop_id} = this.props.match.params
    console.log(prop_id);
    let {
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
      tax_yearly,
      img_url,
      img_url2,
      img_url3,
      img_url4,
      img_url5,
      property_name
    } = this.state;
    this.props.editProperties(
      prop_id,
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
      +mortgage,
      +tax_yearly,
      img_url,
      img_url2,
      img_url3,
      img_url4,
      img_url5,
      property_name,
      this.props.admin_id
      )
      this.switchEdit()
      console.log(this.props);
  }

  render() {
    console.log(this.props, this.state);
    let {
      property_name,
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
      tax_yearly,
      img_url,
      img_url2,
      img_url3,
      img_url4,
      img_url5
    } = this.state;
    return this.state.editing || this.props.match.path === "/add/propertyinput"  ? (
     
      // this.props.properties.map(property => {
      //   if (property.prop_id === +this.props.match.params.prop_id)
      //     return (
            <div>
              <Header />
              <h2>Property Name</h2>
              <input
                value={this.state.property_name}
                onChange={this.handleChange}
                name='property_name'
              />
              <h2>Address</h2>
              <input
               value={this.state.address}
               onChange={this.handleChange}
               name='address'
               />
              <h2>Bedrooms</h2>
              <input  value={this.state.num_beds}
                onChange={this.handleChange}
                name='num_beds'
                />
              <h2>Bathrooms</h2>
              <input 
               value={this.state.num_baths}
               onChange={this.handleChange}
               name='num_baths'
               />
              <h2>Square Footage</h2>
              <input 
               value={this.state.square_footage}
               onChange={this.handleChange}
               name='square_footage'
               />
              <h2>Acreage</h2>
              <input 
               value={this.state.acreage}
               onChange={this.handleChange}
               name='acreage'
                />
              <h2>Rent</h2>
              <input 
               value={this.state.rent}
               onChange={this.handleChange}
               name='rent'
                />
              <h2>Gas Company</h2>
              <input 
               value={this.state.gas_company}
               onChange={this.handleChange}
               name='gas_company'
               />
              <h2>Electric Company</h2>
              <input 
               value={this.state.electric_company}
               onChange={this.handleChange}
               name='electric_company'
               />
              <h2>Has Renter</h2>
              <input 
               value={this.state.has_renter}
               onChange={this.handleChange}
               name='has_renter'
               />
              <h2>Fridge?</h2>
              <input 
               value={this.state.fridge_included}
               onChange={this.handleChange}
               name='fridge_included'
               />
              <h2>Diswasher?</h2>
              <input 
               value={this.state.dishwasher_included}
               onChange={this.handleChange}
               name='dishwasher_included'
               />
              <h2>Washer and Dryer?</h2>
              <input 
               value={this.state.washer_dryer_included}
               onChange={this.handleChange}
               name='washer_dryer_included'
               />
              <h2>Mortgage</h2>
              <input 
               value={this.state.mortgage}
               onChange={this.handleChange}
               name='mortgage'
               />
              <h2>Taxes</h2>
              <input 
               value={this.state.tax_yearly}
               onChange={this.handleChange}
               name='tax_yearly'
               />
              <h2>Image 1</h2>
              <input 
               value={this.state.img_url}
               onChange={this.handleChange}
               name='img_url'
               />
              <h2>Image 2</h2>
              <input 
               value={this.state.img_url2}
               onChange={this.handleChange}
               name='img_url2'
               />
              <h2>Image 3</h2>
              <input 
               value={this.state.img_url3}
               onChange={this.handleChange}
               name='img_url3'
               />
              <h2>Image 4</h2>
              <input 
               value={this.state.img_url4}
               onChange={this.handleChange}
               name='img_url4'/>
              <h2>Image 5</h2>
              <input 
               value={this.state.img_url5}
               onChange={this.handleChange}
               name='img_url5'
               />
               {this.props.match.path === "/add/propertyinput" ?(
                 console.log(this.props.match.path),
              <button onClick={()=> this.addProperty()}>
                <Link to= '/' >Add</Link>
                </button>
               ):(
                console.log(this.props.match.path),
                <button onClick={()=> this.editProperty()}>
                  
                <Link to= '/' >Save Changes</Link>
                </button>
               )}
            </div>
               
       
    ) : (
      <div>
        <Header/>
      <div>
        
        <div key={this.props.prop_id}>
          <img src={img_url} alt="none" />
          <img src={img_url2} alt="none" />
          <img src={img_url3} alt="none" />
          <img src={img_url4} alt="none" />
          <img src={img_url5} alt="none" />
          <h3>{property_name}</h3>
          <h2>Address</h2>
          <h3>{address}</h3>
          <h2>Bedrooms</h2>
          <h3>{num_beds}</h3>
          <h2>Bathrooms</h2>
          <h3>{num_baths}</h3>
          <h2>Square Footage</h2>
          <h3>{square_footage}</h3>
          <h2>Acres</h2>
          <h3>{acreage}</h3>
          <h2>Rent</h2>
          <h3>{rent}</h3>
          <h2>Gas Company</h2>
          <h3>{gas_company}</h3>
          <h2>Electric Company</h2>
          <h3>{electric_company}</h3>
          <h2>Occupied</h2>
          <h3>{JSON.stringify(has_renter)}</h3>
          <h2>Fidge?</h2>
          <h3>{fridge_included}</h3>
          <h2>Diswasher?</h2>
          <h3>{dishwasher_included}</h3>
          <h2>Washer and Dryer?</h2>
          <h3>{washer_dryer_included}</h3>
          <h2>Mortgage</h2>
          <h3>{mortgage}</h3>
          <h2>Taxes</h2>
          <h3>{tax_yearly}</h3>
          <button onClick={(e)=>this.switchEdit()}>Edit</button>
          {console.log(this.props)}
          <button><Link to={`/renters/${this.props.match.params.prop_id}`}>renters info</Link></button>
          
        </div>
      </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    admin_id: state.admin.admin.id,
    ...state.properties
  };
}

export default connect(
  mapStateToProps,
  { editProperties, addProperty, getProperties }
)(PropertyInputs);

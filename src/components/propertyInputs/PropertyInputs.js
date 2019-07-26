import React, { Component } from "react";
import "./PropertyInputs.css";
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
      property_name: "",
      prop_id: "",
      renters: []
    };
  }

  switchEdit = () => {
    const { editing } = this.state;
    this.setState({ editing: !editing });
  };

  componentDidUpdate(prevProps) {
    if (
      prevProps.admin_id !== this.props.admin_id ||
      prevProps.properties !== this.props.properties
    ) {
     return this.props.getProperties();
    }

    return;
  }

  componentDidMount() {
    this.props.getAdmin();
    console.log(this.props);

    

    console.log(this.props);
    this.props.getRenters(+this.props.match.params.prop_id);
    console.log(this.props);
    this.setState({ prop_id: this.props.match.params.prop_id });

    this.props.getRenters(this.state.props_id);
    // if (this.state.props_id) {
    //   console.log(this.state.props_id);
    //   let foundProp = this.props.properties.find(property => {
    //     return property.prop_id === this.state.prop_id;
    //   });
    //   let {
    //     property_name,
    //     address,
    //     num_beds,
    //     num_baths,
    //     square_footage,
    //     acreage,
    //     rent,
    //     gas_company,
    //     electric_company,
    //     has_renter,
    //     fridge_included,
    //     dishwasher_included,
    //     washer_dryer_included,
    //     mortgage,
    //     tax_yearly,
    //     img_url,
    //     img_url2,
    //     img_url3,
    //     img_url4,
    //     img_url5
    //   } = foundProp;

    //   this.setState({
    //     property_name,
    //     address,
    //     num_beds,
    //     num_baths,
    //     square_footage,
    //     acreage,
    //     rent,
    //     gas_company,
    //     electric_company,
    //     has_renter,
    //     fridge_included,
    //     dishwasher_included,
    //     washer_dryer_included,
    //     mortgage,
    //     tax_yearly,
    //     img_url,
    //     img_url2,
    //     img_url3,
    //     img_url4,
    //     img_url5
    //   });
    // }
  }

  addProperty = () => {
    console.log(this.state, this.props);
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
    );
    this.switchEdit();
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  editProperty = () => {
    const { prop_id } = this.props.match.params;
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
    );
    this.switchEdit();
  };

  deleteRenter = rid => {
    this.props.deleteRenter(rid);
    this.props.getRenters(this.props.match.params.prop_id);
  };

  render() {
   
    console.log(this.props.admin_id)
    if (!this.props.admin_id) return <Redirect to="/login" />;



    return this.state.editing ||
      this.props.match.path === "/add/propertyinput" ? (
    
      <div>
        <Header prop_id={this.props.match.params} />
        <div>
          <h2>Property Name</h2>
          <input
            value={this.state.property_name}
            onChange={this.handleChange}
            name="property_name"
          />
        </div>
        <h2>Address</h2>
        <input
          value={this.state.address}
          onChange={this.handleChange}
          name="address"
        />
        <h2>Bedrooms</h2>
        <input
          value={this.state.num_beds}
          onChange={this.handleChange}
          name="num_beds"
        />
        <h2>Bathrooms</h2>
        <input
          value={this.state.num_baths}
          onChange={this.handleChange}
          name="num_baths"
        />
        <h2>Square Footage</h2>
        <input
          value={this.state.square_footage}
          onChange={this.handleChange}
          name="square_footage"
        />
        <h2>Acreage</h2>
        <input
          value={+this.state.acreage}
          onChange={this.handleChange}
          name="acreage"
        />
        <h2>Rent</h2>
        <input
          value={this.state.rent}
          onChange={this.handleChange}
          name="rent"
        />
        <h2>Gas Company</h2>
        <input
          value={this.state.gas_company}
          onChange={this.handleChange}
          name="gas_company"
        />
        <h2>Electric Company</h2>
        <input
          value={this.state.electric_company}
          onChange={this.handleChange}
          name="electric_company"
        />
        <h2>Has Renter</h2>
        <input
          value={this.state.has_renter}
          onChange={this.handleChange}
          name="has_renter"
        />
        <h2>Fridge?</h2>
        <input
          value={this.state.fridge_included}
          onChange={this.handleChange}
          name="fridge_included"
        />
        <h2>Diswasher?</h2>
        <input
          value={this.state.dishwasher_included}
          onChange={this.handleChange}
          name="dishwasher_included"
        />
        <h2>Washer and Dryer?</h2>
        <input
          value={this.state.washer_dryer_included}
          onChange={this.handleChange}
          name="washer_dryer_included"
        />
        <h2>Mortgage</h2>
        <input
          value={this.state.mortgage}
          onChange={this.handleChange}
          name="mortgage"
        />
        <h2>Taxes</h2>
        <input
          value={this.state.tax_yearly}
          onChange={this.handleChange}
          name="tax_yearly"
        />
        <h2>Image 1</h2>
        <input
          value={this.state.img_url}
          onChange={this.handleChange}
          name="img_url"
        />
        <h2>Image 2</h2>
        <input
          value={this.state.img_url2}
          onChange={this.handleChange}
          name="img_url2"
        />
        <h2>Image 3</h2>
        <input
          value={this.state.img_url3}
          onChange={this.handleChange}
          name="img_url3"
        />
        <h2>Image 4</h2>
        <input
          value={this.state.img_url4}
          onChange={this.handleChange}
          name="img_url4"
        />
        <h2>Image 5</h2>
        <input
          value={this.state.img_url5}
          onChange={this.handleChange}
          name="img_url5"
        />
        {this.props.match.path === "/add/propertyinput" ? (
          <button onClick={() => this.addProperty()}>
            <Link to="/">Add</Link>
          </button>
        ) : (
          <button onClick={() => this.editProperty()}>
            <Link to="/">Save Changes</Link>
          </button>
        )}
      </div>
    ) : ( 

  <div>    
    <Header/>
      <div className="moreinfo-box">
        {console.log(this.props.properties)}
         {this.props.properties.map(property => (
          
     
        <div>
          <div key={this.props.prop_id}>
            <div className="property-images">
              <img src={property.img_url} alt="" />
              <img src={property.img_url2} alt="" />
              <img src={property.img_url3} alt="" />
              <img src={property.img_url4} alt="" />
              <img src={property.img_url5} alt="" />
            </div>
            <div className="general-information">
              <h3>{property.property_name}</h3>
              <h2>Address</h2>
              <h3>{property.address}</h3>
              <h2>Bedrooms</h2>
              <h3>{property.num_beds}</h3>
              <h2>Bathrooms</h2>
              <h3>{property.num_baths}</h3>
              <h2>Square Footage</h2>
              <h3>{property.square_footage}</h3>
              <h2>Acres</h2>
              <h3>{property.acreage}</h3>
              <h2>Rent</h2>
              <h3>{property.rent}</h3>
            </div>
            <div className="utility-information">
              <h2>Gas Company</h2>
              <h3>{property.gas_company}</h3>
              <h2>Electric Company</h2>
              <h3>{property.electric_company}</h3>
            </div>
            <div className="property-tf">
              <h2>Occupied</h2>
              <h3>{JSON.stringify(property.has_renter)}</h3>
              <h2>Fidge?</h2>
              <h3>{JSON.stringify(property.fridge_included)}</h3>
              <h2>Diswasher?</h2>
              <h3>{JSON.stringify(property.dishwasher_included)}</h3>
              <h2>Washer and Dryer?</h2>
              <h3>{JSON.stringify(property.washer_dryer_included)}</h3>
            </div>
            <div className="mortgage-taxes">
              <h2>Mortgage</h2>
              <h3>{property.mortgage}</h3>
              <h2>Taxes</h2>
              <h3>{property.tax_yearly}</h3>
            </div>
          </div>
   
         </div>
      
    ))}
    </div>

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
                    <button onClick={e => this.switchEdit()}>Edit</button>
                    {console.log(renter.prop_id)}
                    <button onClick={() => this.deleteRenter(renter.renter_id)}>
                      delete
                    </button>
                  </div>
                </div>
              ))}
              </div>
            
              <div>
                <button>
                    <Link to={`/renters/${this.props.match.params.prop_id}`}>
                      add renter
                    </Link>
                </button>
                <button onClick={() => this.editProperty()}>
                    <Link to={`/propertyinput/${this.props.match.params.prop_id}`}>
                     Edit
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
)(PropertyInputs);

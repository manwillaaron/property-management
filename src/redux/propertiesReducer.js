import axios from "axios";
import { ADD_PROPERTY, EDIT_PROPERTY, GET_PROPERTIES, DELETE_PROPERTY } from "./actionTypes";


const initialState = {
  properties: [],
  error: false
};

export function getProperties(adminId) {
  let data = axios
  .get(`/api/properties/${adminId}`)
  .then(res => res.data);
  return {
    type: GET_PROPERTIES,
    payload: data
  };
}

export function addProperty(
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
  taxes,
  img_url,
  img_url2,
  img_url3,
  img_url4,
  img_url5
) {
  let data = axios
    .post("/api/properties", {
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
      taxes,
      img_url,
      img_url2,
      img_url3,
      img_url4,
      img_url5
    })
    .then(res => res.data);
  return {
    type: ADD_PROPERTY,
    payload: data
  };
}

export function editProperties(
  propertyId,
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
  taxes,
  img_url,
  img_url2,
  img_url3,
  img_url4,
  img_url5
) {
  let data = axios
    .put(`/api/properties/${propertyId}`, {
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
      taxes,
      img_url,
      img_url2,
      img_url3,
      img_url4,
      img_url5
    })
    .then(res => res.data);
  return {
    type: EDIT_PROPERTY,
    payload: data
  };
}

export default function(state=initialState, action) {
  let { payload, type } = action;
  switch (type) {
    case GET_PROPERTIES + "_FULFILLED":
      return { ...state, error: false, properties: payload };
    case GET_PROPERTIES + "_REJECTED":
      return { ...state, error: payload };
    case ADD_PROPERTY + '_FULFILLED':
        return {...state, properties: payload, error: false }
    case ADD_PROPERTY + '_REJECTED':
        return {...state, error: payload}  
    case DELETE_PROPERTY + "_FULFILLED":
      return { ...state, properties: payload };
    case EDIT_PROPERTY + "_FULFILLED":
      return { ...state, properties: payload };
    default:
      return state;
  }
}

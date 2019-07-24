import {ADD_RENTER, DELETE_RENTER, EDIT_RENTER, GET_RENTERS } from './actionTypes'
import axios from "axios";

const initialState = {
    renters: [],
    error: false
}

export function getRenters(prop_id) {
    let data = axios.get(`/api/renters/${prop_id}`)
    .then(res=> res.data)
    return {
        type: GET_RENTERS,
        payload: data
    }
}

export function addRenter(
    first_name,
    last_name, 
    phone_number, 
    email, 
    prop_id
    ) {
    let data = axios.post('/api/renter/add', {
        first_name,
        last_name, 
        phone_number, 
        email, 
        prop_id
    })
    .then(res => res.data)
    return {
        type: ADD_RENTER,
        payload: data
    }
}

export function editRenter(
    prop_id,
    first_name,
    last_name, 
    phone_number, 
    email,
    property_manager_renter,
    renter_id
    ) {
    let data = axios.put(`/api/renter/edit/${renter_id}`,{
        prop_id, first_name,last_name, phone_number, 
        email, property_manager_renter
    })
    .then(res => res.data)
    return {
        type: EDIT_RENTER,
        payload: data
    }   

}

export function deleteRenter(renter_id, prop_id){
    let data = axios.delete(`/api/renter/delete/${renter_id}`)
    .then(res => res.data)
    return{
        type: DELETE_RENTER,
        payload: data
    }
}


export default function(state= initialState, action){
let { payload, type } = action
switch(type) {
    case GET_RENTERS + '_FULFILLED':
        return{...state, error: false, renters: payload};
    case GET_RENTERS + '_REJECTED':
        return{...state, error: payload};
    case ADD_RENTER + '_FULFILLED':
        return {...state, renters: payload, error: false}
    case ADD_RENTER + '_REJECTED':
        return {...state, error: payload}
    case EDIT_RENTER + '_FULFILLED':
        return {...state, renters: payload}
    case EDIT_RENTER + '_REJECTED':
        return {...state, error: payload}
    case DELETE_RENTER + '_FULFILLED':
        return{...state, renters: payload}
    case DELETE_RENTER + '_REJECTED':
        return{...state, error: payload}
    default:
        return state    
    }

}

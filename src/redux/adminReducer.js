import axios from "axios";
import { REGISTER, LOGIN, GET_ADMIN } from "./actionTypes";

const initialState = {
  admin: {},
  error: false,
  redirect: false
};

export const register = (username, password) => {
  let data = axios
    .post("/api/register", { username, password })
    .then(res => res.data);
  return {
    type: REGISTER,
    payload: data
  };
};

export const login = (username, password) => {
  console.log(username, password);
  let data = axios
    .post("/api/login", { username, password })
    .then(res => res.data);
  return {
    type: LOGIN,
    payload: data
  };
};

export const getAdmin = () => {
  console.log("hit get admin");

  let data = axios.get("/api/admin").then(res => {
    console.log(res.data);
    return  res.data
  });

  return {
    type: GET_ADMIN,
    payload: data
  };
};

export default function(state = initialState, action) {
  let { type, payload } = action;
  console.log(action)
  switch (type) {
    case REGISTER + "_FULFILLED":
      return { admin: payload, redirect: false, error: false};
    case REGISTER + "_REJECTED":
      return { ...state, error: payload };
    case LOGIN + "_FULFILLED":
      return { ...state, admin: payload, redirect: false, error: false  };
    case LOGIN + "_REJECTED":
      return { ...state, error: payload };
    case GET_ADMIN + "_FULFILLED":
      return { ...state, admin: payload, error: false };
    case GET_ADMIN + "_REJECTED":
      return { ...state, redirect: true, error: payload };

    default:
      return state;
  }
}

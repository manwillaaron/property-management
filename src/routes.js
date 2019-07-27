import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import AdminDashboard from "./components/adminDashboard/AdminDashboard.js";
import Expenses from "./components/expenses/Expenses.js";
import Login from "./components/Login/Login.js";
import MoreInfo from "./components/moreInfo/MoreInfo.js";
import PropertyInputs from "./components/propertyInputs/PropertyInputs.js";
import Properties from "./components/properties/Properties";
import PropertyPreview from "./components/propertyInputs/PropertyPreview.js";
import Register from "./components/register/Register.js";
import Renter from "./components/renters/Renter.js";



export default (
  <Switch>
    <Route path="/" exact component={AdminDashboard} />
    <Route path="/moreinfo/:prop_id" component={Properties} />
    <Route path="/moreinfo" component={Properties} />
    <Route path="/add/moreinfo" component={Properties} />



    <Route path="/login" component={Login} />
    <Route path='/register' component={Register}/> 

    <Route path="/propertyinput/:prop_id" component={PropertyInputs} />
    <Route path="/add/propertyinput" component={PropertyInputs} />
    <Route path='/edit/renters/:prop_id' component={Renter}></Route>
    <Route path='/add/renter' component={Renter}></Route>

  </Switch>
);

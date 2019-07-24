import React from "react";
import { Switch, Route } from "react-router-dom";
import AdminDashboard from "./components/adminDashboard/AdminDashboard.js";
import Expenses from "./components/expenses/Expenses.js";
import Login from "./components/Login/Login.js";
import MoreInfo from "./components/moreInfo/MoreInfo.js";
import PropertyInputs from "./components/propertyInputs/PropertyInputs.js";
import Properties from "./components/properties/Properties";
import PropertyPreview from "./components/propertyInputs/PropertyPreview.js";
import Register from "./components/register/Register.js";
import Renter from "./components/renters/Renter.js";

// import ExpenseInputs from './components/ExpenseInputs/ExpenseInputs.js'

export default (
  <Switch>
    <Route path="/" exact component={AdminDashboard} />
    <Route path="/moreinfo/:prop_id" component={MoreInfo} />
    <Route path="/expenses/:prop_id" component={Expenses} />
    <Route path="/login" component={Login} />
    <Route path='/register' component={Register}/> 
    <Route path="/properties/:prop_id" component={Properties} />
    {/* <Route path= '/expenseinput' component = {ExpenseInputs}/> */}
    <Route path="/propertyinput/:prop_id" component={PropertyInputs} />
    {/* <Route path="/propertyinput" component={PropertyInputs} /> */}
    <Route path="/add/propertyinput" component={PropertyInputs} />
    <Route path='/renters/:prop_id' component={Renter}></Route>
    <Route path='/renters' component={Renter}></Route>

  </Switch>
);

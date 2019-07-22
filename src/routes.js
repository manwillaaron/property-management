import React from 'react'
import {Switch, Route} from 'react-router-dom'
import AdminDashboard from './components/AdminDashboard/AdminDashboard.js'
import Expenses from './components/Expenses/Expenses.js'
import Login from './components/Login/Login.js'
import MoreInfo from './components/MoreInfo/MoreInfo.js'
import PropertyInputs from './components/PropertyInputs/PropertyInputs.js'
import ExpenseInputs from './components/ExpenseInputs/ExpenseInputs.js'

export default (
    <Switch>
        <Route path= '/admindashboard' component = {AdminDashboard}/>
        <Route path= '/moreinfo/:prop_id' component = {MoreInfo}/>
        <Route path= '/expenses/:prop_id' component = {Expenses}/>
        <Route path= '/auth/admin' component = {Login}/>
        <Route path= '/propertyinput' component = {PropertyInputs}/>
        <Route path= '/expenseinput' component = {ExpenseInputs}/>
        <Route path= '/propertyinput/:prop_id' component = {PropertyInputs}/>
        <Route path= '/expenseinput/:prop_id' component = {ExpenseInputs}/>
    </Switch>
)
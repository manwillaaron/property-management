import React, {Component} from "react";
import './Header.css'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {signout} from '../../redux/adminReducer'

class Header extends Component {
  render() {
    return (
    <div className='header'>
      <Link to="/add/propertyinput" >Add Property</Link>
      <button onClick = {(e)=> this.props.signout(this.props.admin.admin_id)}>
        <Link to='/'>Log Out</Link>
        </button>
      </div>
    )
  } 
}

function mapStateToProps(state){
  return state.admin
  
}
    
export default connect(mapStateToProps, {signout})(Header);
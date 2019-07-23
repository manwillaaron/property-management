import React,{Component} from 'react';
import './AdminDashboard.css';
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {getAdmin} from '../../redux/adminReducer'
import PropertiesPreview from '../properties/PropertiesPreview';


class AdminDashboard extends Component {

componentDidMount(){
  if(!this.props.admin.loggedIn) {
    
    this.props.getAdmin()
    console.log('admin logged in')
  }
}
  
  render(){
  let {redirect, admin} = this.props
    console.log(this.props);
    if(redirect) return <Redirect to='/login'/>

  return (
    <div>
      <PropertiesPreview />
    {/* <Properties/> */}

    </div>
  );
  }
}

function mapStateToProps(state) {
  console.log({admin :state.admin});
  return {admin :state.admin}
}

export default connect(mapStateToProps, {getAdmin})(AdminDashboard);
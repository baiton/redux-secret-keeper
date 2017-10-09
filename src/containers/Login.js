import React, {Component} from 'react';
//Redux imports
import {connect} from 'react-redux';
// import {selectUser} from '../actions/index.js'
// import { bindActionCreators } from 'redux';
//react router imports
import { Link } from 'react-router-dom';

class Login extends Component{
  render(){
    return(
      <form>
        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    )
  }
}

export default (Login);

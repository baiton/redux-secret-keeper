import React, {Component} from 'react';
//Redux imports
import {connect} from 'react-redux';
// import {selectUser} from '../actions/index.js'
// import { bindActionCreators } from 'redux';
//react router imports
import { Link } from 'react-router-dom';

class Register extends Component{
  render(){
    return(
      <form>
        <div className="form-group">
          <label for="exampleInputEmail1">Name</label>
          <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Enter name"/>
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter email"/>
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" placeholder="Password"/>
        </div>
        <div class="form-group">
            <label for="exampleFormControlTextarea1">Text area</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            <small id="emailHelp" class="form-text text-muted">Create a secret message</small>
          </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    )
  }
}

export default (Register);

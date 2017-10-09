import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';


class BaseLayout extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-expand-lg bg-dark d-flex justify-content-start">
              <img src={logo} className="App-logo" alt="logo" />
              <a className="App-title text-secondary nav-link" href="/">Secret Keeper <span className="sr-only">(current)</span></a>
              <a className="text-secondary nav-link" href="/">Home</a>
              <a className="text-secondary nav-link" href="/#/register">Register</a>
              <a className="text-secondary nav-link" href="/#/login">Login</a>
        </nav>
        {this.props.children}
        </div>
    );
  }
}

export default BaseLayout;

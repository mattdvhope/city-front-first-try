import React, { Component } from 'react';
import Link from 'gatsby-link';

import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'

class Navbar extends Component {
  constructor(props) {
	  super(props);
	  this.toggleNavbar = this.toggleNavbar.bind(this);
	  this.state = { collapsed: true, };
  }
  toggleNavbar() {
	  this.setState({
	  	collapsed: !this.state.collapsed,
	  });
  }
  render() {
	  const collapsed = this.state.collapsed;
	  const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
	  const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
	  return (
		  <nav className="navbar navbar-expand-lg navbar-dark bg-dark transparent-nav fixed-top">
			  <div className="container">
				  <Link className="navbar-brand" to="/">CEP</Link>
				  <button
				  	onClick={this.toggleNavbar}
				  	className={`${classTwo}`}
				  	type="button"
				  	data-toggle="collapse"
				  	data-target="#navbarResponsive"
				  	aria-controls="navbarResponsive"
				  	aria-expanded="false"
				  	aria-label="Toggle navigation"
				  >
				  <span className="navbar-toggler-icon" />
				  </button>
				  <div className={`${classOne}`} id="navbarResponsive">
					  <ul className="navbar-nav ml-auto">
						  <li className="active">
				        <Link to="/" onClick={this.toggleNavbar} className="nav-link">
				          <figure className="image">
				            <img src={logo} alt="Kaldi" style={{ width: '88px' }} /> 
				          </figure>
				        </Link>
				      </li>
				      <li className="nav-item active">
				        <Link onClick={this.toggleNavbar} className="nav-link" to="/about">
				          About
				        </Link>
				      </li>
				      <li className="nav-item">
				        <Link onClick={this.toggleNavbar} className="nav-link" to="/products">
				          Products
				        </Link>
				      </li>
				      <li className="nav-item">
				        <Link onClick={this.toggleNavbar} className="nav-link" to="/blog-index">
				          Blog Index
				        </Link>
				      </li>
				      <li className="nav-item">
				        <a className="nav-link disabled" href="#">Disabled</a>
				      </li>
					  </ul>
				  </div>
			  </div>
		  </nav>
	  );
  }
}

export default Navbar;
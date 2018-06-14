import React from "react";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import styled from "styled-components";
import Link from 'gatsby-link'

import ModalLogin from './ModalLogin'
import ModalApplication from './ModalApplication'

const ModalStyler = styled.a`
  cursor: pointer;
`
export default class NavbarOnTop extends React.Component {
  constructor(props) {
    super(props);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.onItemClick = this.onItemClick.bind(this);
    this.state = { collapsed: true, };
  }
  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  onItemClick(event) {
    this.setState({ selectedItem: event.currentTarget.dataset.id });
  }
  render() {
    const collapsed = this.state.collapsed;
    const classOne = collapsed ? 'navbar-toggle collapsed' : 'navbar-toggle show';
    const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
    return (
      <Navbar inverse collapseOnSelect fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <div><a href="/"><img src="https://s3-ap-southeast-1.amazonaws.com/ccmcoversbsc/CEP+logo+small.jpg" alt="logo" className="img-responsive" /></a></div>
          </Navbar.Brand>
        {/* 
          <button onClick={this.toggleNavbar} type="button" className={`${classOne}`}>
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span> 
          </button>
        */}
          <Navbar.Toggle />
        </Navbar.Header>
        
        <Navbar.Collapse>
          <ul className="nav navbar-nav navbar-right">
            <li>
              <Link to="/about"><div><img
                onClick={this.toggleNavbar}
                className="firstPic"
                src="https://s3-ap-southeast-1.amazonaws.com/ccmcoversbsc/thailand_flag_circle.png"
                alt="Thai"/></div></Link>
            </li>
            <li>
              <Link to="/products"><div><img
                onClick={this.toggleNavbar}
                className="secondPic"
                src="https://s3-ap-southeast-1.amazonaws.com/ccmcoversbsc/usa_flag_circle.png"
                alt="USA"/></div></Link>
            </li>
          </ul>
          <Nav pullLeft>
            <LinkContainer to="/">
              <NavItem eventKey={2} className="text-center">Home</NavItem>
            </LinkContainer>
            <LinkContainer to="/Tags">
              <NavItem eventKey={4} className="text-center">Tags</NavItem>
            </LinkContainer>
            <NavDropdown eventKey={3} title="Items to Choose" id="basic-nav-dropdown" className="text-center">
              <MenuItem divider />
              <LinkContainer to="/about">
                <MenuItem eventKey={3.1} className="text-center">About</MenuItem>    
              </LinkContainer>
              <MenuItem divider />
              <li role="presentation" className="text-center">
                <ModalStyler><ModalLogin getLogin="Log in" /></ModalStyler>
              </li>
              <MenuItem divider />
              <LinkContainer to="/products">
                <MenuItem eventKey={3.3} className="text-center">Products</MenuItem>    
              </LinkContainer>      
              <MenuItem divider />
              <LinkContainer to="/blog-index">
                <MenuItem eventKey={3.4} className="text-center">Blog List</MenuItem>    
              </LinkContainer>      
              <MenuItem divider />
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}




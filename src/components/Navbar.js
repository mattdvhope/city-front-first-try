import React from "react";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function dealWithClick() {
  alert("The Link was Clicked");
}

export default class NavbarOnTop extends React.Component {
    render() {
    return (
      <Navbar inverse collapseOnSelect fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">CEP</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <LinkContainer to="/">
              <NavItem eventKey={1}>Home</NavItem>
            </LinkContainer>
            <NavDropdown eventKey={2} title="Items to Choose" id="basic-nav-dropdown">
              <LinkContainer to="#">
                <MenuItem divider />
              </LinkContainer>
              <LinkContainer onClick={dealWithClick} to="/about">
                <MenuItem eventKey={2.1}>About</MenuItem>    
              </LinkContainer>
              <LinkContainer to="#">
                <MenuItem divider />
              </LinkContainer>
              <LinkContainer onClick={dealWithClick} to="/products">
                <MenuItem eventKey={2.2}>Products</MenuItem>    
              </LinkContainer>      
              <LinkContainer to="#">
                <MenuItem divider />
              </LinkContainer>      
              <LinkContainer onClick={dealWithClick} to="/blog-index">
                <MenuItem eventKey={2.3}>Blog List</MenuItem>    
              </LinkContainer>      
              <LinkContainer to="#">
                <MenuItem divider />
              </LinkContainer>      
            </NavDropdown>  
            <LinkContainer to="/Tags">
              <NavItem eventKey={3}>Tags</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}




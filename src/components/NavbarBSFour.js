import React from 'react';
import Link from 'gatsby-link';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

export default class NavbarTop extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <Navbar color="light" light expand="md" fixed={`top`}>
        <NavbarBrand href="/">
        	<img src="https://s3-ap-southeast-1.amazonaws.com/ccmcoversbsc/CEP+logo+small.jpg" alt="logo" className="img-responsive" />
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link to="/" onClick={this.toggle} className="nav-link text-center">Home</Link>
            </NavItem>
            <NavItem>
              <Link to="/about" onClick={this.toggle} className="nav-link text-center">About</Link>
            </NavItem>
            <NavItem>
              <Link to="/products" onClick={this.toggle} className="nav-link text-center">Products</Link>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <Link to="/about" onClick={this.toggle} className="nav-link">About</Link>
                </DropdownItem>
                <DropdownItem>
                  <Link to="/products" onClick={this.toggle} className="nav-link">Products</Link>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <Link to="/" onClick={this.toggle} className="nav-link">Home</Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <Link to="/products" onClick={this.toggle} className="nav-link">
								<img 
								  src="https://s3-ap-southeast-1.amazonaws.com/ccmcoversbsc/usa_flag_circle.png"
								  alt="Usa"/>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="#" className="nav-link"></Link>
            </NavItem>
            <NavItem>
              <Link to="#" className="nav-link"></Link>
            </NavItem>
            <NavItem>
              <Link to="/about" onClick={this.toggle} className="nav-link">
								<img 
								  src="https://s3-ap-southeast-1.amazonaws.com/ccmcoversbsc/thailand_flag_circle.png"
								  alt="Thai"/>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="#" className="nav-link"></Link>
            </NavItem>
            <NavItem>
              <Link to="#" className="nav-link"></Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}
import React from 'react';
import { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

class Header extends Component {
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
      <Navbar dark className="bg-dark my-nav fixed-top" expand="md">
        <div className="container">
          <NavbarBrand className="text-light">Alkhadra</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} className="Collaps" navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/#Home" activeClassName="active">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/#About" activeClassName="active">
                  About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/#Project" activeClassName="active">
                  Project
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/#Contact" activeClassName="active">
                  Contact
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    );
  }
}
export default Header;

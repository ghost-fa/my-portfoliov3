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
                <NavLink
                  onClick={this.toggle}
                  href="/#Home"
                  activeclassname="active"
                >
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  onClick={this.toggle}
                  href="/#About"
                  activeclassname="active"
                >
                  About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  onClick={this.toggle}
                  href="/#Project"
                  activeclassname="active"
                >
                  Project
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  onClick={this.toggle}
                  href="/#Contact"
                  activeclassname="active"
                >
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

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
  reste = () => {
    this.setState({
      isOpen: false
    });
  };
  render() {
    return (
      <Navbar dark className="bg-dark my-nav fixed-top" expand="md">
        <div className="container">
          <NavbarBrand href="/#Home" className="text-light">Alkhadra</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse
            isOpen={this.state.isOpen}
            onClick={this.reste}
            className="Collaps"
            navbar
          >
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/#Home" activeclassname="active">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/#About" activeclassname="active">
                  About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/#Project" activeclassname="active">
                  Project
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/#Contact" activeclassname="active">
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

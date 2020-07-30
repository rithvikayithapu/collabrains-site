import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavbarToggler, Collapse, NavLink } from 'reactstrap';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isNavOpen: false
    };

    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    this.setState ({
      isNavOpen: !this.state.isNavOpen
    });
  }

  render() {
    return(
      <Navbar light expand="md" className="fixed-top">
        <div className="container">
          <NavbarBrand className="mr-auto heading" href="/"><img src="assets/images/Group-10.png" height="30" width="41" alt="collabrains" /> Collabrains</NavbarBrand>
          <NavbarToggler onClick={this.toggleNav} className="ml-auto" />
          <Collapse isOpen={this.state.isNavOpen} navbar>
            <Nav navbar className="ml-auto heading">
              <NavItem>
                <NavLink className="nav-link" to="/home">Home</NavLink> 
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/webinars">Webinars</NavLink> 
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/projects">Our Projects</NavLink> 
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/meetus">Meet Us</NavLink> 
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    );
  }
}

export default Header;
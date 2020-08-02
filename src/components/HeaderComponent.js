import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavbarToggler,NavLink, Collapse } from 'reactstrap';
import Scrollspy from 'react-scrollspy';

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
      <Navbar dark expand="md" className="fixed-top navbar" id="navbar" >
        <div className="container">
          <NavbarToggler onClick={this.toggleNav} className="ml-auto" />
          <NavbarBrand className="mr-auto heading" href="/"><img src="assets/images/Group-10.png" height="30" width="41" alt="collabrains" /> Collabrains</NavbarBrand>
          <Collapse isOpen={this.state.isNavOpen} navbar>
            <Nav navbar className="ml-auto heading">
              <NavItem>
                <NavLink className="nav-link" href="/home">Home</NavLink> 
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" href="/webinars">Webinars</NavLink> 
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" href="/projects">Our Projects</NavLink> 
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" href="/meetus">Meet Us</NavLink> 
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" href="/ourservices">Our Services</NavLink> 
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    );
  }
}

export default Header;
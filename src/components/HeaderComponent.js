import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, NavbarToggler, Collapse } from 'reactstrap';
import { Link } from 'react-scroll';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isNavOpen: false
    }

    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    this.setState ({
      isNavOpen: !this.state.isNavOpen
    });
  }

  render() {
    return(
      <Navbar dark expand="md" fixed="top" className="navbar">
          <div className="container">
            <NavbarToggler onClick={this.toggleNav} />
            <NavbarBrand className="mr-auto heading" href="/"><img src="assets/images/Group-10.png" height="30" width="41" alt="collabrains" /> Collabrains</NavbarBrand>
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar className="ml-auto heading">
                <NavItem>
                  <Link activeClass="active" to="home" spy={true} smooth={true} duration={500}><NavLink className="nav-link" href="#home">Home</NavLink></Link>
                </NavItem>
                <NavItem>
                  <Link activeClass="active" to="webinars" spy={true} smooth={true} duration={500}><NavLink className="nav-link" href="#webinars">Webinars</NavLink></Link>
                </NavItem>
                <NavItem>
                  <Link activeClass="active" to="projects" spy={true} smooth={true} duration={500}><NavLink className="nav-link" href="#projects">Our Projects</NavLink></Link>
                </NavItem>
                <NavItem>
                  <Link activeClass="active" to="meetus" spy={true} offset={15} smooth={true} duration={500}><NavLink className="nav-link" href="#meetus">Meet Us</NavLink></Link>
                </NavItem>
                <NavItem>
                  <Link activeClass="active" to="ourservices" spy={true} offset={16} smooth={true} duration={500}><NavLink className="nav-link" href="#ourservices">Our Services</NavLink></Link>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
      </Navbar>
    );
  }
}

export default Header;
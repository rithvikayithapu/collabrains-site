import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavbarToggler,NavLink, Collapse } from 'reactstrap';
import { Link } from 'react-scroll';

const Header = () => {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     isNavOpen: false
  //   };

  //   this.toggleNav = this.toggleNav.bind(this);
  // }

  // toggleNav() {
  //   this.setState ({
  //     isNavOpen: !this.state.isNavOpen
  //   });
  // }
    return(
      <Navbar dark expand="md" className="fixed-top navbar">
          <div className="container">
          <a href="/"><img src="assets/images/Group-10.png" height="30" width="41" alt="collabrains" /></a>
          <NavbarBrand className="mr-auto heading d-sm-none d-md-block" href="/">Collabrains</NavbarBrand>
          {/* <NavbarToggler onClick={this.toggleNav} className="ml-2" />
          <Collapse isOpen={this.state.isNavOpen} navbar> */}
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
                <Link activeClass="active" to="meetus" spy={true} smooth={true} duration={500}><NavLink className="nav-link" href="#meetus">Meet Us</NavLink></Link>
              </NavItem>
              <NavItem>
                <Link activeClass="active" to="ourservices" spy={true} offset={13} smooth={true} duration={500}><NavLink className="nav-link" href="#ourservices">Our Services</NavLink></Link>
              </NavItem>
            </Nav>
          {/* </Collapse> */}
          </div>
      </Navbar>
    );
}

export default Header;
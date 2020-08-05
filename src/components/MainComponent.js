import React, { Component } from 'react';
import Home from './HomeComponent';
import Hamburger from './HamburgerComponent';
import Header from './HeaderComponent';
import Webinar from './WebinarsComponent';
import Projects from './ProjectsComponent';
import MeetUs from './MeetUsComponent';
import Services from './ServicesComponent';
import Footer from './FooterComponent';

class Main extends Component {
  render() {
    return (
      <div>
          <Header />
          <Hamburger />
          <Home />
          <Webinar />
          <Projects />
          <MeetUs />
          <Services />
          <Footer />
      </div>
    );
  } 
}

export default Main;
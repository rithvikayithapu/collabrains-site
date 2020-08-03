import React, { Component } from 'react';
import Home from './HomeComponent';
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
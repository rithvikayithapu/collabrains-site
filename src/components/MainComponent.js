import React, { Component } from 'react';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Webinar from './WebinarsComponent';
import Projects from './ProjectsComponent';
import MeetUs from './MeetUsComponent';
import Services from './ServicesComponent';
import Footer from './FooterComponent';
import { Redirect } from 'react-router-dom';
import Scrollspy from 'react-scrollspy';

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
          <Redirect to="home" />
          <Scrollspy items={['home','webinars','projects','meetus','ourservices']} />
      </div>
    );
  } 
}

export default Main;
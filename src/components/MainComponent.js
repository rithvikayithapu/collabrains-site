import React, { Component } from 'react';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Webinar from './WebinarsComponent';
import PurpleBg from './PurpleBgComponent';
import Projects from './ProjectsComponent';
import MeetUs from './MeetUsComponent';
import MeetUsBanner from './MeetUsBannerComponent';
import Services from './ServicesComponent';

class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <Home />
        <Webinar />
        <PurpleBg />
        <Projects />
        <MeetUs />
        <MeetUsBanner />
        <Services />
      </div>
    );
  } 
}

export default Main;
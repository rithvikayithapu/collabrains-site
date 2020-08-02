import React, { Component } from 'react';
import HomePurple from './HomePurpleComponent';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Webinar from './WebinarsComponent';
import PurpleBg from './PurpleBgComponent';
import Projects from './ProjectsComponent';
import MeetUs from './MeetUsComponent';
import MeetUsBanner from './MeetUsBannerComponent';
import Services from './ServicesComponent';
import Footer from './FooterComponent';

class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <HomePurple />
        <Home />
        <Webinar />
        <PurpleBg />
        <Projects />
        <MeetUs />
        <MeetUsBanner />
        <Services />
        <Footer />
      </div>
    );
  } 
}

export default Main;
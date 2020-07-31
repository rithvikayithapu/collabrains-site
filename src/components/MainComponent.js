import React, { Component } from 'react';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Webinar from './WebinarsComponent';
import PurpleBg from './PurpleBgComponent';
import Projects from './ProjectsComponent';

class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <Home />
        <Webinar />
        <PurpleBg />
        <Projects />
      </div>
    );
  } 
}

export default Main;
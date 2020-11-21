import React, { Component } from 'react';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Webinar from './WebinarsComponent';
import Projects from './ProjectsComponent';
import Team from './TeamComponent';
import Footer from './FooterComponent';

class Main extends Component {
  render() {
    return (
      <>
      <div className="flex flex-col sticky top-0 z-10">
        <Header />
      </div>
        <Home />
        <Webinar />
        <Projects />
        <Team />
        <Footer />
      </>
    );
  }
}

export default Main;
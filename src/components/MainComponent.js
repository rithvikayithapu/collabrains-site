import React, { Component } from 'react';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Webinar from './WebinarsComponent';

class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <Home />
        <Webinar />
      </div>
    );
  } 
}

export default Main;
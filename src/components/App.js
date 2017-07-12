import React, { Component } from 'react';
import '../App.css';

import Splash from './Splash';
import Header from './Header';


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Splash />
      </div>
    );
  }
}

export default App;

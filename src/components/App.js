import React, { Component } from 'react';
import Splash from './Splash';
import Header from './Header';


class App extends Component {
  render() {
    return (
      <div className='container'>
        <Header />
        <Splash />
      </div>
    );
  }
}

export default App;

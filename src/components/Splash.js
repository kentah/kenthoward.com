import React, { Component } from 'react';

import '../css/splash.css';


class Splash extends Component {
  render() {
    return (
      <div>
        <img id='scribble' src={require('../img/delicate1.png')} alt='scribbles here' />
      </div>
    )
  }
}

export default Splash;

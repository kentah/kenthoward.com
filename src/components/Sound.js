import React, { Component } from 'react';

import Eight from './tracks/Eight';
import DrivingClouds from './tracks/DrivingClouds';
import SingingBowl from './tracks/SingingBowl';


class Sound extends Component {
  render() {
    return(
      <div>
        <Eight />
        <SingingBowl />
        <DrivingClouds />

      </div>
    )
  }

}


export default Sound;

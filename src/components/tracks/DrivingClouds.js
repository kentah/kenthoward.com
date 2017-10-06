import React from 'react';

import SoundCloud from 'react-soundcloud-widget';


const DCloud = () => {
    return(
      <div>
        <SoundCloud
          url={'https://soundcloud.com/webuildprisons/singingbowl1-1'}
          id={'react-sc-widget'}
          opts={
            {
              auto_play: false,
              visual: false,
            }
          }
        />
        <p>I like this one. And more things written about this track. Of course
        I must also mention the posibility of adding an image.</p>
      </div>
    )
}

export default DCloud;

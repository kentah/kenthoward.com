import React from 'react';

import SoundCloud from 'react-soundcloud-widget';


const Eight = () => {
    return(
      <div>
        <SoundCloud
          url={'https://soundcloud.com/webuildprisons/8a-1'}
          id={'react-sc-widget'}
          opts={
            {
              auto_play: false,
              visual: false,
            }
          }
        />
        <p>Some things written about this track, or an image or something.</p>
      </div>
    )
}

export default Eight;

import React from 'react';
// import { Link } from 'react-router-dom';
import Media from '../components/Media';

const Stream = () => {
    return(
        <div class="media-player-page flex-cc">
        <div class="media-left">
          <div class="media-player">
            <video controls class="media">
              <source src="../statics/videos/vid1.mp4" />
            </video>
          </div>
        </div>
        <div class="media-right">
          <Media />
          <Media />
          <Media />
          <Media />
          <Media />
          <Media />

         
        </div>
      </div>

    );
};

export default Stream ;
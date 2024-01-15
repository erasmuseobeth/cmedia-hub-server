import React from 'react';
// import { Link } from 'react-router-dom';
import MediaItem from '../components/MediaItem';

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
          <MediaItem />
          <MediaItem />
          <MediaItem />
          <MediaItem />
          <MediaItem />
          <MediaItem />
          <MediaItem />
          <MediaItem />
          <MediaItem />

         </div>
      </div>

    );
};

export default Stream ;
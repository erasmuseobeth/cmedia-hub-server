import React from 'react';
// import { Link } from 'react-router-dom';
import { listMedia } from '../api/api';
import { useLoaderData } from "react-router-dom";
import MediaItem from '../components/MediaItem';



export function loader() {
  return listMedia();
}


const Stream = () => {
  const RecommendedMediaList = useLoaderData();

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
        {RecommendedMediaList.map((media) => (
  <MediaItem key={media.id} media={media} />
))}

         </div>
      </div>

    );
};

export default Stream ;
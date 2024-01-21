import React from 'react';
import Image from './Image';


const MediaItem = ({ media }) => {
  const { title, uploadDate, duration, channel, thumbnail } = media;

    return(
        <div className="media-item">
            {/* <Image name='fgg.svg' alt="image" className="media-thumbnail"  /> */}
            <img src={thumbnail} alt="image" className="media-thumbnail"/>

            <div className="media-item-name"> {title }</div>

        </div>
    )
};

export default MediaItem;


import React from 'react';
import Image from './Image';


const MediaItem = () => {
    return(
        <div className="media-item">
            <Image name='fgg.svg' alt="image" className="media-thumbnail"  />

            <div class="media-item-name">Media name</div>

        </div>
    )
};

export default MediaItem;


import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import { listMedia,streamMedia } from '../api/api';
import { useLoaderData, useParams } from "react-router-dom";
import MediaItem from '../components/MediaItem';


export function loader() {
  return listMedia();
}


const Stream = () => {
  const { id }= useParams();
  const RecommendedMediaList = useLoaderData();
  // const [streamUrl, setStreamUrl] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const url = await streamMedia(id);
  //     setStreamUrl(url);
  //   };

  //   fetchData();

  //   // Cleanup function to revoke the object URL when the component unmounts
  //   return () => {
  //     if (streamUrl) {
  //       URL.revokeObjectURL(streamUrl);
  //     }
  //   };
  // }, [mediaId, streamUrl]);

    return(
        <div class="media-player-page flex-cc">
        <div class="media-left">
          <div class="media-player">
              <video controls class="media">
                  {/* <source src={streamUrl} /> */}
                  <source src={`http://localhost:9000/api/media/stream/${id}`} />
                    Your browser does not support the video tag.
              </video> 
                <p>Loading media stream...</p> 
          </div>
        </div>
        <div class="media-right">
          {RecommendedMediaList.map((media) => ( <MediaItem key={media.id} media={media} /> ))}

         </div>
        </div>

    );
};

export default Stream ;
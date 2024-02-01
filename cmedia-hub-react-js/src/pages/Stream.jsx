import React from 'react';
// import { Link } from 'react-router-dom';
import { listMedia, stream } from '../api/api';
import { useLoaderData, useParams} from "react-router-dom";
import MediaItem from '../components/MediaItem';


export function loader() {
  return listMedia();
}


const Stream = () => {
  const RecommendedMediaList = useLoaderData();
  const { id } = useParams();
  // const [searchParams, setSearchParams] = useSearchParams()
  // const queryId = searchParams.get('id');

  // Use the id from useParams if it exists, otherwise use the id from query parameters
  const streamId = id ;

    return(
        <div className="media-player-page flex-cc">
        <div className="media-left">
          <div className="media-player">
            {/* dont forget to implemen this logic if the streamId is present se src to streamId randomly get media from mostpopular media */}
              <video controls autoPlay className="media">
                  <source src={stream(streamId)} />
                  {/* <source src={`http://localhost:9000/api/media/stream/${id}`} /> */}
                    Your browser does not support the video tag.
              </video> 
                <p>Loading media stream...</p> 
          </div>
        </div>
        <div className="media-right">
          {/* {RecommendedMediaList.map((media) => ( <MediaItem key={media.id} media={media} /> ))} */}

          {RecommendedMediaList.map((media) => {
            const lastSlashIndex = media.thumbnail.lastIndexOf('/');
            const modifiedThumbnail = `${media.thumbnail.slice(0, lastSlashIndex + 1)}1280x720/${media.thumbnail.slice(lastSlashIndex + 1)}`;

          return <MediaItem key={media.id} media={{ ...media, thumbnail: modifiedThumbnail }} />;
          })}


         </div>
        </div>

    );
};

export default Stream ;
// import React from 'react';
// import Image from './Image';


// const MediaCard = () => {
//     return(
//         <div className="media-card">
//             <div className="media-thumbnail">
//                 <Image name='cloud3.png' alt="image" />
//             </div>
//             <div className="media-details flex-col">
//                 <p className="media-title">media-title</p>
//                 <p className='flex-sb'>
//                     <span className="media-upload-date">1week ago</span>
//                     <span className="media-duration">12:00min</span>
//                 </p>
//                 <p flex-sb>
//                 <span className="media-channel">yjjkk</span>
//                 <span className="media-icons">fh</span>
//                 </p>
//             </div>
//         </div>
//     )
// };

// export default MediaCard;



import React from 'react';
// import Image from './Image';

const MediaCard = ({ media }) => {
  // Destructure properties from the media object
  const { title, uploadDate, duration, channel, thumbnail } = media;
  // console.log(media);

  return (
    <div className="media-card">
      <div className="media-thumbnail">
        {/* <Image src={thumbnail} alt="Thumbnail" /> */}
        <img src={thumbnail} alt="Thumbnail" />

      </div>
      <div className="media-details flex-col">
        <p className="media-title">{title}</p>
        <p className='flex-sb'>
          <span className="media-upload-date">{uploadDate}</span>
          <span className="media-duration">{duration}</span>
        </p>
        <p className="flex-sb">
          <span className="media-channel">{channel}</span>
          {/* Add other icons or elements representing media features */}
          <span className="media-icons">fh</span>
        </p>
      </div>
    </div>
  );
};

export default MediaCard;


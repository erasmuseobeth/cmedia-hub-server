import React from 'react';


const Media = () => {
    return(
        <div className="media-item">
        <img src="../assets/images/bgo2.png" alt="" className="media-thumbnail" />
        <p className="media-title">media-title</p>
        <div className="media-details flex-cc">
            <span className="channel">yjjkk</span>
            <span className="date-uploaded">12-80-89</span>
            <span className="icons">fh</span>
            <span className="duration">12:00</span>
        </div>
        </div>
    )
};

export default Media;
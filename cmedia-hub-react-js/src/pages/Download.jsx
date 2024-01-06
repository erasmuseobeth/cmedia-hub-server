import React from 'react';
import { Link } from 'react-router-dom';

const Download = () => {
    return(
        <div class="media-download">
        <h1 class="media-download-heading">Download Media</h1>
        <img src="../statics/images/download-bg-white.png" alt="" class="download-image-bg" />
        <div class="download-media-container flex">
            <div class="download-media-item flex-col">
                <img src="../statics/images/dev2.png" alt="" class="download-thumbnail" />
                <div class="download-details">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et error a officiis reiciendis. Expedita amet tenetur quos necessitatibus autem dignissimos incidunt cum perspiciatis non, eos suscipit molestiae magni aperiam iusto ut corrupti impedit delectus eligendi et praesentium! Quis ratione dolorum, ipsa quidem omnis eum facilis commodi quibusdam, repudiandae saepe ab!</div>
                <Link to="#" class="download-btn">Download</Link>
            </div>
            <div class="download-container-right">
            </div>
        </div>
         </div>
    );
};

export default Download ;
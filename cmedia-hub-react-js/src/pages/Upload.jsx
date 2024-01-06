import React from 'react';
// import { Link } from 'react-router-dom';

const Upload = () => {
    return(
        <div class="media-upload flex-col">
        <h1 class="media-upload-heading">Upload your Media Files</h1>
        <div class="media-upload-wrapper flex-cc">
            <div class="media-upload-form-container flex-col">


                <div class="media-upload-icon"><i class="fa-solid fa-cloud-arrow-up"></i></div>

                <form action="#" method="post" enctype="multipart/form-data" class="media-upload-form flex-col">
                    <span class="drag-drop-text">Drag and Drop Media Your Files Here!</span>
                    <label for="media-files" class="media-upload-files-label">Browse Device</label>
                    <input type="file" name="media-files" id="media-files" accept="image/*, audio/*, video/*" multiple />
                    <button type="submit" class="media-upload-btn">Upload</button>
                </form>
            </div>
            <div id="selected-media-files" class="selected-media-files scrollable flex-wr">
                <h2 class="selected-media-files-heading flex-cc">File Info and Progress</h2>
            </div>
        </div>
        {/* <script src="../assets/js/upload.js"></script> */}

        </div>
    );
};

export default Upload ;
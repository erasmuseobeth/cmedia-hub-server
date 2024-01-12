import React from 'react';

const Upload = () => {
    return (
        <section className="media-upload flex-col">
            <h1 className="media-upload-heading">Upload your Media Files</h1>
            <div className="media-upload-wrapper flex-cc">
                <div className="media-upload-form-container flex-col">
                    <div className="media-upload-icon"><i className="fa-solid fa-cloud-arrow-up"></i></div>
                    <form action="#" method="post" encType="multipart/form-data" className="media-upload-form flex-col">
                        <span className="drag-drop-text">Drag and Drop Media Your Files Here!</span>
                        <label htmlFor="media-files" className="media-upload-files-label">Browse Device</label>
                        <input type="file" name="media-files" id="media-files" accept="image/*, audio/*, video/*" multiple />
                        <button type="submit" className="media-upload-btn">Upload</button>
                    </form>
                </div>
                <div id="selected-media-files" className="selected-media-files scrollable flex-wr">
                    <h2 className="selected-media-files-heading flex-cc">File Info and Progress</h2>
                </div>
            </div>
        </section>
    );
};

export default Upload;

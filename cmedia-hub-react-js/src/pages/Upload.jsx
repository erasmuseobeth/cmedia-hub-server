import React, { useState, useCallback } from 'react';
// import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudArrowUp, faTrash } from '@fortawesome/free-solid-svg-icons';

const Upload = ({ ACCEPT, action }) => {
  // const navigate = useNavigate();

  const [state, setState] = useState({
    files: [],
    dragging: false,
    uploadStatus: 'idle',
    uploadProgress: 0,
    allowSelectingFiles: true,
  });

  const {
    files,
    dragging,
    uploadStatus,
    uploadProgress,
    allowSelectingFiles,
  } = state;

  const handleDrag = useCallback((e, isDragging) => {
    e.preventDefault();
    setState((prev) => ({ ...prev, dragging: isDragging }));
  }, []);

  const handleDrop = useCallback(
    (e) => {
      handleDrag(e, false);
      const newFiles = Array.from(e.dataTransfer.files);
      setState((prev) => ({ ...prev, files: [...prev.files, ...newFiles] }));
    },
    [handleDrag]
  );

  const handleFileSelect = useCallback(
    (e) => {
      if (!allowSelectingFiles) return;
      const newFiles = Array.from(e.target.files);
      setState((prev) => ({ ...prev, files: [...prev.files, ...newFiles] }));
    },
    [allowSelectingFiles]
  );

  const handleRemoveFile = useCallback(
    (index) => {
      setState((prev) => ({
        ...prev,
        files: prev.files.filter((_, i) => i !== index),
      }));
    },
    []
  );
  const uploadFile = async (file) => {
    try {
      setState((prev) => ({ ...prev, uploadStatus: 'uploading' }));
  
      const formData = new FormData();
      formData.append('files', file);  // 'files' should match the field name expected by your backend
  
      const response = await fetch('/api/media', {
        method: 'POST',
        body: formData,
      });
  
      if (response.ok) {
        setState((prev) => ({
          ...prev,
          uploadProgress: 100,
          uploadStatus: 'success',
        }));
      } else {
        console.error('Error uploading file:', response.statusText);
        setState((prev) => ({ ...prev, uploadStatus: 'failure' }));
      }
    } catch (error) {
      console.error('Error uploading file:', error);
      setState((prev) => ({ ...prev, uploadStatus: 'failure' }));
    }
  };
  

  // const simulateFileUpload = (file) => {
  //   return new Promise((resolve) => {
  //     const delay = 500;
  //     const interval = setInterval(() => {
  //       setState((prev) => ({
  //         ...prev,
  //         uploadProgress: Math.min(prev.uploadProgress + 10, 100),
  //       }));
  //     }, delay / 10);

  //     setTimeout(() => {
  //       clearInterval(interval);
  //       resolve();
  //     }, delay);
  //   });
  // };

  const handleSubmit = async (e) => {
    if (files.length === 0) {
      console.log('No files to upload');
      return;
    }

    setState((prev) => ({
      ...prev,
      allowSelectingFiles: false,
      uploadProgress: 0,
      uploadStatus: 'uploading',
    }));

    for (const file of files) {
      await uploadFile(file);
    }
  };

  const handleRefresh = useCallback(() => {
    setState((prev) => ({
      ...prev,
      allowSelectingFiles: true,
    }));

    // Your logic to refresh the page or component goes here
    window.location.reload(); // Example: Refresh the entire page
    // Or, you can use a state update to trigger a component refresh
    // setSomeState((prev) => !prev);
  }, []);

  const isUploading = uploadStatus === 'uploading';
  const isUploadSuccess = uploadStatus === 'success';

  return (
    <div className="media-upload flex-col">
      <h1 className="media-upload-heading">Upload your Media Files</h1>
      <div
        className={`media-upload-wrapper flex-cc ${
          dragging ? 'dragging' : ''
        }`}
        onDragOver={(e) => handleDrag(e, true)}
        onDragLeave={() => handleDrag(null, false)}
        onDrop={handleDrop}
      >
        <div className="media-upload-form-container flex-col">
          <div className="media-upload-icon">
            <FontAwesomeIcon icon={faCloudArrowUp} className="icon" />
          </div>

          <form
            onSubmit={handleSubmit}
            encType="multipart/form-data"
            className="media-upload-form flex-col"
          >
            <span className="drag-drop-text">
              Drag and Drop Media Your Files Here!
            </span>
            <label htmlFor="media-files" className="media-upload-files-label">
              Browse Device
            </label>
            <input
              type="file"
              name="media-files"
              id="media-files"
              accept={ACCEPT}
              multiple
              onChange={handleFileSelect}
              disabled={!allowSelectingFiles}
            />
            <button
              type="submit"
              className="media-upload-btn"
              disabled={isUploading}
              onClick={
                isUploadSuccess
                  ? handleRefresh
                  : allowSelectingFiles
                  ? handleSubmit
                  : undefined
              }
            >
              {isUploading
                ? 'Uploading...'
                : isUploadSuccess
                ? 'Done'
                : 'Upload'}
            </button>
          </form>
        </div>
        <div id="selected-media-files" className="selected-media-files scrollable flex-wr">
          <h2 className="selected-media-files-heading flex-cc">File Info and Progress</h2>
          {files.map((file, index) => (
            <div key={index} className="file-item">
              <div className="file-thumbnail">
                <img src="path/to/generic-thumbnail.png" alt="Thumbnail" />
              </div>
              <div className="file-details">
                <span className="file-name">{file.name}</span>
                {uploadStatus !== 'idle' && (
                  <>
                    <progress value={uploadProgress} max={100}></progress>
                    <span>{uploadProgress}%</span>
                  </>
                )}
                {isUploadSuccess && <span>success</span>}
                {uploadStatus === 'failure' && <span>failed!</span>}
              </div>
              <button
                type="button"
                onClick={() => handleRemoveFile(index)}
                disabled={isUploading}
              >
                <FontAwesomeIcon icon={faTrash} className="" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Upload;

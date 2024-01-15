import React from "react";
import File from './File';



// Accepts a list of file objects and maps them to a file component that will be displayed in the upload page
 const FileUploadInfo = ( { fileList }) => {
    return ( 
        <div id="selected-media-files" className="selected-media-files scrollable flex-wr">
            <h2 className="selected-media-files-heading flex-cc">File Info and Progress</h2>
            fileList.map(file)<File file={file} />
        </div>
     );
 }
  
 export default FileUploadInfo;
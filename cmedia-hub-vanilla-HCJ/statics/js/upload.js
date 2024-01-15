

// Function to create a thumbnail for an image file
function createThumbnail(file, callback) {
    const reader = new FileReader();
    reader.onload = (e) => {
      const thumbnail = document.createElement("img");
      thumbnail.classList.add("media-file-thumbnail");
      thumbnail.src = e.target.result;
      callback(thumbnail);
    };
    reader.readAsDataURL(file);
  }
  
  // Function to remove a selected media item
  function removeSelectedMediaItem(selectedMediaItem) {
    selectedMediaItem.remove();
  
    // Remove the canceled file from the selectedFiles array
    const fileIndex = selectedFiles.indexOf(selectedMediaItem.file);
    if (fileIndex !== -1) {
      selectedFiles.splice(fileIndex, 1);
  
      // Update the file input element with the modified file list
      fileInput.files = new FileList(selectedFiles);
    }
  }

  
  // Get the file input element
  const fileInput = document.getElementById("media-files");
  
  // Get the element to display selected files
  const selectedFilesElement = document.getElementById("selected-media-files");
  
  // Get the media upload wrapper container
  const mediaUploadWrapper = document.querySelector(".media-upload-wrapper");
  
  // Create an array to store selected files
  const selectedFiles = [];

  
  // Prevent the default behavior of the drop event on the wrapper container
  mediaUploadWrapper.addEventListener("dragover", (e) => {
    e.preventDefault();
  });
  
  // Handle the drop event on the wrapper container
  mediaUploadWrapper.addEventListener("drop", (e) => {
    e.preventDefault();
    handleFiles(e.dataTransfer.files);
  });
  
  // Handle file input change event
  fileInput.addEventListener("change", (e) => {
    handleFiles(fileInput.files);
  });
  
  // Function to handle selected files
  function handleFiles(files) {
    // Loop through selected files
    for (const file of files) {
      // Store the selected file in the array
      selectedFiles.push(file);
  
      // Create a div element for the selected media item
      const selectedMediaItem = document.createElement("div");
      selectedMediaItem.classList.add("selected-media-item","flex-sb");
      selectedMediaItem.file = file; // Store the file with the item
  
      // Create a span for the file name
      const selectedMediaFilename = document.createElement("span");
      selectedMediaFilename.classList.add("selected-media-filename");
      selectedMediaFilename.textContent = file.name;
  
      // Create a span for the progress (you can update the progress logic)
      const progress = document.createElement("span");
      progress.classList.add("progress");
      progress.textContent = "50%";
  
      // Create a span for canceling the media file
      const cancelMediaFile = document.createElement("span");
      cancelMediaFile.classList.add("cancel-media-file");
      cancelMediaFile.textContent = "×";
  
      // Add a click event listener to the cancel button
      cancelMediaFile.addEventListener("click", function () {
        // Remove the selected media item and update the file input
        removeSelectedMediaItem(selectedMediaItem);
      });
  
      // Append the file information to the selected media item
      selectedMediaItem.appendChild(selectedMediaFilename);
      selectedMediaItem.appendChild(progress);
      selectedMediaItem.appendChild(cancelMediaFile);
  
      // Create a thumbnail for image files
      if (file.type.startsWith("image/")) {
        createThumbnail(file, (thumbnail) => {
          // Append the thumbnail to the selected media item
          selectedMediaItem.appendChild(thumbnail);
        });
      }
  
      // Append the selected media item to the selected media files element
      selectedFilesElement.appendChild(selectedMediaItem);
    }
  }
     
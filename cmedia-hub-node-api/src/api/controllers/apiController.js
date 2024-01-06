
const apiController = {
  home: async (req, res) => {
    try {
    const welcomeMessage = "Welcome to the API Home!";
    const apiReferenceLink = "/api/docs"; // Assuming you have an API documentation endpoint
    const mediaResourcesLink = "/api/media"; // Example link to other resources
    const mediaUploadLink = "/api/media/upload"; // Example link to other resources
    const mediaSearchLink = "/api/media/search"; // Example link to other resources
    const mediaStreamLink = "/api/media/stream"; // Example link to other resources
    const mediaLiveStreamLink = "/api/media/stream/live"; // Example link to other resources
    const apiAboutLink = "/api/about/"; // Example link to other resources
    const apiContactLink = "/api/contact"; // Example link to other resources
    const otherResourcesLink = "/api";
    const responseHtml = `
      <html>
        <head>
          <title>API Home</title>
        </head>
        <body>
          <h1>${welcomeMessage}</h1>
          <p>
            <a href="${apiReferenceLink}">API Reference</a><br>
            <br/>
            <a href="${mediaResourcesLink}">Media</a>
            <a href="${mediaStreamLink}">Stream</a>
            <a href="${mediaLiveStreamLink}">Live Stream</a>
            <br/>
            <br/>
            <br/>
            
            <a href="${mediaUploadLink}">Upload</a>
            <a href="${mediaSearchLink}">Search</a>
            <br/>
            <br/>

            <a href="${apiAboutLink}">About</a>
            <a href="${apiContactLink}">Contact</a>
            <br/>
            <br/>

            <a href="${otherResourcesLink}">Other Resources</a>
          </p>
        </body>
      </html>
    `;


    res.send(responseHtml);
    } catch (error) {
      console.error('Error: Failed to get media api home:', error);
    res.status(500).send('Internal Server Error.');
    }
  },
};

module.exports = apiController;

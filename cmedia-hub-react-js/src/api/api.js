const API_BASE_URL = '/api'; // Assuming your React app is proxying requests to the backend

const listMedia = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/media`);

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    // Assuming the response is in JSON format
    const data = await response.json();
    const mediaList = data.items;

    // Handle the retrieved media data list
    // console.log('Media List:', data.items);

    return mediaList;
  } catch (error) {
    console.error('Error listing media:', error);
    // Handle the error or propagate it further
    throw error;
  }
};

const getMedia = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/media/${id}`);

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    // Assuming the response is in JSON format
    const data = await response.json();

    // Handle the retrieved media item
    console.log('Media Item:', data);

    return data;
  } catch (error) {
    console.error(`Error fetching media with ID ${id}:`, error);
    // Handle the error or propagate it further
    throw error;
  }
};

export { listMedia, getMedia };
